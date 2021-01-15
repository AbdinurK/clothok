import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { setColor, panelElementsSelected } from "../../../store/actions/designActions"
import ClosePanel from "../../Layout/UI/ClosePanel";
import { PanelContent, Title } from '../UI'
import styled, { css } from 'styled-components'


const StyledPanelColorList = styled.div`
    width: 162px;
    border: 1px solid #f1f1f2;
`
const ColorList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const ColorIcon = styled.a`
    width: 36px;
    height: 36px;
    margin: 4px;
    border-radius: 50%;
    
    :hover {
        padding: 2px;
        border: 2px solid #000000;
        cursor: pointer;
    }
`
const Color = styled.div`
    box-shadow: 0 0 1px #878889 inset;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    
    
    
    ${props => props.color && css`
        background: ${props.color};
    `}
`

const PanelColorList = (props) => {
    const [state, setState] = useState(props.state)
    useEffect(() => {
        setState(props.state)
    }, [props.state])
    const handleSelected = e => {
        props.setColor(e.target.style.background)
    };
    const handleClose = () => {
        setState(false)
    };
    const colors = [
        '#D1F2EB',
        '#BFC9CA',
        '#E74C3C',
        '#707B7C',
        '#76448A',
        '#1D8348',
        '#3498DB',
        '#BA68C8',
        '#F6DDCC'
    ];

    function renderColors() {
        return colors.map((color, index) => (
            <ColorIcon onClick={handleSelected} key={index}>
                <Color color={color}/>
            </ColorIcon>
        ))
    }



    return (
        <React.Fragment>
            {
                state && props.entry ? (
                    <StyledPanelColorList>
                        <ClosePanel handleClose={handleClose}/>
                        <PanelContent>
                            <Title>COLORS</Title>
                            <div className="scrollbar-container panel-scroll-container">
                                <div className="scrollable-content for-mac ">
                                    <ColorList>
                                        { renderColors() }
                                    </ColorList>
                                </div>
                                <div className="scrollbar-track vertical hidden">
                                    <div className="scrollbar-thumb"
                                         style={{ height: '100%', transform: 'translateY(0px)'}}
                                    />
                                </div>
                            </div>
                        </PanelContent>
                    </StyledPanelColorList>
                ) : null
            }
        </React.Fragment>
    )
};

const mapStateToProps = state => ({
    design: state.designReducer
});

export default connect(mapStateToProps, { setColor, panelElementsSelected })(PanelColorList)
