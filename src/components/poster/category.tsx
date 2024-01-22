import { Button, Typography } from "@/core";
import { Flex, FlexColumn } from "@/layout";
import Image from "next/image";
import { useQueryString } from "../../hooks/useQueryString";

export const CategoryPoster = () => {
    const { param } = useQueryString("filter")
    return (
        <Flex className="bg-primary-darkGreen flex justify-between rounded-xl m:h-[137px] p-4 mx-5 m:mx-6 xl:mx-[42px] relative overflow-hidden">
            <FlexColumn>
                <Typography intent={"grskt32"} classname="text-white text-[24px] leading-[24px] tracking-[-0.84px] xl:text-[32px] xl:leading-[32px] xl:tracking-[-1.12px] capitalize">
                    {param || "Deals"} Near You <br />
                </Typography>
                <Typography intent={"mons15"} classname="text-text-white-70 pt-3 max-w-[175px] m:max-w-[258px] xl:max-w-[295px]">
                    Latest products and exclusive bundle deals and promos from
                    stores
                </Typography>
            </FlexColumn>
            <img src={"/assets/canabis1.svg"} alt="canabis" className="absolute h-full top-0 right-0 hidden m:block" />
            <img src={"/assets/canabis1-mobile.svg"} alt="canabis" className="absolute h-full top-0 right-0 m:hidden" />
        </Flex>
    );
};
