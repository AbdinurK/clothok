import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DesignNav.module.css"
import undo from "./assets/undo 1.svg"
import redo from "./assets/redo 1.svg"

const DesignNav = () => {
    return (
        <div className={styles.designNav}>
            <div className={styles.action__button}>
                <NavLink to="/products">Exit</NavLink>
                <button><img src={undo} alt="sorry"/></button>
                <button><img src={redo} alt="sorry"/></button>
            </div>
            <NavLink to="/" className={styles.title}>Clothok</NavLink>
            <div className={styles.action__button}>
                <NavLink to="/save">save design</NavLink>
                <NavLink to="/order">Order</NavLink>
            </div>
        </div>
    )
};

export default DesignNav
