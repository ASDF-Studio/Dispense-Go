import { type CartAction } from "./action.creators";
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

export type CartProduct = {
    productId: string;
    productName: string;
    productImage: string;
    productPrice?: number;
    productDiscountPrice: number;
    productQuantity: number;
};
type Cart = {
    isCartModalOpen: boolean;
    showVariants: boolean;
    showDelete: boolean;
    cartItems: CartProduct[];
};

const initialState: Cart = {
    showVariants: false,
    showDelete: false,
    isCartModalOpen: false,
    cartItems: [],
};

export default function cartReducer(state = initialState, action: CartAction) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            const productExists = state.cartItems.find(
                (product) => product.productId === action.payload.productId
            );
            if (productExists) break;
            state = {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
            break;
        case INCREMENT_CART_PRODUCT:
            break;

        case DECREMENT_CART_PRODUCT:
            break;

        case REMOVE_ALL_CART_PRODUCTS:
            break;

        case SET_CART_MODAL:
            state = {
                ...state,
                cartItems: [...state.cartItems],
                isCartModalOpen: action.payload,
            };
            break;

        case TOGGLE_CART_MODAL:
            state = {
                ...state,
                cartItems: [...state.cartItems],
                isCartModalOpen: !state.isCartModalOpen,
            };
            break;

        case SET_SHOW_VARIANTS:
            state = {
                ...state,
                cartItems: [...state.cartItems],
                showVariants: action.payload,
            };
            break;

        case SET_SHOW_DELETE:
            state = {
                ...state,
                cartItems: [...state.cartItems],
                showDelete: action.payload,
            };
            break;

        case EMPTY_CART:
            state = {
                ...state,
                cartItems: [],
            };
            break;
    }
    return state;
}
