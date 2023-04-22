import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Posts } from "../../components/Posts/Posts";
import AuthContext from "../../context/AuthContext";
import {
  commentPost,
  deleteComment,
  likePost,
  postWithComments as postWithCommentsService,
} from "../../services/PostService";
import { Comment } from "../../components/Comment/Comment";
import { Buttons } from "../../components/Button/Button";
import { Input } from "@nextui-org/react";
import { commentSchema } from "../../utils/schemas/comment.schema";
import { useFormik } from "formik";
import { getCurrentUserLikes } from "../../services/LikeService";

const initialValues = {
  body: "",
};

export const PostWithComments = () => {
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();

  const [postWithComments, setpostWithComments] = useState(null);
  const [currentUserLikes, setCurrentUserLikes] = useState([]);

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: initialValues,
    validateOnChange: false,
    validationSchema: commentSchema,
    onSubmit: (values) => {
      commentPost({ body: values.body, postId: postWithComments.post.id })
        .then((res) => {
          handlePostWithComments();
        })
        .catch((err) => console.error(err));
      resetForm({ values: "" });
    },
  });

  const handleCurrentUserLikes = () => {
    getCurrentUserLikes()
      .then((likes) => {
        setCurrentUserLikes(likes);
      })
      .catch((err) => console.error(err));
  };

  const handleLike = (postId) => {
    likePost(postId).then((res) => {
      return handleCurrentUserLikes();
    });
  };

  const handleDelete = (commentId) => {
    deleteComment(commentId)
      .then((res) => {
        handlePostWithComments();
      })
      .catch((err) => console.log(err));
  };

  const handlePostWithComments = () => {
    postWithCommentsService(id)
      .then((post) => {
        setpostWithComments(post);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (!postWithComments) {
      handlePostWithComments();
    }

    handleCurrentUserLikes();
  }, [postWithComments]);

  return (
    <div>
      {postWithComments ? (
        <div>
          <Posts
            img={postWithComments.post.user.image}
            firstName={postWithComments.post.user.firstName}
            lastName={postWithComments.post.user.lastName}
            sunSign={postWithComments.post.user.sunSign.name}
            moonSign={postWithComments.post.user.moonSign.name}
            ascendantSign={postWithComments.post.user.ascendantSign.name}
            body={postWithComments.post.body}
            postImgs={postWithComments.post.images}
            createdAt={postWithComments.post.createdAt}
            likeFn={() => {
              handleLike(postWithComments.post.id);
            }}
            postId={postWithComments.post.id}
            userId={postWithComments.post.user.id}
            currentUser={currentUser.id}
            isLiked={currentUserLikes.some(
              (likedPost) => likedPost.post.id === postWithComments.post.id
            )}
          />
          <div>
            <form onSubmit={handleSubmit}>
              <Input
                aria-labelledby="body"
                name="body"
                id="body"
                width="200px"
                type="text"
                placeholder="Leave your comment!"
                onChange={handleChange}
                value={values.body}
              />
              <Buttons text="Comment" type="submit" />
            </form>
          </div>
          <div className="mt-2">
            {postWithComments.comments.map((comment) => (
              <Comment
                key={comment._id}
                img={comment.user.image}
                firstName={comment.user.firstName}
                lastName={comment.user.lastName}
                comment={comment.body}
                date={comment.date}
                userId={comment.user.id}
                currentUser={currentUser.id}
                deleteFn={() => {
                  handleDelete(comment._id);
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};
