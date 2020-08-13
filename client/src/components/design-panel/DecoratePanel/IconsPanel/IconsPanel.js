import React from "react";
import { connect } from "react-redux";
import { setLogo, panelSetLogoSelected } from "../../../../store/actions/designActions"
import cross from "../../../assets/images/cross.svg";
import ld from "../../../assets/elements/2021.png"
import lk from "../../../assets/elements/image.png"
import "./IconsPanel.css"


const IconsPanel = (props) => {

    const handleSelected = e => {
        props.setLogo(e.target.src)
    };
    const { panelSetLogo } = props.design;
    const handleClose = () => {
        props.panelSetLogoSelected(false)
    };

    return (
        <div className={panelSetLogo ? "icon-panel" : "none"}>
            <div className="close-panel">
                <a onClick={handleClose}>
                    <img className="icon-close" src={cross} alt="cross"/>
                </a>
            </div>
            <div className="panel-content">
                <div className="title hidden-tablet">ICONS</div>
                <div className="scrollbar-container panel-scroll-container">
                    <div className="scrollable-content for-mac ">
                        <div className="logo-list">
                            <a className="icon-wrapper">
                                <img src={lk} alt="image" onClick={handleSelected}/>
                            </a>
                            <a className="icon-wrapper">
                                <img src={ld} alt="image" onClick={handleSelected}/>
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

const mapStateToProps = state => ({
    design: state.designReducer
});

export default connect(mapStateToProps, { setLogo, panelSetLogoSelected })(IconsPanel)
