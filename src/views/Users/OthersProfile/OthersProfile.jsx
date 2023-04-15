import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../context/AuthContext";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import Pisces from "../../../assets/images/SignsBack/pisces.png";
import { Link, useParams } from "react-router-dom";

import { getUserById as getUserByIdService } from "../../../services/UserService";
import { Button } from "../../../components/Button/Button";
import {
  getUserFollowers,
  getUserFolloweds,
} from "../../../services/FollowService";
import { horoscopeAstroCompatibility as horoscopeAstroCompatibilityService } from "../../../services/Apis/HoroscopeAstro";
import { getUserByIdPosts } from "../../../services/PostService";

export const OthersProfile = () => {
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();

  const [user, setUser] = useState(null);

  const [userFollowers, setUserFollowers] = useState([]);
  const [userFolloweds, setUserFolloweds] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  const [horoscopeAstroCompatibility, setHoroscopeAstroCompatibility] =
    useState(null);
  const [showHoroscopeAstroCompatibility, setShowHoroscopeAstroCompatibility] =
    useState(true);

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

    getUserFollowers(id)
      .then((followers) => {
        setUserFollowers(followers);
      })
      .catch((err) => console.error(err));

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
          style={{ backgroundColor: "#white", minHeight: "100vh" }}
        >
          <MDBContainer className="py-3 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="9" xl="7">
                <MDBCard
                  style={{ backgroundColor: "#white", minHeight: "100vh" }}
                >
                  <div
                    className="rounded-top text-white d-flex flex-row"
                    style={{ backgroundColor: "black", height: "200px" }}
                  >
                    <div
                      className="ms-4 mt-5 d-flex flex-column"
                      style={{ backgroundColor: "black" }}
                    >
                      <MDBCardImage
                        src={Pisces}
                        alt="Generic placeholder image"
                        className="mt-4 img-thumbnail"
                        fluid
                        style={{ width: "80px", zIndex: "1" }}
                      />
                    </div>
                  </div>
                  <div
                    className="p-4 text-black"
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <div className="d-flex justify-content-end text-center py-1">
                      <div>
                        <MDBCardText className="mb-1 mx-4 h5">
                          {user.firstName}
                        </MDBCardText>
                        <MDBCardText className="small text-muted mb-0">
                          Profile
                        </MDBCardText>
                      </div>
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
                        <Button text="Compatibility" onClick={() => {}} />
                      </div>
                      <div className="mx-2">
                        <Button text="Their Posts" onClick={() => {}} />
                      </div>
                      <div className="mx-2">
                        <Button text="Their Likes" onClick={() => {}} />
                      </div>
                    </div>

                    {showHoroscopeAstroCompatibility &&
                    horoscopeAstroCompatibility ? (
                      <div>
                        {horoscopeAstroCompatibility.map((sections) => (
                          <div>
                            <p>{sections.header}</p>
                            <p>{sections.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </MDBCard>
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
