import React, { Component } from "react";
import DesignNav from "../../DesignNav/DesignNav";
import Jacket from "../../Clothes/Jacket/Jacket";
import Configurator from "../../Configurator/Configurator";
import Row from "../../Row/Row";
import Elements from "../../Clothes/Elements";

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

    onClickElement = (element) => {
        this.setState({
            selectedElement: element
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
                            center={<Jacket color={color} selected={selectedElement}/>}
                            right={<Elements onClickElement={this.onClickElement}/>}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignLab
