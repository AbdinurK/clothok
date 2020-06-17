import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from "../Navigation/Navbar";
import {getProduct} from "../../_actions/productAction";
import Spinner from "../Spinner/Spinner"
import Footer from "../Footer/Footer";
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
                <DetailPage product={product} key={product._id}/>
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
