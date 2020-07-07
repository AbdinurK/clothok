import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from "../layout/navbar/Navigation";
import {getProduct} from "../../store/actions/productActions";
import Spinner from "../spinner/Spinner"
import Footer from "../layout/footer/Footer";
import DetailPage from "./DetailPage";

class ProductDetail extends Component {

    componentDidMount() {
        this.props.getProduct(this.props.match.params.id)
    }

    render() {
        const { product, loading } = this.props.product;
        let productContent;

        if (product === undefined || product === null || loading || Object.keys(product).length === 0) {
            productContent = <Spinner />;
        } else {
            productContent = (
                <DetailPage product={product}/>
            )
        }
        return (
            <div>
                <Navbar/>
                { productContent }
                <Footer/>
            </div>
        )
    };
}


ProductDetail.propTypes = {
    getProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps, { getProduct })(ProductDetail)
