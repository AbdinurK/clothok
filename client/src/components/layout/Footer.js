import React from "react";
import {NavLink} from "react-router-dom";
import styled from 'styled-components'

const StyledFooter = styled.footer`
    padding: 20px 50px;
    margin-top: auto;
    border-top: 1px solid #000000;
    height: 200px;
`
const Container = styled.div`
    max-width: 1340px;
    margin: 0 auto;
`
const FooterNav = styled.div`
    display: flex;
    padding: 10px 0 50px;
    font-size: 1.1rem;
    
    > a {
        margin-right: 120px;
        text-decoration: none;
        color: #000000;
    }
    
    > a:last-child {
        margin-right: 0;
    }
`
const CopyRight = styled.h4`
    font-weight: normal;
    font-size: 14px;
    margin: 0;
`

function Footer() {
    return (
        <StyledFooter>
            <Container>
                <FooterNav>
                    <NavLink to="/">Account</NavLink>
                    <NavLink to="/">Contact Us</NavLink>
                    <NavLink to="/">Shipping</NavLink>
                    <NavLink to="/">Terms</NavLink>
                </FooterNav>
                <CopyRight>&copy; 2020 Clothok</CopyRight>
            </Container>
        </StyledFooter>
    )
}

export default Footer;
