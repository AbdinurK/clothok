import React from "react";
import { NavLink } from "react-router-dom";
import undo from "../assets/images/undo-grey.svg"
import redo from "../assets/images/redo-grey.svg"
import logo from "../assets/images/logo-icon.svg"
import left from "../assets/images/arrow-left.svg"
import styled from 'styled-components'

const Container = styled.div`
    padding: 0 32px;
    position: relative;
    width: 100%;
    height: 100%;
`
const Header = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .button {
        display: flex;
        font-size: 12px;
        justify-content: center;
        align-items: center;
        font-weight: 900;
        border-radius: 3px;
        text-align: center;
        vertical-align: middle;
        line-height: 1.15;
        margin: 0;
        cursor: pointer;
        outline: none;
        text-decoration: none;
    }
    
    .button.secondary {
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        color: #000000;
        border: 2px solid rgba(255, 255, 255, 0.8);
    }
    
    .button.primary {
        background-color: #000000;
        text-align: center;
        color: #ffffff;
        min-height: auto;
        border: none;
    }
    
    span.buttonIcon {
        margin-right: 15px;
    }
    
    .leftArea {
        justify-content: flex-start;
    }
    
    .leftArea .actionGroup {
        display: flex;
        margin-left: 30px;
    }
    
    .leftArea .btnBack {
        height: 50px;
        padding: 0.8rem 1.7rem;
        border: 2px solid #ccc;
        background: none;
        box-shadow: none;
    }
    
    .leftArea, .header .rightArea {
        flex-basis: calc(50% - 75px);
        padding: 0;
        display: flex;
        align-items: center;
    }
    
    .leftArea .actionGroup .undo, .header .leftArea .actionGroup .redo {
        width: 30px;
        height: 30px;
        text-align: center;
    }
    
    .leftArea .actionGroup .redo::before {
        content: '';
        width: 1px;
        height: 20px;
        position: absolute;
        background-color: #000000;
    }
    
    .centerArea {
        flex-basis: 150px;
        padding: 0;
        text-align: center;
    }
    
    .centerArea .logo {
        max-width: 100%;
        font-size: 1.6rem;
        text-decoration: none;
        color: #000000;
        font-weight: bold;
        text-transform: uppercase;
    }
    
    .rightArea {
        justify-content: flex-end;
        flex-basis: calc(50% - 75px);
        padding: 0;
        display: flex;
        align-items: center;
    }
    
    .rightArea .actionGroup {
        display: flex;
    }
    
    .rightArea .btnSaveDesign {
        height: 50px;
        padding: 0 2rem;
        margin-left: 15px;
    }
`

const DesignNav = () => {
    return (
        <Container>
            <Header>
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
            </Header>
        </Container>
    )
};

export default DesignNav
