import React from "react";
import { connect } from "react-redux";
import { setLogo, panelSetLogoSelected } from "../../../../store/actions/designActions"
import ld from "../../../assets/icons/2021.png"
import lk from "../../../assets/icons/image.png"
import "./IconsPanel.css"
import ClosePanel from "../../../layout/UI/close-panel/ClosePanel";


const IconsPanel = (props) => {

    const handleSelected = e => {
        props.setLogo(e.target.src)
    };
    const { panelSetLogo, panelDecorateSelected } = props.design;
    const handleClose = () => {
        props.panelSetLogoSelected(false)
    };

    return (
        <div className={panelSetLogo && panelDecorateSelected ? "icon-panel" : "none"}>
            <ClosePanel handleClose={handleClose}/>
            <div className="panel-content">
                <div className="title hidden-tablet">ICONS</div>
                <div className="scrollbar-container panel-scroll-container">
                    <div className="scrollable-content for-mac ">
                        <div className="logo-list">
                            <a href="#something" className="icon-wrapper">
                                <img src={lk} alt="sorry" onClick={handleSelected}/>
                            </a>
                            <a href="#something" className="icon-wrapper">
                                <img src={ld} alt="sorry" onClick={handleSelected}/>
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
