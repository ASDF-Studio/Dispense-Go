"use client"
import { Button, IconButton, Typography } from "@/core";
import { Flex, FlexColumn } from "@/layout";
import { SafeAreaSection } from "@/layout/spacing";
import { CustomIconHandler, IconHandler } from "../../utils/icon";
import { FC } from "react";
import { PaddingX, PaddingXL } from "../../constants";
import { Divider } from "@/divider";
import Image from "next/image";
import { Input } from "@/core/input";
import { TrashIcon } from "../../svg";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { type CartProduct } from "../../redux/cart/cart.reducer";
import { decrementCartProduct, incrementCartProduct, removeCartProductById, setCartProductQuantity } from "../../redux/cart/action.creators";

import { calculateCartItemsTotalPrice } from "../../utils/cart";

type CheckoutCartType = {
    id: number;
    name?: string;
    location?: string;
    count?: number;
};

type CheckoutCartItemProps={
    productPerDispensary:CartProduct
}
const CheckoutCartItem:FC<CheckoutCartItemProps> = ({
    productPerDispensary
}) => {
    const dispatch = useAppDispatch()
  
    return (
        <Flex className="gap-4 items-start">
            <Flex
                className={[
                    "w-[87px] h-[90px] shrink-0 relative border-[1.222px] border-border-whiteSmoke overflow-hidden rounded-[4px] shadow-cart-item",
                ].join(" ")}
            >
                <Image
                    src={
                        productPerDispensary.productImage
                    }
                    fill
                    alt="image"
                />
            </Flex>
            <Flex className="w-full items-start flex-col xl:flex-row gap-y-[7px]">
                <FlexColumn className="gap-[7px] w-full">
                    <Typography
                        intent={"mons15"}
                        classname="leading-[21px] font-medium tracking-normal text-text-black-100 line-clamp-2"
                    >
                        {productPerDispensary.productName}
                    </Typography>
                    <Flex className="gap-2 items-center">
                        <Flex className="p-1 bg-background-green-20">
                            <Typography
                                intent={"monsBold10"}
                                classname="leading-[10px] text-text-green capitalize"
                            >
                                {productPerDispensary.productQuantity}x
                            </Typography>
                        </Flex>
                        <Typography
                            intent={"mons15"}
                            classname="leading-[21px] font-medium tracking-normal text-text-black-100"
                        >
                            Variation: {productPerDispensary.selectedVariant}
                        </Typography>
                    </Flex>
                    <Typography
                        intent={"mons15"}
                        classname="text-text-black-100 font-bold leading-[15px]"
                    >
                        ${productPerDispensary.productDiscountPrice}
                    </Typography>
                </FlexColumn>
                <Flex className="items-center w-[157px] shrink-0">
                    <IconButton
                        classname="px-[12px] h-8 py-[5px] border border-r-0 border-border-whiteSmoke"
                        icon={
                            <IconHandler
                                name="minus"
                                classname="text-[15px] leading-[18px]"
                            />
                        }
                        onClick={()=>{dispatch(decrementCartProduct(productPerDispensary.productId))}}
                    />
                    <Input
                        containerClassname="border border-border-whiteSmoke h-[32px] w-full"
                        type="number"
                        value={productPerDispensary.productQuantity}
                        className="text-mons-20 text-center w-full"
                        onChange={(e)=>{dispatch(setCartProductQuantity(productPerDispensary.productId , +e.target.value))}}
                    />
                    <IconButton
                        classname="px-[12px] h-8 py-[5px] border border-l-0 border-border-whiteSmoke"
                        icon={
                            <IconHandler name="plus" classname="text-[15px] leading-[18px]" />
                        }
                        onClick={()=>{dispatch(incrementCartProduct(productPerDispensary.productId))}}
                    />
                </Flex>
            </Flex>
            <IconButton className="shrink-0 xl:pt-2" icon={<TrashIcon />} onClick={()=>{dispatch(removeCartProductById(productPerDispensary.productId))}}/>
        </Flex>
    );
};


