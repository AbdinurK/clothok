import React, { Component } from "react";
import DesignNav from "../DesignNav/DesignNav";
import R2004H from "../Clothes/R2004H";
import Configurator from "../Configurator/Configurator";
import Row from "../Row/Row";
import Elements from "../Elements";
import C1071 from "../Clothes/C1071";
import R2000 from "../Clothes/R2000";
import R1042 from "../Clothes/R1042";
import R2002 from "../Clothes/R2002";
import R1051 from "../Clothes/R1051";

class DesignLab extends Component {

    state = {
        color: '',
        selectedElement: ''
    };

    componentDidMount() {
        const component = this.props.match.params.id;
    }

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
                            left={<Configurator onClickColor={this.onClickColor}/>}
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
