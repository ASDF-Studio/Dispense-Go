import Image from "next/image"
import { Flex } from "./layout"
import { Typography } from "./core"
import { FC } from "react"

type Props = {
    color?: "white" | "black"
}

export const Logo: FC<Props> = ({ color = "black" }) => {
    return <Flex className="gap-2">
        <Image alt="dispense logo" width={25} height={35} src={color === "black" ? "assets/logo.svg" : "assets/logo-white.svg"} />
        <Typography intent={"header3"} classname={["tracking-[-1.995px] leading-normal", color === "white" && "text-white"].join(" ")}>DISPENSE</Typography>
    </Flex>
}