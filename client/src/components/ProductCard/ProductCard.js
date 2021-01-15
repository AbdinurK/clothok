import React from "react";
import { Link } from "react-router-dom";
import basket from "../assets/images/basket-black.svg"
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
    max-height: 340px;
    
    :hover {
        transform: translateY(-7px);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    
    @media only screen and (max-width: 1000px) {
        grid-column-end: span 6;
    }
    
    @media only screen and (max-width: 700px) {
        grid-column-end: span 12;
    }
    
    @media only screen and (max-width: 500px) {
        grid-column-end: span 6;
    }
`
const CardImage = styled.div`
    width: 100%;
    padding-top: 100%;
    position: relative;
    background-color: #f8f8f8;
    
    img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }
    
    
`
const CardInfo = styled.div`
    display: flex;
    position: relative;
    
    .basket {
        position: absolute;
        margin-left: 0;
        bottom: 10px;
        right: 10px;
        width: 30px;
    }
`
const CardContent = styled.div`
    padding: 10px 20px;
    
    > a {
        text-decoration: none;
        color: black;
    }
`
const CardTitle = styled.p`
    font-weight: 600;
    margin-bottom: 10px;
`


const ProductCard = ({ product }) => {
    const { _id, images, title, price } = product;
    return (
        <Card>
            <CardImage>
                <img src={images[0]} alt="sorry"/>
            </CardImage>
            <CardInfo>
                <CardContent>
                    <Link to={`/products/${_id}`}>
                        <CardTitle>{ title }</CardTitle>
                    </Link>
                    <p className="card__price">{ price }</p>
                </CardContent>
                <img src={basket} alt="no" className="basket"/>
            </CardInfo>
        </Card>
    )
};

export default ProductCard
