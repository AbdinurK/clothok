import React, { Component } from "react";
import { Link } from "react-router-dom";
import user from "../assets/images/user.svg";
import basket from "../assets/images/basket.svg";
import styled from 'styled-components'

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    text-transform: uppercase;
    border-bottom: 1px solid #000000;
    
    .logo {
        line-height: revert;
        text-decoration: none;
        font-size: 30px;
        color: #000000;
        font-weight: 900;
    }
`
const Menu = styled.ul`
    display: inherit;
    list-style: none;
    justify-content: space-between;
    padding-left: 0;
    
    > li {
        margin-left: 30px;
    }
    
    > li:first-child {
        margin-left: 0;
    }
    
    > li > a {
        text-decoration: none;
        color: black;
    }
`
const List = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    
    > li {
        margin-left: 50px;
    }
    
    > li:first-child {
        margin-left: 0;
    }
    
    li a img {
        height: 25px;
    }
    
    .black {
        filter: invert(1);
    }
`

class Header extends Component {

    render() {
        return (
            <nav>
                <Navbar>
                    <Link to="/" className="logo">Clothok</Link>
                    <Menu>
                        <li><Link to="/products">All Products</Link></li>
                        <li><Link to="/">New Arrivals</Link></li>
                        <li><Link to="/configurator">Sale</Link></li>
                        <li><Link to="/design-lab">Design Lab</Link></li>
                    </Menu>
                    <List>
                        <li>
                            <Link to="/login"><img src={user} className="black" alt="no"/></Link>
                        </li>
                        <li>
                            <Link to="/basket">
                                <img src={basket} className="black" alt="no"/>
                            </Link>
                        </li>
                    </List>
                </Navbar>
            </nav>
        )
    }
}

export default Header;
