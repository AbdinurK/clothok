import React, { useState } from "react";
import "./Size.css"

const Size = (props) => {

    const [selected, setSelected] = useState('');

    const onSelected = () => {
        setSelected('selected')
    };

    return (
        <div className="size-panel">
            <ul className="size-content">
                <li onClick={onSelected} className={selected}>
                    <a href="#">S</a>
                </li>
                <li><a>M</a></li>
                <li><a>L</a></li>
                <li><a>XL</a></li>
            </ul>
        </div>
    )
};

export default Size
