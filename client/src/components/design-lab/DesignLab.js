import React from "react";
import DesignNav from "../layout/lab-navigation/DesignNav";
import DesignPanel from "../layout/UI/design-panel/DesignPanel";
import R1042 from "../assets/elements/R1042";
import { connect } from 'react-redux';
import { withDesignProps } from "../hoc/withDesignProps"
import { getState } from "../../store/actions/designActions"
import classes from "./DesignLab.module.css"

const DesignLab = (props) => {
    const load = props.match.params.id;
    const {selectedColor, selectedElement} = props.design;
    const color = selectedColor;
    const selected = selectedElement.toLowerCase().trim();
    const Product = withDesignProps(R1042);
    return (
        <div style={{ backgroundColor: '#FDFDFD' }}>
            <DesignNav/>
            <div className="container">
                <div className={classes.rowWrapper}>
                    <DesignPanel/>
                    {/*<Product color={color} selected={selected}/>*/}
                    <R1042 color={color} selected={selected}/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    design: state.designReducer
});

export default connect(mapStateToProps, { getState })(DesignLab)
