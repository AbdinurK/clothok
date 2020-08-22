import React from "react";
import { connect } from "react-redux";
import { panelEntrySelected, panelDecorateSelected, reset } from "../../store/actions/designActions"
import PanelElementList from "./ElementsPanel/Panel-Element-List";
import color from "../assets/images/colours-active.svg"
import angle from "../assets/images/angle-right-white.svg"
import decoration from "../assets/images/decoration-active.svg"
import DecoratePanel from "./DecoratePanel/DecoratePanel";
import "./DesignPanel.css"



const DesignPanel = (props) =>  {

    let colorSelected, designSelected = false;
    const { panelEntrySelected, panelDecorateSelected } = props.design;

    const handleColorClick = () => {
        props.panelEntrySelected(!colorSelected)
        props.panelDecorateSelected(false);
    };

    const handleDesignClick = () => {
        props.panelDecorateSelected(!designSelected);
        props.panelEntrySelected(false);
    };

    const handleReset = () => {
        props.reset()
    };

    return (
        <div className="panel">
            <div id="entry-panel" className={panelEntrySelected || panelDecorateSelected ? 'selected' : ''}>
                <div className="customize-categories">
                    <div className="color-customize">
                        <a href="#something" onClick={handleColorClick}>
                            <div className="icon-angle-wrapper">
                                <img className="icon" src={color} alt="color"/>
                                <img className="angle-icon" src={angle} alt="color"/>
                            </div>
                            <div className="category-name">COLOR</div>
                        </a>
                    </div>
                    <div className="divider"/>
                    <div className="decorate">
                        <a href="#something" onClick={handleDesignClick}>
                            <div className="icon-angle-wrapper">
                                <img className="icon" src={decoration} alt="color"/>
                                <img className="angle-icon" src={angle} alt="color"/>
                            </div>
                            <div className="category-name">DESIGNS</div>
                        </a>
                    </div>
                </div>
                <button className="btn-reset" onClick={handleReset}>RESET</button>
            </div>
            <PanelElementList/>
            <DecoratePanel/>
        </div>
    )

};

const mapStateToProps = state => ({
    design: state.designReducer
});

export default connect(mapStateToProps, { panelEntrySelected, panelDecorateSelected, reset })(DesignPanel)
