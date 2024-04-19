import { AppThunk } from "../../store.types";
import axios, { AxiosError } from "axios";

import {
    requestProductFailure,
    requestProducts,
    requestProductsSuccess,
} from "../action.creators";

export const getProducts: AppThunk = async (dispatch) => {
    try {
        dispatch(requestProducts());
        const res = await axios.get("http://localhost:4000");
        if (res.status === 200) {
            dispatch(requestProductsSuccess(res.data));
        }
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
            const { message } = error.response?.data || "Something went wrong";
            dispatch(requestProductFailure(error, message));
        }
    }
};
