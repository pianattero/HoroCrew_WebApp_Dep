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
      <img src={img} />
      <h4>
        {firstName} {lastName}
      </h4>
      <span>
        {sunSign} {moonSign} {ascendantSign}
      </span>
      <div>
        <p>{body}</p>
        {postImg && <img src={postImg} />}
      </div>
    </div>
  );
};
