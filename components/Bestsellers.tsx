import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ProductCard from './ProductCard'
import products from '../data/products.json'
const Bestsellers = () => {
  return (
     
      <section className='py-20 px-6 max-w-screen-2xl mx-auto'>
        <div className='flex justify-between items-end mb-16'>
          <div>
            <h2 className='text-4xl font-serif text-foreground mb-4'>
              Bestsellers
            </h2>
            <p className='text-muted-foreground font-sans'>
              Curated favorites for your home.
            </p>
          </div>
          <Link
            href='/shop'
            className='hidden md:flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors font-sans'
          >
            View All <ArrowRight className='ml-2 w-4 h-4' />
          </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12'>
          {products
          .slice(0, 4)
          .map((product) => (
            <ProductCard
            id={product.id.toString()}
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
         
        </div>
      </section>
  )
}

export default Bestsellers