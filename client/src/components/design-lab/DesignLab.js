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

    onClickElement = (selectedElement) => {
        this.setState({
            selectedElement
        })
    };

    render() {
        const { color, selectedElement } = this.state;
        const load = this.props.match.params.id;
        let display;
        if (load === 'R1042') {
            display = <R1042 color={color} selected={selectedElement}/>
        }
        if (load === 'R2002') {
            display = <R2002 color={color} selected={selectedElement}/>
        }
        if (load === 'R1051') {
            display = <R1051 color={color} selected={selectedElement}/>
        }
        return (
            <div>
                <DesignNav/>
                <div className="container">
                    <div>
                        <Row
                            left={<DesignPanel onClickColor={this.onClickColor}/>}
                            center={display}
                            right={<Elements onClickElement={this.onClickElement}/>}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignLab
