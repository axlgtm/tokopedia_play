import axios from "axios";

const HttpRequest = axios.create({
    baseURL: "https://tokopedia-play-api.vercel.app"
})

export default HttpRequest;
