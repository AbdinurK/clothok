import { combineReducers } from "redux";
import productReducer from "./productReducer"
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import designReducer from "./designReducer";

export default combineReducers({
    product: productReducer,
    auth: authReducer,
    errors: errorReducer,
    designReducer: designReducer
});
