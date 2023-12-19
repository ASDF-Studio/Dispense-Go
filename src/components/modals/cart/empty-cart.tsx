import { Typography } from "@/core"
import { Flex, FlexColumn } from "@/layout"
import Image from "next/image"

export const EmptyCart = () => {

    return <FlexColumn className="h-full items-center justify-center gap-4">
        <Image src={"/assets/icons/empty-cart.svg"} width={64} height={57} alt="empty-cart" />
        <Typography classname="font-medium leading-[21px] text-text-black-40" intent={"mons15"}>
            Your basket is empty.
        </Typography>
    </FlexColumn>

}