import { IconButton } from "@/core";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../../app/contexts/cart";
import { ShopIcon } from "../../svg";
import { FC } from "react";
import { Products } from "../../constants";

type Props = {
    id: number
    classname?: string
}

export const AddtoCart: FC<Props> = ({ id = 0, classname }) => {
    const { toggleCartModal, addToCart } = useCart()


    return (
        <IconButton
            icon={
                <ShopIcon />
            }
            onClick={() => {
                addToCart(Products[id])
                toggleCartModal()
            }}
            classname={["w-10 h-10 bg-primary-brand rounded-full hover:bg-primary-hover shrink-0", classname].join(" ")}
        />
    );
};
