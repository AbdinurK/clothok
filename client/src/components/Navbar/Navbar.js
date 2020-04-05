import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import user from "./assets/user.svg";
import basket from "./assets/basket.svg";
import styles from "./Navbar.module.css"

class Navbar extends Component{
    render() {
        return (
            <nav>
                <div className={styles.navbar}>
                    <NavLink to="/" className={styles.logo}>Clothok</NavLink>
                    <ul className={styles.menu}>
                        <li><NavLink to="/products">All Products</NavLink></li>
                        <li><NavLink to="/">New Arrivals</NavLink></li>
                        <li><NavLink to="/">Sale</NavLink></li>
                        <li><NavLink to="/designLab">Design Lab</NavLink></li>
                    </ul>
                    <ul className={styles.list}>
                        <li><NavLink to="/auth"><img src={user} className={styles.black} alt="no"/></NavLink></li>
                        <li><NavLink to="/basket"><img src={basket} className={styles.black} alt="no"/></NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
