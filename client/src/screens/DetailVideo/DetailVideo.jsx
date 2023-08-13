import React from "react";
import "./DetailVideo.css";
import { CardProduct } from "../../components";

const DetailVideo = () => {
    return (
        <div className="detail-page">
            <div className="product-swiper">
                <div className="product-swiper__wrapper">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
                <div className="product-swiper__button">

                </div>
            </div>
            <div class="videoWrapper">
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allowfullscreen class="video"></iframe>
            </div>
            <div className="comment-box">
                <h1>Create a comment</h1>
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="comments"/>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default DetailVideo;