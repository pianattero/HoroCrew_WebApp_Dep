import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Aries from "../../../public/images/Signs/Aries.png";
import { Buttons } from "../Button/Button";

export const UserBrief = ({ user, route, text, onClick }) => {
  return (
    <div className="vh-100">
      <MDBContainer className="d-flex align-items-start w-100">
        <MDBRow>
          <MDBCol className="mt-2">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-3">
                <div className="d-flex align-items-center text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: "80px", borderRadius: "10px" }}
                      src={Aries}
                      alt="Generic placeholder image"
                      fluid
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between ms-3">
                    <h6 className="me-4 mt-2">
                      {user.firstName} {user.lastName}
                    </h6>
                    <Buttons text={text} onClick={onClick} />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
