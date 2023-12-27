"use client"
import React from 'react';
import { Checkbox, CheckboxClild } from '@/core/checkbox'
import { Flex, FlexCenter, FlexColumn } from '@/layout'
import { MainLayout } from '@/layout/main'
import { CategoryPoster } from '@/poster/category'
import { ProductList } from '@/sliders/productList'
import { BackToShopping, CheckoutPageBody } from '@/checkout/back-to-shopping';

export default function IndividualStore() {

  return (
    <MainLayout>
      <BackToShopping />
      <CheckoutPageBody />
    </MainLayout>
  );
}
