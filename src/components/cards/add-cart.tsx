"use client";
import { IconButton } from "@/core";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopIcon } from "../../svg";
import { FC } from "react";
import { useAppDispatch } from "../../redux/hook";
import {
    addProductToCart,
    toggleCartModal,
} from "../../redux/cart/action.creators";
import { type Product } from "../../static-data/products";

type Props = {
    id?: number;
    classname?: string;
    productDetails: Product;
};

export const AddtoCart: FC<Props> = ({ id = 0, classname, productDetails }) => {
    
    const dispatch = useAppDispatch();

    return (
        <IconButton
            icon={<ShopIcon />}
            onClick={() => {
                dispatch(
                    addProductToCart({
                        dispensaryId: productDetails.dispensaryId,
                        dispensaryAddress: productDetails.dispensaryAddress,
                        dispensaryName: productDetails.dispensaryName,
                        dispensaryStreetAddress:
                            productDetails.dispensaryStreetAddress,
                        productDiscountPrice: productDetails.discountPrice,
                        productId: productDetails.productId,
                        productImage: productDetails.image[0],
                        productName: productDetails.title,
                        productPrice: productDetails.originalPrice,
                        productQuantity: 1,
                        selectedVariant: productDetails.variantsList[0],
                        variantsList: [...productDetails.variantsList],
                    })
                );
                dispatch(toggleCartModal());
            }}
            classname={[
                "w-10 h-10 bg-primary-brand rounded-full hover:bg-primary-hover shrink-0",
                classname,
            ].join(" ")}
        />
    );
};
