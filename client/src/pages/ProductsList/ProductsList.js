import React, {Component} from "react";
import { connect } from "react-redux"
import { getProducts } from "../../actions/productAction";
import PropTypes  from "prop-types";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./ProductsList.module.css"
import basket from "./basket.svg";
import Filter from "../../components/Filter/Filter";
import { Link } from "react-router-dom";

class ProductsList extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { products } = this.props.product;
        return (
            <div>
                <Navbar/>
                <Filter/>
                <main className={styles.main}>
                    <section className={styles.cards}>
                        { products.map(product => (

                                <div key={ product._id} className={styles.card}>
                                    <div className={styles.card__image}>
                                        <img src={'../../../../' + product.image} alt="sorry"/>
                                    </div>
                                    <div className={styles.card__info}>
                                        <div className={styles.card__content}>
                                            <Link to={`/products/${product._id}`}>
                                                <p className={styles.card__title}>{ product.title }</p>
                                            </Link>
                                            {/*<p className={styles.card__description}>{ product.description }</p>*/}
                                            <p className="card__price">{ product.price } T</p>
                                        </div>
                                        <div className={styles.card__basket}>
                                            <img src={basket} alt="no"/>
                                        </div>
                                    </div>
                                </div>
                        )) }
                    </section>
                </main>
                <Footer/>
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
