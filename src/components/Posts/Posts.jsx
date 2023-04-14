import React from "react";

export const Posts = ({
  img,
  firstName,
  lastName,
  sunSign,
  moonSign,
  ascendantSign,
  body,
  postImg,
}) => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <img src={img} style={{ height: "25px" }} />
        <p className="pt-3 mx-3">
          <strong>
            {firstName} {lastName}
          </strong>
        </p>
        <span className="d-flex">
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
      <div>
        <p>{body}</p>
        {postImg && <img src={postImg} />}
      </div>
    </div>
  );
};
