"use client"

import Hero from "@/components/Hero"
import Newsletter from "@/components/Newsletter"
import Editorial from "@/components/Editorial"
import Categories from "@/components/Categories"
import Bestsellers from "@/components/Bestsellers"

export default function Home() {
  return (
    <main className='bg-background min-h-screen selection:bg-primary selection:text-primary-foreground'>
      <Hero />
      <Categories />
      <Bestsellers />
      <Editorial />
      <Newsletter />
    </main>
  )
}
