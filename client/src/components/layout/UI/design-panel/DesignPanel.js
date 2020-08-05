import React, { Component } from "react";
import PanelElementList from "./Panel-Element-List";
import color from "../../../assets/images/colours-active.svg"
import angle from "../../../assets/images/angle-right-white.svg"
import decoration from "../../../assets/images/decoration-active.svg"
import "./DesignPanel.css"
import DecoratePanel from "./DecoratePanel";


class DesignPanel extends Component {

    state = {
        color: false,
        design: false,
        element: ''
    };

    handleColorClick = () => {
        this.setState(state => ({
            color: !state.color
        }))
    };

    handleDesignClick = () => {
        this.setState(state => ({
            design: !state.design
        }))
    };



    render() {
        return (
            <div className="panel">
                <div id="entry-panel" className={this.state.color ? 'selected' : ''}>
                    <div className="customize-categories">
                        <div className="color-customize">
                            <a onClick={this.handleColorClick}>
                                <div className="icon-angle-wrapper">
                                    <img className="icon" src={color} alt="color"/>
                                    <img className="angle-icon" src={angle} alt="color"/>
                                </div>
                                <div className="category-name">COLOR</div>
                            </a>
                        </div>
                        <div className="divider"/>
                        <div className="decorate">
                            <a onClick={this.handleDesignClick}>
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
                <DecoratePanel selected={this.state.design}/>
                <div className="color-customize-panel">
                    <PanelElementList selected={this.state.color}/>
                </div>
            </div>
        )
    }
}

export default DesignPanel
