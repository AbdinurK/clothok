import React, { Fragment } from "react";
import DesignNav from "../Layout/DesignNav";
import styled from 'styled-components'

const Title = styled.h2`
    text-align: center;
`

const Laboratory = () => {
    return (
        <Fragment>
            <DesignNav/>
            <Title>Welcome to design Lab</Title>
        </Fragment>
    )
};

export default Laboratory
