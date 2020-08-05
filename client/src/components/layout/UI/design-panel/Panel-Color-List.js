import React, { useState } from "react";
import { connect } from "react-redux";
import {setColor} from "../../../../store/actions/designActions"
import cross from "../../../assets/images/cross.svg";

const PanelColorList = (props) => {
    const panelElementList = props.selected;
    const handleSelected = e => {
        props.setColor(e.target.style.background)
    };
    const handleClose = (e) => {

    };
    return (
        <div className={ panelElementList ? "plain-color-list" : "none" }>
            <div className="close-panel">
                <a onClick={handleClose}>
                    <img className="icon-close" src={cross} alt="cross"/>
                </a>
            </div>
            <div className="panel-content">
                <div className="title hidden-tablet">COLORS</div>
                <div id="scrollbar-1594714212310" className="scrollbar-container panel-scroll-container">
                    <div className="scrollable-content for-mac ">
                        <div className="color-list">
                            <a title="White" className="icon-color-wrapper" onClick={handleSelected}>
                                <div className="back" style={{ background: 'purple' }}/>
                            </a>
                            <a title="White" className="icon-color-wrapper" onClick={handleSelected}>
                                <div className="back" style={{ background: 'red' }}/>
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


export default connect(null, { setColor })(PanelColorList)
