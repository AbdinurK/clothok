import React, { useState, useEffect, Fragment, lazy } from "react";
import { connect } from "react-redux";
import { setElement } from "../../store/actions/designActions"
import { withRouter } from "react-router-dom"
import { components } from "../assets/service/components"
import cross from "../assets/images/cross.svg";
import angle from "../assets/images/angle-right-white.svg";
import PanelColorList from "./Panel-Color-List";
import {withDesignProps} from "../hoc/withDesignProps";

const PanelElementList = (props) => {
    const code = props.match.params.id;
    const Product = withDesignProps(components[code]);
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/code/${code}`)
            .then(results => results.json())
            .then(data => {
                setData(data);
            });
    }, []);
    const [selected, setSelected] = useState(false);
    const handleSelected = element => {
        setSelected(true);
        props.setElement(element.split(' ').join('').toLowerCase())
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
        <Fragment>
            <div className={props.selected  ? "section-groups" : "none"}>
                <div className="close-panel">
                    <a onClick={() => setSelected(false)}>
                        <img className="icon-close" src={cross} alt="cross"/>
                    </a>
                </div>
                <div className="panel-content">
                    <div className="title hidden-tablet">ELEMENTS</div>
                    <div id="scrollbar-1594145913798" className="scrollbar-container panel-scroll-container">
                        <div className="scrollable-content for-mac show-scrollbar">
                            { elements ? renderElements() : <p>loading...</p>}
                        </div>
                        <div className="scrollbar-track vertical ">
                            <div className="scrollbar-thumb"/>
                        </div>
                    </div>
                </div>
            </div>
            <PanelColorList selected={selected}/>
        </Fragment>
    )
};


export default connect(null, { setElement })(withRouter(PanelElementList))
