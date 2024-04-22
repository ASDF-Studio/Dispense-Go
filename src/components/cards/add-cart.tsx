"use client";
import { IconButton } from "@/core";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopIcon } from "../../svg";
import { FC } from "react";
import { Products } from "../../constants";
import { useAppDispatch } from "../../redux/hook";
import {
    addProductToCart,
    toggleCartModal,
} from "../../redux/cart/action.creators";

type Props = {
    id?: number;
    classname?: string;
};

export const AddtoCart: FC<Props> = ({ id = 0, classname }) => {
    // const { toggleCartModal, addToCart } = useCart()
    const dispatch = useAppDispatch();

    /**
     * ADD real data in the onClick handler
     * fake data for now
     */
    return (
        <IconButton
            icon={<ShopIcon />}
            onClick={() => {
                dispatch(toggleCartModal());
                dispatch(addProductToCart(Products[id]));
            }}
            classname={[
                "w-10 h-10 bg-primary-brand rounded-full hover:bg-primary-hover shrink-0",
                classname,
            ].join(" ")}
        />
    );
};
