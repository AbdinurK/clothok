import React, { useEffect, useState } from "react";
import Navbar from "../Layout/Navigation";
import Footer from "../Layout/Footer";
import Spinner from "../Layout/UI/Spinner"
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../store/actions/productActions";
import { connect } from "react-redux"
import PropTypes  from "prop-types";
import Search from "../Search";
import Size from "../Size";
import Counter from "../Counter";

import styled from 'styled-components'

const StyledProductList = styled.div`
    padding: 50px 50px;
    display: flex;
    justify-content: space-between;
`
const Filters = styled.div`
    width: 100%;
    max-width: 400px;
`
const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 270px));
    grid-template-rows: 1fr;
    grid-gap: 20px;
    
    @media only screen and (max-width: 700px) {
        grid-gap: 20px;
    }
    
    @media only screen and (max-width: 500px) {
        grid-template-columns: 10px repeat(6, 1fr) 10px;
        grid-gap: 10px;
        
        .cards {
        grid-column: 2 / span 6;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
        }
    }
`
const Page = styled.div`
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
`

const onMount = props => () => {
    props.getProducts();
};

const ProductsList = (props) =>  {

    useEffect(onMount(props), []);

    const [term, setTerm] = useState('');

    const onSearchChange = (term) => {
        setTerm(term)
    };

    function search(items, term) {
        if(term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    const { products, loading } = props.product;
    let productsContent;
    if (loading) {
        productsContent = <Spinner/>;
    }
    if (products && products.length) {
        const data = search(products, term);
        const dataSource = data.map(product => {
            return <ProductCard key={product._id} product={product}/>
        });
        productsContent = (
            <StyledProductList>
                <Filters>
                    <Search onSearchChange={onSearchChange}/>
                    <Size/>
                    <Counter/>
                </Filters>
                <Main>
                    { dataSource }
                </Main>
            </StyledProductList>
        )
    }
    return (
        <Page>
            <Navbar/>
            { productsContent }
            <Footer/>
        </Page>
    )

};

ProductsList.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { getProducts })(ProductsList);
