"use client"
import React, { FC, useState } from 'react';
import { Flex, FlexCenter, FlexColumn } from '@/layout'
import { MainLayout } from '@/layout/main'
import { CategoryPoster } from '@/poster/category'
import { ProductList } from '@/sliders/productList'
import { Button, Typography } from '@/core';
import { Divider } from '@/divider';
import { Filter } from '../../svg';
import { FilterModal } from '@/modals/filter';
import { useParams } from 'next/navigation';
import { useQueryString } from '../../hooks/useQueryString';

interface checkboxDetails {
  label?: string;
  children: string[];
}

type ItemType = {
  label?: string
  isChildren?: boolean
  isSelected?: boolean
  onCheck?: () => void
}

export const Item: FC<ItemType> = ({ label, isChildren = false, isSelected = false, onCheck }) => {
  return <Flex className={['gap-2', isChildren && "pl-4"].join(" ")} >
    <input type="checkbox" checked={isSelected} onChange={() => onCheck()} className="accent-black" />
    <Typography classname="leading-[13px] font-medium tracking-[1.885px] uppercase text-text-black-100" intent={"grstk13"}>{label}</Typography>
  </Flex >
}


export default function Category() {
  const [showFilter, setShowFilter] = useState(false)
  const [activeFilter, setSelectedFilter] = useState<string[]>([])
  const { param } = useQueryString("filter")

  const data: checkboxDetails[] = [
    { label: 'ALL', children: ['INDICA', 'SATIVA', 'HYBRID'] },
    { label: 'FLOWERS', children: [] },
    { label: 'EDIBLES', children: [] },
    { label: 'CONCENTRATES', children: [] },
    { label: 'CBD', children: [] },
    { label: 'PRE-ROLLS', children: [] },
  ];

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
    <MainLayout>
      <FilterModal open={showFilter} setOpen={setShowFilter} />
      <Flex className="relative m:pl-6 xl:pl-[45px] bg-white">
        <Flex className="m:w-[213px] xl:w-[226px] sticky h-fit bg-white py-[34px] xl:py-[41px] shrink-0 top-0 border-r border-border-whiteSmoke hidden m:flex">
          <FlexColumn className='gap-6 w-full'>
            {data.map(({ children, label }) => {
              const isActive = activeFilter.includes(label)
              if ((param?.toUpperCase() === "EDIBLES" || param?.toUpperCase() === "CONCENTRATES") && label !== "ALL") return
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
        <FlexColumn className='w-full pt-6 pb-16 m:pb-24 xl:pb-16 gap-6 xl:gap-8 overflow-hidden'>
          <CategoryPoster />
          <Flex className='m:hidden justify-end px-5'>
            <Button text='filter' withWidth={false} onClick={() => setShowFilter(true)} startIcon={<Filter />} />
          </Flex>
          <ProductList text={"Rendal Store - Jones Ave"} variant="tertiary" destination={0.5} />
          <div className="border-b border-border-whiteSmoke mb-2"></div>
          <ProductList text={"Jixon & Co’s Store"} variant="tertiary" destination={0.05} />
          <div className="border-b border-border-whiteSmoke mb-2"></div>
          <ProductList text={"Rendal Store - Clark Park"} variant="tertiary" destination={0.05} />
        </FlexColumn>
      </Flex>
    </MainLayout>
  );
}
