import React, {Component} from "react";
import { connect } from "react-redux"
import { getProducts } from "../actions/productAction";
import PropTypes  from "prop-types";

class ProductsList extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { products } = this.props.product;
        return (
            <div>
                { products.map(product => (
                    <div key={ product._id} >
                        <p>{ product.title }</p>
                        <p>{ product.description }</p>
                        <p>{ product.delivery }</p>
                        <p>{ product.orderCount }</p>
                        <p>{ product.price }</p>
                    </div>
                )) }
            </div>
        )
    }
}

ProductsList.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { getProducts })(ProductsList);
