import React from "react";
import DesignNav from "../Layout/DesignNav";
import DesignPanel from "../DesignPanel/DesignPanel";
import { connect } from 'react-redux';
import { withDesignProps } from "../HOC/withDesignProps"
import { getState } from "../../store/actions/designActions"
import { components } from "../assets/service/components"
import styled from 'styled-components'

const RowWrapper = styled.div`
    display: flex;
    margin-top: 35px;
    justify-content: center;
    align-content: center;
    align-items: center;
`

const DesignLab = (props) => {
    const load = props.match.params.id;

    const { selectedColor, selectedElement } = props.design;
    const color = selectedColor;
    const selected = selectedElement.toLowerCase().trim();
    const Product = withDesignProps(components[load]);
    return (
        <div>
            <DesignNav/>
            <div className="container">
                <RowWrapper>
                    <DesignPanel/>
                    <Product color={color} selected={selected}/>
                </RowWrapper>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    design: state.designReducer
});

export default connect(mapStateToProps, { getState })(DesignLab)
