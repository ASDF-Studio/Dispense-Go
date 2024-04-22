"use client";

import React, { type ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { CartModal } from "@/modals/cart";
import { setCartModal } from "../../redux/cart/action.creators";

type CartProviderProps = {
    children: ReactNode;
};

function CartProvider({ children }: CartProviderProps) {
    const { isCartModalOpen } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    function setOpen(open: boolean) {
        dispatch(setCartModal(open));
    }
    return (
        <>
            <CartModal open={isCartModalOpen} setOpen={setOpen} />
            {children}
        </>
    );
}

export default CartProvider;
