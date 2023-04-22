import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Posts } from "../../../components/Posts/Posts";

import {
  deletePost,
  getAllPosts,
  likePost,
} from "../../../services/PostService";
import AuthContext from "../../../context/AuthContext";
import { getCurrentUserLikes } from "../../../services/LikeService";
import { NewPost } from "../../Post/NewPost";
import "./SocialFeed.css";
import { SearchBar } from "../../SearchBar/SearchBar";

export const SocialFeed = () => {
  const { currentUser } = useContext(AuthContext);

  const [loading, setloading] = useState(true);

  const [posts, setPosts] = useState([]);
  const [currentUserLikes, setCurrentUserLikes] = useState([]);

  const handleDelete = (postId) => {
    deletePost(postId)
      .then((res) => {
        return handleAllPosts();
      })
      .catch((err) => console.error(err));
  };

  const handleLike = (postId) => {
    likePost(postId)
      .then((res) => {
        return getCurrentUserLikes().then((likes) => {
          setCurrentUserLikes(likes);
        });
      })
      .catch((err) => console.error(err));
  };

  const handleAllPosts = useCallback(() => {
    getAllPosts()
      .then((posts) => {
        setPosts(posts);
        setloading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    handleAllPosts();

    getCurrentUserLikes()
      .then((likes) => {
        setCurrentUserLikes(likes);
      })
      .catch((err) => console.error(err));
  }, []);

  return (

    <div className="scroll-bg min-vh-100">


      <MDBContainer className=" d-flex flex-column justify-content-start align-items-center">
        <div className="content-wrapper">
          <h1>See what's happening!</h1>
          <SearchBar />
          <MDBRow>
            <NewPost
              refreshPosts={() => {
                handleAllPosts();
              }}
            />
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
                        postImgs={post.images}
                        createdAt={post.createdAt}
                        showTrash={true}
                        deleteFn={() => {
                          handleDelete(post.id);
                        }}
                        likeFn={() => {
                          handleLike(post.id);
                        }}
                        postId={post.id}
                        userId={post.user.id}
                        currentUser={currentUser.id}
                        isLiked={currentUserLikes.some(
                          (likedPost) => likedPost.post.id === post.id
                        )}
                      />
                    ))
                  : "Loading Post"}
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    </div>
  );
};
