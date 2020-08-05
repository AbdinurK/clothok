import React, { useState } from "react";
import "./Quantity.css"

const Quantity = () => {

    const [count, setCount] = useState(0);

    const onCountAdd = (e) => {
        setCount(count + 1)
    };
    const onCountMinus = (e) => {
        setCount(count - 1)
    };

    return (
        <div className="product__quantity">
            <div className="buttons">
                <button onClick={onCountAdd}>+</button>
                <div className="count">{ count }</div>
                <button onClick={onCountMinus}>-</button>
            </div>
        </div>
    )
};


export default Quantity
