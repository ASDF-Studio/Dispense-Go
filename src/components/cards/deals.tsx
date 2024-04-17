import { Typography } from "@/core";
import { Flex, FlexColumn } from "@/layout";
import { FC, memo } from "react";
import { Rating } from "./rating";
import { PriceTag } from "./price";
import { SaleTag, Tag, TypeBadge } from "./tag";
import { CustomImage } from "@/core/image";
import { AddtoCart } from "./add-cart";
import { AddToFavourite } from "./add-favourite";
import { AnimatedDiv } from "@/animations/scroll";
import Link from "next/link";

type BadgeProps = {
    size: "big" | "small" | "xsmall" | "msmall";
    URLS?: string[];
    badge?: "hybrid" | "indica" | "sativa";
    sellPercentage?: number;
};

const ProductImage: FC<BadgeProps> = ({
    size,
    URLS,
    badge,
    sellPercentage,
}) => {
    const sizes = {
        big: "w-[358px] h-[376px]",
        small: "w-[257px] h-[271px]",
        msmall: "w-[252px] h-[189px]",
        xsmall: "w-[232px] h-[189px]",
        phone: "w-[160px] h-[189px]",
        tablet: "w-[229px] h-[189px]",
    };

    return (
        <div className='relative w-fit'>
            <AddToFavourite
                classname={[
                    "absolute z-10",
                    size === "small" ? "top-2.5 right-2.5" : "top-5 right-5",
                ].join(" ")}
            />
            <TypeBadge
                intent={badge || "sativa"}
                classname={[
                    "absolute z-10",
                    size === "small" ? " top-2.5 left-2.5" : " top-5 left-5",
                ].join(" ")}
            />
            {sellPercentage && (
                <SaleTag
                    percentage={sellPercentage}
                    classname={[
                        "absolute z-10",
                        size === "small"
                            ? "bottom-2.5 left-2.5"
                            : "bottom-5 left-5",
                    ].join(" ")}
                />
            )}
            <CustomImage
                containerClassName={[
                    "rounded-md shadow-product-card card-border",
                    sizes[size],
                ].join(" ")}
                imageUrl={
                    URLS?.[0] ||
                    "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
                }
                width={size === "small" ? 257 : 358}
                height={size === "small" ? 271 : 376}
            />
        </div>
    );
};

type ProductCardProps = {
    price?: number;
    title?: string;
    sellPercentage?: number;
    badge?: "hybrid" | "indica" | "sativa";
    oldPrice?: number;
    images?: string[];
    size?: "big" | "small" | "xsmall" | "msmall" | "phone" | "tablet";
    color?: "white" | "black";
    classname?: string;
    originalPrice: number;
    discountPrice: number;
    thc: number;
    rating: number;
    count: number;
};

const ProductCard: FC<ProductCardProps> = ({
    price,
    size = "small",
    color = "black",
    classname,
    title,
    images,
    badge,
    sellPercentage,
    index,
    originalPrice,
    discountPrice,
    thc,
    rating,
    count,
}) => {
    const getSize = {
        tablet: "w-[229px]",
        phone: "w-[160px]",
        xsmall: "w-[232px]",
        small: "w-[257px]",
        big: "w-[358px]",
    };

    return (
        // <AnimatedDiv>
        <FlexColumn className={["gap-l", getSize[size], classname].join(" ")}>
            <Link href={"/product"}>
                <ProductImage
                    size={size}
                    URLS={images}
                    badge={badge}
                    sellPercentage={sellPercentage}
                />
            </Link>
            <Flex className='gap-m justify-between'>
                <FlexColumn className='gap-2.5'>
                    <Flex className='gap-2.5'>
                        <Typography
                            intent='monsNormal13'
                            classname={[
                                "line-clamp-1 xl:line-clamp-2",
                                color == "white" && "text-white",
                            ].join(" ")}
                        >
                            {title ||
                                "1:1 Strawberry Lemonade [10pk] (100mg CBD/100mg THC)"}
                        </Typography>
                        <AddtoCart classname='m:hidden' />
                    </Flex>
                    <Flex className='gap-2.5 items-center'>
                        <PriceTag
                            price={discountPrice}
                            classname={`${color === "white" && "text-white"}`}
                        />
                        <PriceTag
                            strikeThrough={true}
                            price={originalPrice}
                            classname={color === "white" ? "text-white" : ""}
                        />
                        <Tag
                            text={`THC ${thc}%`}
                            type={color === "white" ? 1 : 0}
                        />
                    </Flex>
                    <Rating textColor={color} rating={rating} count={count} />
                </FlexColumn>
                <AddtoCart classname='hidden m:block' />
            </Flex>
        </FlexColumn>
        // </AnimatedDiv>
    );
};

export const MemoProductCard = memo(ProductCard);
