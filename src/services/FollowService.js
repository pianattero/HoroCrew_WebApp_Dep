import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const createFollow = (id) =>
  authenticatedHttp.post(`/users/${id}/follow`);

export const getCurrentUserFollowers = () =>
  authenticatedHttp.get("/users/me/followers");

export const getCurrentUserFolloweds = () =>
  authenticatedHttp.get("/users/me/followeds");

export const getUserFollowers = (id) =>
  authenticatedHttp.get(`/users/${id}/followers`);

export const getUserFolloweds = (id) =>
  authenticatedHttp.get(`/users/${id}/followeds`);
