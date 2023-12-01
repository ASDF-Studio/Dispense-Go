import { MemoProductCard } from "@/cards/deals"
import { Button, Typography } from "@/core"
import { Flex, FlexCenter } from "@/layout"
import { SafeAreaSection } from "@/layout/spacing"
import { StoreBanner } from "./banner"
import { IconHandler } from "../../utils/icon"
import { FC } from "react"
import { DraggingScrollY } from "@/layout/dragging"
import Link from "next/link"

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

    return <Flex className="relative items-center gap-12 justify-between">
        <FlexCenter className="gap-4">
            <Typography intent={"grskt28"} classname="">
                {title}
            </Typography>
            {
                destination != 0 &&
                <Flex className={["py-2 px-3", tagClassMapping[variant].tagbg].join(" ")}>
                    <Typography intent={"mons14"} classname={tagClassMapping[variant].tagtext}>
                        {destination} miles
                    </Typography>
                </Flex>
            }
        </FlexCenter>
        <Link href={'/individualStore'}>
            <Button
                intent={"text"} 
                text="VIEW ALL" 
                textClassname={tagClassMapping[variant].button} 
                typographyVariant="grstk14" 
                icon={
                    <IconHandler 
                        name="arrow-right" 
                        classname={["font-light tracking-[2.03px] pr-5", tagClassMapping[variant].button].join(" ")} 
                    />
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

    return <div><SafeAreaSection classname={["flex gap-6 overflow-hidden pt-[32px] pb-[32px] relative flex-col", colorMapping[variant].background].join(" ")}>
        <ProductListInformation destination={destination} variant={colorMapping[variant].infoVariant as "primary" | "secondary"} title={text} />
        <DraggingScrollY>
            <Flex className="gap-16 overflow-hidden">
                <MemoProductCard color={productColor} />
                <MemoProductCard color={productColor} />
                <MemoProductCard color={productColor} />
                <MemoProductCard color={productColor} />
                <MemoProductCard color={productColor} />
                <MemoProductCard color={productColor} />
                <MemoProductCard color={productColor} />
                <MemoProductCard color={productColor} />
                <MemoProductCard color={productColor} />
                <MemoProductCard color={productColor} />
                <MemoProductCard color={productColor} />
                <MemoProductCard color={productColor} />
            </Flex>
        </DraggingScrollY>
    </SafeAreaSection>
    <div className="border-b border-border-whiteSmoke mb-2"></div>
    </div>
}