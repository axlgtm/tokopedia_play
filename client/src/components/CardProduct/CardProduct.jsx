import React from "react";
import "./CardProduct.css";
import { Link } from "react-router-dom";

const CardProduct = ({url, name}) => {
    return (
        <Link to={`${url}`} className="product-card">
            <div className="product-card__img--wrap">
                <img src="https://picsum.photos/300/200" alt="" />
            </div>
            <h1 className="product-card__name">{name}</h1>
        </Link>
    )
}

export default CardProduct;