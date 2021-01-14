import React, { useState } from "react";
import styled from 'styled-components'

const StyledCounter = styled.div`
    position: relative;
    top: 2.4em;
`
const Buttons  =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 150px;
    border: 2px solid #000000;
    border-radius: 3px;
    background: black;
    
    > * {
        font-size: 24px;
        width: 50px;
        align-items: center;
        box-sizing: border-box;
    }
    
    > button {
        border: 1px solid #000000;
        outline: none;
        cursor: pointer;
    }
    
    > .count {
        background: black;
        color: white;
        text-align: center;
    }
`


const Counter = () => {

    const [count, setCount] = useState(0);

    const onCountAdd = (e) => {
        setCount(count + 1)
    };
    const onCountMinus = (e) => {
        setCount(count - 1)
    };

    return (
        <StyledCounter>
            <Buttons>
                <button onClick={onCountAdd}>+</button>
                <div className="count">{ count }</div>
                <button onClick={onCountMinus}>-</button>
            </Buttons>
        </StyledCounter>
    )
};


export default Counter
