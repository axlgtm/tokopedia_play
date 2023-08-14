import HttpRequest from "./api";

const getProduct = async (uuid) => {
    return await HttpRequest.get(`/product/${uuid}`)
}

export { getProduct };