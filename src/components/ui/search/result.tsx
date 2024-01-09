"use client";
import { MemoProductCard } from "@/cards/deals";
import { StoreCard } from "@/cards/store-card";
import { Button, Typography } from "@/core";
import { Flex, FlexColumn } from "@/layout";
import {
    faBox,
    faCloudMoon,
    faRoad,
    faStore,
    faSun,
    faYinYang,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC, useState } from "react";
import { IconHandler } from "../../../utils/icon";
import Image from "next/image";
import { Arrow } from "../../../svg";

type FilterBoxType = {
    text: string;
    isSelected?: boolean;
    icon: any;
    onClick?: () => void;
    classname?: string;
};

const FilterBox: FC<FilterBoxType> = ({
    text,
    isSelected = false,
    icon,
    onClick,
    classname = "",
}) => {
    return (
        <Flex
            onClick={onClick}
            className={[
                "h-[46px] p-l relative shrink-0 hover:cursor-pointer border rounded-md bg-white justify-between gap-2",
                isSelected ? "border-primary-green" : "border-white",
                classname,
            ].join(" ")}
        >
            <Typography
                intent={"mons16"}
                classname={[
                    "tracking-[-0.56px] leading-[16px] font-medium uppercase shrink-0",
                    isSelected ? "text-primary-green" : "text-text-black-70",
                ].join(" ")}
            >
                {text}
            </Typography>
            <FontAwesomeIcon
                icon={icon}
                className={[
                    "text-[16px]",
                    isSelected ? "text-primary-green" : "text-text-black-70",
                ].join(" ")}
            />
        </Flex>
    );
};

const Type = () => {
    const [selectedType, setSelectedType] = useState(0);
    return (
        <Flex className="p-5 pr-0 m:p-6 m:pr-0 xl:pr-6 m:items-center justify-between gap-5 m:gap-6 flex-col m:flex-row">
            <Typography
                intent={"grstk24"}
                classname="tracking-[-0.84px] leading-[24px] font-medium text-text-black-70 uppercase w-[103px]"
            >
                TYPE
            </Typography>
            <Flex className="gap-5 m:gap-6 overflow-auto">
                <FilterBox
                    text="all (320)"
                    classname="w-[160px] m:w-[276px] 5xl:w-[343px]"
                    isSelected={selectedType === 0}
                    icon={faBox}
                    onClick={() => setSelectedType(0)}
                />
                <FilterBox
                    text="INDICA (20)"
                    classname="w-[160px] m:w-[276px] 5xl:w-[343px]"
                    isSelected={selectedType === 1}
                    icon={faCloudMoon}
                    onClick={() => setSelectedType(1)}
                />
                <FilterBox
                    text="SATIVA (200)"
                    classname="w-[160px] m:w-[276px] 5xl:w-[343px]"
                    isSelected={selectedType === 2}
                    icon={faSun}
                    onClick={() => setSelectedType(2)}
                />
                <FilterBox
                    text="HYBRID (100)"
                    classname="w-[160px] m:w-[276px] 5xl:w-[343px]"
                    isSelected={selectedType === 3}
                    icon={faYinYang}
                    onClick={() => setSelectedType(3)}
                />
            </Flex>
        </Flex>
    );
};

