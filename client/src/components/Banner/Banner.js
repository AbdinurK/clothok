import React, {Component} from "react";
import styles from "./Banner.module.css";
import {NavLink} from "react-router-dom";
import user from "./assets/user.svg";
import basket from "./assets/basket.svg";
import design from "./assets/design.png"

export default class Banner extends Component {
    render() {
        return (
            <div>
                <div className={styles.background}>
                    <nav>
                        <div className={styles.navbar}>
                            <NavLink to="/" className={styles.logo}>Clothok</NavLink>
                            <ul className={styles.list}>
                                <li><NavLink to="/products"><img src={user} alt="no"/></NavLink></li>
                                <li><NavLink to="products"><img src={basket} alt="no"/></NavLink></li>
                            </ul>
                        </div>
                    </nav>
                    <div className={styles.container}>
                        <h1 className={styles.banner}>Check out our stuff</h1>
                        <NavLink to="/products" className={styles.shopBtn }>Shop</NavLink>
                    </div>
                </div>
                <div className={styles.design}>
                    <h1 className={styles.banner}>Design your stuff</h1>
                    <button className={styles.tryBtn }>Try it</button>
                    <div className={styles.man}>
                        <img src={design} alt="no"/>
                    </div>
                </div>
                <div className={styles.clients}>
                    <h1 className={styles.banner}>Our clients</h1>
                </div>
            </div>
        )
    }
}
