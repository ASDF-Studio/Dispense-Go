import { Button, Typography } from "@/core"
import { FlexColumn } from "@/layout"
import { SafeAreaSection } from "@/layout/spacing"
import { IconHandler } from "../../utils/icon"
import Image from "next/image"

export const DispenseInfo = () => {
    return <SafeAreaSection color="linear-gradient(180deg, #DFF8BE 0%, #C2F486 100%)" classname="py-20 m:py-[100px] relative overflow-hidden">
        <FlexColumn className="items-center gap-[90px] m:gap-[55px] pb-16 m:pb-0">
            <FlexColumn className="gap-[75px] m:gap-[100px] z-20">
                <FlexColumn className="items-center gap-[16px]">
                    <Typography intent={"mons16"} classname="uppercase tracking-[3.76px] text-text-black-100/40 text-center">
                        About us
                    </Typography>
                    <FlexColumn className="gap-6 items-center">
                        <Typography intent={"headingGrstk"} classname="text-center text-[36px] m:text-[48px]">
                            What is <br /> Dispense?
                        </Typography>
                        <Typography classname="m:w-[616px] font-sans text-[15px] leading-[22.5px] font-normal text-text-black-70 text-center">
                            Unlike a typical vending machine, the whole purchasing experience is cashless and touchless. By just obtaining a QR code after a successful purchase, you can now pick up your items to over 192 total dispensary all over the state.
                        </Typography>
                        <Button intent={"filled"} text="LEARN MORE" classname="w-full m:w-[229px]" typographyVariant="buttons" icon={<IconHandler name="arrow-right" classname={["font-light tracking-[2.03px]"].join(" ")} />} />
                    </FlexColumn>
                </FlexColumn>
                <FlexColumn className="items-center gap-[16px]">
                    <Typography intent={"mons16"} classname="uppercase tracking-[3.76px] text-text-black-100/40 text-center">
                        About us
                    </Typography>
                    <FlexColumn className="gap-6 items-center">
                        <Typography intent={"headingGrstk"} classname="text-center text-[36px] m:text-[48px]">
                            How does <br /> Dispense work?
                        </Typography>
                        <Typography classname="m:w-[385px] font-sans text-[15px] leading-[22.5px] font-normal text-text-black-70 text-center">
                            In just three easy steps, you can now grab your products from any dispensaries near you.
                        </Typography>
                    </FlexColumn>
                </FlexColumn>
            </FlexColumn>
            <Image alt="dispense" width={1114} height={732} className="hidden m:block" src={"assets/vending.svg"} />
            <Image alt="dispense" width={400} height={400} className="scale-150 m:hidden" src={"/assets/Frame 34.svg"} />
        </FlexColumn>
        <Image alt="canabis" width={96} height={70} src={"assets/canabis.svg"} className="absolute top-[20px] left-[60px] m:top-[50px] m:left-[60px] xl:top-[184px] xl:left-[96px] z-10 " />
        <Image alt="canabis" width={96} height={70} src={"assets/canabis.svg"} className="absolute top-[832px] left-[55px] z-10 -rotate-45 hidden xl:block" />
        <Image alt="canabis" width={96} height={70} src={"assets/canabis.svg"} className="absolute top-[28px] right-[158px] z-10 -rotate-45 hidden xl:block" />
        <Image alt="canabis" width={96} height={70} src={"assets/canabis.svg"} className="absolute top-[620px] right-[175px] z-10 -rotate-45 hidden xl:block" />
    </SafeAreaSection>
}