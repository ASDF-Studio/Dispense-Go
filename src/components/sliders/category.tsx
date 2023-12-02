import { CategoryCard } from "@/cards/category"
import { Flex } from "@/layout"
import { PaddingX } from "../../constants"

export const CategorySlider = () => {
    return <Flex className={["overflow-x-auto py-5 m:py-[56px] bg-background-lightGreen", PaddingX].join(" ")}>
        <CategoryCard title='DEALS' description='Latest products with exclusive bundle deals and promos' />
        <CategoryCard image="category2.png" title='FLOWERS' description='Buds containing higher concentrations of cannabinoids' />
        <CategoryCard image="category3.png" title='CONCENTRATES' description='Hailed as more potent and versatile cannabis' />
        <CategoryCard title='EDIBLES' description='Cannabis-infused foods blended with tasty flavors' image="category4.png" />
        <CategoryCard title='DEALS' description='Latest products with exclusive bundle deals and promos' />
        <CategoryCard title='DEALS' description='Latest products with exclusive bundle deals and promos' />
        <CategoryCard title='DEALS' description='Latest products with exclusive bundle deals and promos' />
        <CategoryCard title='DEALS' description='Latest products with exclusive bundle deals and promos' />
        <CategoryCard title='DEALS' description='Latest products with exclusive bundle deals and promos' />
        <CategoryCard title='DEALS' description='Latest products with exclusive bundle deals and promos' />
        <CategoryCard title='DEALS' isLast={true} description='Latest products with exclusive bundle deals and promos' />
    </Flex>
}