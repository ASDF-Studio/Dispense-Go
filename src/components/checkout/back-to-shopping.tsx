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

type CheckoutCartType = {
    id: number;
    name?: string;
    location?: string;
    count?: number;
};

const CheckoutCartItem = () => {
    return (
        <Flex className="gap-4 items-start">
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
                    <Typography
                        intent={"mons15"}
                        classname="text-text-black-100 font-bold leading-[15px]"
                    >
                        $21.25
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
                    />
                    <Input
                        containerClassname="border border-border-whiteSmoke h-[32px] w-full"
                        type="number"
                        value={0}
                        className="text-mons-20 text-center w-full"
                    />
                    <IconButton
                        classname="px-[12px] h-8 py-[5px] border border-l-0 border-border-whiteSmoke"
                        icon={
                            <IconHandler name="plus" classname="text-[15px] leading-[18px]" />
                        }
                    />
                </Flex>
            </Flex>
            <IconButton className="shrink-0 xl:pt-2" icon={<TrashIcon />} />
        </Flex>
    );
};

const CheckoutCartHeader: FC<CheckoutCartType> = ({ id = 0 }) => {
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
                    Mike’s Dispensary <br />
                    <Typography classname="text-text-black-70">
                        4th Jones Avenue, 0162-12 <br /> Toronto, ON, Canada
                    </Typography>
                </Typography>
            </FlexColumn>
            <Typography
                classname="capitalize leading-[19.5px] tracking-normal text-text-black-40 font-medium"
                intent={"mons15"}
            >
                4 products
            </Typography>
        </Flex>
    );
};

const CheckoutBody = () => {
    return (
        <FlexColumn className="px-5 m:px-6 gap-6">
            <CheckoutCartItem />
            <CheckoutCartItem />
            <CheckoutCartItem />
        </FlexColumn>
    );
};

const CheckoutCart = () => {
    return (
        <FlexColumn className="w-full border border-background-lightGreen rounded-md gap-6 py-5 m:pt-6 m:pb-0">
            <CheckoutCartHeader id={0} />
            <Divider color="lightGreen" />
            <CheckoutBody />
        </FlexColumn>
    );
};

const OrderRow: FC<{ type?: "bold" | "normal", name: string, price: string }> = ({ type = "normal", name, price }) => {
    return (
        <Flex className="justify-between gap-12">
            <Typography
                intent={"mons15"}
                classname={[
                    "leading-[19.5px] text-text-black-70",
                    type === "normal" ? "font-medium" : "font-bold",
                ].join(" ")}
            >
                {name || "Mike’s Dispensary"}
            </Typography>
            <Typography
                intent={"mons15"}
                classname={[
                    "leading-[19.5px] text-text-black-70",
                    type === "normal" ? "font-medium" : "font-bold",
                ].join(" ")}
            >
                {price || "$57.50"}
            </Typography>
        </Flex>
    );
};

const OrderSummery = () => {
    return (
        <FlexColumn className="m:max-w-[300px] shrink-0 xl:max-w-[478px] w-full py-12 px-5  xl:px-6 gap-6 bg-background-lightGreen m:h-[800px]">
            <Typography
                intent={"grstkt22"}
                classname="leading-[22px] tracking-[-0.77px] font-medium text-text-black-100"
            >
                Order Summary
            </Typography>
            <FlexColumn className="gap-4">
                <OrderRow name="Mike’s Dispensary" price="$57.50" />
                <OrderRow name="Jane Neuewzel & Ma Dispensary - Manhattan Avenue" price="$95.25" />
                <OrderRow name="Total Subtotal" price="$152.75" type="bold" />
                <Divider color="white" />
                <Flex className="justify-between">
                    <Typography intent={"mons22"} classname="leading-[28.6px] font-bold text-text-black-70">
                        Est. Total
                    </Typography>
                    <Typography intent={"mons22"} classname="leading-[28.6px] font-bold text-text-black-70">
                        $113.25
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
                        7 Total Products | 2 Pickup
                    </Typography>
                </Flex>
                <Divider type="dashed" classname="px-2.5 m:px-0" />
                <CheckoutCart />
                <Divider type="dashed" />
                <CheckoutCart />
            </FlexColumn>
            <OrderSummery />
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
