import React, { Component } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/images/user.svg";
import basket from "../../assets/images/basket.svg";
import styles from "./Navbar.module.css"

class Header extends Component {

    render() {
        return (
            <nav>
                <div className={styles.navbar}>
                    <Link to="/" className={styles.logo}>Clothok</Link>
                    <ul className={styles.menu}>
                        <li><Link to="/products">All Products</Link></li>
                        <li><Link to="/">New Arrivals</Link></li>
                        <li><Link to="/configurator">Sale</Link></li>
                        <li><Link to="/design-lab">Design Lab</Link></li>
                    </ul>
                    <ul className={styles.list}>
                        <li><Link to="/login"><img src={user} className={styles.black} alt="no"/></Link></li>
                        <li>
                            <Link to="/basket">
                                <img src={basket} className={styles.black} alt="no"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;
