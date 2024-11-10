import Image from 'next/image'
import ViewCounter from '@/components/view-counter'
import { Suspense } from 'react'
import SigninForm from '@/components/signin-form'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="underline">K & K Baby Shower</h1>
      <Image 
        className="dark:bg-slate-600 p-5 my-4 rounded-md"
        src="/baby-bassinet-cradle-bed.png" 
        width={300}
        height={300}
        alt='bassinett'
      />
      <SigninForm />
      <Suspense>
        {/*@ts-ignore*/}
        <ViewCounter />
      </Suspense>
    </main>
  )
}
