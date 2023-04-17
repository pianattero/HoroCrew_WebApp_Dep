import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/AuthContext";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getUserById as getUserByIdService } from "../../../services/UserService";
import { Buttons } from "../../../components/Button/Button";
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

  const navigate = useNavigate();

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
            minHeight: "100vh",
          }}
        >
          <MDBContainer className="py-3 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol>
                <MDBCard>
                  <div
                    className="rounded d-flex flex-row profilBg"
                    style={{
                      paddingBottom: "50px",
                    }}
                  >
                    <div className="mx-2 mt-5 d-flex justify-content-between align-items-center w-100 profilBg">
                      <div className="d-flex flex-wrap align-items-center">
                        <MDBCardImage
                          src={user.image}
                          alt="Generic placeholder image"
                          className="me-4 ms-1 my-2 img-thumbnail"
                          fluid
                          style={{ width: "80px" }}
                        />
                        <div>
                          <MDBCardText className="mt-2 h5 text-white">
                            {user.firstName} {user.lastName}
                          </MDBCardText>
                        </div>
                      </div>
                      <div className="mt-2 ms-5 d-flex flex-column align-items-center">
                        <Buttons
                          text={
                            userFollowers.some(
                              (follower) =>
                                follower.follower.id === currentUser.id
                            ) ? (
                              <span className="d-flex text-danger">
                                <p className="me-2 mb-0">Unfollow</p>
                                <i className="bi bi-person-fill-dash"></i>
                              </span>
                            ) : (
                              <span className="d-flex text-danger">
                                <p className="me-2 mb-0">Follow</p>
                                <i className="bi bi-person-fill-add"></i>
                              </span>
                            )
                          }
                          onClick={handleFollow}
                        />
                        <div>
                          <i
                            onClick={() => {
                              navigate(`/chat/${user.id}`);
                            }}
                            className="bi bi-chat"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </MDBCard>

                <div className="py-4 text-black">
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <MDBCardText className="mb-1 h5">
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
                </div>

                <div className="d-flex justify-content-around text-center mb-3 py-2 border-top border-bottom">
                  <Buttons
                    text="Compatibility"
                    onClick={() => {
                      setShowHoroscopeAstroCompatibility(true);
                      showUserPosts && setShowUserPosts(false);
                      showUserLikes && setShowUserLikes(false);
                    }}
                  />

                  <Buttons
                    text="Their Posts"
                    onClick={() => {
                      setShowUserPosts(true);
                      showHoroscopeAstroCompatibility &&
                        setShowHoroscopeAstroCompatibility(false);
                      showUserLikes && setShowUserLikes(false);
                    }}
                  />

                  <Buttons
                    text="Their Likes"
                    onClick={() => {
                      setShowUserLikes(true);
                      showHoroscopeAstroCompatibility &&
                        setShowHoroscopeAstroCompatibility(false);
                      showUserPosts && setShowUserPosts(false);
                    }}
                  />
                </div>

                <div style={{ width: "90vw" }}>
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

                <div style={{ width: "90vw" }}>
                  {showUserPosts ? (
                    userPosts.length > 0 ? (
                      <div>
                        {userPosts.map((post) => (
                          <Posts
                            key={post.id}
                            img={user.image}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            sunSign={user.sunSign.name}
                            moonSign={user.moonSign.name}
                            ascendantSign={user.ascendantSign.name}
                            body={post.body}
                            postImgs={post.images}
                            userId={post.user.id}
                            currentUser={currentUser.id}
                          />
                        ))}
                      </div>
                    ) : (
                      `${user.firstName} doesn't have any posts yet!`
                    )
                  ) : null}
                </div>

                <div style={{ width: "90vw" }}>
                  {showUserLikes ? (
                    userLikes.length > 0 ? (
                      <div>
                        {userLikes.map((like) => (
                          <Posts
                            key={like._id}
                            img={like.post.user.image}
                            firstName={like.post.user.firstName}
                            lastName={like.post.user.lastName}
                            sunSign={like.post.user.sunSign.name}
                            moonSign={like.post.user.moonSign.name}
                            ascendantSign={like.post.user.ascendantSign.name}
                            body={like.post.body}
                            postImgs={like.post.images}
                            userId={like.post.user}
                            currentUser={currentUser.id}
                          />
                        ))}
                      </div>
                    ) : (
                      `${user.firstName} doesn't have any likes yet!`
                    )
                  ) : null}
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
