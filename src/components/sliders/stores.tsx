import { SafeAreaSection } from "@/layout/spacing";
import { Flex, FlexColumn } from "../layout";
import { Slider } from "./slider";
import { StoreCard } from "@/cards/store-card";
import { Typography } from "@/core";
import { DraggingScrollY } from "@/layout/dragging";

export const ShopByStores = () => {
    return (
        <SafeAreaSection classname="py-12">
            <FlexColumn className="gap-12">
                <Typography intent={"header2"}>SHOP BY STORES</Typography>
                <DraggingScrollY>
                    <Flex className="overflow-hidden">
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
                    </Flex>
                </DraggingScrollY>
            </FlexColumn>

        </SafeAreaSection>
    );
};
