import React from "react";
import DesignNav from "../layout/lab-navigation/DesignNav";
import DesignPanel from "../layout/UI/design-panel/DesignPanel";
import C1005 from "../assets/elements/C1005";
import C1071 from "../assets/elements/C1071";
import R1006S from "../assets/elements/R1006S";
import R1041 from "../assets/elements/R1041";
import R1042 from "../assets/elements/R1042";
import R2004H from "../assets/elements/R2004H";
import R1042Z from "../assets/elements/R1042Z";
import R1043 from "../assets/elements/R1043";
import R1044 from "../assets/elements/R1044";
import R1044Z from "../assets/elements/R1044Z";
import R1045 from "../assets/elements/R1045";
import R1047 from "../assets/elements/R1047";
import R1050 from "../assets/elements/R1050";
import R1051 from "../assets/elements/R1051";
import R1070 from "../assets/elements/R1070";
import R1071 from "../assets/elements/R1071";
import R1072 from "../assets/elements/R1072";
import R1073 from "../assets/elements/R1073";
import R1092 from "../assets/elements/R1092";
import R2000 from "../assets/elements/R2000";
import R2001 from "../assets/elements/R2001";
import R2002 from "../assets/elements/R2002";
import RJ1000 from "../assets/elements/RJ1000";
import { connect } from 'react-redux';
import { withDesignProps } from "../hoc/withDesignProps"
import { getState } from "../../store/actions/designActions"
import classes from "./DesignLab.module.css"

const DesignLab = (props) => {

    const load = props.match.params.id;
    const components = {
        C1005: C1005,
        C1071: C1071,
        R1006S: R1006S,
        R1041: R1041,
        R1042: R1042,
        R1042Z: R1042Z,
        R1043: R1043,
        R1044: R1044,
        R1044Z: R1044Z,
        R1045: R1045,
        R1047: R1047,
        R1050: R1050,
        R1051: R1051,
        R1070: R1070,
        R1071: R1071,
        R1072: R1072,
        R1073: R1073,
        R1092: R1092,
        R2000: R2000,
        R2001: R2001,
        R2002: R2002,
        R2004H: R2004H,
        RJ1000: RJ1000
    };
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
