import { combineReducers } from "redux";
import productsReducer from "./products/product.reducer";

const rootReducer = combineReducers({
    products: productsReducer,
});
export default rootReducer;
