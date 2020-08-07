import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { setElement } from "../../store/actions/designActions"
import { withRouter } from "react-router-dom"
import { components } from "../assets/service/components"
import cross from "../assets/images/cross.svg";
import angle from "../assets/images/angle-right-white.svg";
import PanelColorList from "./Panel-Color-List";
import R2002 from "../assets/elements/R2002";

const PanelElementList = (props) => {
    console.log(props.match.params.id);
    const [selected, setSelected] = useState(false);
    const handleSelected = e => {
        setSelected(true);
        props.setElement(e.target.textContent.toLowerCase().trim())
    };
    return (
        <Fragment>
            <div className={props.selected  ? "section-groups" : "none"}>
                <div className="close-panel">
                    <a onClick={() => setSelected(false)}>
                        <img className="icon-close" src={cross} alt="cross"/>
                    </a>
                </div>
                <div className="panel-content">
                    <div className="title hidden-tablet">ELEMENTS</div>
                    <div id="scrollbar-1594145913798" className="scrollbar-container panel-scroll-container">
                        <div className="scrollable-content for-mac show-scrollbar">
                            <div id="a5i0K00000005CaQAI" className="section-group">
                                <a>
                                    <div className="svg-icon" data-svgclassname="Group_R1042_Body">
                                        <R2002 width="50" height="50"/>
                                        <img className="angle-right hidden-tablet"
                                             src={angle} alt="angle"/></div>
                                    <div className="section-group-name" onClick={handleSelected}>Body</div>
                                </a>
                            </div>
                            <div className="divider"/>
                            <div id="a5i0K00000005CbQAI" className="section-group">
                                <a>
                                    <div className="svg-icon" data-svgclassname="Group_R1042_Sleeves">
                                        <R2002 width="50" height="50"/>
                                        <img className="angle-right hidden-tablet"
                                             src={angle} alt="sorry"/></div>
                                    <div className="section-group-name" onClick={handleSelected}>Sleeves</div>
                                </a>
                            </div>
                            <div className="divider"/>
                            <div id="a5i0K00000005CcQAI" className="section-group">
                                <a>
                                    <div className="svg-icon" data-svgclassname="Group_R1042_Rib">
                                        <R2002 width="50" height="50"/>
                                        <img className="angle-right hidden-tablet"
                                             src={angle} alt="sorry"/></div>
                                    <div className="section-group-name" onClick={handleSelected}>Rib</div>
                                </a>
                            </div>
                            <div className="divider"/>
                            <div id="a5i0K00000005CdQAI" className="section-group">
                                <a>
                                    <div className="svg-icon" data-svgclassname="Group_R1042_Buttons">
                                        <R2002 width="50" height="50"/>
                                        <img className="angle-right hidden-tablet"
                                             src={angle} alt="sorry"/></div>
                                    <div className="section-group-name" onClick={handleSelected}>Buttons</div>
                                </a>
                            </div>
                            <div className="divider"/>
                            <div id="a5i0K00000005CeQAI" className="section-group">
                                <a>
                                    <div className="svg-icon" data-svgclassname="Group_R1042_Pockets_Body">
                                        <R2002 width="50" height="50"/>
                                        <img className="angle-right hidden-tablet"
                                             src={angle} alt="sorry"/></div>
                                    <div className="section-group-name" onClick={handleSelected}>Pockets</div>
                                </a>
                            </div>
                            <div className="divider"/>
                            <div id="a5i0K00000005CfQAI" className="section-group">
                                <a>
                                    <div className="svg-icon" data-svgclassname="Group_R1042_Inside_Lining">
                                        <R2002 width="50" height="50"/>
                                        <img className="angle-right hidden-tablet"
                                             src={angle} alt="sorry"/></div>
                                    <div className="section-group-name" onClick={handleSelected}>Inside Lining</div>
                                </a>
                            </div>
                            <div className="divider"/>
                        </div>
                        <div className="scrollbar-track vertical ">
                            <div className="scrollbar-thumb"/>
                        </div>
                    </div>
                </div>
            </div>
            <PanelColorList selected={selected}/>
        </Fragment>
    )
};


export default connect(null, { setElement })(withRouter(PanelElementList))
