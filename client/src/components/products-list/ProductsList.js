import React, { useEffect, useState } from "react";
import Navbar from "../layout/navbar/Navigation";
import Footer from "../layout/footer/Footer";
import Spinner from "../layout/UI/spinner/Spinner"
import ProductCard from "../product-card/ProductCard";
import { getProducts } from "../../store/actions/productActions";
import { connect } from "react-redux"
import PropTypes  from "prop-types";
import styles from "./ProductsList.module.css"
import Search from "../search/Search";
import Gender from "../layout/UI/gender-panel/Gender";
import Size from "../layout/UI/size-panel/Size";
import Quantity from "../layout/UI/quantity-panel/Quantity";

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
            <div style={{ padding: '50px 50px' }} className={styles.list}>
                <div className={styles.filters}>
                    <Search onSearchChange={onSearchChange}/>
                    <Size/>
                    <Quantity/>
                </div>
                <main className={styles.main}>
                    { dataSource }
                </main>
            </div>
        )
    }
    return (
        <div className={styles.page}>
            <Navbar/>
            { productsContent }
            <Footer/>
        </div>
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
