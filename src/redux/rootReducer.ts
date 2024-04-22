import { combineReducers } from "redux";
import productsReducer from "./products/product.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});
export default rootReducer;
