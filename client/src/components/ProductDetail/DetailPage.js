import React from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Size from "../Size";

const Product = styled.div`
    padding: 20px 50px;
    
    .action__button {
        top: 1.2em;
        position: relative;
        display: flex;
        margin-top: 30px;
        max-width: 725px;
        box-sizing: border-box;
    }
    
    .action__button > a:first-child,
    .action__button > a:last-child {
        margin-right: 25px;
        border: 2px solid #202020;
        border-radius: 3px;
        text-decoration: none;
        max-width: 350px;
        padding: 10px 35px;
        font-weight: bold;
        color: black;
        text-transform: uppercase;
    }
    
    .action__button > a:last-child {
        background: black;
        color: white;
        margin-right: 0;
    }

`
const ProductSection = styled.section`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
`
const ProductImages = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    max-width: 50%;
`
const ProductDetails = styled.div`
    max-width: 50%;
    padding: 20px 200px 20px 0;
`
const ProductTitle = styled.h1`
    margin: 0;
    font-size: 30px;
`
const Container = styled.div`
    width: 50%;
    position: relative;
    border: 1px solid #cccccc;
    
    img {
        width: 100%;
    }
`
const ProductDescription = styled.p`
    font-size: 25px;
`
const ProductPrice = styled.p`
    font-weight: bold;
    font-size: 36px;
`
const ProductText = styled.div`
    position: relative;
`
const ProductDelivery = styled.div`
    position: relative;
    top: 3em;
`

const ActionButtons = ({ code }) => {
    return (
        <div className="action__button">
            <Link to={`/design-lab/${code}`}>Edit design</Link>
            <Link to="/order">Order</Link>
        </div>
    )
};

const DetailPage = ({ product }) => {
    const { images, title, price, delivery, code } = product;
    const image = images.map((item, index) => {
        return (
            <Container key={index}>
                <img src={`${process.env.PUBLIC_URL}/${item}`} alt="Sorry"/>
            </Container>
        )
    });
    return (
        <Product>
            <ProductSection>
                <ProductImages>
                    { image }
                </ProductImages>
                <ProductDetails>
                    <ProductTitle>{ title }</ProductTitle>
                    <ProductDescription>Classic White</ProductDescription>
                    <ProductPrice>{ price } T</ProductPrice>
                    <ProductText>
                        <p>Choose size:</p>
                        <Size/>
                    </ProductText>
                    <ProductDelivery>
                        <span>Delivery week: </span>
                        <span>{ delivery } week</span>
                    </ProductDelivery>
                    <ActionButtons code={code}/>
                </ProductDetails>
            </ProductSection>
        </Product>
    )
};

export default DetailPage
