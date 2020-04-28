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
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";

class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            filter: 'zip'
        }
    }

    componentDidMount() {
        this.props.getProducts();
    }

    filter(items, filter) {
        switch (filter) {
            case 'T-Shirt':
                return items.filter((item) => item.title);
            case 'zip':
                return items.filter((item) => item.title);
            default:
                return items
        }
    }

    onSearchChange = (term) => {
        this.setState({ term })
    };

    search(items, term) {
        if(term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    render() {
        const { products, loading } = this.props.product;

        let productsContent;
        if (loading) {
            productsContent = <Spinner/>;
        } else if (products === undefined || products === null  || Object.keys(products).length === 0) {
            productsContent = <p>Null</p>
        }else {
            const { term, filter } = this.state;
            const data = this.filter(this.search(products, term), filter);
            productsContent = (
                <div>
                    <main className={styles.main}>
                        <section className={styles.cards}>
                            { data.map(product => (
                                <div key={ product._id} className={styles.card}>
                                    <div className={styles.card__image}>
                                        <img src={product.image} alt="sorry"/>
                                    </div>
                                    <div className={styles.card__info}>
                                        <div className={styles.card__content}>
                                            <Link to={`/products/${product._id}`}>
                                                <p className={styles.card__title}>{ product.title }</p>
                                            </Link>
                                            <p className="card__price">{ product.price } $</p>
                                        </div>
                                        <img src={basket} alt="no" className={styles.basket}/>
                                    </div>
                                </div>
                            )) }
                        </section>
                    </main>
                    <Footer/>
                </div>
            )
        }
        const filter = this.state;
        return (
            <div>
                <Navbar/>
                <div className={styles.search}>
                    <Search onSearchChange={this.onSearchChange}/>
                    <Filter filter={filter}/>
                </div>
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
