"use client";
import React, { FC, useState } from "react";
import { Checkbox, CheckboxClild } from "@/core/checkbox";
import { Flex, FlexCenter, FlexColumn } from "@/layout";
import { MainLayout } from "@/layout/main";
import { CategoryPoster } from "@/poster/category";
import { ProductList } from "@/sliders/productList";
import { Button, Typography } from "@/core";
import Image from "next/image";
import { Divider } from "@/divider";
import { IconHandler } from "../../../utils/icon";
import Link from "next/link";
import { SafeAreaSection } from "@/layout/spacing";
import { BoxIcon, InfoIcon, StoreIcon } from "../../../svg";
import { QrModal } from "@/modals/qr-modal";

type State = "completed" | "ready" | "failed";
type OrderStateType = {
    state: State;
    classname?: string;
};

const OrderState: FC<OrderStateType> = ({ state = "completed", classname }) => {
    const stateMapping = {
        completed: {
            text: (
                <Typography
                    intent={"mons15"}
                    classname="leading-[19.5px] font-medium text-primary-green"
                >
                    Completed
                </Typography>
            ),
            icon: (
                <Image
                    src={"/assets/CIRCLE-CHECK.png"}
                    width={18}
                    height={20}
                    alt="icon"
                />
            ),
        },
        ready: {
            text: (
                <Typography
                    intent={"mons15"}
                    classname="leading-[19.5px] font-medium text-primary-green"
                >
                    Ready for Pick Up
                </Typography>
            ),
            icon: <Image src={"/assets/BOX.png"} width={18} height={20} alt="icon" />,
        },
        failed: {
            text: (
                <Typography
                    intent={"mons15"}
                    classname="leading-[19.5px] font-medium text-text-red"
                >
                    Payment Failed
                </Typography>
            ),
            icon: (
                <Image
                    src={"/assets/CIRCLE-XMARK.png"}
                    width={18}
                    height={20}
                    alt="icon"
                />
            ),
        },
    };

    return (
        <Flex className={["items-center gap-2", classname].join(" ")}>
            {stateMapping[state].icon} {stateMapping[state].text}
        </Flex>
    );
};

type OrderHeaderType = {
    state?: State;
    classname?: string;
    onShowQR?: () => void;
};

type OrderIdType = {
    state?: "error" | "success";
};

const OrderId: FC<OrderIdType> = ({ state = "success" }) => {
    return (
        <Flex
            className={[
                "py-2 px-3",
                state === "success" ? "bg-background-lightGreen" : "bg-text-red/10",
            ].join(" ")}
        >
            <Typography
                classname={[
                    "leading-[14px] font-semibold tracking-normal",
                    state === "success" ? "text-primary-green" : "text-text-red",
                ].join(" ")}
                intent={"mons14"}
            >
                ORDER ID #1725178261925A81
            </Typography>
        </Flex>
    );
};

const Tooltip: FC<{ text: string }> = ({ text }) => {
    return (
        <Flex  className="shrink-0 hover:cursor-pointer gap-2 relative tooltip-container">
            <InfoIcon className="shrink-0" />
            <Typography
                intent={"mons15"}
                classname="leading-[19.5px] text-text-black-70 font-medium tracking-normal"
            >
                {text}
            </Typography>
            <FlexColumn className="px-l py-4 bg-white rounded-md border border-border-whiteSmoke shadow-modal gap-4 absolute xl:-left-1/3 w-full top-[35px] hidden tooltip-child">
                <Typography
                    classname="font-semibold leading-[19.5px] text-text-black-100 tracking-normal"
                    intent={"mons15"}
                >
                    ORDER ID #1725178261925A81
                </Typography>
                <Flex className="justify-between">
                    <Typography intent={"mons15"} classname="leading-[19.5px] text-text-black-100">07/24/2023 23:16 </Typography>
                    <Typography intent={"mons15"} classname="leading-[19.5px] text-text-black-70">Order placed</Typography>
                </Flex>
                <Flex className="justify-between">
                    <Typography intent={"mons15"} classname="leading-[19.5px] text-text-black-100">07/24/2023 23:16 </Typography>
                    <Typography intent={"mons15"} classname="leading-[19.5px] text-text-black-70">Order placed</Typography>
                </Flex>
            </FlexColumn>
        </Flex>
    );
};

const OrderHeader: FC<OrderHeaderType> = ({
    state = "completed",
    onShowQR,
}) => {
    const stateMapping = {
        completed: "Picked Up: 07/24/2023 23:16",
        ready: "paid ($23.12): 07/24/2023 23:16",
        failed: "Cancelled: 07/16/2023 16:16",
    };
    return (
        <Flex className="p-6 px-5 m:px-6 justify-between border-b border-b-background-lightGreen items-start xl:items-center flex-col m:flex-row gap-4">
            <Flex className="gap-2 xl:items-center flex-col xl:flex-row">
                <OrderId state={state === "failed" ? "error" : "success"} />
                <Flex className="gap-2">
                    <Tooltip text={`Order ${stateMapping[state]}`} />
                </Flex>
                <OrderState state="completed" classname="xl:hidden" />
            </Flex>
            <Flex className="gap-4 items-center">
                <OrderState state={state} classname="hidden xl:flex" />
                <div className="h-[45px] w-[1px] bg-text-black-40 hidden xl:block" />
                {state === "ready" && (
                    <Button
                        text="QR code"
                        onClick={onShowQR}
                        intent={"filled"}
                        typographyVariant="buttons"
                        classname="shrink-0"
                    />
                )}
                {state === "completed" && (
                    <Button
                        text="write review"
                        intent={"filled"}
                        typographyVariant="buttons"
                        classname="shrink-0"
                    />
                )}
                {state === "failed" && (
                    <Button
                        text="Pay now"
                        intent={"outline"}
                        typographyVariant="buttons"
                        classname="shrink-0"
                    />
                )}
            </Flex>
        </Flex>
    );
};

