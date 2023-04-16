import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserBrief } from "../../../components/UserBrief/UserBrief";
import AuthContext from "../../../context/AuthContext";

import {
  getCurrentUserFollowers,
  getCurrentUserFolloweds,
  createFollow,
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
    </div>
  );
};
