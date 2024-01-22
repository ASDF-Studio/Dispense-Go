import { Button, Typography } from "@/core"
import { ProductSearch, Search } from "@/core/input"
import { Flex, FlexColumn } from "@/layout"
import { SafeAreaSection } from "@/layout/spacing"
import { PaddingX } from "../../constants"
import { Banner } from "@/sliders/banner"
import Image from "next/image"
import Link from "next/link"

export const HomePoster = () => {
    return <SafeAreaSection withSpacing={false} classname="bg-primary-darkGreen relative pt-[35px] m:pt-[80px]  xl:pt-[86px] overflow-hidden">
        <FlexColumn className={["gap-[30px] m:gap-12 xl:gap-[50px] pb-[354px] m:pb-[460px] xl:pb-[60px]", PaddingX].join(" ")}>
            <Typography intent={"header1"} classname="text-white">
                Fast and Efficient <br />
                Cannabis Pick Up <br />
                <Typography classname="text-primary-brand">
                    Near You
                </Typography>
            </Typography>
            <Flex className="gap-2 flex-col m:flex-row z-20">
                <Search />
                <Link href={"/search"} className="">
                <Button classname="bg-gradient-linear-green min-w-[206px] h-full" text="SEARCH" intent={"filled"} typographyVariant="grstk15" textClassname="font-semibold" />
                </Link>
            </Flex>
        </FlexColumn>
        <Banner />
        <div className="absolute transform right-1/2 top-[360px] translate-x-1/2 xl:translate-x-0 xl:left-none  xl:top-[-100px] xl:right-[-40px] w-[490px] h-[490px] m:w-[690px] m:h-[690px] xl:w-[690px] xl:h-[690px] m:top-[260px]">
            <Image alt="illustration" fill className="z-10" src={"assets/hero-graphics.svg"} />
        </div>

    </SafeAreaSection>
}