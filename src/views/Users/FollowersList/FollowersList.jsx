import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserBrief } from "../../../components/UserBrief/UserBrief";
import AuthContext from "../../../context/AuthContext";

import {
  getCurrentUserFollowers,
  getCurrentUserFolloweds,
} from "../../../services/FollowService";

export const FollowersList = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [loading, setloading] = useState(true);

  const [currentUserFollowers, setCurrentUserFollowers] = useState([]);
  const [currentUserFolloweds, setCurrentUserFolloweds] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    getCurrentUserFollowers()
      .then((followers) => {
        console.log(followers);
        setCurrentUserFollowers(followers);
      })
      .catch((err) => console.error(err));

    getCurrentUserFolloweds()
      .then((followeds) => {
        console.log(followeds);
        setCurrentUserFolloweds(followeds);
      })
      .catch((err) => console.error(err));
  }, [currentUser]);
  return (
    <div>
      {currentUserFollowers ? (
        currentUserFollowers.length > 0 ? (
          <MDBContainer className="d-flex flex-column justify-content-start align-items-center">
            <h1>Followers</h1>
            {currentUserFollowers.map((follower) => (
              <MDBRow key={follower._id}>
                <MDBCol>
                  <UserBrief
                    user={follower.follower}
                    key={follower.follower.id}
                    text="View Profile"
                    onClick={() => navigate(`/profile/${follower.follower.id}`)}
                  />
                </MDBCol>
              </MDBRow>
            ))}
          </MDBContainer>
        ) : (
          "No followers yet"
        )
      ) : (
        "Loading"
      )}
    </div>
  );
};

{
  /* <MDBContainer className="py-3 h-100 d-flex flex-column justify-content-start">
  <MDBRow>
    <MDBCol>
      <MDBCard
        style={{ width: "100vw" }}
        className="d-flex flex-column justify-content-start d-flex align-items-center"
      >
        {currentUserFollowers.length > 0 ? (
          <div>
            {currentUserFollowers.map((follower) => (
              <UserBrief
                user={follower.follower}
                key={follower.follower.id}
                text="View Profile"
                onClick={() => navigate(`/profile/${follower.follower.id}`)}
              />
            ))}
          </div>
        ) : (
          "You don't have any followers yet!"
        )}
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer> */
}

{
  /* <div className="vh-100">
  {notifications ? (
    <MDBContainer className="d-flex flex-column justify-content-start">
      <h1>Notifications</h1>
      {notifications.map((notification) => (
        <MDBRow
          key={notification._id}
          className="justify-content-center align-items-center"
        >
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-3">
                <div className="d-flex align-items-center text-black">
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
</div> */
}
