import { Button, Typography } from "@/core"
import { FlexColumn } from "@/layout"
import { SafeAreaSection } from "@/layout/spacing"
import { IconHandler } from "../../utils/icon"
import Image from "next/image"

export const DispenseInfo = () => {
    return <SafeAreaSection color="linear-gradient(180deg, #DFF8BE 0%, #C2F486 100%)" classname="pt-20 m:py-20 xl:py-[100px] relative overflow-hidden">
        <FlexColumn className="items-center  pb-16 m:pb-0 gap-4 m:gap-0">
            <FlexColumn className="gap-8 z-20">
                <FlexColumn className="items-center gap-[16px]">
                    <Typography intent={"mons16"} classname="uppercase tracking-[3.76px] text-text-black-100/40 text-center">
                        About us
                    </Typography>

                    <Typography classname="m:w-[616px] font-sans text-[15px] leading-[22.5px] font-normal text-text-black-70 text-center">
                        Dispense streamlines operations, and creates an alternative shopping experience for customers.
                    </Typography>

                </FlexColumn>
                <FlexColumn className="items-center gap-[16px]">
                    <Typography intent={"mons16"} classname="uppercase tracking-[3.76px] text-text-black-100/40 text-center">
                        hOW IT WORKS
                    </Typography>
                    <Typography classname="m:max-w-[616px] font-sans text-[15px] leading-[22.5px] font-normal text-text-black-70 text-center">
                        Licensed cannabis vendors display products on DispenseGO which are available instantly, or can also be picked up anytime in the next 24-hours.
                    </Typography>
                    <Typography classname="m:max-w-[616px] font-sans text-[15px] leading-[22.5px] font-normal text-text-black-70 text-center">
                        The unique QR code given in every receipt is used at the location by a Dispense machine that reads the QR receipt and instantly dispenses the order.
                    </Typography>
                    <Typography classname="m:max-w-[616px] font-sans text-[15px] leading-[22.5px] font-normal text-text-black-70 text-center">
                        Take time to browse selections from multiple dispensaries in your area or anywhere.  Pick your order up wherever you want with no line.  Enjoy a contactless, cashless, efficient in-store experience.
                    </Typography>
                </FlexColumn>
                <Button intent={"filled"} text="LEARN MORE" classname="w-full m:w-[229px] self-center mt-2" typographyVariant="buttons" icon={<IconHandler name="arrow-right" classname={["font-light tracking-[2.03px]"].join(" ")} />} />
            </FlexColumn>
            <Image alt="dispense" width={1114} height={732} className="hidden xl:block" src={"assets/vending.svg"} />
            <Image alt="dispense" width={696} height={653} className="hidden m:block xl:hidden" src={"/assets/vending-tab.svg"} />
            <Image alt="dispense" width={400} height={400} className=" m:hidden" src={"/assets/Frame 34.svg"} />
        </FlexColumn>
        <Image alt="canabis" width={96} height={70} src={"assets/canabis.svg"} className="absolute top-[20px] left-[60px] m:top-[50px] m:left-[60px] xl:top-[184px] xl:left-[96px] z-10 " />
        <Image alt="canabis" width={96} height={70} src={"assets/canabis.svg"} className="absolute top-[832px] left-[55px] z-10 -rotate-45 hidden xl:block" />
        <Image alt="canabis" width={96} height={70} src={"assets/canabis.svg"} className="absolute top-[28px] right-[158px] z-10 -rotate-45 hidden xl:block" />
        <Image alt="canabis" width={96} height={70} src={"assets/canabis.svg"} className="absolute top-[620px] right-[175px] z-10 -rotate-45 hidden xl:block" />
    </SafeAreaSection>
}