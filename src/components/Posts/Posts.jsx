import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import moment from "moment";
import React, { useState } from "react";
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import Carousel from "react-bootstrap/Carousel";
import { likePost, deletePost, getAllPosts } from "../../services/PostService";

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
  isLiked,
  postId,
  userId,
  currentUser,
}) => {
  const { setVisible, bindings } = useModal();

  const [posts, setPosts] = useState();

  const handleAllPosts = () => {
    getAllPosts()
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const handleDelete = () => {
    deletePost(postId)
      .then((res) => {
        console.info(`Post ${postId} deleted`);
      })
      .catch((err) => console.error(err));
  };

  const handleLike = () => {
    likePost(postId)
      .then((res) => {
        console.info(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="my-3" style={{ width: "70vw" }}>
      <MDBCard>
        <MDBCardBody>
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="d-flex">
              <img
                className="border rounded-circle"
                src={img}
                style={{ height: "30px" }}
              />
              <p className="mx-3 p-0 my-0 mt-1">
                <small>
                  <strong>
                    {firstName} {lastName}
                  </strong>
                </small>
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
          <div className="d-flex align-items-start mb-3 overflow-scroll">
            <div className="d-flex mt-2 ">
              {postImgs.map((img) => (
                <button
                  className="px-1 border-0"
                  key={img}
                  onClick={() => setVisible(true)}
                >
                  <img
                    className="rounded"
                    style={{ height: "100px" }}
                    src={img}
                  />
                </button>
              ))}
            </div>

            <div>
              <Modal
                width="80vw"
                scroll
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
              >
                <Modal.Body className="d-flex justify-content-center align-items-center">
                  <Carousel variant="dark" className="text-center">
                    {postImgs.map((img) => (
                      <Carousel.Item>
                        <img
                          style={{
                            maxHeight: "calc(100vh - 290px",
                            maxWidth: "300px",
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
                    auto
                    flat
                    color="gradient"
                    onPress={() => setVisible(false)}
                  >
                    X
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-1">
            <div>
              <button
                style={{ border: "none" }}
                onClick={() => handleLike({ postId })}
              >
                {isLiked ? (
                  <i
                    className="bi bi-heart-fill me-3"
                    style={{ color: "#8FEBE0" }}
                  ></i>
                ) : (
                  <i
                    className="bi bi-heart me-3"
                    style={{ color: "#8FEBE0" }}
                  ></i>
                )}
              </button>

              {userId === currentUser ? (
                <button
                  style={{ border: "none" }}
                  onClick={() => handleDelete({ postId })}
                >
                  <i
                    className="bi bi-trash3-fill ms-3"
                    style={{ color: "#2D5C6D" }}
                  ></i>
                </button>
              ) : null}
            </div>
            <p className="p-0 m-0 text-muted">
              <small>
                <em>{moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</em>
              </small>
            </p>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

{
  /* PREUBA MODAL */
}
//  <div>
//  <Button auto color="transparent" onPress={() => setVisible(true)}>
//    <img
//      style={{ height: "50px" }}
//      src="https://img.wattpad.com/873b90039dd8d88fb8f248062fe6f1ebe523bd7b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5036743344354b50676e545259773d3d2d313136383134333934302e313663323465353239313435653336393932363636373437323939362e6a7067"
//    />
//  </Button>

//  <Modal
//    width="80vw"
//    scroll
//    aria-labelledby="modal-title"
//    aria-describedby="modal-description"
//    {...bindings}
//  >
//    <Modal.Body>
//      <Carousel variant="dark" className="text-center">
//        <Carousel.Item>
//          <img
//            style={{
//              maxHeight: "calc(100vh - 290px",
//              maxWidth: "300px",
//              width: "auto",
//              height: "auto",
//            }}
//            className="d-block center"
//            src="https://img.wattpad.com/873b90039dd8d88fb8f248062fe6f1ebe523bd7b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5036743344354b50676e545259773d3d2d313136383134333934302e313663323465353239313435653336393932363636373437323939362e6a7067"
//            alt="First slide"
//          />
//        </Carousel.Item>
//        <Carousel.Item>
//          <img
//            style={{
//              maxHeight: "calc(100vh - 290px",
//              maxWidth: "300px",
//              width: "auto",
//              height: "auto",
//            }}
//            className="d-block center"
//            src="https://img.wattpad.com/873b90039dd8d88fb8f248062fe6f1ebe523bd7b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5036743344354b50676e545259773d3d2d313136383134333934302e313663323465353239313435653336393932363636373437323939362e6a7067"
//            alt="Second slide"
//          />
//        </Carousel.Item>
//      </Carousel>
//    </Modal.Body>
//    <Modal.Footer className="pt-0">
//      <Button
//        auto
//        flat
//        color="gradient"
//        onPress={() => setVisible(false)}
//      >
//        X
//      </Button>
//    </Modal.Footer>
//  </Modal>
// </div>
{
  /* PREUBA MODAL */
}
