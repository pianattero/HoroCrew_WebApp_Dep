import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { getMessages, createMessage } from "../../services/MessageService";
import { getUserById } from "../../services/UserService";

export const MessageSection = () => {
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();

  const [messages, setMessage] = useState();

  const [user, setUser] = useState();

  useEffect(() => {
    if (!user) {
      getUserById(id)
        .then((userId) => {
          console.log(userId);
          setUser(userId);
        })
        .catch((err) => console.error(err));
    }

    if (!currentUser || !user) return;

    getMessages(id)
      .then((msgs) => {
        console.log(msgs);
      })
      .catch((err) => console.error(err));
  }, [currentUser, user]);

  return (
    <div>
      {user ? (
        <div>
          <h1>
            mensajes con {user.firstName} {user.lastName}{" "}
          </h1>
          <div></div>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};
