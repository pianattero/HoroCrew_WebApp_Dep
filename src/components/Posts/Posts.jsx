import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import moment from "moment";
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
  createdAt,
}) => {
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
          <div className="d-flex justify-content-between mt-3">
            <div>
              <p className="p-0 m-0">{body}</p>
              {postImg === ![] ? <img src={postImg} /> : null}
            </div>
            <p className="mt-3 p-0 m-0 text-muted">
              <small>
                <em>{moment(createdAt).startOf(createdAt).fromNow()}</em>
              </small>
            </p>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};
