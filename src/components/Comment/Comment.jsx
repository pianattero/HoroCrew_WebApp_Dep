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
    <div className="d-flex flex-column p-3 border-bottom position-relative">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img style={{ width: "25px" }} src={img} />
          <p className="ms-2 mb-0">
            <strong>
              {firstName} {lastName}
            </strong>
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
      <div className="my-2">
        <p className="ms-3">{comment}</p>
      </div>
      <p
        className="text-muted ms-3"
        style={{ right: "10px", bottom: "0", position: "absolute" }}
      >
        <em>
          <small>{moment(date).format("MMM D YY, h:mm a")}</small>
        </em>
      </p>
    </div>
  );
};