type CheckoutCartHeaderProps={
    id:number,
    productsPerDispensary:CartProduct[]
}

const CheckoutCartHeader: FC<CheckoutCartHeaderProps> = ({ id , productsPerDispensary}) => {

    return (
        <Flex className="justify-between px-5 m:px-6">
            <FlexColumn className="gap-2.5">
                <Flex className="items-center gap-2">
                    <CustomIconHandler name="store-icon" />
                    <Typography
                        intent={"grstk15"}
                        classname="text-text-black-100 font-medium tracking-normal"
                    >
                        PICK UP #{id}
                    </Typography>
                </Flex>
                <Typography
                    intent={"mons15"}
                    classname="text-text-black-100 leading-[19.5px]"
                >
                    {productsPerDispensary[0].dispensaryName} <br />
                    <Typography classname="text-text-black-70">
                        {productsPerDispensary[0].dispensaryStreetAddress} <br /> {productsPerDispensary[0].dispensaryAddress}
                    </Typography>
                </Typography>
            </FlexColumn>
            <Typography
                classname="capitalize leading-[19.5px] tracking-normal text-text-black-40 font-medium"
                intent={"mons15"}
            >
                {productsPerDispensary.length} products
            </Typography>
        </Flex>
    );
};
type CheckoutBodyProps={
    productsPerDispensary:CartProduct[]
}
const CheckoutBody:FC<CheckoutBodyProps> = ({productsPerDispensary }) => {

    return (
        <FlexColumn className="px-5 m:px-6 gap-6">
            {
                productsPerDispensary.map((cartItem)=>{
                    return <CheckoutCartItem key={cartItem.productId} productPerDispensary={cartItem}/>
                })
            }
        </FlexColumn>
    );
};


type CheckoutCartProps={
    id:number,
    dispensaryId:string;
    cartItems:CartProduct[]
}
const CheckoutCart:FC<CheckoutCartProps> = ({ id , dispensaryId ,cartItems}) => {


    const productsInDispensary = cartItems.filter((cartItem)=>{
        return cartItem.dispensaryId === dispensaryId
    })


    return (
        <FlexColumn className="w-full border border-background-lightGreen rounded-md gap-6 py-5 m:pt-6 m:pb-0">
            <CheckoutCartHeader id={id+1} 
               productsPerDispensary={productsInDispensary}
            />
            <Divider color="lightGreen" />
            <CheckoutBody productsPerDispensary={productsInDispensary}/>
        </FlexColumn>
    );
};

type OrderRowProps={ 
    type?: "bold" | "normal", 
    dispensaryId:string,
    cartItems:CartProduct[]
}
const OrderRow: FC<OrderRowProps> = ({ type = "normal" ,cartItems , dispensaryId }) => {

    const selectedDispensaryCartItems = cartItems.filter((cartItem)=>{
        return cartItem.dispensaryId === dispensaryId
    }) 

    return (
        <Flex className="justify-between gap-12">
            <Typography
                intent={"mons15"}
                classname={[
                    "leading-[19.5px] text-text-black-70",
                    type === "normal" ? "font-medium" : "font-bold",
                ].join(" ")}
            >
                {selectedDispensaryCartItems[0].dispensaryName}
            </Typography>
            <Typography
                intent={"mons15"}
                classname={[
                    "leading-[19.5px] text-text-black-70",
                    type === "normal" ? "font-medium" : "font-bold",
                ].join(" ")}
            >
                {`$${calculateCartItemsTotalPrice(selectedDispensaryCartItems)}`}
            </Typography>
        </Flex>
    );
};


