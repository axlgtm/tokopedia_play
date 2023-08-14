import HttpRequest from "./api";

const getVideo = async () => {
    return await HttpRequest.get('/video')
}

export { getVideo };