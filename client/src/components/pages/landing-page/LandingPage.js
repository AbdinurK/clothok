import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import user from "./assets/user.svg";
import basket from "./assets/basket.svg";
import arrow1 from "./assets/Arrow 1.svg"
import design from "./assets/design.png"
import Footer from "../../layout/footer/Footer";

export default class LandingPage extends Component {

    onScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    render() {
        return (
            <main className="landing">
                <section className="section">
                    <div className="section__first">
                        <div className="section__container">
                            <nav className="navigation">
                                <a href="#" className="brand-logo">Clothok</a>
                                <ul className="nav-list">
                                    <li>
                                        <a href="/login">
                                            <img src={user} alt='user icon'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/basket">
                                            <img src={basket} alt='basket icon'/>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="section__info">
                            <h1 className="section__title">Check out our stuff</h1>
                            <Link to="/products" className="section__action">Shop</Link>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="section__second">
                        <div className="section__info">
                            <h1 className="section__title">Design your stuff</h1>
                            <Link to="/design-lab" className="section__action">Try</Link>
                        </div>
                        <img src={design} className="design-img" alt="design-img"/>
                    </div>
                </section>

                <section className="section">
                    <div className="section__third">
                        <div className="section__info">
                            <h1 className="section__title">Our clients</h1>
                        </div>
                        <div className="section__content">
                            <div className="testimonial">
                                <div className="testimonial__avatar">
                                </div>
                                <p className="testimonial__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A gravida a nibh tortor
                                    ante. Nunc, mattis tempor, in tellus.
                                </p>
                                <a className="testimonial__link">@Mike</a>
                            </div>
                            <div className="testimonial">
                                <div className="testimonial__avatar">

                                </div>
                                <p className="testimonial__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A gravida a nibh tortor
                                    ante. Nunc, mattis tempor, in tellus.
                                </p>
                                <a className="testimonial__link">@Mike</a>
                            </div>
                            <div className="testimonial">
                                <div className="testimonial__avatar">

                                </div>
                                <p className="testimonial__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A gravida a nibh tortor
                                    ante. Nunc, mattis tempor, in tellus.
                                </p>
                                <a className="testimonial__link">@Mike</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="section__fourth">
                        <div className="section__info">
                            <h1 className="section__title">About us</h1>
                        </div>
                        <div className="section__content">
                            <p className="section__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Tristique in et, lobortis blandit nunc viverra. Sit vitae massa volutpat tincidunt
                                aliquam, in lectus quam risus. Pellentesque sit ullamcorper imperdiet ac dictum
                                lobortis nulla. Sapien praesent sit ultrices tincidunt.
                            </p>
                        </div>
                    </div>
                </section>

                 <button id="scrollToTop" onClick={this.onScrollToTop}>
                     <span>Go up</span>
                     <img src={arrow1} alt="arrow 1" className="arrow"/>
                 </button>
            </main>
        )
    }
}
