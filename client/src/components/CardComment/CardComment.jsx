import React from "react";
import "./CardComment.css";

const CardComment = ({username, comment}) => {
    return (
        <div>
            <p className="comment-username">{username}</p>
            <p>{comment}</p>
        </div>
    )
}

export default CardComment;