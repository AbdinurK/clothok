import React from "react";
import { connect } from "react-redux";
import { setColor, panelElementsSelected } from "../../../../store/actions/designActions"
import  "./Panel-Color-List.css"
import ClosePanel from "../../../layout/UI/close-panel/ClosePanel";

const PanelColorList = (props) => {
    const { panelElementsSelected, panelEntrySelected } = props.design;
    const handleSelected = e => {
        props.setColor(e.target.style.background)
    };
    const handleClose = () => {
        props.panelElementsSelected(false)
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
            <a href="#something" title="White" className="icon-color-wrapper" onClick={handleSelected} key={index}>
                <div className="back" style={{ background: `${color}` }}/>
            </a>
        ))
    }



    return (
        <div className={panelEntrySelected && panelElementsSelected ? "plain-color-list" : 'none'}>
            <ClosePanel handleClose={handleClose}/>
            <div className="panel-content">
                <div className="title hidden-tablet">COLORS</div>
                <div className="scrollbar-container panel-scroll-container">
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

const mapStateToProps = state => ({
    design: state.designReducer
});


export default connect(mapStateToProps, { setColor, panelElementsSelected })(PanelColorList)
