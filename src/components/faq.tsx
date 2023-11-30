'use client'

import { FC, useState } from "react"
import { IconButton, Typography } from "./core"
import { Flex, FlexColumn } from "./layout"
import { SafeAreaSection } from "./layout/spacing"
import { IconHandler } from "../utils/icon"

type Props = {
    title: string
    description: string
    isLast?: boolean
}

const Accordion: FC<Props> = ({ title, description, isLast = false }) => {
    const [isActive, setIsActive] = useState(false)

    return <FlexColumn className={["gap-5 border  border-transparent border-t-border-whiteSmoke py-6", isLast && " border-b-border-whiteSmoke"].join(" ")}>
        <Flex className="justify-between items-center">
            <Typography intent={"grstk24"} classname="text-white">
                {title}
            </Typography>
            <IconButton
                onClick={() => setIsActive(!isActive)}
                icon={<IconHandler name={isActive ? "chevronup" : "chevrondown"} classname="text-[32px] leading-[32px] font-light text-white" />}
            />
        </Flex>
        {isActive && <Typography intent={"mons15"} classname="text-white font-normal leading-[22.5px]">
            {description}
        </Typography>}
    </FlexColumn>
}

export const FAQ = () => {
    return <SafeAreaSection withSpacing={false} classname="px-[200px] bg-primary-green py-16">
        <FlexColumn className="gap-12">
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