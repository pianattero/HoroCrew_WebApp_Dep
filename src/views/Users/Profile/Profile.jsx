import React from "react";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "../../../main.css";

import { aztroAPI as aztroAPIService } from "../../../services/Apis/AztroAPI";
import { horoscopeAI as horoscopeAIService } from "../../../services/Apis/HoroscopesAI";
import { horoscopeAstroInfo as horoscopeAstroInfoService } from "../../../services/Apis/HoroscopeAstro";

import { getCurrentUserPosts } from "../../../services/PostService";
import { getCurrentUserLikes } from "../../../services/LikeService";
import {
  getCurrentUserFollowers,
  getCurrentUserFolloweds,
} from "../../../services/FollowService";

import { Buttons } from "../../../components/Button/Button";
import { Posts } from "../../../components/Posts/Posts";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const [loading, setloading] = useState(true);

  const [currentUserFollowers, setCurrentUserFollowers] = useState([]);
  const [currentUserFolloweds, setCurrentUserFolloweds] = useState([]);

  const [showCurrentUserAbout, setShowCurrentUserAbout] = useState(true);

  const [currentUserPosts, setCurrentUserPosts] = useState([]);
  const [showCurrentUserPosts, setShowCurrentUserPosts] = useState(false);

  const [currentUserLikes, setCurrentUserLikes] = useState([]);
  const [showCurrentUserLikes, setShowCurrentUserLikes] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    getCurrentUserFollowers()
      .then((followers) => {
        setCurrentUserFollowers(followers);
      })
      .catch((err) => console.error(err));

    getCurrentUserFolloweds()
      .then((followeds) => {
        setCurrentUserFolloweds(followeds);
      })
      .catch((err) => console.error(err));

    getCurrentUserPosts()
      .then((posts) => {
        setCurrentUserPosts(posts);
      })
      .catch((err) => console.error(err));

    getCurrentUserLikes()
      .then((likes) => {
        setCurrentUserLikes(likes);
      })
      .catch((err) => console.error(err));
  }, [currentUser]);

  return (
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
                      src={currentUser.image}
                      alt="Generic placeholder image"
                      className="me-4 ms-1 my-2 img-thumbnail"
                      fluid
                      style={{ width: "80px" }}
                    />
                    <div>
                      <MDBCardText className="mt-2 h5 text-dark text-white">
                        {currentUser.firstName} {currentUser.lastName}
                      </MDBCardText>
                    </div>
                  </div>
                  <div className="mt-2 ms-5">
                    <Buttons text="Edit Profile" />
                  </div>
                </div>
              </div>
            </MDBCard>

            <div className="py-4 text-black">
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <MDBCardText className="mb-1 h5">
                    {!currentUserPosts.length ? "0" : currentUserPosts.length}
                  </MDBCardText>
                  <MDBCardText className="small text-muted mb-0">
                    Posts
                  </MDBCardText>
                </div>
                <div className="px-3">
                  <Link
                    to="/profile/followers"
                    className="mb-1 h5 text-decoration-none"
                  >
                    {!currentUserFollowers.length
                      ? "0"
                      : currentUserFollowers.length}
                  </Link>
                  <MDBCardText className="small text-muted mb-0">
                    Followers
                  </MDBCardText>
                </div>
                <div>
                  <Link
                    to="/profile/followeds"
                    className="mb-1 h5 text-decoration-none"
                  >
                    {!currentUserFolloweds.length
                      ? "0"
                      : currentUserFolloweds.length}
                  </Link>
                  <MDBCardText className="small text-muted mb-0">
                    Following
                  </MDBCardText>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-around text-center mb-3 py-2 border-top border-bottom">
              <Buttons
                text="About You"
                onClick={() => {
                  setShowCurrentUserAbout(true);
                  showCurrentUserPosts && setShowCurrentUserPosts(false);
                  showCurrentUserLikes && setShowCurrentUserLikes(false);
                }}
              />
              <Buttons
                text="Your Posts"
                onClick={() => {
                  setShowCurrentUserPosts(true);
                  showCurrentUserAbout && setShowCurrentUserAbout(false);
                  showCurrentUserLikes && setShowCurrentUserLikes(false);
                }}
              />
              <Buttons
                text="Your Likes"
                onClick={() => {
                  setShowCurrentUserLikes(true);
                  showCurrentUserAbout && setShowCurrentUserAbout(false);
                  showCurrentUserPosts && setShowCurrentUserPosts(false);
                }}
              />
            </div>

            <div style={{ width: "90vw" }}>
              {showCurrentUserAbout ? (
                <div className="mb-5">
                  <div className="px-2 text-center">
                    <div className="mb-4">
                      <i className="bi bi-sun"></i>
                      <MDBCardText className="font-italic mb-1">
                        {currentUser.sunSign.sun}
                      </MDBCardText>
                    </div>
                    <div className="mb-4">
                      <i className="bi bi-moon"></i>
                      <MDBCardText className="font-italic mb-1">
                        {currentUser.moonSign.moon}
                      </MDBCardText>
                    </div>
                    <div className="mb-4">
                      <i className="bi bi-arrow-up"></i>
                      <MDBCardText className="font-italic mb-1">
                        {currentUser.ascendantSign.ascendant}
                      </MDBCardText>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div style={{ width: "90vw" }}>
              {showCurrentUserPosts ? (
                currentUserPosts.length > 0 ? (
                  <div>
                    {currentUserPosts.map((post) => (
                      <Posts
                        key={post.id}
                        img={currentUser.image}
                        firstName={currentUser.firstName}
                        sunSign={currentUser.sunSign.name}
                        moonSign={currentUser.moonSign.name}
                        ascendantSign={currentUser.ascendantSign.name}
                        body={post.body}
                        postImg={post.image}
                        createdAt={post.createdAt}
                        userId={post.user}
                        currentUser={currentUser.id}
                      />
                    ))}
                  </div>
                ) : (
                  "You don't have any posts yet!"
                )
              ) : null}
            </div>

            <div style={{ width: "90vw" }}>
              {showCurrentUserLikes ? (
                currentUserLikes.length > 0 ? (
                  <div>
                    {currentUserLikes.map((like) => (
                      <Posts
                        key={like._id}
                        img={like.post.user.image}
                        firstName={like.post.user.firstName}
                        sunSign={like.post.user.sunSign.name}
                        moonSign={like.post.user.moonSign.name}
                        ascendantSign={like.post.user.ascendantSign.name}
                        body={like.post.body}
                        postImg={like.post.image}
                        createdAt={like.post.createdAt}
                        userId={like.post.user.id}
                        currentUser={currentUser.id}
                      />
                    ))}
                  </div>
                ) : (
                  "You don't have any likes yet!"
                )
              ) : null}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
