import React, { Component } from "react";
import color from "./assets/colours-active.svg"
import angle from "./assets/angle-right-white.svg"
import decoration from "./assets/decoration-active.svg"
import cross from "./assets/cross.svg"
import "./DesignPanel.css"
import PanelColorList from "./Panel-Color-List";
import PanelElementList from "./Panel-Element-List";

class DesignPanel extends Component {

    state = {
        selected: false
    };

    handleColorClick = () => {
        this.setState(state => ({
            selected: !state.selected
        }))
    };

    render() {
        return (
            <div className="panel">
                <div id="entry-panel" className={this.state.selected ? 'selected' : ''}>
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
                <div className={this.state.selected ? 'color-customize-panel' : 'none'}>
                    <PanelElementList/>
                    <PanelColorList/>
                </div>
            </div>
        )
    }
}

export default DesignPanel
