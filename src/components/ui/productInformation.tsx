"use client";

import { Rating } from "@/cards/rating";
import { TypeBadge } from "@/cards/tag";
import { Button, IconButton, Typography } from "@/core";
import { Flex, FlexCenter, FlexColumn, Pressable } from "@/layout";
import { CustomIconHandler, IconHandler } from "../../utils/icon";
import { FC, useState } from "react";
import { PriceTag } from "@/cards/price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faTag } from "@fortawesome/free-solid-svg-icons";
import { CircleCheckBox } from "@/core/checkbox";
import { Input } from "@/core/input";
import { SafeAreaSection } from "@/layout/spacing";
import Image from "next/image";

const Badge = () => {
    return (
        <Flex className="px-2 py-l border border-border-whiteSmoke items-center gap-1 rounded-md">
            <IconHandler name="clouds-moon" classname="text-background-blue" />
            <Typography
                classname="leading-[13px] tracking-[0.71px] text-background-blue font-semibold"
                intent={"mons13"}
            >
                INDICA
            </Typography>
        </Flex>
    );
};

type TagProps = {
    title: string;
    percentage: number;
};

const Tag: FC<TagProps> = ({ title, percentage }) => {
    return (
        <Flex className="px-2 py-l border border-border-whiteSmoke items-center gap-1 rounded-md">
            <Typography
                classname="leading-[13px] uppercase tracking-[0.71px] text-primary-green font-semibold"
                intent={"mons13"}
            >
                {`${title} ${percentage}%`}
            </Typography>
        </Flex>
    );
};

const SaleTag = () => {
    return (
        <Flex className="rounded-[2px] border-[0.8px] border-text-red bg-text-red p-[3px] gap-0.5">
            <CustomIconHandler name="tag-sale" />

            <Typography
                intent={"monsBold12"}
                classname="text-white"
            >{`15%`}</Typography>
            <Typography intent={"monsBold12"} classname="text-white">
                OFF
            </Typography>
        </Flex>
    );
};

type VariantsProp = {
    isSelected?: boolean;
    desc: string;
    onClick?: () => void;
};

const Variant: FC<VariantsProp> = ({ isSelected = false, desc, onClick }) => {
    return (
        <Pressable onClick={onClick}>
            <Flex
                className={[
                    "rounded-md border justify-between border-border-whiteSmoke min-w-[244px] p-l items-center",
                    isSelected && "border-primary-brand",
                ].join(" ")}
            >
                <Typography
                    intent={"mons15"}
                    classname="leading-[19.5px] font-medium text-black"
                >
                    {desc}
                </Typography>
                <CircleCheckBox isSelected={isSelected} />
            </Flex>
        </Pressable>
    );
};

const QuantitySelecter = () => {
    const [quantity, setQuantity] = useState<number | "">(0)
    return <Flex className="items-center">
        <IconButton disabled={quantity === 0} onClick={() => setQuantity(quantity !== "" ? quantity - 1 : 0)} classname="p-l border border-border-whiteSmoke" icon={<IconHandler name="minus" classname="text-[15px] leading-[18px]" />} />
        <Input containerClassname="border border-border-whiteSmoke h-[43px] w-full" type="number" className="text-mons-20 text-center w-full" value={quantity} onChange={(e) => setQuantity(Math.abs(Number(e.target.value)) || "")} />
        <IconButton onClick={() => setQuantity(quantity !== "" ? quantity + 1 : 0)} classname="p-l border border-border-whiteSmoke" icon={<IconHandler name="plus" classname="text-[15px] leading-[18px]" />} />
    </Flex>
}

const ProductImageSlider = () => {
    return <FlexColumn className="w-[552px] gap-2">
        <Flex className="w-[551px] h-[543px] relative">
            <Image src={"https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"} fill alt="image" />
        </Flex>
        <Flex className="gap-2">
            <Pressable>
                <Flex className={["rounded-md w-[122px] h-[105px] relative overflow-hidden border-[1px] border-primary-brand"].join(" ")}>
                    <Image src={"https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"} fill alt="image" />
                </Flex>
            </Pressable>
            <Pressable>
                <Flex className="rounded-md w-[122px] h-[105px] relative overflow-hidden">
                    <Image src={"https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"} fill alt="image" />
                </Flex>
            </Pressable>
        </Flex>
    </FlexColumn>
}

const StoreCard = () => {
    return <FlexColumn className="py-[27px] px-[22px] rounded-md bg-primary-darkGreen gap-4">
        <Flex className="gap-4">
            <Flex className="rounded-full w-[100px] h-[100px] relative overflow-hidden border border-white">
                <Image src={"https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"} fill alt="image" />
            </Flex>
            <FlexColumn className="gap-2">
                <FlexCenter className="p-[5px] bg-background-green-8 w-fit">
                    <Typography intent={"mons12"} classname="font-semibold leading-[12px] text-primary-brand">
                        Recreational
                    </Typography>
                </FlexCenter>
                <Typography intent={"grskt18"} classname=" tracking-[-0.63px] font-medium text-white">
                    Rendal Store - Jones Ave
                </Typography>
                <Typography intent={"mons12"} classname="leading-[15.6px] text-text-white-70">
                    Toronto, ON, Canada
                </Typography>
                <Rating rating={4} count={212} textColor="white" extend />
            </FlexColumn>
        </Flex>
        <Button text="VIEW STORE" intent={"filled"} typographyVariant="grstk15" textClassname="" />
    </FlexColumn>
}

