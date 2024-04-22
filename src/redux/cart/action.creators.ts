import {
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_PRODUCT,
    EMPTY_CART,
    INCREMENT_CART_PRODUCT,
    REMOVE_ALL_CART_PRODUCTS,
    SET_CART_MODAL,
    SET_SHOW_DELETE,
    SET_SHOW_VARIANTS,
    TOGGLE_CART_MODAL,
} from "./action.types";
import { type CartProduct } from "./cart.reducer";

export const addProductToCart = (cartProduct: CartProduct) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: cartProduct,
    };
};

export const incrementCartProduct = () => {
    return {
        type: INCREMENT_CART_PRODUCT,
    };
};

export const decrementCartProduct = () => {
    return {
        type: DECREMENT_CART_PRODUCT,
    };
};

export const removeAllCartProducts = () => {
    return {
        type: REMOVE_ALL_CART_PRODUCTS,
    };
};

export const setCartModal = (status: boolean) => {
    return {
        type: SET_CART_MODAL,
        payload: status,
    };
};
export const toggleCartModal = () => {
    return {
        type: TOGGLE_CART_MODAL,
    };
};

export const setShowVariants = (showVariant: boolean) => {
    return {
        type: SET_SHOW_VARIANTS,
        payload: showVariant,
    };
};

export const setShowDelete = (showDelete: boolean) => {
    return {
        type: SET_SHOW_DELETE,
        payload: showDelete,
    };
};

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
    };
};
export type CartAction =
    | ReturnType<typeof addProductToCart>
    | ReturnType<typeof incrementCartProduct>
    | ReturnType<typeof decrementCartProduct>
    | ReturnType<typeof removeAllCartProducts>
    | ReturnType<typeof setCartModal>
    | ReturnType<typeof toggleCartModal>
    | ReturnType<typeof setShowVariants>
    | ReturnType<typeof setShowDelete>
    | ReturnType<typeof emptyCart>;
