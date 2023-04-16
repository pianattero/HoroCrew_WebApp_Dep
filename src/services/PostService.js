import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const getCurrentUserPosts = () =>
  authenticatedHttp.get("/users/me/posts");

export const getUserByIdPosts = (id) =>
  authenticatedHttp.get(`/users/${id}/posts`);

export const newPost = ({ description }) =>
  authenticatedHttp.post("/post/new", { description });
