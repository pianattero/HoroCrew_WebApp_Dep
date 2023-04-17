import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { Posts } from "../../../components/Posts/Posts";
import { getAllPosts } from "../../../services/PostService";
import Pisces from "../../../assets/images/SignsBack/pisces.png";
import AuthContext from "../../../context/AuthContext";
import { getCurrentUserLikes } from "../../../services/LikeService";

export const SocialFeed = () => {
  const { currentUser } = useContext(AuthContext);

  const [loading, setloading] = useState(true);

  const [posts, setPosts] = useState([]);
  const [currentUserLikes, setCurrentUserLikes] = useState([]);

  useEffect(() => {
    getAllPosts()
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
        setloading(false);
      })
      .catch((err) => console.error(err));

    getCurrentUserLikes()
      .then((likes) => {
        console.log(likes);
        setCurrentUserLikes(likes);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-vh-100">
      <MDBContainer className="d-flex flex-column justify-content-start align-items-center">
        <h1>See what's happening!</h1>
        <MDBRow>
          <MDBCol>
            <div>
              {!loading
                ? posts.map((post) => (
                    <Posts
                      key={post.id}
                      img={post.user.image}
                      firstName={post.user.firstName}
                      lastName={post.user.lastName}
                      sunSign={post.user.sunSign.name}
                      moonSign={post.user.moonSign.name}
                      ascendantSign={post.user.ascendantSign.name}
                      body={post.body}
                      postImg={post.image}
                      createdAt={post.createdAt}
                      postId={post.id}
                      userId={post.user.id}
                      currentUser={currentUser.id}
                      isLiked={currentUserLikes.map(
                        (likedPost) => likedPost.post.id === post.id
                      )}
                    />
                  ))
                : "Loading Post"}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
