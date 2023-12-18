"use client"
import React from 'react';
import { Checkbox, CheckboxClild } from '@/core/checkbox'
import { Flex, FlexCenter, FlexColumn } from '@/layout'
import { MainLayout } from '@/layout/main'
import { CategoryPoster } from '@/poster/category'
import { ProductList } from '@/sliders/productList'

export default function IndividualStore() {

  return (
    <MainLayout>
      <Flex className="relative">
        <div className="w-full">
          <ProductList text={"DEALS"} variant="tertiary" />
          <ProductList text={"FLOWERS"} variant="tertiary" />
          <ProductList text={"EDIBLES"} variant="tertiary" />
          <ProductList text={"CONCENTRATES"} variant="tertiary" />
          <ProductList text={"CBD"} variant="tertiary" />
          <ProductList text={"PRE-ROLLS"} variant="tertiary" />
        </div>
      </Flex>
    </MainLayout>
  );
}
