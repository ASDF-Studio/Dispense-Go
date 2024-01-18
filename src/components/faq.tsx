'use client'

import { FC, useState } from "react"
import { IconButton, Typography } from "./core"
import { Flex, FlexColumn } from "./layout"
import { SafeAreaSection } from "./layout/spacing"
import { CustomIconHandler, IconHandler } from "../utils/icon"

type Props = {
    title: string
    description: string
    isLast?: boolean
}

const Accordion: FC<Props> = ({ title, description, isLast = false }) => {
    const [isActive, setIsActive] = useState(false)

    return <FlexColumn className={["gap-4 m:gap-5 border  border-transparent border-t-border-whiteSmoke py-6", isLast && " border-b-border-whiteSmoke"].join(" ")}>
        <Flex className="justify-between items-center hover:cursor-pointer" onClick={() => setIsActive(!isActive)}>
            <Typography intent={"grstk24"} classname="text-white max-w-[272px] m:max-w-[660px] xl:max-w-none">
                {title}
            </Typography>
            <IconButton
                icon={<CustomIconHandler name={isActive ? "chevronup-icon" : "chevrondown-icon"} classname="text-[32px] leading-[32px] font-light text-white" />}
            />
        </Flex>
        {isActive && <Typography intent={"mons15"} classname="text-white font-normal leading-[22.5px]">
            {description}
        </Typography>}
    </FlexColumn>
}

export const FAQ = () => {
    return <SafeAreaSection withSpacing={false} classname="px-tablet xl:px-[200px] bg-primary-green py-8 m:py-16">
        <FlexColumn className="gap-8 m:gap-12">
            <Typography intent={"headingGrstk2"} classname="font-semibold tracking-[-1.47px] uppercase text-white">FAQ</Typography>
            <FlexColumn>
                <Accordion title="What is Dispense?" description={"Unlike a typical vending machine, the whole purchasing experience is cashless and touchless. By just obtaining a QR code after a successful purchase, you can now pick up your items to over 192 total dispensary all over the state."} />
                <Accordion title="How can I pick up my orders from Dispense?" description={"Unlike a typical vending machine, the whole purchasing experience is cashless and touchless. By just obtaining a QR code after a successful purchase, you can now pick up your items to over 192 total dispensary all over the state."} />
                <Accordion title="How long does it take before I can pick up my orders?" description={"Unlike a typical vending machine, the whole purchasing experience is cashless and touchless. By just obtaining a QR code after a successful purchase, you can now pick up your items to over 192 total dispensary all over the state."} />
                <Accordion isLast title="Do I need an ID to purchase from Dispense?" description={"Unlike a typical vending machine, the whole purchasing experience is cashless and touchless. By just obtaining a QR code after a successful purchase, you can now pick up your items to over 192 total dispensary all over the state."} />
            </FlexColumn>
        </FlexColumn>
    </SafeAreaSection>
}   