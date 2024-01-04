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

interface checkboxDetails {
  label: string;
  children: string[];
}

type ItemType = {
  label: string
  isChildren?: boolean
}

export const Item: FC<ItemType> = ({ label, isChildren = false }) => {
  return <Flex className={['gap-2', isChildren && "pl-4"].join(" ")} >
    <input type="checkbox" className="accent-black" />
    <Typography classname="text-text-black-100 leading-[13px] font-medium tracking-[1.885px] uppercase" intent={"grstk13"}>{label}</Typography>
  </Flex >
}


export default function Category() {
  const [showFilter, setShowFilter] = useState(false)

  const data: checkboxDetails[] = [
    { label: 'All', children: ['indica', 'sativa', 'hybrid'] },
    { label: 'FLOWERS', children: [] },
    { label: 'EDIBLES', children: [] },
    { label: 'CONCENTRATES', children: [] },
    { label: 'CBD', children: [] },
    { label: 'PRE-ROLLS', children: [] },
  ];

  return (
    <MainLayout>
      <FilterModal open={showFilter} setOpen={setShowFilter} />
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
