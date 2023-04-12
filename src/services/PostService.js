import { createHttp } from './BaseService';

const authenticatedHttp = createHttp(true);

export const newPost = ({

    description,
}) =>
    authenticatedHttp.post("/post/new", {

        description,
    });