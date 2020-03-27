import React from "react";
import styles from "./Footer.module.css";
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__nav}>
                    <NavLink to="/">Account</NavLink>
                    <NavLink to="/">Contact Us</NavLink>
                    <NavLink to="/">Shipping</NavLink>
                    <NavLink to="/">Terms</NavLink>
                </div>
                <h4 className={styles.footer__copyright}>&copy; 2020 Clothok</h4>
            </div>
        </footer>
    )
}

export default Footer;