const CartItem = () => {
    return (
        <Flex className="gap-4">
            <Flex
                className={[
                    "w-[87px] h-[90px] shrink-0 relative border-[1.222px] border-border-whiteSmoke overflow-hidden rounded-[4px] shadow-cart-item",
                ].join(" ")}
            >
                <Image
                    src={
                        "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg"
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
                        1:1 Strawberry Lemonade [10pk] (100mg CBD/100mg THC)
                    </Typography>
                    <Flex className="gap-2 items-center">
                        <Flex className="p-1 bg-background-green-20">
                            <Typography
                                intent={"monsBold10"}
                                classname="leading-[10px] text-text-green capitalize"
                            >
                                1x
                            </Typography>
                        </Flex>
                        <Typography
                            intent={"mons15"}
                            classname="leading-[21px] font-medium tracking-normal text-text-black-100"
                        >
                            Variation: 100mg
                        </Typography>
                    </Flex>
                    <Flex className="gap-2.5">
                        <Typography
                            intent={"mons15"}
                            classname="text-text-black-100 font-bold leading-[15px]"
                        >
                            $21.25
                        </Typography>
                        <Typography
                            intent={"mons15"}
                            classname="text-text-black-70 font-normal leading-[15px] line-through"
                        >
                            $25.00
                        </Typography>
                    </Flex>
                </FlexColumn>
            </Flex>
        </Flex>
    );
};

const OrderBody = () => {
    return (
        <FlexColumn className="p-6 px-5 m:px-6 gap-6 border-b border-b-text-black-10">
            <Typography
                intent={"mons15"}
                classname="text-text-black-100 leading-[19.5px]"
            >
                Mike’s Dispensary <br />
                <Typography classname="text-text-black-70">
                    4th Jones Avenue, 0162-12 <br /> Toronto, ON, Canada
                </Typography>
            </Typography>
            <CartItem />
            <CartItem />
            <CartItem />
        </FlexColumn>
    );
};

const OrderFooter: FC<OrderHeaderType> = ({ state }) => {
    return (
        <Flex className="py-6 px-5 xl:px-[42px] justify-between m:flex-row flex-col-reverse gap-y-4">
            <Flex className="gap-2 m:gap-4 flex-col m:flex-row">
                {state === "ready" && (
                    <Button
                        intent={"outline"}
                        text="cancel order"
                        classname="w-full"
                        typographyVariant="grstk15"
                        textClassname="leading-[15px] tracking-[2.175px] uppercase text-black"
                    />
                )}
                <Button
                    intent={"outline"}
                    text="contact store"
                    classname="w-full"
                    typographyVariant="grstk15"
                    textClassname="leading-[15px] tracking-[2.175px] uppercase text-black"
                />
            </Flex>

            <Flex className="items-center gap-2 justify-end">
                <Typography
                    intent="mons15"
                    classname="leading-[19.5px] font-medium text-text-black-100 tracking-normal"
                >
                    Order total
                </Typography>
                <Typography intent={"mons22"} classname="leading-[28.6px] font-bold">
                    $51.75
                </Typography>
            </Flex>
        </Flex>
    );
};
type OrderCardType = {
    status?: "failed" | "completed" | "ready";
    onShowQR?: () => void;
};
const OrdersCard: FC<OrderCardType> = ({ status = "completed", onShowQR }) => {
    return (
        <FlexColumn className="border bg-white border-background-lightGreen shadow-order rounded-md">
            <OrderHeader state={status} onShowQR={onShowQR} />
            <OrderBody />
            <OrderFooter state={status} />
        </FlexColumn>
    );
};

export default function MyOrdersPage() {
    const [showQrModal, setShowQrModal] = useState(false);

    return (
        <MainLayout footerItems={[]}>
            <SafeAreaSection classname="py-[42px] bg-background-whiteS min-h-screen">
                <FlexColumn className="gap-6">
                    <Typography
                        intent={"grstkt22"}
                        classname="text-text-black-100 leading-[22px] tracking-[-0.77px] font-medium"
                    >
                        My Orders
                    </Typography>
                    <Divider classname="bg-text-black-10" />
                    <FlexColumn className="gap-6">
                        <OrdersCard status="completed" />
                        <OrdersCard status="ready" onShowQR={() => setShowQrModal(true)} />
                        <OrdersCard status="failed" />
                    </FlexColumn>
                </FlexColumn>
            </SafeAreaSection>
            <QrModal open={showQrModal} setOpen={setShowQrModal} />
        </MainLayout>
    );
}
