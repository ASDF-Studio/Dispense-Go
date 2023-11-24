import { Flex } from "@/layout"
import { FC } from "react"

type Props = {
    children: React.ReactNode
    classname?: string
}

export const Slider: FC<Props> = ({ children, classname }) => {
    return <Flex className={[classname, "overflow-x-auto w-full gap-8"].join(" ")}>
        {children}
    </Flex>
}