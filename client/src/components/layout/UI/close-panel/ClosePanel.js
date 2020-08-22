import React from "react";
import cross from "../../../assets/images/cross.svg";

const ClosePanel = ({ handleClose }) => {
    return (
        <div className="close-panel">
            <a href="#something" onClick={handleClose}>
                <img className="icon-close" src={cross} alt="cross"/>
            </a>
        </div>
    )
};


export default ClosePanel
