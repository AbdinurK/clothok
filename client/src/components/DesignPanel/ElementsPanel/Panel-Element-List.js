import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setElement, panelElementsSelected, panelEntrySelected } from "../../../store/actions/designActions"
import { withRouter } from "react-router-dom"
import { components } from "../../assets/service/components"
import angle from "../../assets/images/angle-right-white.svg";
import PanelColorList from "./Panel-Color-List";
import { PanelContent, Title, Divider } from '../UI'
import { withDesignProps } from "../../hoc/withDesignProps";
import ClosePanel from "../../layout/UI/close-panel/ClosePanel";
import styled from 'styled-components'


const ColorCustomizePanel = styled.div`
    height: calc((100vh - 100px) * 0.8);
    display: flex;
    border-radius: 0 6px 6px 6px;
    color: #808080;
    background-color: #ffffff;
`
const SectionGroups = styled.div`
    width: 130px;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid #f1f1f2;
`
const Section = styled.div`
    position: relative;
    
    a {
        text-decoration: none;
        color: black;
    }
    
    .angle-right {
        width: 21.74%;
        display: inline-block;
        vertical-align: middle;
        user-select: none;
    }
    
    .svg-icon {
        width: calc(100% - 4px * 2);
        height: 52px;
        margin: auto;
    }
    
    .svg-icon svg {
        width: 56.52%;
        margin-left: 21.74%;
        display: inline-block;
        vertical-align: middle;
    }
`
const SectionName = styled.div`
    width: calc(100% - 4px * 2);
    cursor: pointer;
    margin: 8px auto 0 auto;
    
    :hover {
        color: blueviolet;
    }
`

const PanelElementList = (props) => {
    const code = props.match.params.id;
    const Product = withDesignProps(components[code]);
    const [data, setData] = useState({});
    const { panelEntrySelected } = props.design;
    useEffect(() => {
        fetch(`http://localhost:5000/products/code/${code}`)
            .then(results => results.json())
            .then(data => {
                setData(data);
            });
    }, [code]);
    let selected = false;
    const handleSelected = element => {
        props.panelElementsSelected(!selected);
        props.setElement(element.split(' ').join('').toLowerCase())
    };
    const handleClose = () => {
        props.panelEntrySelected(false)
    };
    const { elements } = data;

    function renderElements() {
        return elements.map((element, index) => (
            <Fragment key={index}>
                <Section>
                    <a href="#something">
                        <div className="svg-icon">
                            <Product width="50" height="50" bg={element.split(' ').join('').toLowerCase()}/>
                            <img className="angle-right"
                                 src={angle} alt="angle"/>
                        </div>
                        <SectionName onClick={() => handleSelected(element)}>{element}</SectionName>
                    </a>
                </Section>
                <Divider/>
            </Fragment>
        ))
    }



    return (
        <ColorCustomizePanel>
            {
                panelEntrySelected ? (
                    <SectionGroups>
                        <ClosePanel handleClose={handleClose}/>
                        <PanelContent>
                            <Title>ELEMENTS</Title>
                            <div className="scrollbar-container panel-scroll-container">
                                <div className="scrollable-content for-mac show-scrollbar">
                                    { elements ? renderElements() : <p>loading...</p>}
                                </div>
                                <div className="scrollbar-track vertical ">
                                    <div className="scrollbar-thumb"/>
                                </div>
                            </div>
                        </PanelContent>
                    </SectionGroups>
                ) : null
            }
            <PanelColorList/>
        </ColorCustomizePanel>
    )
};

const mapStateToProps = state => ({
    design: state.designReducer
});


export default connect(
    mapStateToProps,
    { setElement, panelElementsSelected, panelEntrySelected }
    )(withRouter(PanelElementList))
