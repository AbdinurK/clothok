import React, { useState, useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Colors } from "./icons/colors.svg"
import { ReactComponent as Patterns } from "./icons/patterns.svg"
import styles from "./Configurator.module.css"

function Configurator() {
    return (
        <Panel>
            <PanelItem icon={ <Colors/> } name="Color">
                <DropDown/>
            </PanelItem>
            <hr/>
            <PanelItem icon={ <Patterns/> } name="Pattern">
                <DropDown/>
            </PanelItem>
            <hr/>
            <button className={styles.resetBtn}>Reset</button>
        </Panel>
    )
}

function Panel(props) {
    return (
        <nav className={styles.panel}>
            <ul className={styles.panelNav}>
                { props.children }
            </ul>
        </nav>
    )
}

function PanelItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className={styles.panelItem}>
            <NavLink to="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </NavLink>
            <p>{ props.name }</p>
            {open && props.children}
        </li>
    );
}

function DropDown() {
    const colors = ['#CA2929', '#F9C50D', '#167ECA', '#00ECD0', '#B5E4FF', '#8B8B8B', '#8F7CFF'];
    return (
        <div className={styles.dropdown}>
                <div className={styles.colors}>
                    <NavLink to="/" className={styles.color}/>
                    <NavLink to="/" className={styles.color}/>
                    <NavLink to="/" className={styles.color}/>
                    <NavLink to="/" className={styles.color}/>
                    <NavLink to="/" className={styles.color}/>
                    <NavLink to="/" className={styles.color}/>
                    <NavLink to="/" className={styles.color}/>
                    <NavLink to="/" className={styles.color}/>
                </div>
        </div>
    )
}


export default Configurator
