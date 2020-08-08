import { GET_PRODUCTS, PRODUCTS_LOADING, GET_PRODUCT } from "../actions/types";

const initialState = {
    products: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
