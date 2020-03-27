import { GET_PRODUCTS, PRODUCTS_LOADING } from "./types";
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

export const setProductsLoading = () => {
    return {
        type: PRODUCTS_LOADING
    }
};