const StoreFilter = () => {
    const [selectedStore, setSelectedStore] = useState(0);
    return (
        <Flex className="p-5 pr-0 m:p-6 m:pr-0 xl:pr-6 m:items-center justify-between gap-5 m:gap-6 flex-col m:flex-row">
            <Typography
                intent={"grstk24"}
                classname="tracking-[-0.84px] leading-[24px] font-medium text-text-black-70 uppercase  w-[103px]"
            >
                Store
            </Typography>
            <Flex className="gap-5 m:gap-6 overflow-auto">
                <FilterBox
                    text="SELECT STORE (24)"
                    classname="min-w-[206px] m:w-[376px] 5xl:w-[466px]"
                    isSelected={selectedStore === 0}
                    icon={faStore}
                    onClick={() => setSelectedStore(0)}
                />
                <FilterBox
                    text="ALL FROM 3 MILE RADIUS (10)"
                    classname="min-w-[206px] m:w-[376px] 5xl:w-[466px]"
                    isSelected={selectedStore === 1}
                    icon={faRoad}
                    onClick={() => setSelectedStore(1)}
                />
                <FilterBox
                    text="ALL FROM 10 MILE RADIUS (14)"
                    classname="min-w-[206px] m:w-[376px] 5xl:w-[466px]"
                    isSelected={selectedStore === 2}
                    icon={faRoad}
                    onClick={() => setSelectedStore(2)}
                />
            </Flex>
        </Flex>
    );
};

const FilteredStores = () => {
    const [selectedStore, setSelectedStore] = useState(0);

    return (
        <Flex className="pl-5 m:pl-[24px] gap-8 relative -bottom-[1px] overflow-auto 5xl:w-[1352px] 5xl:mx-auto">
            <StoreCard
                onClick={() => setSelectedStore(0)}
                classname={[
                    "border rounded-t-lg  p-l w-[280px] xl:w-[373px] hover:cursor-pointer",
                    selectedStore === 0
                        ? "border-primary-green border-b-white bg-white"
                        : "border-transparent",
                ].join(" ")}
            />
            <StoreCard
                onClick={() => setSelectedStore(1)}
                classname={[
                    "border rounded-t-lg  p-l w-[280px] xl:w-[373px] hover:cursor-pointer",
                    selectedStore === 1
                        ? "border-primary-green border-b-white bg-white"
                        : "border-transparent",
                ].join(" ")}
            />
            <StoreCard
                onClick={() => setSelectedStore(2)}
                classname={[
                    "border rounded-t-lg  p-l w-[280px] xl:w-[373px] hover:cursor-pointer",
                    selectedStore === 2
                        ? "border-primary-green border-b-white bg-white"
                        : "border-transparent",
                ].join(" ")}
            />
            <StoreCard
                onClick={() => setSelectedStore(3)}
                classname={[
                    "border rounded-t-lg  p-l w-[280px] xl:w-[373px] hover:cursor-pointer",
                    selectedStore === 3
                        ? "border-primary-green border-b-white bg-white"
                        : "border-transparent",
                ].join(" ")}
            />
            <StoreCard
                onClick={() => setSelectedStore(4)}
                classname={[
                    "border rounded-t-lg  p-l w-[280px] xl:w-[373px] hover:cursor-pointer",
                    selectedStore === 4
                        ? "border-primary-green border-b-white bg-white"
                        : "border-transparent",
                ].join(" ")}
            />
            <StoreCard
                onClick={() => setSelectedStore(5)}
                classname={[
                    "border rounded-t-lg  p-l w-[280px] xl:w-[373px] hover:cursor-pointer",
                    selectedStore === 5
                        ? "border-primary-green border-b-white bg-white"
                        : "border-transparent",
                ].join(" ")}
            />
        </Flex>
    );
};

type FilterProducts = {
    title: string;
    viewAll?: boolean
    classname?: string
};

