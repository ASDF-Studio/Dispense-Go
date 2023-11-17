import { Typography } from "@/core"
import { Flex, FlexColumn } from "@/layout"
import { FC } from "react"
import { CategoryTag, RadiusTag } from "./tag"
import { Rating } from "./rating"
import { CustomImage } from "@/core/image"
import { AddToFavourite } from "./add-favourite"

type Props = {

}

const StoreImage = () => {
    return <div className="relative w-fit">
        <AddToFavourite classname="absolute z-10 top-2.5 right-2.5" />
        <CustomImage containerClassName="rounded-md shadow-product-card card-border w-[107px] h-[107px]" imageUrl="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png" width={250} height={227} />
    </div>
}

export const StoreCard: FC<Props> = ({ }) => {
    return <Flex className="gap-l">
        <StoreImage />
        <FlexColumn className="gap-2">
            <Typography intent="mons13" classname="line-clamp-2 font-semibold leading-120% w-[136px]">Catalyst - Stanton (NOW OPEN)</Typography>
            <CategoryTag category="Medical & Recreational" />
            <RadiusTag radius={0.32} />
            <Rating rating={3.3} />
        </FlexColumn>
    </Flex>
}