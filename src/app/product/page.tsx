import React from 'react';
import { Checkbox, CheckboxClild } from '@/core/checkbox'
import { Flex, FlexCenter, FlexColumn } from '@/layout'
import { MainLayout } from '@/layout/main'
import { CategoryPoster } from '@/poster/category'
import { ProductList } from '@/sliders/productList'
import { ProductInformation } from '@/ui/productInformation';
import { Comments } from '@/ui/comments';


export default function Page() {

    return (
        <MainLayout>
            <ProductInformation />
            <Comments />
        </MainLayout>
    );
}
