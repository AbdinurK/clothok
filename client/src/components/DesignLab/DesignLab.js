import React, { Component } from "react";
import DesignNav from "../DesignNav/DesignNav";
import R2004H from "../Clothes/R2004H";
import Configurator from "../Configurator/Configurator";
import Row from "../Row/Row";
import Elements from "../Elements";

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
        return (
            <div>
                <DesignNav/>
                <div className="container">
                    <div>
                        <Row
                            left={<Configurator onClickColor={this.onClickColor}/>}
                            center={<R2004H color={color} selected={selectedElement}/>}
                            right={<Elements onClickElement={this.onClickElement}/>}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignLab
