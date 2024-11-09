import Image from 'next/image'
import Link from 'next/link'
import ViewCounter from '@/components/view-counter'
import { Suspense } from 'react'
import ExpandingArrow from '@/components/expanding-arrow'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="underline">Baby Shower Trivia</h1>
      <Image 
        src="/baby-bassinet-cradle-bed.png" 
        width={200}
        height={200}
        alt='bassinett'
      />
      <form>
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" type="text"/>
        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" type="text"/>      
        <input type="submit" value="Submit"/>
      </form>
      <Suspense>
        {/*@ts-ignore*/}
        <ViewCounter />
      </Suspense>
    </main>
  )
}
