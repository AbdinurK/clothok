import {
    GET_PRODUCTS,
    PRODUCTS_LOADING,
    GET_PRODUCT
} from "./types";
import axios from "axios";

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading());
    axios
        .get('/products')
        .then(res =>
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        )
};

export const getProduct = id => dispatch => {
    dispatch(setProductsLoading());
    axios
        .get(`/products/${id}`)
        .then(res =>
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch({
                type: GET_PRODUCT,
                payload: null
            })
        })
};

export const setProductsLoading = () => {
    return {
        type: PRODUCTS_LOADING
    }
};
