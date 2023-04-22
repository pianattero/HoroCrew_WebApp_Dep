import React from "react";
import moment from "moment";

export const Comment = ({
  img,
  firstName,
  lastName,
  comment,
  date,
  userId,
  currentUser,
  deleteFn,
}) => {
  return (
    <div className="d-flex flex-column px-3 border-bottom">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img style={{ width: "50px" }} src={img} />
          <p className="mb-0">
            {firstName} {lastName}
          </p>
        </div>
        {userId === currentUser ? (
          <button style={{ border: "none" }} onClick={deleteFn}>
            <i
              className="bi bi-trash3-fill ms-3"
              style={{ color: "#2D5C6D" }}
            ></i>
          </button>
        ) : null}
      </div>
      <div className="d-flex justify-content-between ">
        <p>{comment}</p>
        <p className="text-muted">
          <small>{moment(date).format("MMMM Do YYYY, h:mm:ss a")}</small>
        </p>
      </div>
    </div>
  );
};
