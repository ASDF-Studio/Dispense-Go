import { CategoryCard } from "@/cards/category"
import { Flex } from "@/layout"
import { PaddingX } from "../../constants"
import { Slider } from "./slider"
import { CustomSwiper } from "./swiper"

export const CategorySlider = () => {
    return <CustomSwiper withPagination={false} classname={["!py-5 m:!py-[56px] !bg-background-lightGreen", PaddingX].join(" ")}>
        <CategoryCard title='DEALS' description='Latest products with exclusive bundle deals and promos' />
        <CategoryCard image="category2.png" title='FLOWERS' description='Buds containing higher concentrations of cannabinoids' />
        <CategoryCard image="category3.png" title='CONCENTRATES' description='Hailed as more potent and versatile cannabis' />
        <CategoryCard title='EDIBLES' description='Consume with different flavors without the harsh smoke' image="category4.png" />
        <CategoryCard title='CBD' description='Products with non-psychoactive compounds' image="category5.png" />
        <CategoryCard title='PRE-ROLLS' description='Joint rolled ahead of time and ready to purchase' image="category6.png" />
        <CategoryCard title='ACCESSORIES' description='Spice your experience with convenient and fun equipment' image="category7.png" />
    </CustomSwiper>
}