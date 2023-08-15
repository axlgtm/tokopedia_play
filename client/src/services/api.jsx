import axios from "axios";

const HttpRequest = axios.create({
    baseURL: "https://charming-eel-tux.cyclic.cloud"
    // baseURL: "http://localhost:8000"
})

export default HttpRequest;
