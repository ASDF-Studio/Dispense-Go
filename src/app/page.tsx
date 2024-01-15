import { MainLayout } from '@/layout/main'
import { HomePoster } from '@/poster/home'
import { ShopByStores } from '@/sliders/stores'
import { ProductScroll } from '@/sliders/dispenser'
import { Button } from '@/core'
import { IconHandler } from '../utils/icon'
import { DispenseInfo } from '@/poster/dispenseInfo'
import { CategorySlider } from '@/sliders/category'
import 'swiper/css';
import Link from 'next/link'

export default function Home() {
  return (
    <MainLayout>
      {/* <ProductScrollTest /> */}
      <HomePoster /> 
      <CategorySlider />
      <ShopByStores />
      <ProductScroll text={"Bob's dispensary"} variant="primary" />
      <ProductScroll text={"Featured products"} variant="secondary" productColor="white" />
      <ProductScroll text={"Mike's dispensary"} variant="primary" productColor="black" />
      <ProductScroll text={"happy light dispensary"} variant="tertiary" productColor="black" /> 

      <div className='pt-[48px] pb-[100px] xl:flex justify-center hidden'>
        <Link href={"category"}>
        
        <Button
          classname='w-[435px]'
          intent={"filled"}
          typographyVariant="buttons"
          text='VIEW ALL STORES NEAR ME'
          icon={
            <IconHandler name="arrow-right"
              classname={["font-light tracking-[2.03px]"].join(" ")}
            />}
            
        />
        </Link>
      </div>
      <DispenseInfo />
    </MainLayout>
  )
}
