import React, {Component} from "react";
import { connect } from "react-redux"
import { getProducts } from "../../actions/productAction";
import PropTypes  from "prop-types";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./ProductsList.module.css"
import basket from "./assets/basket.svg";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner"

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 4
        };
        this.onLoadMore = this.onLoadMore.bind(this)
    }

    componentDidMount() {
        this.props.getProducts();
    }

    onLoadMore() {
        this.setState({
            count: this.state.count + 4
        })
    }

    render() {
        const { products, loading } = this.props.product;
        let productsContent;
        if (products === undefined || products === null || loading || Object.keys(products).length === 0) {
            productsContent = <Spinner/>;
        } else {
            productsContent = (
                <div>
                    <main className={styles.main}>
                        <section className={styles.cards}>
                            { products.slice(0, this.state.count).map(product => (
                                <div key={ product._id} className={styles.card}>
                                    <div className={styles.card__image}>
                                        <img src={'../../../../' + product.image} alt="sorry"/>
                                    </div>
                                    <div className={styles.card__info}>
                                        <div className={styles.card__content}>
                                            <Link to={`/products/${product._id}`}>
                                                <p className={styles.card__title}>{ product.title }</p>
                                            </Link>
                                            <p className="card__price">{ product.price } T</p>
                                        </div>
                                        <img src={basket} alt="no" className={styles.basket}/>
                                    </div>
                                </div>
                            )) }
                        </section>
                    </main>
                    <button onClick={this.onLoadMore}>Load more</button>
                    <Footer/>
                </div>
            )
        }
        return (
            <div>
                <Navbar/>
                { productsContent }
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
