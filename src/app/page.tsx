import Image from 'next/image'
import { Button } from '@/core/button'
import { ProductCard } from '@/cards/deals'
import { StoreCard } from '@/cards/store-card'

export default function Home() {
  return (
    <main className="flex flex-col gap-2 mt-4">

      <div className='flex gap-2.5'>
        <Button text='Learn more' intent="filled" typographyVariant="buttons" />
        <Button text='Learn more' intent="outline" typographyVariant="buttons" />
      </div>
      <div className='flex flex-wrap gap-2.5'>
        <StoreCard /><StoreCard /><StoreCard /><StoreCard /><StoreCard /><StoreCard /><StoreCard /><StoreCard />
      </div>

      <div className='flex flex-wrap gap-2.5'>
        <ProductCard />
        <ProductCard />
        <ProductCard /><ProductCard />
        <ProductCard />
        <ProductCard /><ProductCard />
        <ProductCard />
        <ProductCard /><ProductCard />
        <ProductCard />
        <ProductCard />
      </div>


    </main>
  )
}
