import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const getCurrentUserFollowers = () =>
  authenticatedHttp.get("/users/me/followers");
export const getCurrentUserFolloweds = () =>
  authenticatedHttp.get("/users/me/followeds");