export const ProductInformation = () => {
    const [variant, setVariants] = useState<null | number>(null);
    const [state, setState] = useState(false)
    const [state1, setState1] = useState(false)

    return (
        <SafeAreaSection>
            <Flex className="gap-[68px] py-[48px] justify-center">
                <ProductImageSlider />
                <FlexColumn className="gap-6 max-w-[505px]">
                    <FlexColumn className="gap-5">
                        <Typography intent={"grskt12"} classname="text-text-black-70">
                            EDIBLES
                        </Typography>
                        <Typography intent={"grstkt20"}>
                            Evidence™️ Prison Shortys - Guava
                        </Typography>
                        <Rating count={121} rating={3.3} textColor="black" />
                    </FlexColumn>
                    <Flex className="gap-3">
                        <Badge />
                        <Tag title="THC" percentage={6} />
                        <Tag title="Delta" percentage={9} />
                        <Tag title="CBD" percentage={5} />
                    </Flex>
                    <Flex className="gap-4 items-center">
                        <Flex className="gap-2.5">
                            <PriceTag price={21.25} variant="big" />
                            <PriceTag price={21.25} strikeThrough variant="big" />
                        </Flex>
                        <SaleTag />
                    </Flex>
                    <FlexColumn className="gap-4">
                        <Typography
                            intent={"mons15"}
                            classname="leading-[19.5px] font-semibold text-black"
                        >
                            Variation
                        </Typography>
                        <Flex className="gap-4">
                            <Variant
                                desc="100mg"
                                isSelected={variant === 0}
                                onClick={() => setVariants(0)}
                            />
                            <Variant
                                desc="100mg"
                                isSelected={variant === 1}
                                onClick={() => setVariants(1)}
                            />
                        </Flex>
                    </FlexColumn>
                    <FlexColumn className="gap-4">
                        <Flex className="gap-3">
                            <Typography
                                intent={"mons15"}
                                classname="leading-[19.5px] font-semibold text-black"
                            >
                                Quantity
                            </Typography>
                            <Typography
                                intent={"mons15"}
                                classname="leading-[19.5px] font-medium text-text-black-40"
                            >
                                4749 pieces available
                            </Typography>
                        </Flex>
                        <QuantitySelecter />
                    </FlexColumn>
                    <Button text="add to cart" intent={"filled"} typographyVariant="grstk15" textClassname="uppercase" />
                    <div className="h-[1px] bg-border-whiteSmoke" />
                    <FlexColumn className="gap-2.5">
                        <Flex className="items-center justify-between">
                            <Typography intent={"grskt18"} classname="leading-[23.4px] font-normal uppercase">
                                PRODUCT DETAILS
                            </Typography>
                            <IconButton onClick={() => setState(!state)} icon={<IconHandler name={state ? "minus" : "plus"} classname="text-[20px] leading-[24px] font-light" />} />
                        </Flex>
                        {
                            state && <FlexColumn className="gap-2.5">
                                <Typography intent={"mons15"} classname="leading-[19.5px] font-normal">
                                    Lineage: Marshmallow OG x grape gasoline Flavor: Flower only: Similar to Marshmallow OG but perhaps even better – similar unique, nutty flavor with a little more creamy smoothness. There's a good reason why our flower is renowned in the industry - we don't blind-source. Our ladies are grown in-house using only organic ingredients, dried and cured.
                                </Typography>
                                <Typography intent={"mons15"} classname="leading-[19.5px] font-normal">
                                    Type: <Typography intent={"mons15"} classname="leading-[19.5px] font-bold">
                                        Indica
                                    </Typography>
                                    <br />
                                    Weight: <Typography intent={"mons15"} classname="leading-[19.5px] font-bold">
                                        100g
                                    </Typography> <br />
                                    Strain: <Typography intent={"mons15"} classname="leading-[19.5px] font-bold">
                                        Low Key Kush
                                    </Typography> <br />
                                    Total Cannabinoids: <Typography intent={"mons15"} classname="leading-[19.5px] font-bold">
                                        20
                                    </Typography> <br />
                                    Batch information: <Typography intent={"mons15"} classname="leading-[19.5px] font-bold">
                                        KLT - 685115300
                                    </Typography> <br />
                                    Harvest Date: <Typography intent={"mons15"} classname="leading-[19.5px] font-bold">
                                        1/6/2023
                                    </Typography>

                                </Typography>
                            </FlexColumn>
                        }
                    </FlexColumn>
                    <div className="h-[1px] bg-border-whiteSmoke" />
                    <FlexColumn className="gap-2.5">
                        <Flex className="items-center justify-between">
                            <Typography intent={"grskt18"} classname="leading-[23.4px] font-normal uppercase">
                                BRAND
                            </Typography>
                            <IconButton onClick={() => setState1(!state1)} icon={<IconHandler name={state1 ? "minus" : "plus"} classname="text-[20px] leading-[24px] font-light" />} />
                        </Flex>
                        {state1 && <Flex className="gap-l">
                            <Flex className="rounded-md w-[107px] h-[80px] relative overflow-hidden shadow-brand border-2 border-border-whiteSmoke">
                                <Image src={"https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"} fill alt="image" />
                            </Flex>
                            <FlexColumn className="gap-2">
                                <Typography intent={"mons15"} classname="font-semibold leading-[19.5px]">
                                    Evidence
                                </Typography>
                                <Typography intent={"mons15"} classname="leading-[19.5px] font-medium text-text-black-70">
                                    232 Retail Dispensaries
                                </Typography>
                                <Button text="shop brand" intent={"text"} className="w-fit" typographyVariant="grskt12" textClassname="leading-[12px] uppercase tracking-[1.75px] font-medium hover:underline text-primary-brand" />
                            </FlexColumn>
                        </Flex>}

                    </FlexColumn>
                    <div className="h-[1px] bg-border-whiteSmoke" />
                    <StoreCard />
                </FlexColumn>
            </Flex>
        </SafeAreaSection>
    );
};
