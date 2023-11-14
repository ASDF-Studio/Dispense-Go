import Image from 'next/image'
import { Button } from '@/core/button'

export default function Home() {
  return (
    <main className="">

      <Button text='Learn more' intent="filled" typographyVariant="buttons" />
      <Button text='Learn more' intent="outline" typographyVariant="buttons" />

    </main>
  )
}
