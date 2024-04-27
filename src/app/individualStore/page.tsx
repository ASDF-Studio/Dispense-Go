"use client";
import React, { FC, useEffect, useReducer, useState } from "react";
import { Checkbox, CheckboxClild } from "@/core/checkbox";
import { Flex, FlexCenter, FlexColumn } from "@/layout";
import { MainLayout } from "@/layout/main";
import { StoreBanner } from "@/ui/individual-store/store-info";
import { Links, PaddingX, Products } from "../../constants";
import { Input } from "@/core/input";
import { CustomIconHandler } from "../../utils/icon";
import { Button, Typography } from "@/core";
import { FilterModal } from "@/modals/filter";
import { Divider } from "@/divider";
import { Item } from "../category/page";
import { Filter } from "../../svg";
import { ProductList } from "@/sliders/productList";
import { StoreInfoModal } from "@/modals/store-information";
import { uniqBy } from "lodash";
import { MemoProductCard } from "@/cards/deals";
import { useAppSelector } from "../../redux/hook";


type FilterItemType = {
  text: string;
  isSelected: boolean;
  onClick: () => void
};

const FilterItem: FC<FilterItemType> = ({ text, isSelected, onClick }) => {
  return (
    <Flex onClick={onClick} className={["hover:cursor-pointer h-auto shrink-0 items-center border-b-4 border-t-4 border-t-transparent", isSelected ? "border-b-primary-brand" : "border-b-transparent"].join(" ")}>
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

  const [activeFilter, setSelectedFilter] = useState<string[]>([])

  const { products } = useAppSelector((state)=>state.products)

  const data: checkboxDetails[] = [
    { label: 'ALL', children: ['INDICA', 'SATIVA', 'HYBRID'] },
    { label: 'FLOWERS', children: [] },
    { label: 'EDIBLES', children: [] },
    { label: 'CONCENTRATES', children: [] },
    { label: 'CBD', children: [] },
    { label: 'PRE-ROLLS', children: [] },
  ];

  const menu = [
    "All products",
    "deals",
    "flowers",
    "edibles",
    "concentrates",
    "cbd",
    "pre-rolls",
    "brands",
  ]


  const handleFilterClick = (label: string, isSelected: boolean) => {
    if (isSelected) {
      let newState = activeFilter
      if (label === "INDICA" || label === "SATIVA" || label === "HYBRID") {
        newState = newState.filter(el => el !== "ALL")
      }
      newState = newState.filter(el => el !== label)
      setSelectedFilter(newState)

    } else {
      let newState: string[] = []

      if (label === "ALL") {
        // @ts-ignore
        newState = [...new Set([...activeFilter, label, "INDICA", "SATIVA", "HYBRID"])]
      } else {
        // @ts-ignore
        newState = [...new Set([...activeFilter, label])]
      }

      if (newState.includes("INDICA") && newState.includes("SATIVA") && newState.includes("HYBRID") && !newState.includes("ALL")) {
        newState.push("ALL")
      }

      setSelectedFilter(newState)
    }
  }

  return (
    <MainLayout withNavigation={false}>
      <StoreBanner handleStoreInfo={() => setShopInfo(true)} />
      <Flex className={["pl-5 m:px-tablet xl:px-desktop gap-6 m:gap-[30px] h-[51px] items-center w-full"].join(" ")}>
        <Input
          placeholder="Brand, store, products"
          startingIcon={<CustomIconHandler name="search-icon" />}
          containerClassname="p-2 rounded-md border border-border-whiteSmoke  bg-background-whiteGrey w-[189px] m:w-[232px] 2xl:w-[238px] shrink-0"
          classname="bg-transparent search-input-1"
        />
        <Flex className="relative h-full overflow-hidden">
          <Flex className="h-full gap-12 m:gap-[56px] overflow-auto">
            {menu.map((text, index) => {
              return <FilterItem key={index} onClick={() => setState(index)} text={text} isSelected={index === state} />;
            })}
          </Flex>
          <div className="m:hidden gradient-menu h-[51px] absolute w-10 top-0 right-0" />
        </Flex>

      </Flex>
      <FilterModal open={showFilter} setOpen={setShowFilter} />
      <StoreInfoModal open={showShopInfo} setOpen={setShopInfo} />
      <Flex className={["relative", state === 0 ? "pl-0" : "m:pl-6 xl:pl-[45px]"].join(" ")}>
        {
          state !== 0 && <Flex className="m:w-[213px] xl:w-[226px] sticky h-fit bg-white py-[34px] xl:py-[41px] shrink-0 top-0 border-r border-border-whiteSmoke hidden m:flex">
            <FlexColumn className='gap-6 w-full'>
              {data.map(({ children, label }) => {
                const isActive = activeFilter.includes(label)
                if ((state === 3 || state === 4 || state === 5 || state === 6) && label !== "ALL") return 
                return <FlexColumn className="gap-6 w-full">
                  <Item label={label} isSelected={isActive} onCheck={() => handleFilterClick(label, isActive)} />
                  {children.map((el) => {
                    return <Item label={el} isChildren={true} isSelected={activeFilter.includes(el)} onCheck={() => handleFilterClick(el, activeFilter.includes(el))} />
                  })}
                  <Divider />
                </FlexColumn>
              })}
            </FlexColumn>
          </Flex>
        }
        <FlexColumn className='w-full pt-6 pb-16 m:pb-24 xl:pb-16 gap-6 xl:gap-8 overflow-hidden'>
          <Flex className='m:hidden justify-end px-5'>
            <Button text='filter' withWidth={false} onClick={() => setShowFilter(true)} startIcon={<Filter />} />
          </Flex>
          {
            state === 0 ? <>
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
            </> : <FlexColumn className="gap-6 xl:gap-12 w-full px-5 m:pl-6 xl:pl-[42px]">
              <Typography intent={"grstk24"} classname="tracking-[-0.84px] leading-[24px] text-text-black-100 font-medium uppercase">{menu[state]}</Typography>
              <Flex className="flex-wrap w-full gap-6 hidden xl:flex xl:flex-wrap gap-y-12">
                {
                  products.map((product, index) => {
                    return <MemoProductCard productId={product.productId} key={product.productId} originalPrice={product.originalPrice} discountPrice={product.discountPrice} index={index} size={"xsmall"} color={"black"} title={product.title} images={product.image} badge={product.type} sellPercentage={product?.sale} />
                  })
                }
              </Flex>
              <Flex className="flex-wrap w-full gap-6 hidden m:flex m:flex-wrap xl:hidden gap-y-12">
                {
                  products.map((product, index) => {
                    return <MemoProductCard productId={product.productId} key={product.productId} originalPrice={product.originalPrice} discountPrice={product.discountPrice} index={index} size={"tablet"} color={"black"} title={product.title} images={product.image} badge={product.type} sellPercentage={product?.sale} />
                  })
                }
              </Flex>
              <Flex className="flex-wrap w-full gap-6 m:hidden gap-y-12">
                {
                  products.map((product, index) => {
                    return <MemoProductCard productId={product.productId} key={product.productId} originalPrice={product.originalPrice} discountPrice={product.discountPrice} index={index} size={"phone"} color={"black"} title={product.title} images={product.image} badge={product.type} sellPercentage={product?.sale} />
                  })
                }
              </Flex>
            </FlexColumn>
          }

        </FlexColumn>
      </Flex>
    </MainLayout>
  );
}
