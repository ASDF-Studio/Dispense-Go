import { Button, Typography } from "@/core";
import { Input } from "@/core/input";
import { Flex } from "@/layout";
import { SafeAreaSection } from "@/layout/spacing";
import { CustomIconHandler } from "../../../utils/icon";

export const SearchSection = () => {
    return (
        <Flex className="m:justify-between m:items-center px-5 m:px-6 2xl:px-0 flex-col m:flex-row gap-4 w-full">
            <Typography
                intent={"grstk24"}
                classname="tracking-[-0.84px] leading-[24px] font-medium text-text-black-100"
            >
                ADVANCED SEARCH
            </Typography>
            <Flex className="gap-4 flex-col m:flex-row w-full m:w-auto">
                <Input
                    placeholder="Brand, store, products"
                    startingIcon={<CustomIconHandler name="search-icon" />}
                    containerClassname="p-2 rounded-md border border-border-whiteSmoke  bg-background-whiteGrey w-full m:w-[232px] 2xl:w-[406px]"
                    classname="bg-transparent search-input"
                />
                <Button
                    text="search"
                    intent={"filled"}
                    withWidth={false}
                    classname="m:w-[124px]"
                />
            </Flex>
        </Flex>
    );
};
