import React from "react";
import "./CardVideo.css";
import {Link} from "react-router-dom"

const CardVideo = ({imageUrl, uuid, id_youtube}) => {
    return (
        // <Link to={`detail/${uuid}`}>
            <Link to={`detail/${uuid}/${id_youtube}`} className='card'>
                <div className='card__layer'>
                <div className='card__img--wrap'>
                    <img src={`${imageUrl}`} alt="" />
                </div>
                </div>
            </Link>
        // </Link>
    )
}

export default CardVideo;