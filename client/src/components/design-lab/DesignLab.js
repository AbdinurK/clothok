import React, { Component } from "react";
import DesignNav from "../design-navigation/DesignNav";
import R2004H from "../assets/R2004H";
import Configurator from "../configurator/Configurator";
import Row from "../row/Row";
import Elements from "../Elements";
import C1071 from "../assets/C1071";
import R2000 from "../assets/R2000";
import R1042 from "../assets/R1042";
import R2002 from "../assets/R2002";
import R1051 from "../assets/R1051";
import DesignPanel from "../design-panel/DesignPanel";
import PanelColorList from "../design-panel/Panel-Color-List";
import { connect } from 'react-redux';
import { getState } from "../../store/actions/designActions"

class DesignLab extends Component {

    state = {
        color: '',
        selectedElement: ''
    };

    onClickColor = (color) => {
        this.setState({
            color
        })
    };

    onElement(element) {
       return element
    }

    onClickElement = (selectedElement) => {
        this.onElement(selectedElement);
    };

    render() {
        const { color, selectedElement } = this.state;
        const load = this.props.match.params.id;
        return (
            <div>
                <DesignNav/>
                <div className="container">
                    <div className="row-wrapper">
                        <DesignPanel/>
                        <R1042 color={this.props.design.selectedColor} selected={this.props.design.selectedElement.toLowerCase()}/>
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
