import React from "react";
import "./CardProduct.css";

const CardProduct = () => {
    return (
        <div className="product-card">
            <div className="product-card__img--wrap">
                <img src="https://img.youtube.com/vi/Nq4Mh_jTubA/sddefault.jpg" alt="" />
            </div>
            <h1 className="product-card__name">Product Name</h1>
        </div>
    )
}

export default CardProduct;