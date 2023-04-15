import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const getCurrentUserLikes = () =>
  authenticatedHttp.get("/users/me/likes");

export const getUserByIdLikes = (id) =>
  authenticatedHttp.get(`/users/${id}/likes`);
