import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const getCurrentUserLikes = () =>
  authenticatedHttp.get("/users/me/likes");