const FilteredProducts: FC<FilterProducts> = ({ title, viewAll = true, classname = "" }) => {
    return (
        <FlexColumn className={["py-5 m:py-6 gap-5 m:gap-6 hidescroll", classname].join(" ")}>
            <Flex className="px-5 m:px-6 justify-between items-center">
                <Typography
                    intent={"grstk24"}
                    classname="tracking-[-0.84px] leading-[24px] font-medium text-text-black-100 uppercase"
                >
                    {title}
                </Typography>
                {viewAll && <Link href={"/individualStore"} className="hidden m:block">
                    <Button
                        intent={"text"}
                        text="VIEW ALL"
                        textClassname={"text-text-black-70"}
                        typographyVariant="grstk14"
                        icon={
                            <Arrow />
                        }
                    />
                </Link>}
            </Flex>
            <Flex className="overflow-auto gap-6 pl-5 m:pl-6 overflow-y-hidden">
                <MemoProductCard size="xsmall" />
                <MemoProductCard size="xsmall" />
                <MemoProductCard size="xsmall" />
                <MemoProductCard size="xsmall" />
                <MemoProductCard size="xsmall" />
                <MemoProductCard size="xsmall" />
                <MemoProductCard size="xsmall" />
            </Flex>
            {viewAll && <Link href={"/individualStore"} className=" m:hidden mx-auto">
                <Button
                    intent={"text"}
                    text="VIEW ALL"
                    textClassname={"text-text-black-70"}
                    typographyVariant="grstk14"
                    icon={
                        <Arrow />
                    }
                />
            </Link>}
        </FlexColumn>
    );
};

type BrandCardType = {
    isSelected: boolean;
    onClick: () => void;
};
const BrandCard: FC<BrandCardType> = ({ isSelected, onClick }) => {
    return (
        <Flex
            onClick={onClick}
            className={[
                "w-[232px] h-[132px] justify-center items-center border rounded-md bg-white hover:cursor-pointer shrink-0",
                isSelected ? "border-primary-green" : "border-border-whiteSmoke",
            ].join(" ")}
        >
            <img
                src={"/assets/Frame.png"}
                alt="image"
                className="w-[113px] h-[42px]"
            />
        </Flex>
    );
};

const FilterBrand = () => {
    const [state, setState] = useState(0)
    return (
        <FlexColumn className="pt-6 pb-4 bg-white gap-6">
            <Flex className="px-6 justify-between items-center">
                <Typography
                    intent={"grstk24"}
                    classname="tracking-[-0.84px] leading-[24px] font-medium text-text-black-100 uppercase"
                >
                    SORT BY BRAND
                </Typography>

            </Flex>
            <Flex className="overflow-auto gap-6 pl-6">
                <BrandCard onClick={() => setState(0)} isSelected={state === 0} />
                <BrandCard onClick={() => setState(1)} isSelected={state === 1} />
                <BrandCard onClick={() => setState(2)} isSelected={state === 2} />
                <BrandCard onClick={() => setState(3)} isSelected={state === 3} />
                <BrandCard onClick={() => setState(4)} isSelected={state === 4} />
                <BrandCard onClick={() => setState(5)} isSelected={state === 5} />

            </Flex>
        </FlexColumn>
    );
};

const Filter = () => {
    return (
        <FlexColumn className="bg-background-lightGreen border-b border-b-primary-green">
            <div className="h-[1px] bg-background-green-20" />
            <Type />
            <div className="h-[1px] bg-background-green-20" />
            <FlexColumn>
                <StoreFilter />
                <FilteredStores />
            </FlexColumn>
        </FlexColumn>
    );
};


export const Result = () => {
    return (
        <FlexColumn className="rounded-b-[4px] border-t-4 border-border-green-60 border shadow-categories xl:pb-6">
            <Flex className="p-5 m:p-6 justify-between">
                <Typography
                    intent={"grstk24"}
                    classname="tracking-[-0.84px] leading-[24px] font-medium text-text-black-100 uppercase"
                >
                    all
                </Typography>
                <Typography
                    intent={"mons15"}
                    classname="leading-[19.5px] font-medium text-text-black-40"
                >
                    320 Results
                </Typography>
            </Flex>
            <Filter />
            <FlexColumn>
                <FilteredProducts title="sort by deals" classname="bg-white" />
                <FilteredProducts title="SORT BY PRICE" classname="bg-white" />
                <FilterBrand />
                <FilteredProducts title="ASPEN GREEN" classname="bg-background-lightGreen" viewAll={false} />
            </FlexColumn>
        </FlexColumn>
    );
};
