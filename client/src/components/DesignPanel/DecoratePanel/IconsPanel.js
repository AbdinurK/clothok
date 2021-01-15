import React from "react";
import { connect } from "react-redux";
import { setLogo, panelSetLogoSelected } from "../../../store/actions/designActions"
import ld from "../../assets/icons/2021.png"
import lk from "../../assets/icons/image.png"
import ClosePanel from "../../Layout/UI/ClosePanel";
import { PanelContent, Title } from '../UI'
import styled from 'styled-components'


const IconPanel = styled.div`
    width: 250px;
    border: 1px solid #f1f1f2;
`
const LogoList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    
    .icon-wrapper {
        width: 50px;
        height: 50px;
        margin: 4px;
    }
    
    .icon-wrapper img {
        width: 100%;
        object-fit: cover;
    }
    
    .icon-wrapper:hover {
        border: 1px solid #ccc;
        border-radius: 10%;
    }
`

const IconsPanel = (props) => {

    const handleSelected = e => {
        props.setLogo(e.target.src)
    };
    const handleClose = () => {
        props.panelSetLogoSelected(false)
    };

    return (
        <React.Fragment>
            {
                props.state ? (
                    <IconPanel>
                        <ClosePanel handleClose={handleClose}/>
                        <PanelContent>
                            <Title>ICONS</Title>
                            <div className="scrollbar-container panel-scroll-container">
                                <div className="scrollable-content for-mac ">
                                    <LogoList>
                                        <a href="#something" className="icon-wrapper">
                                            <img src={lk} alt="sorry" onClick={handleSelected}/>
                                        </a>
                                        <a href="#something" className="icon-wrapper">
                                            <img src={ld} alt="sorry" onClick={handleSelected}/>
                                        </a>
                                    </LogoList>
                                </div>
                                <div className="scrollbar-track vertical hidden">
                                    <div className="scrollbar-thumb"
                                         style={{ height: '100%', transform: 'translateY(0px)' }}/>
                                </div>
                            </div>
                        </PanelContent>
                    </IconPanel>
                ) : null
            }
        </React.Fragment>
    )
};

const mapStateToProps = state => ({
    design: state.designReducer
});

export default connect(mapStateToProps, { setLogo, panelSetLogoSelected })(IconsPanel)
