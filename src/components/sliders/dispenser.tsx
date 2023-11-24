import { ProductCard, ProductCardBig } from "@/cards/deals"
import { RadiusTag } from "@/cards/tag"
import { Button, Typography } from "@/core"
import { Flex } from "@/layout"
import { SafeAreaSection } from "@/layout/spacing"
import { StoreBanner } from "./banner"
import { IconHandler } from "../../utils/icon"
import { FC } from "react"



export const DispenseInformation = ({ colors }) => {
    return <Flex className="absolute top-[62px] left-[425px] items-center gap-12">
        <Flex className={["py-2 px-3 bg-primary-green/20", colors.tag].join(" ")}>
            <Typography intent={"mons14"} classname={colors.tagText}>
                0.05 miles away
            </Typography>
        </Flex>
        <StoreBanner text={colors.text} color={colors.title} classname="h-auto w-[613px]" />
        <Button intent={"text"} text="VIEW ALL" textClassname={colors.button} typographyVariant="grstk14" icon={<IconHandler name="arrow-right" classname={["font-light tracking-[2.03px]", colors.button].join(" ")} />} />
    </Flex>
}

type Props = {
    colorSchema: 0 | 1 | 2 | 3
}

export const ProductScroll: FC<Props> = ({ colorSchema = 0 }) => {

    const colorMapping = {
        0: {
            background: "bg-background-lightGreen",
            title: "text-black",
            text: "Bob's dispensary",
            button: "text-black/70",
            tag: "bg-primary-green/20",
            tagText: "text-primary-green",
            color: "black"
        },
        1: {
            background: "bg-primary-green",
            title: "text-white",
            button: "text-white",
            text: "Featured products",
            tag: "bg-background-green1",
            tagText: "text-white",
            color: "white"
        },
        2: {
            background: "bg-background-lightGreen",
            title: "text-black",
            text: "Mike's dispensary",
            button: "text-black/70",
            tag: "bg-primary-green/20",
            tagText: "text-primary-green",
            color: "black"
        },
        3: {
            background: "bg-white",
            title: "text-black",
            text: "HAPPY LIGHT DISPENSARY",
            button: "text-black/70",
            tag: "bg-primary-green/20",
            tagText: "text-primary-green",
            color: "black"
        }
    }

    return <SafeAreaSection classname={["flex gap-6 overflow-hidden pt-[41px] pb-[52px] bg-background-lightGreen items-end relative", colorMapping[colorSchema].background].join(" ")}>
        <DispenseInformation colors={colorMapping[colorSchema]} />
        <ProductCardBig color={colorMapping[colorSchema].color} />
        <ProductCard color={colorMapping[colorSchema].color} />
        <ProductCard color={colorMapping[colorSchema].color} />
        <ProductCard color={colorMapping[colorSchema].color} />
        <ProductCard color={colorMapping[colorSchema].color} />
        <ProductCard color={colorMapping[colorSchema].color} />
    </SafeAreaSection>
}