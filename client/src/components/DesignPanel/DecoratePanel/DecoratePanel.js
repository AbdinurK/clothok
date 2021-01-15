import React, { useState } from "react";
import { panelSetLogoSelected, panelDecorateSelected } from "../../../store/actions/designActions"
import { connect } from "react-redux";
import IconsPanel from "./IconsPanel";
import { Divider } from '../UI'
import ClosePanel from "../../Layout/UI/ClosePanel";
import styled from 'styled-components'


const StyledDecoratePanel = styled.div`
    height: calc((100vh - 100px) * 0.8);
    display: flex;
    border-radius: 0 6px 6px 6px;
    background-color: #ffffff;
    font-size: 10px;
    border: 1px solid #f1f1f2;
`
const DesignPanel = styled.div`
    width: 130px;
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    vertical-align: top;
    text-transform: uppercase;
    overflow: hidden;
    background-color: white;
`
const DesignPanelContent = styled.div`
    height: calc(100% - 46px);
    position: relative;
    
    .position-panel-padding {
        padding: 15px 15px 10px 15px;
    }
    
    .design-panel__item {
        text-decoration: none;
        display: block;
        position: relative;
        padding-top: 5px;
        padding-bottom: 5px;
        color: #666666;
    }
    
    .design-panel__item:hover {
        color: blueviolet;
    }
    
    icon-color-wrapper .back {
        background: url("../../assets/images/decoration-add.svg");
    }
`

const DecoratePanel = (props) => {

    const [selected, setSelected] = useState(false)
    const handleDecorate = () => {
        setSelected(true)
    };
    const handleClose = () => {
        props.panelDecorateSelected(false)
    };

    return (
        <React.Fragment>
            {
                props.state ? (
                    <StyledDecoratePanel>
                        <DesignPanel>
                            <ClosePanel handleClose={handleClose}/>
                            <DesignPanelContent>
                                <div className="scrollbar-container panel-scroll-container">
                                    <div className="scrollable-content for-mac ">
                                        <div className="position-panel-padding">
                                            <div className="decoration-position">
                                                <a href="#something" className="design-panel__item" onClick={handleDecorate}>
                                                    <div className="icon-color-wrapper">
                                                        <div className="back"/>
                                                    </div>
                                                    <div className="design-panel__item-name">Chest Right</div>
                                                </a>
                                            </div>
                                            <Divider/>
                                            <div className="decoration-position">
                                                <a href="#something" className="design-panel__item" onClick={handleDecorate}>
                                                    <div className="icon-color-wrapper">
                                                        <div className="back"/>
                                                    </div>
                                                    <div className="design-panel__item-name">Chest Left</div>
                                                </a>
                                            </div>
                                            <Divider/>
                                            <div className="decoration-position">
                                                <a href="#something" className="design-panel__item" onClick={handleDecorate}>
                                                    <div className="icon-color-wrapper">
                                                        <div className="back"/>
                                                    </div>
                                                    <div className="design-panel__item-name">Back Center</div>
                                                </a>
                                            </div>
                                            <Divider/>
                                            <div className="decoration-position" onClick={handleDecorate}>
                                                <a href="#something" className="design-panel__item">
                                                    <div className="icon-color-wrapper">
                                                        <div className="back"/>
                                                    </div>
                                                    <div className="design-panel__item-name">Inside Lining</div>
                                                </a>
                                            </div>
                                            <Divider/>
                                        </div>
                                    </div>
                                    <div className="scrollbar-track vertical ">
                                        <div className="scrollbar-thumb"/>
                                    </div>
                                </div>
                            </DesignPanelContent>
                        </DesignPanel>
                        <IconsPanel state={selected}/>
                    </StyledDecoratePanel>
                ) : null
            }
        </React.Fragment>
    )
};

const mapStateToProps = state => ({
    design: state.designReducer
});


export default connect(mapStateToProps, { panelSetLogoSelected, panelDecorateSelected })(DecoratePanel)
