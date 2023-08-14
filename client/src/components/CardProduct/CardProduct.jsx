import React from "react";
import "./CardProduct.css";
import { Link } from "react-router-dom";

const CardProduct = ({url, name}) => {
    return (
        <Link to={`${url}`} className="product-card">
            <div className="product-card__img--wrap">
                <img src="https://img.youtube.com/vi/Nq4Mh_jTubA/sddefault.jpg" alt="" />
            </div>
            <h1 className="product-card__name">{name}</h1>
        </Link>
    )
}

export default CardProduct;