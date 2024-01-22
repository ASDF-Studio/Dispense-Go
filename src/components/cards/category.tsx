import { IconButton, Typography } from "@/core"
import { Flex, FlexColumn } from "@/layout"
import { FC } from "react"
import { IconHandler } from "../../utils/icon"
import Image from "next/image"
import ArrowRight from "../../svg/arrow-right"

type Props = {
    title: string
    description: string
    image?: string
    isLast?: boolean
}

export const CategoryCard: FC<Props> = ({ title, description, image = "category1.png", isLast = false }) => {
    return <FlexColumn className={["min-w-[338px] h-[382px] justify-between relative p-5 gradient-text-white shrink-0 category-hover border-2 border-transparent", !isLast && "border-r-white"].join(" ")}>
        <FlexColumn className="gap-2.5">
            <Typography intent={"grskt32"} classname=" tracking-[-1.12px] leading-[32px] font-medium gradient-text-green bg-clip-text text-transparent" >
                {title}
            </Typography>
            <Typography intent={"mons15"} classname="text-text-black-40 w-[270px]">
                {description}
            </Typography>
        </FlexColumn>
        <Flex>
            <img src={`/assets/category/${image}`} className="absolute left-0 bottom-0 max-w-[250px]" alt="category image" />
            {/* <Image src={} alt="category" width={250} height={200} className="absolute left-0 right-0" /> */}
            <ArrowRight className="absolute bottom-[20px] right-[32px] text-primary-green" />
        </Flex>
    </FlexColumn>
}