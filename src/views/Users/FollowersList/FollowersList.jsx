import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserBrief } from "../../../components/UserBrief/UserBrief";
import AuthContext from "../../../context/AuthContext";

import { getCurrentUserFollowers } from "../../../services/FollowService";

export const FollowersList = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [loading, setloading] = useState(true);

  const [currentUserFollowers, setCurrentUserFollowers] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    getCurrentUserFollowers()
      .then((followers) => {
        setCurrentUserFollowers(followers);
        setloading(false);
      })
      .catch((err) => console.error(err));
  }, [currentUser]);
  return (
    <div className="min-vh-100">
      {!loading ? (
        currentUserFollowers.length > 0 ? (
          <MDBContainer className="d-flex flex-column justify-content-start align-items-center">
            <h1>Followers</h1>
            {currentUserFollowers.map((follower) => (
              <MDBRow>
                <MDBCol>
                  <UserBrief
                    key={follower._id}
                    user={follower.follower}
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
