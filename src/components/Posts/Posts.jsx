import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Modal, useModal, Button, Tooltip } from "@nextui-org/react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { getPostComments, getPostLikes } from "../../services/PostService";

export const Posts = ({
  img,
  firstName,
  lastName,
  sunSign,
  moonSign,
  ascendantSign,
  body,
  postImgs,
  createdAt,
  showTrash,
  deleteFn,
  likeFn,
  isLiked,
  postId,
  userId,
  currentUser,
}) => {
  const { setVisible, bindings } = useModal();

  const navigate = useNavigate();

  const [postLikes, setpostLikes] = useState([]);
  const [postComments, setpostComments] = useState([]);

  useEffect(() => {
    getPostLikes(postId)
      .then((likes) => {
        setpostLikes(likes.length);
      })
      .catch((err) => console.error(err));

    getPostComments(postId)
      .then((comments) => {
        setpostComments(comments.length);
      })
      .catch((err) => console.error(err));
  });

  return (

    <div className="my-3">
      <MDBCard>
        <MDBCardBody>
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div
              className="d-flex"
              onClick={() => {
                {
                  currentUser === userId
                    ? navigate("/profile")
                    : navigate(`/profile/${userId}`);
                }
              }}
            >
              <img
                className="border rounded-circle"
                src={img}
                style={{ height: "30px" }}
              />
              <p className="mx-3 p-0 my-0">
                <strong>
                  {firstName} {lastName}
                </strong>
              </p>
            </div>
            <div>
              <span className="d-flex  align-items-center justify-content-center pt-2">
                <div className="pe-2">
                  <small>
                    <i className="bi bi-sun px-1"></i>
                    <em>{sunSign}</em>
                  </small>
                </div>
                <div className="px-2">
                  <small>
                    <i className="bi bi-moon px-1"></i>
                    <em>{moonSign}</em>
                  </small>
                </div>
                <div className="px-2">
                  <small>
                    <i className="bi bi-arrow-up px-1"></i>
                    <em>{ascendantSign}</em>
                  </small>
                </div>
              </span>
            </div>
          </div>
          <div>
            <p className="p-0 m-0 mt-3">{body}</p>
          </div>
          <div className="d-flex  align-items-start mb-3 overflow-scroll">
            <div className="d-flex mt-2 ">
              {postImgs.map((img) => (
                <button
                  className="px-1 border-0"
                  key={img}
                  onClick={() => setVisible(true)}
                >
                  <img
                    className="rounded"
                    style={{
                      height: "100px",
                      width: "auto",
                    }}
                    src={img}
                  />
                </button>
              ))}
            </div>

            <div>
              <Modal
                scroll
                fullScreen
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
              >
                <Modal.Body className="d-flex justify-content-center align-items-center">
                  <Carousel variant="dark" className="text-center">
                    {postImgs.map((img) => (
                      <Carousel.Item key={img}>
                        <img
                          style={{
                            maxHeight: "calc(100vh - 100px)",
                            maxWidth: "calc(100vw - 100px)",
                            width: "auto",
                            height: "auto",
                          }}
                          className="d-block center"
                          src={img}
                          alt="Slide"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Modal.Body>
                <Modal.Footer className="pt-0">
                  <Button
                    bordered
                    color="gradient"
                    auto
                    onPress={() => setVisible(false)}
                  >
                    X
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="mb-3">
              <button style={{ border: "none" }} onClick={likeFn}>
                {isLiked ? (
                  <i
                    className="bi bi-heart-fill me-3"
                    style={{ color: "#8FEBE0" }}
                  >
                    {" "}
                    <small>{postLikes}</small>
                  </i>
                ) : (
                  <i className="bi bi-heart me-3" style={{ color: "#8FEBE0" }}>
                    {" "}
                    <small>{postLikes}</small>
                  </i>
                )}
              </button>

              <button style={{ border: "none" }}>
                <i
                  onClick={() => {
                    navigate(`/post/${postId}`);
                  }}
                  className="bi bi-chat"
                >
                  {" "}
                  <small>{postComments}</small>
                </i>
              </button>

              {userId === currentUser && showTrash ? (
                <button style={{ border: "none" }} onClick={deleteFn}>
                  <i
                    className="bi bi-trash3-fill ms-3"
                    style={{ color: "#2D5C6D" }}
                  ></i>
                </button>
              ) : null}
            </div>
          </div>
          <p
            className="p-0 m-0 text-muted"
            style={{ right: "10px", bottom: "10px", position: "absolute" }}
          >
            <small>
              <em>{moment(createdAt).format("MMMM Do YYYY, h:mm a")}</em>
            </small>
          </p>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};
