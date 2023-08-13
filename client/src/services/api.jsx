import axios from "axios";

const HttpRequest = axios.create({
    baseURL: "http://localhost:8000"
})

export default HttpRequest;