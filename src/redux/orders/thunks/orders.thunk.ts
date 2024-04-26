import axios, { AxiosError, AxiosResponse } from "axios";
import {
    getOrdersByUserIdFailure,
    getOrdersByUserIdRequest,
    getOrdersByUserIdSuccess,
} from "../orders.creators";
import { API } from "../../../urlConfig";
import { type Order } from "../orders.reducer";
import { type AppDispatch } from "../../store.types";

export const getOrdersByUserId = (userId: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(getOrdersByUserIdRequest());
            const res = await axios.post<
                {},
                AxiosResponse<Order[]>,
                { userId: string }
            >(`${API}dispense-go`, {
                userId,
            });
            dispatch(getOrdersByUserIdSuccess(res.data));
        } catch (error) {
            if (error instanceof AxiosError) {
                dispatch(
                    getOrdersByUserIdFailure(
                        error,
                        error.response?.data?.message
                    )
                );
            } else {
                dispatch(
                    getOrdersByUserIdFailure(
                        error,
                        (error as Error)?.message || "Something went wrong"
                    )
                );
            }
        }
    };
};
