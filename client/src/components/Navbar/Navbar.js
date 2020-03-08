import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"
import user from "./user.svg"
import basket from "./basket.svg"

export class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className={styles.navbar}>
                    <NavLink to="/" className={styles.logo}>Clothok</NavLink>
                    <ul className={styles.list}>
                        <li><NavLink to="/products"><img src={user} alt="no"/></NavLink></li>
                        <li><NavLink to="products"><img src={basket} alt="no"/></NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
