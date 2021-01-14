import React, { useState } from "react";
import { connect } from "react-redux";
import { panelEntrySelected, panelDecorateSelected, reset } from "../../store/actions/designActions"
import PanelElementList from "./ElementsPanel/Panel-Element-List";
import color from "../assets/images/colours-active.svg"
import angle from "../assets/images/angle-right-white.svg"
import decoration from "../assets/images/decoration-active.svg"
import DecoratePanel from "./DecoratePanel/DecoratePanel";
import styled, { css } from 'styled-components'


const Panel = styled.div`
    position: absolute;
    top: 200px;
    left: 32px;
    display: flex;
    z-index: 103;
    font-size: 10px;
    text-transform: uppercase;
    font-family: 'LabGrotesque-Black', sans-serif;
`
const EntryPanel = styled.div`
    width: 90px;
    height: 210px;
    padding: 15px 10px;
    color: #b3b3b3;
    background-color: #000000;
    text-align: center;
    border-radius: 6px;
    
    ${props => props.selected && css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
  `}
`
const Categories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    a {
        cursor: pointer;
        text-decoration: none;
        color: #FFFFFF;
    }
`
const CategoryName = styled.div`
    font-family: 'LabGrotesque-Black', sans-serif;
`
const Icon = styled.div`
    .icon {
        width: 40px;
        height: 40px;
        margin-left: 15px;
        vertical-align: middle;
    }
    
    .angle-icon {
        width: 15px;
        vertical-align: middle;
    }
`
const Divider = styled.div`
    width: 30px;
    height: 1px;
    margin: 10px auto;
    background-color: #f1f1f2;
`
const ResetButton = styled.button`
    width: 100%;
    height: 36px;
    border: 1px solid #262626;
    margin-top: 20px;
    border-radius: 2px;
    background: none;
    color: #ffffff;
    outline: none;
    transition: border ease-in-out 0.3s;
    
    :hover {
        border-color: #ffffff;
    }
`

const DesignPanel = (props) =>  {

    const [selected, setSelected] = useState(false)
    const [panelElementSelected, setPanelElementSelected] = useState(false)
    const [panelDecorateSelected, setPanelDecorateSelected] = useState(false)

    const handleElementClick = () => {
        setSelected(!selected)
        setPanelElementSelected(true)
    };

    const handleDecorateClick = () => {
        setSelected(!selected)
        setPanelDecorateSelected(true)
    };

    const handleReset = () => {
        props.reset()
    };

    return (
        <Panel>
            <EntryPanel selected={selected}>
                <Categories>
                    <div>
                        <a href="#something" onClick={handleElementClick}>
                            <Icon>
                                <img className="icon" src={color} alt="color"/>
                                <img className="angle-icon" src={angle} alt="color"/>
                            </Icon>
                            <CategoryName>COLOR</CategoryName>
                        </a>
                    </div>
                    <Divider/>
                    <div>
                        <a href="#something" onClick={handleDecorateClick}>
                            <Icon>
                                <img className="icon" src={decoration} alt="color"/>
                                <img className="angle-icon" src={angle} alt="color"/>
                            </Icon>
                            <CategoryName>DESIGNS</CategoryName>
                        </a>
                    </div>
                </Categories>
                <ResetButton onClick={handleReset}>RESET</ResetButton>
            </EntryPanel>
            <PanelElementList state={panelElementSelected}/>
            <DecoratePanel state={panelDecorateSelected}/>
        </Panel>
    )

};

const mapStateToProps = state => ({
    design: state.designReducer
});

export default connect(mapStateToProps, { panelEntrySelected, panelDecorateSelected, reset })(DesignPanel)
