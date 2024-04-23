import {
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_PRODUCT,
    DELETE_PRODUCT_BY_DISPENSARY_ID,
    EMPTY_CART,
    INCREMENT_CART_PRODUCT,
    REMOVE_ALL_CART_PRODUCTS,
    SET_CART_MODAL,
    SET_CART_PRODUCT_QUANTITY,
    SET_DISPENSARY_ID_TO_DELETE,
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

export const incrementCartProduct = (productId: string) => {
    return {
        type: INCREMENT_CART_PRODUCT,
        payload: productId,
    };
};

export const decrementCartProduct = (productId: string) => {
    return {
        type: DECREMENT_CART_PRODUCT,
        payload: productId,
    };
};

export const setCartProductQuantity = (
    productId: string,
    productQuantity: number
) => {
    return {
        type: SET_CART_PRODUCT_QUANTITY,
        payload: {
            productId,
            productQuantity,
        },
    };
};

export const removeAllCartProducts = () => {
    return {
        type: REMOVE_ALL_CART_PRODUCTS,
    };
};

export const deleteProductsByDispensaryId = (dispensaryId: string) => {
    return {
        type: DELETE_PRODUCT_BY_DISPENSARY_ID,
        payload: dispensaryId,
    };
};

export const setDispensaryIdToDelete = (dispensaryId: string) => {
    return {
        type: SET_DISPENSARY_ID_TO_DELETE,
        payload: dispensaryId,
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
    | ReturnType<typeof emptyCart>
    | ReturnType<typeof setCartProductQuantity>
    | ReturnType<typeof deleteProductsByDispensaryId>
    | ReturnType<typeof setDispensaryIdToDelete>;
