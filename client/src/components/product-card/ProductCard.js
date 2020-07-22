import React from "react";
import { Link } from "react-router-dom";
import basket from "./assets/basket.svg";
import "./ProductCard.css"

const ProductCard = ({ product }) => {
    const { _id, images, title, price } = product;
    return (
        <div className="card">
            <div className="card__image">
                <img src={images[1]} alt="sorry"/>
            </div>
            <div className="card__info">
                <div className="card__content">
                    <Link to={`/products/${_id}`}>
                        <p className="card__title">{ title }</p>
                    </Link>
                    <p className="card__price">{ price }</p>
                </div>
                <img src={basket} alt="no" className="basket"/>
            </div>
        </div>
    )
};

export default ProductCard
