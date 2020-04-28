import React, { useState } from "react";
import styles from "./DesignLab.module.css"
import DesignNav from "../../components/DesignNav/DesignNav";
import Configurator from "../../components/Configurator/Configurator";

export default function DesignLab() {
    return (
        <div>
            <DesignNav/>
            <div className="container">
                <div className={styles.icon}>
                    <Configurator/>
                </div>
            </div>
        </div>
    )
}
