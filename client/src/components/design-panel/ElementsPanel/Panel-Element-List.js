import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setElement, panelElementsSelected, panelEntrySelected } from "../../../store/actions/designActions"
import { withRouter } from "react-router-dom"
import { components } from "../../assets/service/components"
import cross from "../../assets/images/cross.svg";
import angle from "../../assets/images/angle-right-white.svg";
import PanelColorList from "./ColorsPanel/Panel-Color-List";
import "./Panel-Element-List.css"
import {withDesignProps} from "../../hoc/withDesignProps";

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
    }, []);
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
                <div className="section-group">
                    <a>
                        <div className="svg-icon">
                            <Product width="50" height="50" bg={element.split(' ').join('').toLowerCase()}/>
                            <img className="angle-right hidden-tablet"
                                 src={angle} alt="angle"/>
                        </div>
                        <div className="section-group-name" onClick={() => handleSelected(element)}>{element}
                        </div>
                    </a>
                </div>
                <div className="divider"/>
            </Fragment>
        ))
    }



    return (
        <div className="color-customize-panel">
            <div className={panelEntrySelected ? "section-groups" : "none"}>
                <div className="close-panel">
                    <a onClick={handleClose}>
                        <img className="icon-close" src={cross} alt="cross"/>
                    </a>
                </div>
                <div className="panel-content">
                    <div className="title hidden-tablet">ELEMENTS</div>
                    <div className="scrollbar-container panel-scroll-container">
                        <div className="scrollable-content for-mac show-scrollbar">
                            { elements ? renderElements() : <p>loading...</p>}
                        </div>
                        <div className="scrollbar-track vertical ">
                            <div className="scrollbar-thumb"/>
                        </div>
                    </div>
                </div>
            </div>
            <PanelColorList/>
        </div>
    )
};

const mapStateToProps = state => ({
    design: state.designReducer
});


export default connect(mapStateToProps, { setElement, panelElementsSelected, panelEntrySelected })(withRouter(PanelElementList))
