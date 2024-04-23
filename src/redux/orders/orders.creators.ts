import { type Order } from "./orders.reducer";
import {
    GET_ORDERS_BY_ID_FAILURE,
    GET_ORDERS_BY_ID_REQUEST,
    GET_ORDERS_BY_ID_SUCCESS,
} from "./orders.types";

export const requestOrdersById = () => {
    return { type: GET_ORDERS_BY_ID_REQUEST };
};

export const requestOrdersByIdSuccess = (orders: Order[]) => {
    return { type: GET_ORDERS_BY_ID_SUCCESS, payload: orders };
};

export const requestOrdersByIdFailure = (error: any, errMsg: string) => {
    return {
        type: GET_ORDERS_BY_ID_FAILURE,
        payload: {
            error,
            errMsg,
        },
    };
};

export type OrdersAction =
    | ReturnType<typeof requestOrdersById>
    | ReturnType<typeof requestOrdersByIdSuccess>
    | ReturnType<typeof requestOrdersByIdFailure>;
