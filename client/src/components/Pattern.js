import React, { Component } from "react";
import logo from "./pages/DesignLab/156568.svg";

class Pattern extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <pattern id="color-pattern-of-option-a5k0K0000008jFsQAI" patternUnits="userSpaceOnUse"
                     width="2048" height="2048" fill="red">
                <image width="2048" height="2048" crossOrigin="anonymous" xlinkHref={logo}/>
            </pattern>
        )
    }

}

export default Pattern
