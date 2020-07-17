import React from "react";
import cross from "./assets/cross.svg";

const DecoratePanel = (props) => {
    console.log(props.selected)
    return (
        <div id={props.selected ? 'decorate-panel' : 'none'}>
            <div className="decoration-positions design-panels">
                <div className="close-panel">
                    <a><img className="icon-close" src={cross}/></a>
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
        </div>
    )
};


export default DecoratePanel
