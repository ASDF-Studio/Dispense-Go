import { Button, Typography } from "@/core"
import { ProductSearch, Search } from "@/core/input"
import { Flex, FlexColumn } from "@/layout"
import { SafeAreaSection } from "@/layout/spacing"
import Image from "next/image"
import { Paddings } from "../../constants"
import { Banner } from "@/sliders/banner"

export const CategoryPoster = () => {
    return <SafeAreaSection withSpacing={false} classname="bg-primary-darkGreen flex justify-between mx-10 mt-10 rounded-xl h-[137px]">
        <FlexColumn className="p-[20px]">
            <Typography intent={"grskt32"} classname="text-white">
                Deals Near You <br />
            </Typography>
            <Typography intent={"mons15"} classname="text-text-white-70 pt-3">
                Latest products and exclusive bundle <br/> deals and promos from stores
            </Typography>
        </FlexColumn>|
        <Flex className="mr-10 overflow-hidden">
            <Image
                alt="illustration"
                className="relative"
                width={160}
                height={220}
                src={"assets/CannabisFlower2.svg"}
            />
            <Image
                alt="illustration"
                className="relative -ml-[110px] -mt-[20px]"
                width={160}
                height={220}
                src={"assets/CannabisFlower.svg"}
            />
        </Flex>


    </SafeAreaSection>
}
