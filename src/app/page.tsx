import { MainLayout } from '@/layout/main'
import { HomePoster } from '@/poster/home'
import { ShopByStores } from '@/sliders/stores'
import { ProductScroll } from '@/sliders/dispenser'
import { Button } from '@/core'
import { IconHandler } from '../utils/icon'
import { DispenseInfo } from '@/poster/dispenseInfo'

export default function Home() {
  return (
    <MainLayout>
      <HomePoster />
      <ShopByStores />
      <ProductScroll colorSchema={0} />
      <ProductScroll colorSchema={1} />
      <ProductScroll colorSchema={2} />
      <ProductScroll colorSchema={3} />
      <div className='pt-[48px] pb-[100px] flex justify-center'>
        <Button classname='w-[435px]' intent={"filled"} typographyVariant="buttons" text='VIEW ALL STORES NEAR ME' icon={<IconHandler name="arrow-right" classname={["font-light tracking-[2.03px]"].join(" ")} />} />
      </div>
      <DispenseInfo />
    </MainLayout>
  )
}
