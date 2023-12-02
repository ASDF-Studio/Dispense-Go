import Image from "next/image"
import { Flex } from "./layout"
import { Typography } from "./core"
import { FC } from "react"
import Link from "next/link"

type Props = {
    color?: "white" | "black"
}

export const Logo: FC<Props> = ({ color = "black" }) => {
    return <Link href="/">
        <Image alt="dispense logo" width={198} height={35} src={color === "black" ? "/assets/Logo.png" : "/assets/Logo-white.png"} />
    </Link>
}