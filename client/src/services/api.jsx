import axios from "axios";

const HttpRequest = axios.create({
    baseURL: "https://charming-eel-tux.cyclic.cloud"
})

export default HttpRequest;
