import React, { Component } from "react";
import DesignNav from "../DesignNav/DesignNav";
import R2004H from "../Clothes/R2004H";
import Configurator from "../Configurator/Configurator";
import Row from "../Row/Row";
import Elements from "../Elements";
import C1071 from "../Clothes/C1071";
import R2000 from "../Clothes/R2000";

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
        if (load === 'C1071') {
            display = <C1071/>
        }
        if (load === 'C1071') {
            display = <C1071/>
        }
        if (load === 'R2000') {
            display = <R2000/>
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
