import React from "react";
import cross from "../../assets/images/cross.svg";
import styled from 'styled-components'

const StyledClosePanel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #f1f1f2;
    
    a {
        width: 40px;
        height: 40px;
    }
    
    .icon-close {
        width: 20px;
        height: 20px;
        margin: 10px;
        display: block;
    }
`

const ClosePanel = ({ handleClose }) => {
    return (
        <StyledClosePanel>
            <a href="#something" onClick={handleClose}>
                <img className="icon-close" src={cross} alt="cross"/>
            </a>
        </StyledClosePanel>
    )
};


export default ClosePanel
