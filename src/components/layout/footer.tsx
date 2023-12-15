import Link from "next/link"
import { Flex, FlexColumn } from "."
import { SafeAreaSection, SafeScreen } from "./spacing"
import { Typography } from "@/core"
import { Logo } from "@/logo"
import Image from "next/image"

const Links = [
    "Deals", "Flowers", "Edibles", "Concertrates", "CBD", "Pre-rolls", "Brands", "Stores"
]


const TOS = ["Refund Policy", "Privacy Policy", "Cookies Policy", "Terms & Conditions"]

const About = ["About us", "FAQs", "Contact Us"]

export const Footer = () => {
    return <footer>
        <SafeScreen classname="bg-primary-darkGreen py-8 xl:pt-[44px] xl:pb-8">
            <FlexColumn className="gap-8">
                <Flex className="justify-between flex-col m:flex-row m:gap-0 gap-8">
                    <FlexColumn className="gap-6 m:gap-[17px]">
                        <Typography intent={"grskt16"} classname="text-white/70">Quick links</Typography>
                        <FlexColumn className="gap-4 m:gap-[17px]">
                            {
                                Links.map((link, index) => {
                                    return <Link href={"www.example.com"} key={index}>
                                        <Typography intent={"mons16"} classname="font-normal text-white">{link}</Typography>
                                    </Link>
                                })
                            }
                        </FlexColumn>
                    </FlexColumn>
                    <FlexColumn className="gap-6 m:gap-[17px]">
                        <Typography intent={"grskt16"} classname="text-white/70">terms & privacy</Typography>
                        <FlexColumn className="gap-4 m:gap-[17px]">
                            {
                                TOS.map((link, index) => {
                                    return <Link href={"www.example.com"} key={index}>
                                        <Typography intent={"mons16"} classname="font-normal text-white">{link}</Typography>
                                    </Link>
                                })
                            }
                        </FlexColumn>
                    </FlexColumn>
                    <FlexColumn className="gap-6 m:gap-[17px]">
                        <Typography intent={"grskt16"} classname="text-white/70">About</Typography>
                        <FlexColumn className="gap-4 m:gap-[17px]">
                            {
                                About.map((link, index) => {
                                    return <Link href={"www.example.com"} key={index}>
                                        <Typography intent={"mons16"} classname="font-normal text-white">{link}</Typography>
                                    </Link>
                                })
                            }
                        </FlexColumn>
                    </FlexColumn>
                    <FlexColumn className="gap-[17px] w-[151px]">
                        <Typography intent={"grskt16"} classname="text-white/70">social media</Typography>
                        <Flex className="justify-between">
                            <Image alt="logos" src={"assets/social/linkedin.svg"} width={24} height={24} />
                            <Image alt="logos" src={"assets/social/instagram.svg"} width={24} height={24} />
                            <Image alt="logos" src={"assets/social/facebook.svg"} width={24} height={24} />
                            <Image alt="logos" src={"assets/social/x.svg"} width={24} height={24} />
                        </Flex>

                    </FlexColumn>
                </Flex>
                <div className="h-[1px] w-full bg-[#D9D9D933]/20" />
                <Flex className="items-center justify-between gap-3 flex-col m:flex-row">
                    <Logo color="white" />
                    <Typography classname="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.64px] text-white/70">
                        All Rights Reserved 2023 © Dispense Go
                    </Typography>
                </Flex>
            </FlexColumn>
        </SafeScreen>
    </footer>
}