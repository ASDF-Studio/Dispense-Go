import React from 'react';
import { Checkbox, CheckboxClild } from '@/core/checkbox'
import { Flex, FlexCenter, FlexColumn } from '@/layout'
import { MainLayout } from '@/layout/main'
import { CategoryPoster } from '@/poster/category'
import { ProductList } from '@/sliders/productList'

interface checkboxDetails {
  label: string;
  children: string[];
}


export default function Category() {

  const data: checkboxDetails[] = [
    { label: 'Parent', children: ['indica', 'sativa', 'hybrid'] },
    { label: 'FLOWERS', children: [] },
    { label: 'EDIBLES', children: [] },
    { label: 'CONCENTRATES', children: [] },
    { label: 'CBD', children: [] },
    { label: 'PRE-ROLLS', children: [] },
  ];

  return (
    <MainLayout>
      <Flex className="relative">
        <div className="w-1/5 sticky top-20 p-10 h-screen bg-white">
          <div className="border-r border-border-whiteSmoke pb-2">
            {data.map((item, index) =>
              <React.Fragment key={index}>
                <Checkbox label={item.label} />
                {item.children.map((child, childIndex) => (
                  <CheckboxClild key={childIndex} label={child} />
                ))}
                <div className="border-b border-border-whiteSmoke mb-2"></div>
              </React.Fragment>
            )}
          </div>
        </div>

        <div className="w-4/5">
          <CategoryPoster />
          <div className="w-full">
            <ProductList text={"Rendal Store - Jones Ave"} variant="tertiary" destination={0.05}/>
            <ProductList text={"Jixon & Co’s Store"} variant="tertiary" destination={0.05}/>
            <ProductList text={"Mike's dispensary"} variant="tertiary" destination={0.05}/>
          </div>
        </div>
      </Flex>
    </MainLayout>
  );
}
