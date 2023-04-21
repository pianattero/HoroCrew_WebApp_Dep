import React from "react";
import moment from "moment";

export const Comment = ({ img, firstName, lastName, comment, date }) => {
  return (
    <div className="d-flex flex-column ">
      <div className="d-flex align-items-center">
        <img style={{ width: "50px" }} src={img} />
        <p className="mb-0">
          {firstName} {lastName}
        </p>
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
