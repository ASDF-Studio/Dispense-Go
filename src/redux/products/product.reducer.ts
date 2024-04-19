import { type Product } from "../../static-data/products";
import { type ProductsAction } from "./action.creators";
import {
    GET_ALL_PRODUCTS_Failure,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
} from "./action.types";

type initialState = {
    loading: boolean;
    error: null;
    products: Product[];
    errMsg: string | null;
};
const initialState: initialState = {
    loading: false,
    error: null,
    products: [],
    errMsg: null,
};

export default function productsReducer(
    state = initialState,
    action: ProductsAction
) {
    switch (action.type) {
        case GET_ALL_PRODUCTS_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
            };
            break;

        case GET_ALL_PRODUCTS_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                products: [...action.payload],
            };
            break;

        case GET_ALL_PRODUCTS_Failure:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
                errMsg: action.payload.message,
            };
            break;
    }
    return state;
}
