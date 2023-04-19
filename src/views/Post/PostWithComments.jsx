import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Posts } from "../../components/Posts/Posts";
import AuthContext from "../../context/AuthContext";
import { postWithComments as postWithCommentsService } from "../../services/PostService";
import { Comment } from "../../components/Comment/Comment";
import { Buttons } from "../../components/Button/Button";
import { Input } from "@nextui-org/react";

export const PostWithComments = () => {
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();

  const [postWithComments, setpostWithComments] = useState(null);

  useEffect(() => {
    if (!postWithComments) {
      postWithCommentsService(id)
        .then((post) => {
          console.log(post);
          setpostWithComments(post);
        })
        .catch((err) => console.error(err));
    }
  }, [postWithComments]);

  return (
    <div>
      <h1>Post with comments</h1>
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
            postId={postWithComments.post.id}
            userId={postWithComments.post.user.id}
            currentUser={currentUser.id}
          />
          <div>
            <form>
              <Input
                aria-labelledby="comment"
                width="200px"
                type="text"
                placeholder="Leave your comment!"
              />
              <Buttons text="Comment" />
            </form>
          </div>
          <div>
            {postWithComments.comments.map((comment) => (
              <Comment
                key={comment._id}
                img={comment.user.image}
                firstName={comment.user.firstName}
                lastName={comment.user.lastName}
                comment={comment.body}
                date={comment.date}
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
