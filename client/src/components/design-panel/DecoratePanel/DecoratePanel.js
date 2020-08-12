import React from "react";
import "./DecoratePanel.css"
import cross from "../../assets/images/cross.svg";
import IconsPanel from "./IconsPanel/IconsPanel";

const DecoratePanel = (props) => {
    return (
        <div id={props.selected ? 'decorate-panel' : 'none'}>
            <div className="decoration-positions design-panels">
                <div className="close-panel">
                    <a><img className="icon-close" src={cross} alt="sorry"/></a>
                </div>
                <div className="design-panel__content">
                    <div id="scrollbar-1594910761981" className="scrollbar-container panel-scroll-container">
                        <div className="scrollable-content for-mac ">
                            <div className="position-panel-padding">
                                <div className="decoration-position">
                                    <a className="design-panel__item">
                                        <div className="icon-color-wrapper">
                                            <div className="back"/>
                                        </div>
                                        <div className="design-panel__item-name">Chest Right</div>
                                    </a>
                                </div>
                                <div className="divider"/>
                                <div className="decoration-position">
                                    <a className="design-panel__item">
                                        <div className="icon-color-wrapper">
                                            <div className="back"/>
                                        </div>
                                        <div className="design-panel__item-name">Chest Left</div>
                                    </a>
                                </div>
                                <div className="divider"/>
                                <div className="decoration-position">
                                    <a className="design-panel__item">
                                        <div className="icon-color-wrapper">
                                            <div className="back"/>
                                        </div>
                                        <div className="design-panel__item-name">Back Center</div>
                                    </a>
                                </div>
                                <div className="divider"/>
                                <div className="decoration-position">
                                    <a className="design-panel__item">
                                        <div className="icon-color-wrapper">
                                            <div className="back"/>
                                        </div>
                                        <div className="design-panel__item-name">Inside Lining</div>
                                    </a>
                                </div>
                                <div className="divider"/>
                            </div>
                        </div>
                        <div className="scrollbar-track vertical ">
                            <div className="scrollbar-thumb"/>
                        </div>
                    </div>
                </div>
            </div>
            <IconsPanel/>
        </div>
    )
};


export default DecoratePanel
