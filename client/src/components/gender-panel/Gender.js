import React, { useState } from "react";
import "./Gender.css"

const Gender = () => {
    return (
        <div className="gender-checkbox">
            <label className="label">
                <input type="radio" className="input"/>
                <span className="design"/>
                <span className="text">Man</span>
            </label>
            <label className="label">
                <input type="radio" className="input"/>
                <span className="design"/>
                <span className="text">Woman</span>
            </label>
        </div>
    )
};

export default Gender
