import React from "react";
import cross from "./assets/cross.svg";

const PanelColorList = () => {
    return (
        <div className="plain-color-list">
            <div className="close-panel">
                <a>
                    <img className="icon-close" src={cross} alt="cross"/>
                </a>
            </div>
            <div className="panel-content">
                <div className="title hidden-tablet">COLORS</div>
                <div id="scrollbar-1594714212310" className="scrollbar-container panel-scroll-container">
                    <div className="scrollable-content for-mac ">
                        <div className="color-list">
                            <a title="White" className="icon-color-wrapper">
                                <div className="back" style={{ background: 'rgb(255, 255, 255)' }}/>
                            </a>
                            <a title="White" className="icon-color-wrapper">
                                <div className="back" style={{ background: 'rgb(23, 23, 23)' }}/>
                            </a>
                            <a title="White" className="icon-color-wrapper">
                                <div className="back" style={{ background: 'rgb(23, 23, 23)' }}/>
                            </a>
                            <a title="White" className="icon-color-wrapper">
                                <div className="back" style={{ background: 'rgb(23, 23, 23)' }}/>
                            </a>
                            <a title="White" className="icon-color-wrapper">
                                <div className="back" style={{ background: 'rgb(23, 23, 23)' }}/>
                            </a>
                            <a title="White" className="icon-color-wrapper">
                                <div className="back" style={{ background: 'rgb(23, 23, 23)' }}/>
                            </a>
                        </div>
                    </div>
                    <div className="scrollbar-track vertical hidden">
                        <div className="scrollbar-thumb"
                             style={{ height: '100%', transform: 'translateY(0px)' }}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PanelColorList
