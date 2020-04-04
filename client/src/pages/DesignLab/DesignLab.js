import React from "react";
import styles from "./DesignLab.module.css"
import Navbar from "../../components/Navbar/Navbar";

export default function DesignLab() {
    return (
        <div>
            <Navbar/>
            <div className={styles.container}>
                Design Lab
            </div>
        </div>
    )
}
