import React from "react";
import styled from 'styled-components'

const CheckBox = styled.div`
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Label = styled.labels`
    display: inherit;
    align-items: center;
    font-size: 1.3em;
    
    .input {
        margin: 0;
        height: 20px;
        width: 20px;
    }
    
    .input:focus {
        background-color: red;
    }
`


const Gender = () => {
    return (
        <CheckBox>
            <Label>
                <input type="radio" className="input"/>
                <span className="design"/>
                <span className="text">Man</span>
            </Label>
            <Label>
                <input type="radio" className="input"/>
                <span className="design"/>
                <span className="text">Woman</span>
            </Label>
        </CheckBox>
    )
};

export default Gender
