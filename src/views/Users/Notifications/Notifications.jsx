import React, { useContext, useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import moment from "moment";
import AuthContext from "../../../context/AuthContext";
import { getNotifications } from "../../../services/NotificationService";
import Aries from "../../../../public/images/Signs/Aries.png";
import { Link } from "react-router-dom";

export const Notifications = () => {
  const { currentUser } = useContext(AuthContext);

  const [notifications, setNotifications] = useState();

  const handleRead = (notifications) => {
    notifications.map((notification) => (notification.read = true));
  };

  useEffect(() => {
    if (!currentUser) return;

    getNotifications()
      .then((notifications) => {
        setNotifications(notifications);
        //handleRead(notifications);
      })
      .catch((err) => console.error(err));
  }, [currentUser]);

  return (
    <div className="vh-100">
      {notifications ? (
        <MDBContainer className="d-flex flex-column justify-content-start align-items-center">
          <h1>Notifications</h1>
          {notifications.map((notification) => (
            <MDBRow key={notification._id}>
              <MDBCol md="9" lg="7" xl="5" className="mt-2">
                <MDBCard style={{ borderRadius: "15px" }}>
                  <MDBCardBody className="p-3">
                    <div className="d-flex align-items-center text-black mt-2">
                      <div className="flex-shrink-0 d-flex align-items-center">
                        <Link to={`/profile/${notification.notificator.id}`}>
                          <MDBCardImage
                            style={{ width: "50px", borderRadius: "10px" }}
                            src={Aries}
                            alt="Generic placeholder image"
                            fluid
                          />
                        </Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-grow-1 ms-3">
                        <p className="me-4 p-0">
                          <strong>{notification.message}</strong>
                        </p>
                        <p className="p-0">
                          <small>
                            <em>
                              {moment(notification.createdAt)
                                .startOf(notification.createdAt)
                                .fromNow()}
                            </em>
                          </small>
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          ))}
        </MDBContainer>
      ) : (
        "Loading notifications"
      )}
    </div>
  );
};
