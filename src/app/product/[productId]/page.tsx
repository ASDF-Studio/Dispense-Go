import React from "react";
import { Checkbox, CheckboxClild } from "@/core/checkbox";
import { Flex, FlexCenter, FlexColumn } from "@/layout";
import { MainLayout } from "@/layout/main";
import { CategoryPoster } from "@/poster/category";
import { ProductList } from "@/sliders/productList";
import { ProductInformation } from "@/ui/productInformation";
import { Comments } from "@/ui/comments";

type ParamsProp = {
    params: { productId: string };
};

export default function Page({ params }: ParamsProp) {
    const productId = params.productId;
    return (
        <MainLayout>
            <ProductInformation productId={productId} />
            <Comments productId={productId} />
        </MainLayout>
    );
}
