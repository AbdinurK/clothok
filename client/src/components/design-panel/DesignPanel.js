import React, { useState } from "react";
import PanelElementList from "./Panel-Element-List";
import color from "../assets/images/colours-active.svg"
import angle from "../assets/images/angle-right-white.svg"
import decoration from "../assets/images/decoration-active.svg"
import DecoratePanel from "./DecoratePanel";
import "./DesignPanel.css"


const DesignPanel = () =>  {

    const [colorSelected, setColorSelected] = useState(false);
    const [designSelected, setDesignSelected] = useState(false);

    const handleColorClick = () => {
        setColorSelected(!colorSelected);
        setDesignSelected(false);
    };

    const handleDesignClick = () => {
        setDesignSelected(!designSelected);
        setColorSelected(false)
    };

    return (
        <div className="panel">
            <div id="entry-panel" className={colorSelected ? 'selected' : ''}>
                <div className="customize-categories">
                    <div className="color-customize">
                        <a onClick={handleColorClick}>
                            <div className="icon-angle-wrapper">
                                <img className="icon" src={color} alt="color"/>
                                <img className="angle-icon" src={angle} alt="color"/>
                            </div>
                            <div className="category-name">COLOR</div>
                        </a>
                    </div>
                    <div className="divider"/>
                    <div className="decorate">
                        <a onClick={handleDesignClick}>
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
            <DecoratePanel selected={designSelected}/>
            <div className="color-customize-panel">
                <PanelElementList selected={colorSelected}/>
            </div>
        </div>
    )

};

export default DesignPanel
