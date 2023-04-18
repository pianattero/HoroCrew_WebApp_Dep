import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserBrief } from "../../../components/UserBrief/UserBrief";
import AuthContext from "../../../context/AuthContext";

import { getCurrentUserFolloweds } from "../../../services/FollowService";

export const FollowedsList = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [loading, setloading] = useState(true);

  const [currentUserFolloweds, setCurrentUserFolloweds] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    getCurrentUserFolloweds()
      .then((followeds) => {
        setCurrentUserFolloweds(followeds);
        setloading(false);
      })
      .catch((err) => console.error(err));
  }, [currentUser]);
  return (
    <div className="min-vh-100">
      {!loading ? (
        currentUserFolloweds.length > 0 ? (
          <MDBContainer className="d-flex flex-column justify-content-start align-items-center">
            <h1>Followers</h1>
            {currentUserFolloweds.map((followed) => (
              <MDBRow key={followed._id}>
                <MDBCol>
                  <UserBrief
                    user={followed.followed}
                    img={followed.followed.image}
                    key={followed.followed.id}
                    text="View Profile"
                    onClick={() => navigate(`/profile/${followed.followed.id}`)}
                  />
                </MDBCol>
              </MDBRow>
            ))}
          </MDBContainer>
        ) : (
          "No followeds yet"
        )
      ) : (
        "Loading"
      )}
    </div>
  );
};
