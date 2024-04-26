import { type Order } from "./orders.reducer";
import {
    GET_ORDERS_BY_USER_ID_FAILURE,
    GET_ORDERS_BY_USER_ID_REQUEST,
    GET_ORDERS_BY_USER_ID_SUCCESS,
} from "./orders.types";

export const getOrdersByUserIdRequest = () => {
    return { type: GET_ORDERS_BY_USER_ID_REQUEST };
};

export const getOrdersByUserIdSuccess = (orders: Order[]) => {
    return { type: GET_ORDERS_BY_USER_ID_SUCCESS, payload: orders };
};

export const getOrdersByUserIdFailure = (error: any, errMsg: string) => {
    return {
        type: GET_ORDERS_BY_USER_ID_FAILURE,
        payload: {
            error,
            errMsg,
        },
    };
};

export type OrdersAction =
    | ReturnType<typeof getOrdersByUserIdRequest>
    | ReturnType<typeof getOrdersByUserIdSuccess>
    | ReturnType<typeof getOrdersByUserIdFailure>;
