import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import user from "./user.svg";
import basket from "./basket.svg";
import styles from "./Navbar.module.css"

class Navbar extends Component{
    render() {
        return (
            <nav>
                <div className={styles.navbar}>
                    <NavLink to="/" className={styles.logo}>Clothok</NavLink>
                    <ul className={styles.menu}>
                        <li><NavLink to="/">All Products</NavLink></li>
                        <li><NavLink to="/">New Arrivals</NavLink></li>
                        <li><NavLink to="/">Sale</NavLink></li>
                        <li><NavLink to="/designLab">Design Lab</NavLink></li>
                    </ul>
                    <ul className={styles.list}>
                        <li><NavLink to="/basket"><img src={user} className={styles.black} alt="no"/></NavLink></li>
                        <li><NavLink to="/auth"><img src={basket} className={styles.black} alt="no"/></NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
