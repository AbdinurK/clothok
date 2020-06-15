import React, { Component} from "react";
import styles from "./Configurator.module.css"

class Configurator extends Component {

    onClickColor = (e) => {
        const color = e.target.name;
        this.props.onClickColor(color)
    };

    array = [
        { name: '#FC766AFF'},
        { name: '#5B84B1FF'},
        { name: '#5F4B8BFF'},
        { name: '#E69A8DFF'},
        { name: '#00203FFF'},
        { name: '#97BC62FF'},
        { name: '#5F4B8BFF'},
        { name: '#E69A8DFF'},
        { name: '#00203FFF'},
        { name: '#97BC62FF'},
        { name: '#5F4B8BFF'},
        { name: '#E69A8DFF'},
        { name: '#00203FFF'},
        { name: '#97BC62FF'},
        { name: '#97BC62FF'},
    ];


    render(){
        const colors = this.array.map((color, index) => {
            return (
                <button name={color.name}
                        key={index}
                        onClick={this.onClickColor}
                        className={styles.color}
                        style={{ backgroundColor: `${color.name}` }}/>
            )
        });
        return (
            <div className={styles.configurator}>
                { colors }
            </div>
        )
    }
}


export default Configurator
