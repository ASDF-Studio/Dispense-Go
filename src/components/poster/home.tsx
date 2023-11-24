import { Button, Typography } from "@/core"
import { ProductSearch, Search } from "@/core/input"
import { Flex, FlexColumn } from "@/layout"
import { SafeAreaSection } from "@/layout/spacing"
import Image from "next/image"
import { Paddings } from "../../constants"
import { Banner } from "@/sliders/banner"

export const HomePoster = () => {
    return <SafeAreaSection withSpacing={false} classname="bg-primary-darkGreen pt-[80px]">
        <FlexColumn className={["gap-12 pb-[60px]", Paddings].join(" ")}>
            <Typography intent={"header1"} classname="text-white">
                Fast and Efficient <br />
                Cannabis Pick Up <br />
                <Typography classname="text-primary-brand">
                    Near You
                </Typography>
            </Typography>
            <Flex className="gap-2">
                <Search />
                <Button classname="bg-gradient-linear-green" text="SEARCH" intent={"filled"} typographyVariant="grstk15" textClassname="font-semibold" />
            </Flex>
        </FlexColumn>
        <Banner />
        <Image alt="illustration" className="absolute z-10 top-0 right-0" width={667} height={543} src={"assets/hero-graphics.svg"} />
    </SafeAreaSection>
}