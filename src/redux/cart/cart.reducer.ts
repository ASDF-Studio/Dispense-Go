import { type CartAction } from "./action.creators";
import {
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_PRODUCT,
    DELETE_PRODUCT_BY_DISPENSARY_ID,
    EMPTY_CART,
    INCREMENT_CART_PRODUCT,
    REMOVE_ALL_CART_PRODUCTS,
    REMOVE_CART_PRODUCT_BY_ID,
    SET_CART_MODAL,
    SET_CART_PRODUCT_QUANTITY,
    SET_DISPENSARY_ID_TO_DELETE,
    SET_SHOW_DELETE,
    SET_SHOW_VARIANTS,
    TOGGLE_CART_MODAL,
} from "./action.types";

export type CartProduct = {
    productId: string;
    productName: string;
    productImage: string;
    productPrice: number;
    productDiscountPrice: number;
    productQuantity: number;
    dispensaryId: string;
    dispensaryName: string;
    dispensaryAddress: string;
    dispensaryStreetAddress: string;
};
type Cart = {
    isCartModalOpen: boolean;
    showVariants: boolean;
    showDelete: boolean;
    deleteFromDispensaryId: string;
    cartItems: CartProduct[];
};

const initialState: Cart = {
    showVariants: false,
    showDelete: false,
    deleteFromDispensaryId: "",
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
            const incrementedCartItems = state.cartItems.map((cartItem) => {
                if (cartItem.productId !== action.payload) {
                    return { ...cartItem };
                }
                return {
                    ...cartItem,
                    productQuantity: cartItem.productQuantity + 1,
                };
            });
            state = {
                ...state,
                cartItems: [...incrementedCartItems],
            };
            break;

        case DECREMENT_CART_PRODUCT:
            const decrementedCartItems = state.cartItems.map((cartItem) => {
                if (cartItem.productId !== action.payload) {
                    return { ...cartItem };
                }
                return {
                    ...cartItem,
                    productQuantity:
                        cartItem.productQuantity === 0
                            ? 0
                            : cartItem.productQuantity - 1,
                };
            });
            state = {
                ...state,
                cartItems: [...decrementedCartItems],
            };
            break;

        case SET_CART_PRODUCT_QUANTITY:
            const updatedCartItems = state.cartItems.map((cartItem) => {
                if (cartItem.productId !== action.payload.productId) {
                    return { ...cartItem };
                }
                return {
                    ...cartItem,
                    productQuantity: Math.abs(
                        Number(action.payload.productQuantity)
                    ),
                };
            });
            state = {
                ...state,
                cartItems: [...updatedCartItems],
            };
            break;

        case DELETE_PRODUCT_BY_DISPENSARY_ID:
            const filteredCartItems = state.cartItems.filter((cartItem) => {
                return cartItem.dispensaryId !== action.payload;
            });
            state = { ...state, cartItems: [...filteredCartItems] };
            break;

        case SET_DISPENSARY_ID_TO_DELETE:
            state = { ...state, deleteFromDispensaryId: action.payload };
            break;

        case REMOVE_ALL_CART_PRODUCTS:
            break;

        case REMOVE_CART_PRODUCT_BY_ID:
            const removedCartItems = state.cartItems.filter((cartItem) => {
                return cartItem.productId !== action.payload;
            });
            state = { ...state, cartItems: [...removedCartItems] };
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
