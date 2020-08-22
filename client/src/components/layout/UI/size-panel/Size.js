import React, { useState } from "react";
import classes from "./Size.module.css"

const Size = (props) => {

    const [selected, setSelected] = useState('');

    const onSelected = () => {
        setSelected(classes.selected)
    };

    const array = ['S', 'M', 'L', 'XL'];


    function renderSizes() {
        return array.map((item, index) => (
            <li onClick={onSelected} key={index} className={selected}>
                <a href="/#">{ item }</a>
            </li>
        ))
    }

    return (
        <div className={classes.sizePanel}>
            <ul className={classes.sizeContent}>
                { renderSizes() }
            </ul>
        </div>
    )
};

export default Size
