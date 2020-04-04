import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from "../../components/Navbar/Navbar";
import { getProduct } from "../../actions/productAction";
import Spinner from "../../components/Spinner/Spinner"
import styles from "./ProductDetail.module.css"

class ProductDetail extends Component{

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
                <div className={styles.product}>
                    <section className={styles.container} key={product._id}>
                        <img src={'../../../../' + product.image} alt="Sorry" className={styles.product__image}/>
                        <div className={styles.product__info}>
                            <h1 className={styles.product__title}>{ product.title }</h1>
                            <p className={styles.product__description}>Classic White</p>
                            <p className={styles.product__price}>{ product.price } T</p>
                            <p className={styles.size__text}>Choose size:</p>
                            <ul className={styles.box}>
                                <li className={styles.box__item}>XS</li>
                                <li className="box__item">S</li>
                                <li className="box__item">M</li>
                                <li className="box__item">L</li>
                                <li className="box__item">XL</li>
                            </ul>
                            <div className="product__quantity">
                                Quantity:
                                <div>
                                    { product.orderCount }
                                </div>
                            </div>
                            <span>Delivery week</span>
                            <span className="product__delivery">{ product.delivery } week</span>
                            <div className={styles.action__button}>
                                <button>Edit design</button>
                                <button>Order</button>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
        return (
            <div>
                <Navbar/>
                { productContent }
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
