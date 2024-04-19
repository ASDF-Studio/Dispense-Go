import { type Products } from "../../static-data/products";
import {
    GET_ALL_PRODUCTS_Failure,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
} from "./action.types";

export function requestProducts() {
    return {
        type: GET_ALL_PRODUCTS_REQUEST,
    };
}

export function requestProductsSuccess(products: Products[]) {
    return {
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: products,
    };
}

export function requestProductFailure(error: any, message: string) {
    return {
        type: GET_ALL_PRODUCTS_Failure,
        payload: {
            error: error,
            message: message,
        },
    };
}

export type ProductsAction =
    | ReturnType<typeof requestProducts>
    | ReturnType<typeof requestProductFailure>
    | ReturnType<typeof requestProductsSuccess>;
