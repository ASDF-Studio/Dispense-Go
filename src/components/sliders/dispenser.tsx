import { MemoProductCard } from "@/cards/deals"
import { Button, Typography } from "@/core"
import { Flex } from "@/layout"
import { SafeAreaSection } from "@/layout/spacing"
import { StoreBanner } from "./banner"
import { IconHandler } from "../../utils/icon"
import { FC } from "react"

type DispenseInfoType = {
    destination?: number
    variant?: "primary" | "secondary"
    name?: string
    title?: string
}

export const DispenseInformation: FC<DispenseInfoType> = ({ variant = "primary", destination, title }) => {

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

    return <Flex className="absolute top-[62px] left-[425px] items-center gap-12">
        <Flex className={["py-2 px-3", tagClassMapping[variant].tagbg].join(" ")}>
            <Typography intent={"mons14"} classname={tagClassMapping[variant].tagtext}>
                {destination} miles away
            </Typography>
        </Flex>
        <StoreBanner text={title} color={tagClassMapping[variant].title} classname="h-auto w-[613px]" />
        <Button intent={"text"} text="VIEW ALL" textClassname={tagClassMapping[variant].button} typographyVariant="grstk14" icon={<IconHandler name="arrow-right" classname={["font-light tracking-[2.03px]", tagClassMapping[variant].button].join(" ")} />} />
    </Flex>
}

type Props = {
    variant: "primary" | "secondary" | "tertiary"
    text: string
    productColor?: "white" | "black"
}

export const ProductScroll: FC<Props> = ({ variant = "primary", text = "", productColor = "black" }) => {

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

    return <SafeAreaSection classname={["flex gap-6 overflow-hidden pt-[41px] pb-[52px] bg-background-lightGreen items-end relative", colorMapping[variant].background].join(" ")}>
        <DispenseInformation destination={0.05} variant={colorMapping[variant].infoVariant as "primary" | "secondary"} title={text} />
        <MemoProductCard size="big" color={productColor} />
        <MemoProductCard color={productColor} />
        <MemoProductCard color={productColor} />
        <MemoProductCard color={productColor} />
        <MemoProductCard color={productColor} />
        <MemoProductCard color={productColor} />
    </SafeAreaSection>
}