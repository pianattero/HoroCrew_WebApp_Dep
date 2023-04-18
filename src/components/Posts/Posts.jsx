import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  getCurrentUserPosts,
  likePost,
  deletePost,
} from "../../services/PostService";

export const Posts = ({
  img,
  firstName,
  lastName,
  sunSign,
  moonSign,
  ascendantSign,
  body,
  postImg,
  createdAt,
  isLiked,
  postId,
  userId,
  currentUser,
}) => {
  const [currentUserPosts, setcurrentUserPosts] = useState();
  const [currentUserLikes, setcurrentUserLikes] = useState();

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
    <div className="my-3">
      <MDBCard>
        <MDBCardBody>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <img src={img} style={{ height: "25px" }} />
              <p className="mx-3 p-0 my-0">
                <small>
                  <strong>
                    {firstName} {lastName}
                  </strong>
                </small>
              </p>
            </div>
            <div>
              <span className="d-flex flex-wrap align-items-center justify-content-center">
                <div className="px-2">
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
          <div className="d-flex my-3">
            <p className="p-0 m-0">{body}</p>
            {postImg === ![] ? <img src={postImg} /> : null}
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
