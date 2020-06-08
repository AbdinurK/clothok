import React, { Component} from "react";
import styles from "./Configurator.module.css"

class Configurator extends Component {

    onClickColor = (e) => {
        const color = e.target.name;
        this.props.onClickColor(color)
    };

    render(){
        return (
            <div className={styles.configurator}>
                <button type="button" onClick={this.onClickColor} name="purple">Purple</button>
                <button type="button" onClick={this.onClickColor} name="red">Red</button>
                <button type="button" onClick={this.onClickColor} name="green">Green</button>
                <button type="button" onClick={this.onClickColor} name="yellow">Yellow</button>
            </div>
        )
    }
}


export default Configurator
