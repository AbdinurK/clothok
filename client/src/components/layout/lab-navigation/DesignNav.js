import React from "react";
import { NavLink } from "react-router-dom";
import undo from "../../assets/images/undo-grey.svg"
import redo from "../../assets/images/redo-grey.svg"
import logo from "../../assets/images/logo-icon.svg"
import left from "../../assets/images/arrow-left.svg"
import "./DesignNav.css"

const DesignNav = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="leftArea">
                    <div>
                        <NavLink to="/products" className="button secondary small btnBack">
                            <span className="buttonIcon">
                                <img src={left} alt="left"/>
                            </span>
                            <span>EXIT</span>
                        </NavLink>
                    </div>
                    <div className="actionGroup">
                        <a href="/#">
                            <img className="undo" src={undo} alt="sorry"/>
                        </a>
                        &nbsp;
                        <a href="/#">
                            <img className="redo" src={redo} alt="sorry"/>
                        </a>
                    </div>
                </div>
                <div className="centerArea">
                    <NavLink to="/products" className="logo">Clothok</NavLink>
                </div>
                <div className="rightArea">
                    <div className="actionGroup">
                        <button className="button secondary btnSaveDesign">
                            <span className="buttonIcon">
                                <img src={logo} alt="logo"/>
                            </span>
                            <span>SAVE</span>
                        </button>
                        <button className="button primary btnSaveDesign">
                            <span>ORDER</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DesignNav
