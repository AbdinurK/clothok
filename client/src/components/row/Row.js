import React from "react";
import "./Row.css"

const Row = ({ left, center, right }) => {

    return (
        <div className="row-wrapper">
            { left }
            { center }
            { right }
        </div>
    )
};

export default Row
