import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DesignNav.module.css"
import undo from "./assets/undo 1.svg"
import redo from "./assets/redo 1.svg"

const DesignNav = () => {
    return (
        <div className={styles.header}>
            <div className={styles.leftArea}>
                <div>
                    <button className="button btnBack">
                        <span className={styles.buttonIcon}>
                            <img />
                        </span>
                        <span></span>
                    </button>
                </div>
                <div className="actionGroup">
                    <a><img src={undo} alt="sorry"/></a>
                    <a><img src={redo} alt="sorry"/></a>
                </div>
            </div>
            <div className={styles.centerArea}>
                <NavLink to="/" className={styles.logo}>Clothok</NavLink>
            </div>
            <div className={styles.rightArea}>
                <NavLink to="/save">save design</NavLink>
                <NavLink to="/order">Order</NavLink>
            </div>
        </div>
    )
};

export default DesignNav
