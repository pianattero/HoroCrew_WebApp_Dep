import { Input, Tooltip } from "@nextui-org/react";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { getMessages, createMessage } from "../../services/MessageService";
import { Buttons } from "../../components/Button/Button";
import { getUserById } from "../../services/UserService";
import "./MessageSection.css";
import moment from "moment";
import { useFormik } from "formik";
import { msgSchema } from "../../utils/schemas/message.schema";
import { Card } from "../Skeletons/Card/Card";

const initialValues = {
  msg: "",
};

export const MessageSection = () => {
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();

  const navigate = useNavigate();

  const [messages, setMessages] = useState();

  const [user, setUser] = useState();

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: initialValues,
    validateOnChange: false,
    validationSchema: msgSchema,
    onSubmit: (values) => {
      createMessage({ msg: values.msg, id: user.id })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));
      resetForm({ values: "" });
    },
  });

  const handleMessages = useCallback(() => {
    getMessages(id)
      .then((msgs) => {
        setMessages(msgs);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!user) {
      getUserById(id)
        .then((userId) => {
          setUser(userId);
        })
        .catch((err) => console.error(err));
    }

    if (!currentUser || !user) return;

    handleMessages();

    setInterval(() => {
      handleMessages();
    }, 3000);
  }, [currentUser, user]);

  return (
    <div>
      {user ? (
        <div>
          <div
            onClick={() => {
              navigate(`/profile/${user.id}`);
            }}
            className="d-flex align-items-center border rounded m-1 w-100"
          >
            <img style={{ width: "70px" }} src={user.image} />
            <h3 className="mb-0 ms-2">
              {user.firstName} {user.lastName}
            </h3>
          </div>
          <div
            className=" overflow-scroll border rounded m-1 py-3 px-1"
            style={{ minHeight: "70vh", maxHeight: "70vh" }}
          >
            {messages ? (
              messages.length > 0 ? (
                messages.map((message) => (
                  <div
                    key={message._id}
                    className={
                      message.sender.id === currentUser.id
                        ? "currentUserMsg"
                        : "othersMsg"
                    }
                  >
                    <img
                      style={{ width: "40px" }}
                      className="rounded-circle"
                      src={message.sender.image}
                    />
                    <Tooltip
                      content={moment(message.createdAt).format(
                        "DD/MM/YY - h:mm a"
                      )}
                      placement={
                        message.sender.id === currentUser.id ? "left" : "right"
                      }
                    >
                      <p className="mb-0 mx-2">{message.msg}</p>
                    </Tooltip>
                  </div>
                ))
              ) : (
                "No messages yet"
              )
            ) : (
              <Card />
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-end m-1">
              <Input
                aria-label="msg"
                width="300px"
                name="msg"
                id="msg"
                onChange={handleChange}
                value={values.msg}
                placeholder="Type your message..."
              />
              <Buttons text="Send" type="submit" />
            </div>
          </form>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};
