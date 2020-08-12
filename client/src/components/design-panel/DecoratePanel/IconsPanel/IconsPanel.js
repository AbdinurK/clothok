import React from "react";
import "./IconsPanel.css"
import logo from "../../../assets/images/20.jpeg"
import cross from "../../../assets/images/cross.svg";
import ad from "../../../assets/images/ad.jpeg"
import adds from "../../../assets/images/2010.jpeg"


const IconsPanel = () => {

    return (
        <div className="icon-panel">
            <div className="close-panel">
                <a>
                    <img className="icon-close" src={cross} alt="cross"/>
                </a>
            </div>
            <div className="panel-content">
                <div className="title hidden-tablet">ICONS</div>
                <div className="scrollbar-container panel-scroll-container">
                    <div className="scrollable-content for-mac ">
                        <div className="logo-list">
                            <a className="icon-wrapper">
                                <img src={logo} alt="image"/>
                            </a>
                            <a className="icon-wrapper">
                                <img src={ad} alt="image"/>
                            </a>
                            <a className="icon-wrapper">
                                <img src={adds} alt="image"/>
                            </a>
                            <a className="icon-wrapper">
                                <img src={logo} alt="image"/>
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


export default IconsPanel
