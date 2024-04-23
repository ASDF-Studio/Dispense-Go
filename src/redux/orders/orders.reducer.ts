import { orders } from "../../static-data/orders";
import { type OrdersAction } from "./orders.creators";
import {
    GET_ORDERS_BY_ID_FAILURE,
    GET_ORDERS_BY_ID_REQUEST,
    GET_ORDERS_BY_ID_SUCCESS,
} from "./orders.types";

export type OrderItem = {
    productId: string;
    productImage: string;
    productName: string;
    productQuantity: number;
    variation: string;
    mainAmount: number;
    discountAmount: number;
};

export type Order = {
    orderId: string;
    userId: string;
    orderStatus: "completed" | "ready" | "failed";
    totalOrderCost: number;
    supplierName: string;
    supplierStreetAddress: string;
    supplierAddress: string;
    orderItems: OrderItem[];
    pickUpDate?: string;
    pickUpTime?: string;
    lastPaymentDate?: string;
    lastPaymentTime?: string;
    cancelDate?: string;
    cancelTime?: string;
};
type initialState = {
    orders: Order[];
    loading: boolean;
    error: null | unknown;
    errMsg: null | string;
};
const initialState: initialState = {
    orders: orders,
    loading: false,
    error: null,
    errMsg: null,
};
export default function ordersReducer(
    state = initialState,
    action: OrdersAction
) {
    switch (action.type) {
        case GET_ORDERS_BY_ID_REQUEST:
            state = {
                ...state,
                orders: [...state.orders],
                loading: true,
                error: null,
                errMsg: null,
            };
            break;

        case GET_ORDERS_BY_ID_SUCCESS:
            state = {
                ...state,
                orders: [...action.payload],
                loading: false,
                error: null,
                errMsg: null,
            };
            break;
        case GET_ORDERS_BY_ID_FAILURE:
            state = {
                ...state,
                orders: [...state.orders],
                loading: false,
                error: action.payload.error,
                errMsg: action.payload.errMsg,
            };
            break;
    }
    return state;
}