type OrderSummaryProps={
    cartItems:CartProduct[],
    dispensaryIds:string[],
}
const OrderSummery:FC<OrderSummaryProps> = ({cartItems,dispensaryIds}) => {

    return (
        <FlexColumn className="m:max-w-[300px] shrink-0 xl:max-w-[478px] w-full py-12 px-5  xl:px-6 gap-6 bg-background-lightGreen m:h-[800px]">
            <Typography
                intent={"grstkt22"}
                classname="leading-[22px] tracking-[-0.77px] font-medium text-text-black-100"
            >
                Order Summary
            </Typography>
            <FlexColumn className="gap-4">
                {
                    dispensaryIds.map((dispensaryId)=>{
                        return <OrderRow key={dispensaryId} dispensaryId={dispensaryId} cartItems={cartItems}/>
                    })
                }
                <Divider color="white" />
                <Flex className="justify-between">
                    <Typography intent={"mons22"} classname="leading-[28.6px] font-bold text-text-black-70">
                        Est. Total
                    </Typography>
                    <Typography intent={"mons22"} classname="leading-[28.6px] font-bold text-text-black-70">
                        ${calculateCartItemsTotalPrice(cartItems)}
                    </Typography>
                </Flex>
                <Typography intent={"mons12"} classname="font-medium leading-[15.6px] tracking-normal text-text-black-70">
                    Taxes: Taxes (if shown) are estimates. The retailer, and not Dispense, is solely responsible for collecting all applicable taxes.
                </Typography>
            </FlexColumn>
            <FlexColumn className="gap-3 items-center">
                <Button text="checkout and pay" intent={"filled"} typographyVariant="buttons" classname="w-full px-0" />
                <Flex className="gap-2">
                    <Typography classname="font-medium leading-[15.6px] text-text-black-70" intent={"mons12"}>Powered by</Typography>
                    <Image src={"/assets/images/aeropay.png"} width={96} height={16} alt="aeropay logo" />
                </Flex>
            </FlexColumn>

        </FlexColumn>
    );
};

export const CheckoutPageBody = () => {
    const { cartItems } = useAppSelector((state)=>state.cart)

    const dispensaryIds:string[] = []
    cartItems.forEach((cartItem)=>{
         if(!dispensaryIds.includes(cartItem.dispensaryId)){
            dispensaryIds.push(cartItem.dispensaryId)
         }
    })


    return <SafeAreaSection withSpacing={false}>
        <Flex className={["gap-6 justify-between xl:max-w-screen-2xl xl:mx-auto xl:pl-desktop m:pb-12 flex-col m:flex-row"].join(" ")}>
            <FlexColumn className="px-2.5 m:pl-6 xl:pl-0 m:pr-0 gap-6 m:max-w-[440px] shrink-0 xl:max-w-[896px] w-full pt-5  m:pt-12">
                <Flex className="justify-between px-2.5 m:px-0">
                    <Typography
                        intent={"grstkt22"}
                        classname="tracking-[-0.77px] leading-[22px] text-text-black-100"
                    >
                        Checkout
                    </Typography>
                    <Typography intent={"mons15"} classname="text-text-black-40">
                        {cartItems.length} Total Products | {dispensaryIds.length} Pickup
                    </Typography>
                </Flex>
                {
                    dispensaryIds.map((dispensaryId,id)=>{
                        return <>
                            <Divider type="dashed" classname="px-2.5 m:px-0" />
                            <CheckoutCart id={id} dispensaryId={dispensaryId} cartItems={cartItems}/>
                        </>
                    })
                }
            </FlexColumn>
            <OrderSummery cartItems={cartItems} dispensaryIds={dispensaryIds}/>
        </Flex>
    </SafeAreaSection>
}

export const BackToShopping = () => {
    return (
        <SafeAreaSection withSpacing={false}>
            <Flex className={["py-4 bg-primary-darkGreen hidden m:flex", PaddingX].join(" ")}>
                <Link href={"/"}>
                    <Flex className="gap-2 items-center w-fit">
                        <CustomIconHandler name="arrowleft" />
                        <Typography
                            intent={"grstk15"}
                            classname="tracking-[2.175px] font-medium uppercase text-white"
                        >
                            back to shopping
                        </Typography>
                    </Flex>
                </Link>
            </Flex>
        </SafeAreaSection>
    );
};
