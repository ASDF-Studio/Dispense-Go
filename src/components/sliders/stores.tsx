import { SafeAreaSection } from "@/layout/spacing";
import { Flex, FlexColumn } from "../layout";
import { Slider } from "./slider";
import { StoreCard } from "@/cards/store-card";
import { Typography } from "@/core";

export const ShopByStores = () => {
    return (
        <SafeAreaSection classname="py-12">
            <FlexColumn className="gap-12">
                <Typography intent={"header2"}>SHOP BY STORES</Typography>
                <Slider>
                    <StoreCard />
                    <StoreCard />
                    <StoreCard />
                    <StoreCard />
                    <StoreCard />
                    <StoreCard />
                    <StoreCard />
                    <StoreCard />
                    <StoreCard />
                    <StoreCard />
                </Slider>
            </FlexColumn>

        </SafeAreaSection>
    );
};
