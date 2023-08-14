import HttpRequest from "./api";

const getComment = async (uuid) => {
    return await HttpRequest.get(`/comment/${uuid}`);
}
const postComment = async (request) => {
    return await HttpRequest.post('/comment', request);
}

export { getComment, postComment }