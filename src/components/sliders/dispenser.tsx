"use client";

import { MemoProductCard } from "@/cards/deals";
import { Button, Typography } from "@/core";
import { Flex } from "@/layout";
import { SafeAreaSection } from "@/layout/spacing";
import { StoreBanner } from "./banner";
import { IconHandler } from "../../utils/icon";
import { FC, useState } from "react";
import { PaddingX, PaddingXL, PaddingXR, Products } from "../../constants";
import { CustomSwiper } from "./swiper";
import Link from "next/link";
import { useAppSelector } from "../../redux/hook";

type DispenseInfoType = {
    destination?: number;
    variant?: "primary" | "secondary";
    name?: string;
    title?: string;
};

export const DispenseInformation: FC<DispenseInfoType> = ({
    variant = "primary",
    destination,
    title,
}) => {
    const tagClassMapping = {
        primary: {
            tagbg: "bg-primary-green/20",
            tagtext: "text-primary-green",
            title: "text-black",
            button: "text-black/70",
        },
        secondary: {
            tagbg: "bg-background-green1",
            tagtext: "text-white",
            title: "text-white",
            button: "text-white",
        },
    };

    return (
        <Flex
            className={[
                "flex-wrap xl:flex-row xl:flex-nowrap m:w-[43%] xl:w-auto justify-between  m:absolute top-[43px] left-[410px] xl:top-[50px] xl:left-[425px] items-center gap-5 xl:gap-12 m:pr-0",
                PaddingXR,
            ].join(" ")}
        >
            <Flex
                className={[
                    "py-2 order-1 px-3 shrink-0",
                    tagClassMapping[variant].tagbg,
                ].join(" ")}
            >
                <Typography
                    intent={"mons14"}
                    classname={tagClassMapping[variant].tagtext}
                >
                    {destination} miles away
                </Typography>
            </Flex>
            <StoreBanner
                text={title}
                color={tagClassMapping[variant].title}
                classname='max-w-[613px] order-3 xl:order-2'
            />
            <Link href={"/category"} className='order-2 xl:order-3'>
                <Button
                    intent={"text"}
                    text='VIEW ALL'
                    textClassname={tagClassMapping[variant].button}
                    typographyVariant='grstk14'
                    icon={
                        <IconHandler
                            name='arrow-right'
                            classname={[
                                "font-light tracking-[2.03px]",
                                tagClassMapping[variant].button,
                            ].join(" ")}
                        />
                    }
                />
            </Link>
        </Flex>
    );
};

type Props = {
    variant: "primary" | "secondary" | "tertiary";
    text: string;
    productColor?: "white" | "black";
};

export const ProductScroll: FC<Props> = ({
    variant = "primary",
    text = "",
    productColor = "black",
}) => {
    const colorMapping = {
        primary: {
            background: "bg-background-lightGreen",
            infoVariant: "primary",
        },
        secondary: {
            background: "bg-primary-green",
            infoVariant: "secondary",
        },
        tertiary: {
            background: "bg-white",
            infoVariant: "primary",
        },
    };

    const { products } = useAppSelector((state)=>state.products)

    return (
        <SafeAreaSection
            withSpacing={false}
            classname={[
                "flex gap-9 m:gap-0 flex-col m:flex-row pt-8 m:pt-[44px] xl:pt-[41px] bg-background-lightGreen relative",
                PaddingXL,
                colorMapping[variant].background,
            ].join(" ")}
        >
            <DispenseInformation
                destination={0.05}
                variant={
                    colorMapping[variant].infoVariant as "primary" | "secondary"
                }
                title={text}
            />
            <CustomSwiper
                withPagination={false}
                classname='!pb-8 xl:!pb-[50px] m:!pb-[42px]'
                wrapperClass='!items-end'
                gap={24}
            >
                {products.map((product, index) => {
                    return (
                        <MemoProductCard
                            key={product.productId}
                            index={index}
                            size={index === 0 ? "big" : "small"}
                            color={productColor}
                            title={product.title}
                            images={product.image}
                            badge={product.type}
                            sellPercentage={product?.sale}
                            discountPrice={product.discountPrice}
                            originalPrice={product.originalPrice}
                            productId={product.productId}
                            thc={product.thc}
                            rating={product.rating}
                            
                        />
                    );
                })}
                {/* <Flex className="overflow-x-auto overflow-y-hidden gap-6 m:items-end pb-8 xl:pb-[50px] m:pb-[42px]">
                
            </Flex> */}
            </CustomSwiper>
        </SafeAreaSection>
    );
};

export const ProductScrollTest: FC<Props> = ({
    variant = "primary",
    text = "",
    productColor = "black",
}) => {
    const [state, setState] = useState(true);

    const colorMapping = {
        primary: {
            background: "bg-background-lightGreen",
            infoVariant: "primary",
        },
        secondary: {
            background: "bg-primary-green",
            infoVariant: "secondary",
        },
        tertiary: {
            background: "bg-white",
            infoVariant: "primary",
        },
    };

    // classname={["flex gap-9 m:gap-0 flex-col m:flex-row pt-8 m:pt-[44px] xl:pt-[41px] bg-background-lightGreen relative", PaddingXL, colorMapping[variant].background].join(" ")}

    return (
        <SafeAreaSection withSpacing={false}>
            {/* <DispenseInformation destination={0.05} variant={colorMapping[variant].infoVariant as "primary" | "secondary"} title={text} /> */}
            <Button text='dwqdwqwq' onClick={() => setState(!state)} />
            <CustomSwiper>
                <MemoProductCard
                    size={state ? "big" : "small"}
                    color={productColor}
                    classname='hidden m:flex'
                />
                <MemoProductCard
                    color={productColor}
                    discountPrice={21.5}
                    originalPrice={21}
                />
                <MemoProductCard
                    color={productColor}
                    discountPrice={21.5}
                    originalPrice={21}
                />
                <MemoProductCard
                    color={productColor}
                    discountPrice={21.5}
                    originalPrice={21}
                />
                <MemoProductCard
                    color={productColor}
                    discountPrice={21.5}
                    originalPrice={21}
                />
                <MemoProductCard
                    color={productColor}
                    discountPrice={21.5}
                    originalPrice={21}
                />
                <MemoProductCard
                    color={productColor}
                    discountPrice={21.5}
                    originalPrice={21}
                />
                <MemoProductCard
                    color={productColor}
                    discountPrice={21.5}
                    originalPrice={21}
                />
                <MemoProductCard
                    color={productColor}
                    discountPrice={21.5}
                    originalPrice={21}
                />
            </CustomSwiper>
            {/* <Flex className="overflow-x-auto overflow-y-hidden gap-6 m:items-end pb-8 xl:pb-[50px] m:pb-[42px]">
            <MemoProductCard size="big" color={productColor} classname="hidden m:flex" />
            <MemoProductCard color={productColor} />
            <MemoProductCard color={productColor} />
            <MemoProductCard color={productColor} />
            <MemoProductCard color={productColor} />
            <MemoProductCard color={productColor} />
            <MemoProductCard color={productColor} />
            <MemoProductCard color={productColor} />
            <MemoProductCard color={productColor} />
        </Flex> */}
        </SafeAreaSection>
    );
};
