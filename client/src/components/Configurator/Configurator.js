import React, { Component} from "react";

class Configurator extends Component {

    state = {};

    onClickColor = (e) => {
        const color = e.target.name;
        this.props.onClickColor(color)
    };

    render(){
        return (
            <div style={{ width: '60px' }}>
                <button type="button" onClick={this.onClickColor} name="purple">Purple</button>
                <button type="button" onClick={this.onClickColor} name="red">Red</button>
                <button type="button" onClick={this.onClickColor} name="green">Green</button>
                <button type="button" onClick={this.onClickColor} name="yellow">Yellow</button>
            </div>
        )
    }
}


export default Configurator
