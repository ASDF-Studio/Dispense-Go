"use client";
import React, { FC, useState } from "react";
import { Checkbox, CheckboxClild } from "@/core/checkbox";
import { Flex, FlexCenter, FlexColumn } from "@/layout";
import { MainLayout } from "@/layout/main";
import { StoreBanner } from "@/ui/individual-store/store-info";
import { Links, PaddingX } from "../../constants";
import { CustomLink } from "@/layout/header";
import { Input } from "@/core/input";
import { CustomIconHandler } from "../../utils/icon";
import { Button, Typography } from "@/core";
import { FilterModal } from "@/modals/filter";
import { Divider } from "@/divider";
import { Item } from "../category/page";
import { Filter } from "../../svg";
import { ProductList } from "@/sliders/productList";
import { StoreInfoModal } from "@/modals/store-information";

type FilterItemType = {
  text: string;
  isSelected: boolean;
  onClick: () => void
};

const FilterItem: FC<FilterItemType> = ({ text, isSelected, onClick }) => {
  return (
    <Flex onClick={onClick} className={["h-auto shrink-0 items-center border-b-4 border-t-4 border-t-transparent", isSelected ? "border-b-primary-brand" : "border-b-transparent"].join(" ")}>
      <Typography
        intent={"grstk13"}
        classname="tracking-[1.885px] leading-[13px] text-text-black-100 font-medium uppercase"
      >
        {text}
      </Typography>
    </Flex>
  );
};

interface checkboxDetails {
  label: string;
  children: string[];
}

export default function IndividualStore() {
  const [state, setState] = useState(0)
  const [showFilter, setShowFilter] = useState(false)
  const [showShopInfo, setShopInfo] = useState(false)

  const data: checkboxDetails[] = [
    { label: 'All', children: ['indica', 'sativa', 'hybrid'] },
    { label: 'FLOWERS', children: [] },
    { label: 'EDIBLES', children: [] },
    { label: 'CONCENTRATES', children: [] },
    { label: 'CBD', children: [] },
    { label: 'PRE-ROLLS', children: [] },
  ];

  return (
    <MainLayout withNavigation={false}>
      <StoreBanner handleStoreInfo={() => setShopInfo(true)} />
      <Flex className={[PaddingX, "gap-6 m:gap-[30px] h-[51px] items-center w-full"].join(" ")}>
        <Input
          placeholder="Brand, store, products"
          startingIcon={<CustomIconHandler name="search-icon" />}
          containerClassname="p-2 rounded-md border border-border-whiteSmoke  bg-background-whiteGrey w-full w-[189px] m:w-[232px] 2xl:w-[238px] shrink-0"
          classname="bg-transparent search-input-1"
        />
        <Flex className="h-full gap-12 m:gap-[56px] overflow-auto">
          {[
            "All products",
            "deals",
            "flowers",
            "edibles",
            "concentrates",
            "cbd",
            "pre-rolss",
            "brands",
          ].map((text, index) => {
            return <FilterItem key={index} onClick={() => setState(index)} text={text} isSelected={index === state} />;
          })}
        </Flex>
      </Flex>
      <FilterModal open={showFilter} setOpen={setShowFilter} />
      <StoreInfoModal open={showShopInfo} setOpen={setShopInfo} />
      <Flex className="relative m:pl-6 xl:pl-[45px]">
        <Flex className="m:w-[213px] xl:w-[226px] sticky h-fit bg-white py-[34px] xl:py-[41px] shrink-0 top-0 border-r border-border-whiteSmoke hidden m:flex">
          <FlexColumn className='gap-6 w-full'>
            {data.map(({ children, label }) => {
              return <FlexColumn className="gap-6 w-full">
                <Item label={label} />
                {children.map((el) => {
                  return <Item label={el} isChildren={true} />
                })}
                <Divider />
              </FlexColumn>
            })}
          </FlexColumn>
        </Flex>
        <FlexColumn className='w-full pt-6 pb-16 m:pb-24 xl:pb-16 gap-6 xl:gap-8 overflow-hidden'>
          <Flex className='m:hidden justify-end px-5'>
            <Button text='filter' withWidth={false} onClick={() => setShowFilter(true)} startIcon={<Filter />} />
          </Flex>
          <ProductList text={"Deals"} variant="tertiary" />
          <div className="border-b border-border-whiteSmoke mb-2"></div>
          <ProductList text={"Flowers"} variant="tertiary" />
          <div className="border-b border-border-whiteSmoke mb-2"></div>
          <ProductList text={"Edibles"} variant="tertiary" />
          <div className="border-b border-border-whiteSmoke mb-2"></div>
          <ProductList text={"concentrates"} variant="tertiary" />
          <div className="border-b border-border-whiteSmoke mb-2"></div>
          <ProductList text={"CBD"} variant="tertiary" />
          <div className="border-b border-border-whiteSmoke mb-2"></div>
          <ProductList text={"pre-rolls"} variant="tertiary" />
          <div className="border-b border-border-whiteSmoke mb-2"></div>
          <ProductList text={"pre-rolls"} variant="tertiary" />
        </FlexColumn>
      </Flex>
    </MainLayout>
  );
}
