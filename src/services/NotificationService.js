import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const getNotifications = () =>
  authenticatedHttp.get("/users/me/notifications");
