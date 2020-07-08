import React, { Component } from "react";
import color from "./colours-active.svg"
import angle from "./angle-right-white.svg"
import decoration from "./decoration-active.svg"
import "./DesignPanel.css"

class DesignPanel extends Component {
    render() {
        return (
            <div className="panel">
                <div className="entry-panel">
                    <div className="customize-categories">
                        <div className="color-customize">
                            <a>
                                <div className="icon-angle-wrapper">
                                    <img className="icon" src={color} alt="color"/>
                                    <img className="angle-icon" src={angle} alt="color"/>
                                </div>
                                <div className="category-name">COLOR</div>
                            </a>
                        </div>
                        <div className="divider"/>
                        <div className="decorate">
                            <a>
                                <div className="icon-angle-wrapper">
                                    <img className="icon" src={decoration} alt="color"/>
                                    <img className="angle-icon" src={angle} alt="color"/>
                                </div>
                                <div className="category-name">DESIGNS</div>
                            </a>
                        </div>
                    </div>
                    <button className="btn-reset">RESET</button>
                </div>
                <div className="color-customize-panel">
                    <div className="section-groups">
                        <div className="close-panel"></div>
                        <div className="panel-content"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignPanel
