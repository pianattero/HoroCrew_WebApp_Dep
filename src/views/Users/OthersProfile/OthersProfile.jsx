import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/AuthContext";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Pisces from "../../../assets/images/SignsBack/pisces.png";
import { Link, useParams } from "react-router-dom";

import { getUserById as getUserByIdService } from "../../../services/UserService";
import { Button } from "../../../components/Button/Button";
import {
  getUserFollowers,
  getUserFolloweds,
  createFollow,
} from "../../../services/FollowService";
import { getUserByIdPosts } from "../../../services/PostService";
import { getUserByIdLikes } from "../../../services/LikeService";
import { horoscopeAstroCompatibility as horoscopeAstroCompatibilityService } from "../../../services/Apis/HoroscopeAstro";
import { Posts } from "../../../components/Posts/Posts";

export const OthersProfile = () => {
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();

  const [user, setUser] = useState(null);

  const [userFollowers, setUserFollowers] = useState([]);
  const [userFolloweds, setUserFolloweds] = useState([]);

  const [userLikes, setUserLikes] = useState([]);
  const [showUserLikes, setShowUserLikes] = useState(false);

  const [userPosts, setUserPosts] = useState([]);
  const [showUserPosts, setShowUserPosts] = useState(false);

  const [horoscopeAstroCompatibility, setHoroscopeAstroCompatibility] =
    useState(null);
  const [showHoroscopeAstroCompatibility, setShowHoroscopeAstroCompatibility] =
    useState(true);

  const handleFollow = () => {
    createFollow(id)
      .then((follow) => {
        return handleUserFollowers();
      })
      .catch((err) => console.error(err));
  };

  const handleUserFollowers = () => {
    getUserFollowers(id)
      .then((followers) => {
        setUserFollowers(followers);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (!user) {
      getUserByIdService(id)
        .then((userId) => {
          setUser(userId);
        })
        .catch((err) => console.error(err));
    }

    if (!currentUser || !user) return;

    getUserByIdPosts(id)
      .then((posts) => {
        setUserPosts(posts);
        console.log(posts);
      })
      .catch((err) => console.error(err));

    getUserByIdLikes(id)
      .then((likes) => {
        setUserLikes(likes);
      })
      .catch((err) => console.error(err));

    handleUserFollowers();

    getUserFolloweds(id)
      .then((followeds) => {
        setUserFolloweds(followeds);
      })
      .catch((err) => console.error(err));

    horoscopeAstroCompatibilityService(
      currentUser.sunSign.name,
      user.sunSign.name
    )
      .then((response) => {
        console.log(response.data);
        setHoroscopeAstroCompatibility(response.data);
      })
      .catch((err) => console.error(err));
  }, [currentUser, user]);

  return (
    <div>
      {user ? (
        <div
          className="gradient-custom-2"
          style={{
            backgroundColor: "#white",
            minHeight: "100vh",
          }}
        >
          <MDBContainer className="py-3 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="9" xl="7">
                <div className="mx-4 mt-5 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <MDBCardImage
                      src={Pisces}
                      alt="Generic placeholder image"
                      className="mt-4 mb-2 img-thumbnail"
                      fluid
                      style={{ width: "80px" }}
                    />
                    <div>
                      <MDBCardText className="mt-2 mx-4 h5 text-dark">
                        {user.firstName}
                      </MDBCardText>
                      <MDBCardText className="mt-2 mx-4 h5 text-dark">
                        {user.lastName}
                      </MDBCardText>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Button
                      text={
                        userFollowers.some(
                          (follower) => follower.follower.id === currentUser.id
                        )
                          ? "Unfollow"
                          : "Follow"
                      }
                      onClick={handleFollow}
                    />
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <MDBCardText className="mb-1 h5">
                        {" "}
                        {!userPosts.length ? "0" : userPosts.length}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Posts
                      </MDBCardText>
                    </div>
                    <div className="px-3">
                      <Link
                        to="/profile/:id/followers"
                        className="mb-1 h5 text-decoration-none"
                      >
                        {!userFollowers.length ? "0" : userFollowers.length}
                      </Link>
                      <MDBCardText className="small text-muted mb-0">
                        Followers
                      </MDBCardText>
                    </div>
                    <div>
                      <Link
                        to="/profile/:id/followeds"
                        className="mb-1 h5 text-decoration-none"
                      >
                        {!userFolloweds.length ? "0" : userFolloweds.length}
                      </Link>
                      <MDBCardText className="small text-muted mb-0">
                        Following
                      </MDBCardText>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center text-center mt-3">
                    <div className="mx-2">
                      <Button
                        text="Compatibility"
                        onClick={() => {
                          setShowHoroscopeAstroCompatibility(true);
                          showUserPosts && setShowUserPosts(false);
                          showUserLikes && setShowUserLikes(false);
                        }}
                      />
                    </div>
                    <div className="mx-2">
                      <Button
                        text="Their Posts"
                        onClick={() => {
                          setShowUserPosts(true);
                          showHoroscopeAstroCompatibility &&
                            setShowHoroscopeAstroCompatibility(false);
                          showUserLikes && setShowUserLikes(false);
                        }}
                      />
                    </div>
                    <div className="mx-2">
                      <Button
                        text="Their Likes"
                        onClick={() => {
                          setShowUserLikes(true);
                          showHoroscopeAstroCompatibility &&
                            setShowHoroscopeAstroCompatibility(false);
                          showUserPosts && setShowUserPosts(false);
                        }}
                      />
                    </div>
                  </div>

                  <div className="mx-3">
                    {showHoroscopeAstroCompatibility &&
                    horoscopeAstroCompatibility ? (
                      <div>
                        {horoscopeAstroCompatibility.map((sections) => (
                          <div key={sections.header}>
                            <p>{sections.header}</p>
                            <p>{sections.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="mx-3">
                    {showUserPosts ? (
                      userPosts.length > 0 ? (
                        <div>
                          {userPosts.map((post) => (
                            <Posts
                              key={post.id}
                              img={Pisces}
                              firstName={user.firstName}
                              lastName={user.lastName}
                              sunSign={user.sunSign.name}
                              moonSign={user.moonSign.name}
                              ascendantSign={user.ascendantSign.name}
                              body={post.body}
                              postImg={post.image}
                            />
                          ))}
                        </div>
                      ) : (
                        `${user.firstName} doesn't have any posts yet!`
                      )
                    ) : null}
                  </div>

                  <div className="mx-3">
                    {showUserLikes ? (
                      userLikes.length > 0 ? (
                        <div>
                          {userLikes.map((like) => (
                            <Posts
                              key={like._id}
                              img={Pisces}
                              firstName={user.firstName}
                              lastName={user.lastName}
                              sunSign={user.sunSign.name}
                              moonSign={user.moonSign.name}
                              ascendantSign={user.ascendantSign.name}
                              body={like.post.body}
                              postImg={like.post.image}
                            />
                          ))}
                        </div>
                      ) : (
                        `${user.firstName} doesn't have any likes yet!`
                      )
                    ) : null}
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      ) : (
        "Loading Profile"
      )}
    </div>
  );
};
