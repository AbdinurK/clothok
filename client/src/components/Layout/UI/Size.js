import React, { useState } from "react";
import classnames from 'classnames'
import styled from 'styled-components'


const SizePanel = styled.div`
    position: relative;
    top: 1.2em;
    max-width: 140px;
    padding: 2px;
    font-size: 20px;
    border: 1px solid #202020;
    border-radius: 3px;
`
const SizeContent = styled.ul`
    display: flex;
    margin: 0;
    padding-left: 0;
    list-style: none;
    
    li {
        padding: 5px 9px;
        cursor: pointer;
    }
    
    li.selected {
        background: #202020;
        border-radius: 3px;
        color: #FFFFFF;
    }
    
    li.selected a {
        width: 100%;
    }
    
    li a {
        font-weight: bold;
        text-decoration: none;
        color: inherit;
    }
`

const Size = (props) => {

    const [selected, setSelected] = useState(false);

    const onSelected = () => {
        setSelected(true)
    };

    const array = ['S', 'M', 'L', 'XL'];


    function renderSizes() {
        return array.map((item, index) => (
            <li onClick={onSelected} key={index} className={classnames({ selected })}>
                <a href="/#">{ item }</a>
            </li>
        ))
    }

    return (
        <SizePanel>
            <SizeContent>
                { renderSizes() }
            </SizeContent>
        </SizePanel>
    )
};

export default Size
