import React, { useState } from "react";
import { connect } from "react-redux";
import { setColor } from "../../store/actions/designActions"
import cross from "../assets/images/cross.svg";

const PanelColorList = (props) => {
    const [selected, setSelected] = useState(false);
    const handleSelected = e => {
        props.setColor(e.target.style.background)
    };
    const handleClose = (e) => {
        setSelected(false)
    };

    const colors = [
        '#D1F2EB',
        '#BFC9CA',
        '#E74C3C',
        '#707B7C',
        '#76448A',
        '#1D8348',
        '#3498DB',
        '#BA68C8',
        '#F6DDCC'
    ];

    function renderColors() {
        return colors.map((color, index) => (
            <a title="White" className="icon-color-wrapper" onClick={handleSelected} key={index}>
                <div className="back" style={{ background: `${color}` }}/>
            </a>
        ))
    }

    return (
        <div className={props.selected ? "plain-color-list" : "none" }>
            <div className="close-panel">
                <a onClick={handleClose}>
                    <img className="icon-close" src={cross} alt="cross"/>
                </a>
            </div>
            <div className="panel-content">
                <div className="title hidden-tablet">COLORS</div>
                <div id="scrollbar-1594714212310" className="scrollbar-container panel-scroll-container">
                    <div className="scrollable-content for-mac ">
                        <div className="color-list">
                            { renderColors() }
                        </div>
                    </div>
                    <div className="scrollbar-track vertical hidden">
                        <div className="scrollbar-thumb"
                             style={{ height: '100%', transform: 'translateY(0px)' }}/>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default connect(null, { setColor })(PanelColorList)
