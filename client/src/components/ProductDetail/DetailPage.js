import React from "react";
import { Link } from "react-router-dom"
import styles from "./ProductDetail.module.css";

const DetailPage = ({ product }) => {
    const { image, title, price, delivery, description, code } = product;
    return (
        <div className={styles.product}>
            <section className={styles.container}>
                <img src={`${process.env.PUBLIC_URL}/${image}`} alt="Sorry" className={styles.product__image}/>
                <div className={styles.product__info}>
                    <h1 className={styles.product__title}>{ title }</h1>
                    <p className={styles.product__description}>Classic White</p>
                    <p className={styles.product__price}>{ price } T</p>
                    <p className={styles.size__text}>Choose size:</p>
                    <ul className={styles.box}>
                        <li>XS</li>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                    </ul>
                    <div className={styles.product__quantity}>
                        <p>Quantity:</p>
                        <div className={styles.buttons}>
                            <button>+</button>
                            <div className={styles.count}></div>
                            <button>-</button>
                        </div>
                    </div>
                    <span>Delivery week: </span>
                    <span className={styles.product__delivery}>{ delivery } week</span>
                    <div className={styles.action__button}>
                        <Link to={`/designLab/${code}`}>Edit design</Link>
                        <Link to="/order">Order</Link>
                    </div>
                </div>
            </section>
            <div className={styles.product__information}>
                <section className={styles.container}>
                    <div className={styles.sections}>
                        <div>
                            <h2>Product Description</h2>
                            { description}
                        </div>
                        <div>
                            <h2>Size Guide</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sit sed sit eget velit vitae auctor lectus augue.
                                Aliquet etiam orci, et et libero.
                            </p>
                        </div>
                        <div>
                            <h2>Care Information</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sit sed sit eget velit vitae auctor lectus augue.
                                Aliquet etiam orci, et et libero.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default DetailPage
