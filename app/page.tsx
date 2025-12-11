"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Hero from "@/components/Hero"
import Newsletter from "@/components/Newsletter"
import Editorial from "@/components/Editorial"
import CategoryCard from "@/components/CategoryCard"
import ProductCard from "@/components/ProductCard"

export default function Home() {
  return (
    <main className='bg-[#F8F6F3] min-h-screen selection:bg-zinc-900 selection:text-white'>
      <Hero />

      {/* Categories Section */}
      <section className='py-32 px-6 max-w-screen-2xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <CategoryCard title='Furniture' image='/sofa.png' />
          <CategoryCard title='Tables' image='/table.png' />
          <CategoryCard title='Storage' image='/cabinet.png' />
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className='py-20 px-6 max-w-screen-2xl mx-auto'>
        <div className='flex justify-between items-end mb-16'>
          <div>
            <h2 className='text-4xl font-serif text-zinc-900 mb-4'>
              Bestsellers
            </h2>
            <p className='text-zinc-500 font-sans'>
              Curated favorites for your home.
            </p>
          </div>
          <Link
            href='/'
            className='hidden md:flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors font-sans'
          >
            View All <ArrowRight className='ml-2 w-4 h-4' />
          </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12'>
          <ProductCard
            name='Oak Dining Table'
            price='$1,295'
            image='/table.png'
          />
          <ProductCard
            name='Linen Lounge Chair'
            price='$895'
            image='/chair.png'
          />
          <ProductCard
            name='Stockholm Sideboard'
            price='$1,595'
            image='/cabinet.png'
          />
          <ProductCard
            name='Nordic Sofa 3-Seater'
            price='$2,495'
            image='/sofa.png'
          />
        </div>
      </section>

      <Editorial />
      <Newsletter />
    </main>
  )
}
