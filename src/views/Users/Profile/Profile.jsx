import React from "react";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import Pisces from "../../../assets/images/SignsBack/pisces.png";
import "./Profile.css";

import { aztroAPI as aztroAPIService } from "../../../services/Apis/AztroAPI";
import { horoscopeAI as horoscopeAIService } from "../../../services/Apis/HoroscopesAI";
import { horoscopeAstroInfo as horoscopeAstroInfoService } from "../../../services/Apis/HoroscopeAstro";

import { getCurrentUserPosts } from "../../../services/PostService";
import { getCurrentUserLikes } from "../../../services/LikeService";
import {
  getCurrentUserFollowers,
  getCurrentUserFolloweds,
} from "../../../services/FollowService";

import { Button } from "../../../components/Button/Button";
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
      style={{ backgroundColor: "#white", minHeight: "100vh" }}
    >
      <MDBContainer className="py-3 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard style={{ backgroundColor: "#white", minHeight: "100vh" }}>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ height: "200px" }}
              >
                <div className="mx-4 mt-5 d-flex justify-content-between align-items-center w-100">
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
                        {currentUser.firstName}
                      </MDBCardText>
                      <MDBCardText className="mt-2 mx-4 h5 text-dark">
                        {currentUser.lastName}
                      </MDBCardText>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Button text="Edit Profile" />
                  </div>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
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

                {/* PRUEBA INICIO */}
                <div className="d-flex justify-content-center text-center mt-3">
                  <div className="mx-2">
                    <Button
                      text="About You"
                      onClick={() => {
                        setShowCurrentUserAbout(true);
                        showCurrentUserPosts && setShowCurrentUserPosts(false);
                        showCurrentUserLikes && setShowCurrentUserLikes(false);
                      }}
                    />
                  </div>
                  <div className="mx-2">
                    <Button
                      text="Your Posts"
                      onClick={() => {
                        setShowCurrentUserPosts(true);
                        showCurrentUserAbout && setShowCurrentUserAbout(false);
                        showCurrentUserLikes && setShowCurrentUserLikes(false);
                      }}
                    />
                  </div>
                  <div className="mx-2">
                    <Button
                      text="Your Likes"
                      onClick={() => {
                        setShowCurrentUserLikes(true);
                        showCurrentUserAbout && setShowCurrentUserAbout(false);
                        showCurrentUserPosts && setShowCurrentUserPosts(false);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                {showCurrentUserAbout ? (
                  <MDBCardBody className="text-black p-4">
                    <div className="mb-5">
                      <div
                        className="px-4 text-center"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
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
                  </MDBCardBody>
                ) : null}
              </div>

              <div className="mx-3">
                {showCurrentUserPosts ? (
                  currentUserPosts.length > 0 ? (
                    <div>
                      {currentUserPosts.map((post) => (
                        <Posts
                          key={post.id}
                          img={Pisces}
                          firstName={currentUser.firstName}
                          lastName={currentUser.lastName}
                          sunSign={currentUser.sunSign.name}
                          moonSign={currentUser.moonSign.name}
                          ascendantSign={currentUser.ascendantSign.name}
                          body={post.body}
                          postImg={post.image}
                        />
                      ))}
                    </div>
                  ) : (
                    "You don't have any posts yet!"
                  )
                ) : null}
              </div>

              <div className="mx-3">
                {showCurrentUserLikes ? (
                  currentUserLikes.length > 0 ? (
                    <div>
                      {currentUserLikes.map((like) => (
                        <Posts
                          key={like._id}
                          img={Pisces}
                          firstName={currentUser.firstName}
                          lastName={currentUser.lastName}
                          sunSign={currentUser.sunSign.name}
                          moonSign={currentUser.moonSign.name}
                          ascendantSign={currentUser.ascendantSign.name}
                          body={like.post.body}
                          postImg={like.post.image}
                        />
                      ))}
                    </div>
                  ) : (
                    "You don't have any likes yet!"
                  )
                ) : null}
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
