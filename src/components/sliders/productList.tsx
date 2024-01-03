import { MemoProductCard } from "@/cards/deals"
import { Button, Typography } from "@/core"
import { Flex, FlexCenter } from "@/layout"
import { SafeAreaSection } from "@/layout/spacing"
import { StoreBanner } from "./banner"
import { IconHandler } from "../../utils/icon"
import { FC } from "react"
import { DraggingScrollY } from "@/layout/dragging"
import Link from "next/link"
import { Arrow } from "../../svg"

type ProductListInfoType = {
    destination?: number
    variant?: "primary" | "secondary"
    name?: string
    title?: string
}

export const ProductListInformation: FC<ProductListInfoType> = ({ variant = "primary", destination, title }) => {

    const tagClassMapping = {
        primary: {
            tagbg: "bg-primary-green/20",
            tagtext: "text-primary-green",
            title: "text-black",
            button: "text-black/70"
        },
        secondary: {
            tagbg: "bg-background-green1",
            tagtext: "text-white",
            title: "text-white",
            button: "text-white"
        }
    }

    return <Flex className="relative items-center xl:gap-12 justify-between pr-5 m:pr-6 xl:pr-[40px]">
        <FlexCenter className="gap-4 relative max-w-[256px] m:max-w-[292px] xl:max-w-full">
            <Typography intent={"grskt28"} classname="line-clamp-2 leading-[33.6px] xl:leading-[28px]">
                {title}
            </Typography>

            <Flex className={["p-[5px] right-0 bottom-0 xl:hidden absolute", tagClassMapping[variant].tagbg].join(" ")}>
                <Typography intent={"mons13"} classname={[tagClassMapping[variant].tagtext, "leading-[13px] font-semibold tracking-normal"].join(" ")}>
                    {destination} miles
                </Typography>
            </Flex>

            {
                destination != 0 &&
                <Flex className={["py-2 px-3 hidden xl:flex", tagClassMapping[variant].tagbg].join(" ")}>
                    <Typography intent={"mons14"} classname={tagClassMapping[variant].tagtext}>
                        {destination} miles
                    </Typography>
                </Flex>
            }
        </FlexCenter>
        <Link href={'/individualStore'} className="hidden m:block">
            <Button
                intent={"text"}
                text="VIEW ALL"
                textClassname={tagClassMapping[variant].button}
                typographyVariant="grstk14"
                icon={
                    <Arrow />
                }
            />
        </Link>
    </Flex>
}

type Props = {
    variant: "primary" | "secondary" | "tertiary"
    text: string
    productColor?: "white" | "black"
    destination?: number
}

export const ProductList: FC<Props> = ({ variant = "tertiary", text = "", productColor = "black", destination = 0 }) => {

    const colorMapping = {
        primary: {
            background: "bg-background-lightGreen",
            infoVariant: "primary"
        },
        secondary: {
            background: "bg-primary-green",
            infoVariant: "secondary"
        },
        tertiary: {
            background: "bg-white",
            infoVariant: "primary"
        },
    }

    return <div><SafeAreaSection withSpacing={false} classname={["flex pl-5 m:pl-6 xl:pl-[42px] gap-[26px] m:gap-6 xl:gap-12 overflow-hidden  relative flex-col", colorMapping[variant].background].join(" ")}>
        <ProductListInformation destination={destination} variant={colorMapping[variant].infoVariant as "primary" | "secondary"} title={text} />
        {/* <DraggingScrollY> */}
        <Flex className="gap-6 overflow-auto">
            <MemoProductCard size="xsmall" color={productColor} />
            <MemoProductCard size="xsmall" color={productColor} />
            <MemoProductCard size="xsmall" color={productColor} />
            <MemoProductCard size="xsmall" color={productColor} />
            <MemoProductCard size="xsmall" color={productColor} />
            <MemoProductCard size="xsmall" color={productColor} />
            <MemoProductCard size="xsmall" color={productColor} />
            <MemoProductCard size="xsmall" color={productColor} />
            <MemoProductCard size="xsmall" color={productColor} />
            <MemoProductCard size="xsmall" color={productColor} />
            <MemoProductCard size="xsmall" color={productColor} />
        </Flex>
        {/* </DraggingScrollY> */}
        <Link href={'/individualStore'} className="m:hidden self-center">
            <Button
                intent={"text"}
                text="VIEW ALL"
                textClassname={"text-black/70"}
                typographyVariant="grstk14"
                icon={
                    <Arrow />
                }
            />
        </Link>
    </SafeAreaSection>
    </div>
}