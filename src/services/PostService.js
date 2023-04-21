import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const getCurrentUserPosts = () =>
  authenticatedHttp.get("/users/me/posts");

export const getUserByIdPosts = (id) =>
  authenticatedHttp.get(`/users/${id}/posts`);

export const getAllPosts = () => authenticatedHttp.get("/posts");

export const postWithComments = (id) => authenticatedHttp.get(`/posts/${id}`);

export const getPostLikes = (id) => authenticatedHttp.get(`/posts/${id}/likes`);

export const getPostComments = (id) =>
  authenticatedHttp.get(`/posts/${id}/comments`);

export const newPost = (body) => authenticatedHttp.post("/posts/create", body);

export const likePost = (postId) =>
  authenticatedHttp.post(`/posts/${postId}/like`, postId);

export const deletePost = (postId) =>
  authenticatedHttp.post(`/posts/${postId}/delete`, postId);

export const commentPost = ({ postId, body }) =>
  authenticatedHttp.post(`/posts/${postId}/comment`, { body });

export const deleteComment = (commentId) =>
  authenticatedHttp.post(`/posts/comment/${commentId}/delete`);
