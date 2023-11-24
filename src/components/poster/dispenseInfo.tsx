import { Button, Typography } from "@/core"
import { FlexColumn } from "@/layout"
import { SafeAreaSection } from "@/layout/spacing"
import { IconHandler } from "../../utils/icon"
import Image from "next/image"

export const DispenseInfo = () => {
    return <SafeAreaSection color="linear-gradient(180deg, #DFF8BE 0%, #C2F486 100%)" classname="py-[100px] relative">
        <FlexColumn className="items-center gap-[55px]">
        <FlexColumn className="gap-[100px]">
            <FlexColumn className="items-center gap-[16px]">
                <Typography intent={"mons16"} classname="uppercase tracking-[3.76px] text-text-black-100/40 text-center">
                    About us
                </Typography>
                <FlexColumn className="gap-6 items-center">
                    <Typography intent={"headingGrstk"} classname="text-center">
                        What is <br /> Dispense?
                    </Typography>
                    <Typography classname="w-[616px] font-sans text-[15px] leading-[22.5px] font-normal text-text-black-70 text-center">
                        Unlike a typical vending machine, the whole purchasing experience is cashless and touchless. By just obtaining a QR code after a successful purchase, you can now pick up your items to over 192 total dispensary all over the state.
                    </Typography>
                    <Button intent={"filled"} text="LEARN MORE" classname="w-[229px]" typographyVariant="buttons" icon={<IconHandler name="arrow-right" classname={["font-light tracking-[2.03px]"].join(" ")} />} />
                </FlexColumn>
            </FlexColumn>
            <FlexColumn className="items-center gap-[16px]">
                <Typography intent={"mons16"} classname="uppercase tracking-[3.76px] text-text-black-100/40 text-center">
                    About us
                </Typography>
                <FlexColumn className="gap-6 items-center">
                    <Typography intent={"headingGrstk"} classname="text-center">
                        How does <br /> Dispense work?
                    </Typography>
                    <Typography classname="w-[385px] font-sans text-[15px] leading-[22.5px] font-normal text-text-black-70 text-center">
                        In just three easy steps, you can now grab your products from any dispensaries near you.
                    </Typography>
                </FlexColumn>
            </FlexColumn>
        </FlexColumn>
        <Image alt="dispense logo" width={1114} height={732} src={"assets/vending.svg"} />
        </FlexColumn>   
        <Image alt="canabis" width={96} height={70} src={"assets/canabis.svg"} className="absolute top-[184px] left-[96px] z-10" />
        <Image alt="canabis" width={96} height={70} src={"assets/canabis.svg"} className="absolute top-[832px] left-[55px] z-10 -rotate-45" />
        <Image alt="canabis" width={96} height={70} src={"assets/canabis.svg"} className="absolute top-[28px] right-[158px] z-10 -rotate-45" />
        <Image alt="canabis" width={96} height={70} src={"assets/canabis.svg"} className="absolute top-[620px] right-[175px] z-10 -rotate-45" />
    </SafeAreaSection>
}