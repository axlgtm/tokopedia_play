import HttpRequest from "./api";

const getVideo = async () => {
    return await HttpRequest.get('/')
}

export {getVideo};