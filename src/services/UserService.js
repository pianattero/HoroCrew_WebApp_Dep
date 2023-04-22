import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const getCurrentUser = () => authenticatedHttp.get("/users/me");
export const getUserById = (id) => authenticatedHttp.get(`/users/${id}`);
export const getAllUsers = () => authenticatedHttp.get("/users");

export const getEditCurrentUser = ({ firstName, lastName, dayOfBirth, monthOfBirth, yearOfBirth, timeOfBirth }) =>
    authenticatedHttp.patch(
        "/users/me/edit", {
        firstName, lastName, dayOfBirth, monthOfBirth, yearOfBirth, timeOfBirth
    });

