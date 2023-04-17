import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const getMessages = (id) => authenticatedHttp.get(`/messages/${id}`);

export const createMessage = (id) =>
  authenticatedHttp.get(`/messages/${id}/create`);
