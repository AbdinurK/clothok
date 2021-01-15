import React, { Component } from "react";
import { Link } from "react-router-dom";
import user from "./assets/user.svg";
import basket from "./assets/basket.svg";
import arrow1 from "./assets/Arrow 1.svg"
import design from "./assets/design.png"
import img from "./assets/background.svg"
import styled from 'styled-components'

const Section = styled.section`
    position: relative;
    height: 100vh;
    color: white;
    overflow: hidden;
    
    .section__first, .section__second, .section__third, .section__fourth {
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position:center;
    }
    
    .section__third {
        background-color: #000000;
        display: flex;
        position: relative;
    }
    
    
    @media (max-width: 767px) {
        .design-img {
            bottom: 0;
        }
   
        .section__action {
            font-size: 1.5rem;
        }
    }
`
const SectionContainer = styled.div`
    position: relative;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    
    @media (max-width: 1240px) {
        max-width: 970px;
    }
    
    @media (max-width: 992px) {
        max-width: 750px;
    }
    
    @media (max-width: 767px) {
        max-width: none;
    }
`
const SectionInfo = styled.div`
    max-width: 24rem;
    position: absolute;
    font-size: 4rem;
    top: 150px;
    left: 200px;
    color: inherit;
    z-index: 2;
    
    .section__action {
        font-size: 1.4rem;
        color: inherit;
        text-decoration: none;
        border: 2px solid #FFFFFF;
        padding: 15px 110px;
        text-transform: uppercase;
    }
    
    @media (max-width: 767px) {
        left: 0;
        right: 0;
        top: 200px;
        max-width: none;
        display: block;
        text-align: center;
    }
`
const SectionTitle = styled.h1`
    color: inherit;
    margin: 0;
    
    @media (max-width: 767px) {
        font-size: 4rem;
        text-align: center;
    }
`
const SectionContent = styled.div`
    width: auto;
    position: absolute;
    top: 157px;
    left: 640px;
    display: flex;
    
    .testimonial__text {
        margin: 50px 0;
    }
`
const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .brand-logo {
        font-size: 30px;
        font-weight: 900;
        text-decoration: none;
        color: #ffffff;
        text-transform: uppercase;
        font-family: Montserrat, sans-serif;
    }
`
const NavList = styled.ul`
    min-width: 100px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding-left: 0;
`
const ScrollButton = styled.button`
    display: flex;
    padding: 0;
    flex-direction: row;
    align-items: center;
    position: fixed;
    right: 150px;
    bottom: 80px;
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    
    span {
        transform: rotate(270deg);
    }
`
const Testimonial = styled.div`
    max-width: 300px;
    margin-right: 50px;
    
    :last-child {
        margin: 0;
    }
    
    .testimonial__avatar {
        width: 300px;
        height: 300px;
        background: #cccccc;
    }
`
const SectionText = styled.p`
    max-width: 580px;
    font-size: 30px;
`
const SectionSecond = styled.div`
    position: relative;
    color: #000000;
    background-color: #ffffff;
    
    .design-img {
        position: absolute;
        right: 0;
        max-width: 100%;
    }
    
    .section__action {
        border: 2px solid #000000;
    }
`
const SectionFourth = styled.div`
    color: #000000;
    background-color: #ffffff;
`
const SectionFirst = styled.div`
    background-image: url(${img});
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
`

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
                <Section>
                    <SectionFirst>
                        <SectionContainer>
                            <Navigation>
                                <a href="/#" className="brand-logo">Clothok</a>
                                <NavList>
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
                                </NavList>
                            </Navigation>
                        </SectionContainer>
                        <SectionInfo>
                            <SectionTitle>Check out our stuff</SectionTitle>
                            <Link to="/products" className="section__action">Shop</Link>
                        </SectionInfo>
                    </SectionFirst>
                </Section>

                <Section>
                    <SectionSecond>
                        <SectionInfo>
                            <SectionTitle>Design your stuff</SectionTitle>
                            <Link to="/design-lab" className="section__action">Try</Link>
                        </SectionInfo>
                        <img src={design} className="design-img" alt="design-img"/>
                    </SectionSecond>
                </Section>

                <Section>
                    <div className="section__third">
                        <SectionInfo>
                            <SectionTitle>Our clients</SectionTitle>
                        </SectionInfo>
                        <SectionContent>
                            <Testimonial>
                                <div className="testimonial__avatar">
                                </div>
                                <p className="testimonial__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A gravida a nibh tortor
                                    ante. Nunc, mattis tempor, in tellus.
                                </p>
                                <a href="/#" className="testimonial__link">@Mike</a>
                            </Testimonial>
                            <Testimonial>
                                <div className="testimonial__avatar">

                                </div>
                                <p className="testimonial__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A gravida a nibh tortor
                                    ante. Nunc, mattis tempor, in tellus.
                                </p>
                                <a href="/#" className="testimonial__link">@Mike</a>
                            </Testimonial>
                            <Testimonial>
                                <div className="testimonial__avatar">

                                </div>
                                <p className="testimonial__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A gravida a nibh tortor
                                    ante. Nunc, mattis tempor, in tellus.
                                </p>
                                <a href="/#" className="testimonial__link">@Mike</a>
                            </Testimonial>
                        </SectionContent>
                    </div>
                </Section>

                <Section>
                    <SectionFourth>
                        <SectionInfo>
                            <SectionTitle>About us</SectionTitle>
                        </SectionInfo>
                        <SectionContent>
                            <SectionText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Tristique in et, lobortis blandit nunc viverra. Sit vitae massa volutpat tincidunt
                                aliquam, in lectus quam risus. Pellentesque sit ullamcorper imperdiet ac dictum
                                lobortis nulla. Sapien praesent sit ultrices tincidunt.
                            </SectionText>
                        </SectionContent>
                    </SectionFourth>
                </Section>

                 <ScrollButton onClick={this.onScrollToTop}>
                     <span>Go up</span>
                     <img src={arrow1} alt="arrow 1" className="arrow"/>
                 </ScrollButton>
            </main>
        )
    }
}
