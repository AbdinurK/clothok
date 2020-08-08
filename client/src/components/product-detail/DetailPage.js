import React from "react";
import { Link } from "react-router-dom"
import styles from "./DetailPage.module.css";
import Size from "../layout/UI/size-panel/Size";

const ActionButtons = ({ code }) => {
    return (
        <div className={styles.action__button}>
            <Link to={`/design-lab/${code}`}>Edit design</Link>
            <Link to="/order">Order</Link>
        </div>
    )
};

const DetailPage = ({ product }) => {
    const { images, title, price, delivery, code } = product;
    const image = images.map((item, index) => {
        return (
            <div className={styles.container}  key={index}>
                <img src={`${process.env.PUBLIC_URL}/${item}`} alt="Sorry" className={styles.product__image}/>
            </div>
        )
    });
    return (
        <div className={styles.product}>
            <section className={styles.product__section}>
                <div className={styles.product__images}>
                    { image }
                </div>
                <div className={styles.product__details}>
                    <h1 className={styles.product__title}>{ title }</h1>
                    <p className={styles.product__description}>Classic White</p>
                    <p className={styles.product__price}>{ price } T</p>
                    <div className={styles.product__text}>
                        <p>Choose size:</p>
                        <Size/>
                    </div>
                    <div className={styles.product__delivery}>
                        <span>Delivery week: </span>
                        <span>{ delivery } week</span>
                    </div>
                    <ActionButtons code={code}/>
                </div>
            </section>
        </div>
    )
};

export default DetailPage
