"use client"
import { Button, IconButton, Typography } from "@/core";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { BaseModal } from "..";
import { EmptyCart } from "./empty-cart";
import { Flex, FlexColumn, Pressable } from "@/layout";
import { useCart } from "../../../contexts/cart";
import Image from "next/image";
import { Divider } from "@/divider";
import { isEmpty } from "lodash"
import { CartItems } from "./cart-items";
import { CircleCheckBox } from "@/core/checkbox";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { deleteProductsByDispensaryId, emptyCart, setShowDelete, setShowVariants, toggleCartModal } from "../../../redux/cart/action.creators";


type Props = {
    open: boolean;
    setOpen: (open: boolean)=> void;
};

export const CartModal: FC<Props> = ({ open = false, setOpen }) => {
    
    const [state, setState] = useState(0)
    
    const dispatch = useAppDispatch()
    const {cartItems:items , showVariants, showDelete} = useAppSelector((state)=>state.cart)
    const { deleteFromDispensaryId }= useAppSelector((state)=>state.cart)

    const isCartEmpty = items.length === 0

    return (
        <BaseModal
            contentStyle={{
                top: "0",
                bottom: "unset",
                left: "unset",
                right: "0px",
                border: 0,
                opacity: open ? 1 : 0,
                transform: "unset",
                maxWidth: "387px",
                borderRadius: 0,
                width: "100%",
                padding: 0,
                height: "100%",
                transition: "0.3s",
            }}
            open={open}
            overlayClose={true}
            setOpen={setOpen}
        >
            <FlexColumn className="h-full relative">
                <FlexColumn className="px-6 pt-6 h-full">
                    <FlexColumn className="gap-6 h-full">
                        <Flex className="items-center justify-between">
                            <Typography intent={"grskt18"} classname="leading-[18px] tracking-[-0.63px] font-medium text-text-black-100">
                                Basket ({items.length})
                            </Typography>
                            <IconButton onClick={()=>{dispatch(toggleCartModal())}} icon={<Image alt="dispense logo" width={15} height={24} src={"/assets/icons/x-mark.svg"} />} className="text-[24px] font-light text-black" />
                        </Flex>
                        <FlexColumn className="h-full">
                            <Divider />
                            {isCartEmpty ? <EmptyCart /> : <CartItems />}
                        </FlexColumn>
                    </FlexColumn>
                </FlexColumn>



                <Link href="/checkout">
                    <Button text="CHECKOUT" disabled={isCartEmpty} intent={"filled"} typographyVariant="grstk15" textClassname={["leading-[15px] font-medium uppercase", isCartEmpty && "text-text-black-40"].join(" ")} classname={["rounded-none w-full", isCartEmpty && "bg-primary-brand/10"].join(" ")} />
                </Link>

                {// move to component
                }
                {
                    showVariants && <FlexColumn className="absolute top-0 h-full w-full bg-text-black-20">
                        <FlexColumn className="absolute w-full h-[371px] bg-white bottom-0 rounded-t-[16px] p-6 gap-6">
                            <FlexColumn className="gap-4">
                                <Typography classname="uppercase leading-[18px] font-medium tracking-[-0.63px] text-text-black-100" intent={"grskt18"}>
                                    select variant
                                </Typography>
                                <Pressable onClick={() => setState(0)}>
                                    <Flex
                                        className={[
                                            "rounded-md border justify-between border-border-whiteSmoke min-w-[244px] p-l items-center",
                                            state === 0 && "border-primary-brand",
                                        ].join(" ")}
                                    >
                                        <FlexColumn className="gap-0.5">
                                            <Typography
                                                intent={"mons15"}
                                                classname="leading-[19.5px] font-medium text-black"
                                            >
                                                100mg
                                            </Typography>
                                            <Typography
                                                intent={"mons15"}
                                                classname="leading-[19.5px] font-semibold  text-black text-text-black-70"
                                            >
                                                $24.32
                                            </Typography>
                                        </FlexColumn>

                                        <CircleCheckBox isSelected={state === 0} />
                                    </Flex>
                                </Pressable>
                                <Pressable onClick={() => setState(1)}>
                                    <Flex
                                        className={[
                                            "rounded-md border justify-between border-border-whiteSmoke min-w-[244px] p-l items-center",
                                            state === 1 && "border-primary-brand",
                                        ].join(" ")}
                                    >
                                        <FlexColumn className="gap-0.5">
                                            <Typography
                                                intent={"mons15"}
                                                classname="leading-[19.5px] font-medium text-black"
                                            >
                                                Buy 1 Take 1 Promo
                                            </Typography>
                                            <Typography
                                                intent={"mons15"}
                                                classname="leading-[19.5px] font-semibold  text-black text-text-black-70 text-start"
                                            >
                                                $26.32
                                            </Typography>
                                        </FlexColumn>
                                        <CircleCheckBox isSelected={state === 1} />
                                    </Flex>
                                </Pressable>
                            </FlexColumn>
                            <FlexColumn className="gap-4">
                                <Button text="confirm" onClick={() => dispatch(setShowVariants(false))} intent={"filled"} typographyVariant="buttons" />
                                <Button text="cancel" onClick={() => dispatch(setShowVariants(false))} intent={"outline"} typographyVariant="buttons" />
                            </FlexColumn>
                        </FlexColumn>
                    </FlexColumn>
                }
                {
                    showDelete && <FlexColumn className="absolute top-0 h-full w-full bg-text-black-20">
                        <FlexColumn className="absolute p-6 top-1/2 -translate-y-1/2 w-[357px] bg-white left-1/2 -translate-x-1/2 rounded-[4px] gap-6">
                            <FlexColumn className=" gap-4">
                                <Typography intent={"grskt18"} classname="font-medium tracking-[-0.63px] leading-[18px] text-text-black-100 uppercase text-center">
                                    remove product
                                </Typography>
                                <Typography intent={"mons12"} classname="font-medium leading-[15.6px] text-center text-text-black-70">
                                    You are about to remove this product from your basket. Are you sure to remove it?
                                </Typography>
                            </FlexColumn>
                            <FlexColumn className="gap-4">
                                <Button text="remove" onClick={() => {
                                    dispatch(deleteProductsByDispensaryId(deleteFromDispensaryId))
                                    dispatch(setShowDelete(false))
                                }} intent={"filled"} typographyVariant="buttons" textClassname="text-white" />
                                <Button text="cancel" onClick={() => dispatch(setShowDelete(false))} intent={"outline"} typographyVariant="buttons" />
                            </FlexColumn>
                        </FlexColumn>
                    </FlexColumn>
                }

            </FlexColumn>

        </BaseModal>
    );
};
