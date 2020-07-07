import React, {Component} from "react";
import { connect } from "react-redux"
import PropTypes  from "prop-types";
import Navbar from "../layout/navbar/Navigation";
import Footer from "../layout/footer/Footer";
import Spinner from "../spinner/Spinner"
import ProductCard from "../product-card/ProductCard";
import { getProducts } from "../../store/actions/productActions";
import styles from "./ProductsList.module.css"

class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            count: 1,
        }
    }

    componentDidMount() {
        this.props.getProducts();
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
        const { term } = this.state;
        let productsContent;
        if (loading) {
            productsContent = <Spinner/>;
        } else if (products === undefined || products === null  || Object.keys(products).length === 0) {
            productsContent = <p>Null</p>
        } else {
            const data = this.search(products, term);
            const dataSource = data.map(product => {
                return <ProductCard key={product._id} product={product}/>
            });
            productsContent = (
                <div>
                    <main className={styles.main}>
                        <section className={styles.cards}>
                            { dataSource }
                        </section>
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
