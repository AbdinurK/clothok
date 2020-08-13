import React from "react";
import { panelSetLogoSelected, panelDecorateSelected } from "../../../store/actions/designActions"
import { connect } from "react-redux";
import "./DecoratePanel.css"
import cross from "../../assets/images/cross.svg";
import IconsPanel from "./IconsPanel/IconsPanel";

const DecoratePanel = (props) => {

    let selected = false;
    const { panelDecorateSelected } = props.design;
    const handleDecorate = () => {
        props.panelSetLogoSelected(!selected);
    };
    const handleClose = () => {
        props.panelDecorateSelected(false)
    };

    return (
        <div id={panelDecorateSelected ? 'decorate-panel' : 'none'}>
            <div className="decoration-positions design-panels">
                <div className="close-panel" onClick={handleClose}>
                    <a>
                        <img className="icon-close" src={cross} alt="sorry"/>
                    </a>
                </div>
                <div className="design-panel__content">
                    <div className="scrollbar-container panel-scroll-container">
                        <div className="scrollable-content for-mac ">
                            <div className="position-panel-padding">
                                <div className="decoration-position">
                                    <a className="design-panel__item" onClick={handleDecorate}>
                                        <div className="icon-color-wrapper">
                                            <div className="back"/>
                                        </div>
                                        <div className="design-panel__item-name">Chest Right</div>
                                    </a>
                                </div>
                                <div className="divider"/>
                                <div className="decoration-position">
                                    <a className="design-panel__item" onClick={handleDecorate}>
                                        <div className="icon-color-wrapper">
                                            <div className="back"/>
                                        </div>
                                        <div className="design-panel__item-name">Chest Left</div>
                                    </a>
                                </div>
                                <div className="divider"/>
                                <div className="decoration-position">
                                    <a className="design-panel__item" onClick={handleDecorate}>
                                        <div className="icon-color-wrapper">
                                            <div className="back"/>
                                        </div>
                                        <div className="design-panel__item-name">Back Center</div>
                                    </a>
                                </div>
                                <div className="divider"/>
                                <div className="decoration-position" onClick={handleDecorate}>
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

const mapStateToProps = state => ({
    design: state.designReducer
});


export default connect(mapStateToProps, { panelSetLogoSelected, panelDecorateSelected })(DecoratePanel)
