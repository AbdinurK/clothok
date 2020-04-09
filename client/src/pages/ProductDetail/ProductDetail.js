import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from "../../components/Navbar/Navbar";
import { getProduct } from "../../actions/productAction";
import Spinner from "../../components/Spinner/Spinner"
import styles from "./ProductDetail.module.css"
import { NavLink } from "react-router-dom";

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }

    componentDidMount() {
        this.props.getProduct(this.props.match.params.id)
    }

    plus() {
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    minus() {
        this.setState(state => ({
            count: state.count - 1
        }))
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
                                <li className={styles.box__item}>S</li>
                                <li className={styles.box__item}>M</li>
                                <li className={styles.box__item}>L</li>
                                <li className={styles.box__item}>XL</li>
                            </ul>
                            <div className={styles.product__quantity}>
                                <p>Quantity:</p>
                                <div className={styles.buttons}>
                                    <button onClick={this.plus}>+</button>
                                    <div className={styles.count}>{ this.state.count }</div>
                                    <button onClick={this.minus}>-</button>
                                </div>
                            </div>
                            <span>Delivery week: </span>
                            <span className={styles.product__delivery}>{ product.delivery } week</span>
                            <div className={styles.action__button}>
                                <NavLink to="/designLab">Edit design</NavLink>
                                <NavLink to="/order">Order</NavLink>
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
