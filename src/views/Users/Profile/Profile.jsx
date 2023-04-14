import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import { aztroAPI as aztroAPIService } from "../../../services/Apis/AztroAPI";
import { horoscopeAI as horoscopeAIService } from "../../../services/Apis/HoroscopesAI";
import { horoscopeAstroInfo as horoscopeAstroInfoService } from "../../../services/Apis/HoroscopeAstro";
import { getCurrentUserPosts } from "../../../services/PostService";

import { AboutSunSign } from "../../../components/AboutSunSign/AboutSunSign";
import { Button } from "../../../components/Button/Button";
import { Posts } from "../../../components/Posts/Posts";
import { getCurrentUserLikes } from "../../../services/LikeService";

export const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const [loading, setloading] = useState(true);

  const [AztroAPI, setAztroAPI] = useState(null);
  const [horoscopeAI, setHoroscopeAI] = useState(null);

  const [currentUserPosts, setCurrentUserPosts] = useState([]);
  const [showCurrentUserPosts, setShowCurrentUserPosts] = useState(false);

  const [currentUserLikes, setCurrentUserLikes] = useState([]);
  const [showCurrentUserLikes, setShowCurrentUserLikes] = useState(false);

  const [horoscopeAstroInfo, setHoroscopeAstroInfo] = useState(null);
  const [showHoroscopeAstroInfo, setShowHoroscopeAstroInfo] = useState(false);

  useEffect(() => {
    if (!currentUser) return;
    // AztroAPI(currentUser.sunSign.name.toLowerCase())
    //   .then((response) => {
    //     console.log(response.data);
    //     setAztroAPI(response.data);
    //     setloading(false);
    //   })
    //   .catch((err) => console.error(err));

    // horoscopeAIService({
    //   sign: currentUser.sunSign.name.toLowerCase(),
    //   period: "today",
    //   type: "wellness",
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //     setHoroscopeAI(response.data);
    //   })
    //   .catch((err) => console.error(err));

    getCurrentUserPosts()
      .then((posts) => {
        setCurrentUserPosts(posts);
      })
      .catch((err) => console.error(err));

    getCurrentUserLikes()
      .then((likes) => {
        console.log(likes);
        setCurrentUserLikes(likes);
      })
      .catch((err) => console.error(err));

    horoscopeAstroInfoService(currentUser.sunSign.name.toLowerCase())
      .then((response) => {
        setHoroscopeAstroInfo(response.data);
      })
      .catch((err) => console.error(err));
  }, [currentUser]);

  return (
    <div style={{ zIndex: "1000", position: "absolute" }}>
      <h1>
        Profile of {currentUser?.firstName} {currentUser?.lastName}
      </h1>

      <div>
        <Button
          text="About your Sun Sign"
          onClick={() => {
            setShowHoroscopeAstroInfo(true);
            showCurrentUserPosts && setShowCurrentUserPosts(false);
            showCurrentUserLikes && setShowCurrentUserLikes(false);
          }}
        />
        <Button
          text="Your Posts"
          onClick={() => {
            setShowCurrentUserPosts(true);
            showHoroscopeAstroInfo && setShowHoroscopeAstroInfo(false);
            showCurrentUserLikes && setShowCurrentUserLikes(false);
          }}
        />

        <Button
          text="Your Likes"
          onClick={() => {
            setShowCurrentUserLikes(true);
            showHoroscopeAstroInfo && setShowHoroscopeAstroInfo(false);
            showCurrentUserPosts && setShowCurrentUserPosts(false);
          }}
        />
      </div>

      <div>
        {showHoroscopeAstroInfo ? (
          <AboutSunSign signData={horoscopeAstroInfo} />
        ) : null}
      </div>

      <div>
        {showCurrentUserPosts
          ? currentUserPosts.length > 0
            ? currentUserPosts.map((post) => (
                <Posts
                  key={post.body}
                  img={currentUser.image}
                  firstName={currentUser.firstName}
                  lastName={currentUser.lastName}
                  sunSign={currentUser.sunSign.name}
                  moonSign={currentUser.moonSign.name}
                  ascendantSign={currentUser.ascendantSign.name}
                  body={post.body}
                  postImg={post.image}
                />
              ))
            : "You don't have any posts yet!"
          : null}
      </div>

      <div>
        {showCurrentUserLikes
          ? currentUserLikes.length > 0
            ? currentUserLikes.map((like) => (
                <Posts
                  key={like.post.body}
                  img={like.user.image}
                  firstName={like.user.firstName}
                  lastName={like.user.lastName}
                  body={like.post.body}
                  postImg={like.post.image}
                />
              ))
            : "You don't have any likes yet!"
          : null}
      </div>
    </div>
  );
};

// <Routes>
//   <Route
//     path="/profile/about"
//     element={<AboutSunSign signData={horoscopeAstroInfo} />}
//   />
// </Routes>

// <Button text="About your Sun Sign" id="about" onClick={navigate('/profile/about', {state: {horoscopeAstroInfo}})} />
