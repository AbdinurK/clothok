import React from "react";
import DesignNav from "../layout/lab-navigation/DesignNav";
import DesignPanel from "../design-panel/DesignPanel";
import { connect } from 'react-redux';
import { withDesignProps } from "../hoc/withDesignProps"
import { getState } from "../../store/actions/designActions"
import { components } from "../assets/service/components"
import classes from "./DesignLab.module.css"

const DesignLab = (props) => {

    const load = props.match.params.id;

    const { selectedColor, selectedElement } = props.design;
    const color = selectedColor;
    const selected = selectedElement.toLowerCase().trim();
    const Product = withDesignProps(components[load]);
    return (
        <div style={{ backgroundColor: '#FDFDFD' }}>
            <DesignNav/>
            <div className="container">
                <div className={classes.rowWrapper}>
                    <DesignPanel/>
                    <Product color={color} selected={selected}/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    design: state.designReducer
});

export default connect(mapStateToProps, { getState })(DesignLab)
