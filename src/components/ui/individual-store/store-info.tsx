import { Rating } from "@/cards/rating";
import { Button, Typography } from "@/core";
import { Flex, FlexColumn } from "@/layout";
import Image from "next/image";
import { IconHandler } from "../../../utils/icon";
import { Canabis, StoreIcon } from "../../../svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Divider } from "@/divider";
import { FC } from "react";

const StoreImage = () => {
    return (
        <Flex className="shrink-0 relative w-[121px] h-[121px] xl:h-[100px] xl:w-[100px] rounded-full overflow-hidden border-2 border-primary-green">
            <Image
                src={"https://via.placeholder.com/100x100"}
                fill
                alt="profile picture"
            />
        </Flex>
    );
};

const StoreInfo = () => {
    return (
        <Flex className="gap-4 h-[122px] xl:h-[100px] shrink-0  hidden m:flex">
            <StoreImage />
            <FlexColumn className="gap-2 w-[239px] xl:w-[436px]">
                <Flex className="bg-primary-brand/10 p-[5px] w-fit">
                    <Typography
                        intent={"mons12"}
                        classname="leading-[12px] font-semibold tracking-normal text-primary-brand"
                    >
                        Recreational
                    </Typography>
                </Flex>
                <Typography
                    classname="font-medium leading-[24px] text-white tracking-[-0.84px]"
                    intent={"grstk24"}
                >
                    Rendal Store - Jones Ave
                </Typography>
                <Typography
                    classname="leading-[15.6px] font-medium text-white/70 tracking-normal"
                    intent={"mons12"}
                >
                    Toronto, ON, Canada
                </Typography>
                <Rating rating={4} textColor="white" count={212} extend />
            </FlexColumn>
            <FlexColumn className="gap-2 xl:gap-6 pl-4 xl:px-6 justify-center border-l border-l-white/70 shrink-0 w-[91px] xl:w-auto">
                <Flex className="gap-2">
                    <Canabis className="shrink-0" />
                    <Typography
                        intent={"mons12"}
                        classname="text-white font-medium leading-[15.6px] xl:leading-[12px] tracking-normal"
                    >
                        Products: <Typography classname="font-bold">269</Typography>
                    </Typography>
                </Flex>
                <Flex className="gap-2">
                    <Canabis className="shrink-0" />
                    <Typography
                        intent={"mons12"}
                        classname="text-white font-medium leading-[15.6px] xl:leading-[12px] tracking-normal"
                    >
                        Follwers: <Typography classname="font-bold">12.1K</Typography>
                    </Typography>
                </Flex>
                <Flex className="gap-2">
                    <Canabis className="shrink-0" />
                    <Typography
                        intent={"mons12"}
                        classname="text-white font-medium leading-[15.6px] xl:leading-[12px] tracking-normal"
                    >
                        Sales: <Typography classname="font-bold">201.1k</Typography>
                    </Typography>
                </Flex>
            </FlexColumn>
        </Flex>
    );
};

const StoreDescirption:FC<StoreDescType> = ({onStoreInfo}) => {
    return (
        <Flex className="p-6 bg-[#044930] hidden m:flex">
            <Flex className="h-[121px] xl:h-[100px] gap-2 xl:gap-4 flex-col xl:flex-row w-[178px] xl:w-auto">
                <Flex className="gap-2 items-center">
                    <Flex className="w-[50px] h-[44px] xl:h-[100px] xl:w-[100px] relative">
                        <Image
                            src={"https://via.placeholder.com/100x100"}
                            fill
                            alt="profile picture"
                        />

                    </Flex>
                    <Typography intent={"mons10"} classname=" text-white leading-[14px] line-clamp-3 tracking-normal font-medium w-[120px] xl:hidden">
                        Rendal Store is a cannabis dispensary that offers a wide variety of products, including flower, concentrates, edibles, and topicals. We are committed to providing our customers with the highest quality cannabis products and services, and we are proud to be one of the leading dispensaries in the area.
                        Our team of experienced budtenders is passionate about cannabis
                    </Typography>
                </Flex>
                <FlexColumn className="gap-2 xl:w-[289px]">
                    <Typography intent={"mons12"} classname="font-medium text-white leading-[18px] line-clamp-3 tracking-normal hidden xl:block">
                        Rendal Store is a cannabis dispensary that offers a wide variety of products, including flower, concentrates, edibles, and topicals. We are committed to providing our customers with the highest quality cannabis products and services, and we are proud to be one of the leading dispensaries in the area.
                        Our team of experienced budtenders is passionate about cannabis
                    </Typography>
                    <Flex className="gap-1 xl:gap-3 flex-col xl:flex-row">
                        <Button text="Follow" startIcon={<img src="/assets/hearth.svg" />} withWidth={false} intent={"ghost"} typographyVariant="grstk10" textClassname="tracking-[1.45px] leading-[10px] uppercase text-white font-medium" />
                        <Button text="store info" onClick={onStoreInfo} startIcon={<StoreIcon fill="white" />} withWidth={false} intent={"ghost"} typographyVariant="grstk10" textClassname="tracking-[1.45px] leading-[10px] uppercase text-white font-medium" />
                    </Flex>
                </FlexColumn>
            </Flex>
        </Flex>
    );
};

