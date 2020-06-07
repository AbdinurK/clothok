import React, {Component} from "react";
import styles from "./LandingPage.module.css";
import {NavLink} from "react-router-dom";
import user from "./assets/user.svg";
import basket from "./assets/basket.svg";
import design from "./assets/design.png"
import Footer from "../../Footer/Footer";

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className={styles.background}>
                    <nav>
                        <div className={styles.navbar}>
                            <NavLink to="/" className={styles.logo}>Clothok</NavLink>
                            <ul className={styles.list}>
                                <li><NavLink to="/products"><img src={user} alt="no"/></NavLink></li>
                                <li><NavLink to="products"><img src={basket} alt="no"/></NavLink></li>
                            </ul>
                        </div>
                    </nav>
                    <section className={styles.container}>
                        <h1 className={styles.banner}>Check out our stuff</h1>
                        <NavLink to="/products" className={styles.shopBtn }>Shop</NavLink>
                    </section>
                </div>

                <section className={styles.design}>
                    <div className={styles.container}>
                        <h1 className={styles.banner}>Design your stuff</h1>
                        <NavLink to="/designLab" className={styles.tryBtn }>Try it</NavLink>
                    </div>
                    <div className={styles.man}>
                        <img src={design} alt="no"/>
                    </div>
                </section>

                <section className={styles.clients}>
                    <div className={styles.container}>
                        <div className={styles.clients__inner}>
                            <h1 className={styles.banner}>Our clients</h1>
                            <div className={styles.testimonials}>
                                <div>
                                    <img alt="sorry"/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        A gravida a nibh tortor ante. Nunc, mattis tempor, in tellus.
                                    </p>
                                    <h4>
                                        @Mike
                                    </h4>
                                </div>
                                <div>
                                    <img alt="sorry"/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        A gravida a nibh tortor ante. Nunc, mattis tempor, in tellus.
                                    </p>
                                    <h4>
                                        @Mike
                                    </h4>
                                </div>
                                <div>
                                    <img alt="sorry"/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        A gravida a nibh tortor ante. Nunc, mattis tempor, in tellus.
                                    </p>
                                    <h4>
                                        @Mike
                                    </h4>
                                </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section className={styles.about}>
                    <div className={styles.space}>
                        <h1 className={styles.banner}>About us</h1>
                        <p className={styles.text}>
                            <b>Clothok</b> is focused on advancing the culture of belonging, for your team as well as our own.
                            With this in mind, we make it a priority to create the best possible work environment for
                            our staff, as well as recognize the strides our team make together. The core concepts of
                            autonomy, candid communication, extreme personal ownership, and transparency are integral
                            to our organizational culture. We believe that by executing these concepts effectively and
                            in tandem, we cultivate an environment in which creativity and original ideas are allowed
                            to thrive.
                        </p>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}
