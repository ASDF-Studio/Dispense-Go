import { SafeAreaSection } from "@/layout/spacing";
import { Flex, FlexColumn } from "../layout";
import { Slider } from "./slider";
import { StoreCard } from "@/cards/store-card";
import { Button, Typography } from "@/core";
import { DraggingScrollY } from "@/layout/dragging";
import Link from "next/link";
import { IconHandler } from "../../utils/icon";
import { PaddingXL, PaddingXR } from "../../constants";

export const ShopByStores = () => {
    return (
        <SafeAreaSection withSpacing={false} classname={["py-8 xl:py-12", PaddingXL].join(" ")}>
            <FlexColumn className="gap-9 m:gap-12">
                <Flex className={["justify-between items-center", PaddingXR].join(" ")}>
                    <Typography intent={"header2"}>SHOP BY STORES</Typography>
                    <Link href={'/individualStore'} className="hidden m:block">
                        <Button
                            intent={"text"}
                            text="VIEW ALL"
                            textClassname={"text-text-black-70"}
                            typographyVariant="grstk14"
                            icon={
                                <IconHandler
                                    name="arrow-right"
                                    classname={["font-light text-[14px] text-text-black-70 tracking-[2.03px]"].join(" ")}
                                />
                            }
                        />
                    </Link>
                </Flex>


                <Flex className="overflow-auto">
                    <Link href={"/individualStore"}>
                        <StoreCard />
                    </Link>
                    <Link href={"/individualStore"}>
                        <StoreCard />
                    </Link>
                    <Link href={"/individualStore"}>
                        <StoreCard />
                    </Link>
                    <Link href={"/individualStore"}>
                        <StoreCard />
                    </Link>
                    <Link href={"/individualStore"}>
                        <StoreCard />
                    </Link>
                    <Link href={"/individualStore"}>
                        <StoreCard />
                    </Link>
                    <Link href={"/individualStore"}>
                        <StoreCard />
                    </Link>
                    <Link href={"/individualStore"}>
                        <StoreCard />
                    </Link>
                    <Link href={"/individualStore"}>
                        <StoreCard />
                    </Link>
                    <Link href={"/individualStore"}>
                        <StoreCard />
                    </Link>
                    <Link href={"/individualStore"}>
                        <StoreCard />
                    </Link>
                </Flex>

                <Link href={'/individualStore'} className="m:hidden mx-auto">
                    <Button
                        intent={"text"}
                        text="VIEW ALL"
                        textClassname={"text-text-black-70"}
                        typographyVariant="grstk14"
                        icon={
                            <IconHandler
                                name="arrow-right"
                                classname={["font-light text-[14px] text-text-black-70 tracking-[2.03px]"].join(" ")}
                            />
                        }
                    />
                </Link>
            </FlexColumn>


        </SafeAreaSection>
    );
};
