import { IconButton, Typography } from "@/core"
import { Flex, FlexColumn } from "@/layout"
import { FC } from "react"
import { Rating } from "./rating"
import { PriceTag } from "./price"
import { SaleTag, Tag, TypeBadge } from "./tag"
import { CustomImage } from "@/core/image"
import { AddtoCart } from "./add-cart"
import { AddToFavourite } from "./add-favourite"



type Props = {
    price?: number
    title?: string
    sellPercentage?: number
    badge?: "hybrid" | "indica" | "sativa"
    oldPrice?: number
    images?: string[]
}

const ProductImage = () => {
    return <div className="relative w-fit">
        <AddToFavourite classname="absolute z-10 top-2.5 right-2.5" />
        <TypeBadge intent={"sativa"} classname="absolute z-10 top-2.5 left-2.5 " />
        <SaleTag percentage={15} classname="absolute z-10 bottom-2.5 left-2.5" />
        <CustomImage containerClassName="rounded-md shadow-product-card card-border w-[250px] h-[227px]" imageUrl="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png" width={250} height={227} />
    </div>
}

export const ProductCard: FC<Props> = ({ price }) => {
    return <FlexColumn className="gap-l w-[250px]">
        <ProductImage />
        <Flex className="gap-2.5">
            <FlexColumn className="gap-2.5">
                <Typography intent="monsNormal13" classname="w-[200px] line-clamp-2">Pod Live Rosin 0.5g  Pod Live Rosin 0.5g  (T3)</Typography>
                <Flex className="gap-2.5 items-center"> <PriceTag price={21.25} /><PriceTag strikeThrough={true} price={21.00} /> <Tag text="THC 20%" /></Flex>
                <Rating rating={3.3} count={121} />
            </FlexColumn>
            <AddtoCart />
        </Flex>
    </FlexColumn>
}