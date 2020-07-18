import React, { Component } from "react";
import DesignNav from "../layout/design-navigation/DesignNav";
import Row from "../row/Row";
import R1042 from "../assets/R1042";
import DesignPanel from "../design-panel/DesignPanel";
import { connect } from 'react-redux';
import { getState } from "../../store/actions/designActions"

class DesignLab extends Component {

    render() {
        const load = this.props.match.params.id;
        const {selectedColor, selectedElement} = this.props.design;
        return (
            <div style={{ backgroundColor: '#FDFDFD' }}>
                <DesignNav/>
                <div className="container">
                    <div className="row-wrapper">
                        <DesignPanel/>
                        <R1042 color={selectedColor} selected={selectedElement.toLowerCase().trim()}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    design: state.designReducer
});

export default connect(mapStateToProps, { getState })(DesignLab)