const StoreInfoMobile = () => {
    return <FlexColumn className="shrink-0 m:hidden gap-6 mx-auto pt-5 px-5">
        <Flex className="gap-4">
            <StoreImage />
            <FlexColumn className="gap-2 w-[203px]">
                <Flex className="bg-primary-brand/10 p-[5px] w-fit">
                    <Typography
                        intent={"mons12"}
                        classname="leading-[12px] font-semibold tracking-normal text-primary-brand"
                    >
                        Recreational
                    </Typography>
                </Flex>
                <Typography
                    classname="font-medium leading-[24px] text-white tracking-[-0.84px]"
                    intent={"grstk24"}
                >
                    Rendal Store - Jones Ave
                </Typography>
                <Typography
                    classname="leading-[15.6px] font-medium text-white/70 tracking-normal"
                    intent={"mons12"}
                >
                    Toronto, ON, Canada
                </Typography>
                <Rating rating={4} textColor="white" count={212} extend />
            </FlexColumn>
        </Flex>
        <Divider />
        <Flex className="gap-2 justify-between">
            <Flex className="gap-2 w-[83px]">
                <Canabis className="shrink-0" />
                <Typography
                    intent={"mons12"}
                    classname="text-white font-medium leading-[15.6px]  tracking-normal"
                >
                    Products: <Typography classname="font-bold">269</Typography>
                </Typography>
            </Flex>
            <Flex className="gap-2 w-[83px]">
                <Canabis className="shrink-0" />
                <Typography
                    intent={"mons12"}
                    classname="text-white font-medium leading-[15.6px]  tracking-normal"
                >
                    Follwers: <Typography classname="font-bold">12.1K</Typography>
                </Typography>
            </Flex>
            <Flex className="gap-2 w-[83px]">
                <Canabis className="shrink-0" />
                <Typography
                    intent={"mons12"}
                    classname="text-white font-medium leading-[15.6px]  tracking-normal"
                >
                    Sales: <Typography classname="font-bold">201.1k</Typography>
                </Typography>
            </Flex>
        </Flex>
    </FlexColumn>
}

type StoreDescType = {
    onStoreInfo?: () => void
    onFollow?: () => void
}

const StoreDescriptionMobile: FC<StoreDescType> = ({ onStoreInfo, onFollow }) => {
    return (
        <Flex className="p-5 bg-[#044930] m:hidden">
            <Flex className="gap-4 flex-row w-auto">
                <Flex className="h-[120px] w-[116px] relative shrink-0">
                    <Image
                        src={"https://via.placeholder.com/100x100"}
                        fill
                        alt="profile picture"
                    />

                </Flex>
                <FlexColumn className="gap-2 justify-between">
                    <Typography intent={"mons10"} classname="font-medium text-white leading-[14px] line-clamp-3 tracking-normal">
                        Rendal Store is a cannabis dispensary that offers a wide variety of products, including flower, concentrates, edibles, and topicals. We are committed to providing our customers with the highest quality cannabis products and services, and we are proud to be one of the leading dispensaries in the area.
                        Our team of experienced budtenders is passionate about cannabis
                    </Typography>
                    <Flex className="gap-1 flex-col">
                        <Button text="Follow" startIcon={<img src="/assets/hearth.svg" />} withWidth={false} intent={"ghost"} typographyVariant="grstk10" textClassname="tracking-[1.45px] leading-[10px] uppercase text-white font-medium" />
                        <Button text="store info" onClick={onStoreInfo} startIcon={<StoreIcon fill="white" />} withWidth={false} intent={"ghost"} typographyVariant="grstk10" textClassname="tracking-[1.45px] leading-[10px] uppercase text-white font-medium" />
                    </Flex>
                </FlexColumn>
            </Flex>
        </Flex>
    );
};

export const StoreBanner = ({handleStoreInfo}) => {
    return (
        <Flex className="bg-primary-darkGreen w-full gap-6 xl:gap-8 justify-between items-center m:p-6 xl:pl-[42px] flex-col m:flex-row">
            <StoreInfo />
            <StoreInfoMobile />
            <StoreDescirption onStoreInfo={handleStoreInfo}/>
            <StoreDescriptionMobile onStoreInfo={handleStoreInfo} />
        </Flex>
    );
};
