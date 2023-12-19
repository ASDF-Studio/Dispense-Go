"use client"
import { Button, IconButton, Typography } from "@/core"
import { Flex, FlexColumn } from "@/layout"
import { CustomIconHandler, IconHandler } from "../../../utils/icon"
import { FC, useState } from "react"
import Image from "next/image"
import { Input } from "@/core/input"
import { useCart } from "../../../app/contexts/cart"

type ItemProps = {
    name: string
    imageURL?: string
    quantity?: number
}

const Item: FC<ItemProps> = ({ name, imageURL, quantity = 0 }) => {
    const [state, setState] = useState(quantity)
    const { setShowVariants } = useCart()
    return <Flex className="gap-4">
        <Flex className={["w-[112px] h-[118px] shrink-0 relative border-[1.222px] border-border-whiteSmoke overflow-hidden rounded-[4px] shadow-cart-item"].join(" ")}>
            <Image src={"https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg"} fill alt="image" />
        </Flex>
        <FlexColumn className="gap-[7px] justify-between">
            <Typography intent={"mons12"} classname="line-clamp-2 font-medium leading-[16.8px] text-text-black-100">
                1:1 Strawberry Lemonade [10pk] (100mg CBD/100mg THC)
            </Typography>
            <Flex className="gap-m items-center">
                <Typography intent={"mons12"} classname="leading-[15.6px] font-medium text-primary-brand">Variation: 100mg</Typography>
                <IconButton onClick={() => setShowVariants(true)} icon={<IconHandler name="edit" classname="text-[12px] leading-[1.74px] font-light text-primary-brand" />} />
            </Flex>
            <Flex className="gap-2.5">
                <Typography intent={"mons15"} classname="font-bold leading-[15px] text-text-black-100">$21.25</Typography>
                <Typography intent={"mons15"} classname="leading-[15px] font-medium text-text-black-40 line-through">$21.25</Typography>
            </Flex>
            <Flex className="items-center">
                <IconButton classname="px-[12px] h-8 py-[5px] border border-r-0 border-border-whiteSmoke" icon={<IconHandler name="minus" classname="text-[15px] leading-[18px]" />} />
                <Input containerClassname="border border-border-whiteSmoke h-[32px] w-full" type="number" value={quantity} className="text-mons-20 text-center w-full" />
                <IconButton classname="px-[12px] h-8 py-[5px] border border-l-0 border-border-whiteSmoke" icon={<IconHandler name="plus" classname="text-[15px] leading-[18px]" />} />
            </Flex>
        </FlexColumn>
    </Flex>
}

type DispensaryProps = {
    name?: string
}

const DispensaryItems: FC<DispensaryProps> = ({ name }) => {
    const {setShowDelte} = useCart()
    return <FlexColumn className="gap-4">
        <Flex className="justify-between items-center py-4">
            <Flex className="gap-2">
                <CustomIconHandler name="store-icon" />
                <Typography intent={"grskt12"} classname="leading-[16.8px] line-clamp-1 font-semibold text-text-black-100 w-[231px] tracking-normal">
                    {name || "Mike's Dispensary"}
                </Typography>
            </Flex>
            <Button intent={"text"} text="DELETE" onClick={() => setShowDelte(true)} typographyVariant="grskt12" textClassname="leading-[12px] tracking-[1.74px[ uppercases text-primary-brand" />
        </Flex>
        <Item />
        <Item />
    </FlexColumn>
}

export const CartItems = ({ handleVariant }) => {
    return <FlexColumn className="gap-6 overflow-hidden flex-grow">
        <DispensaryItems />
        <DispensaryItems name="Jane Neuewzel & Ma Dispensary - Manhattan Avenue" />
    </FlexColumn>
}