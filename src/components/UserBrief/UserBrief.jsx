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
import { Button } from "../Button/Button";

export const UserBrief = ({ user, route, text, onClick }) => {
  return (
    <div className="vh-100">
      <MDBContainer>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-3">
                <div className="d-flex align-items-center text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: "100px", borderRadius: "10px" }}
                      src={Aries}
                      alt="Generic placeholder image"
                      fluid
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between flex-grow-1 ms-3">
                    <h3 className="me-4 mt-2">
                      {user.firstName} {user.lastName}
                    </h3>
                    <Button text={text} onClick={onClick} />
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
