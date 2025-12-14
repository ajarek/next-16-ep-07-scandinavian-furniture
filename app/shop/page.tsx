"use client"

import { useState } from "react"

import ProductCard from "@/components/ProductCard"
import Newsletter from "@/components/Newsletter"
import products from "@/data/products.json"

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className='bg-background min-h-screen selection:bg-primary selection:text-primary-foreground pt-24'>
      <section className='py-20 px-6 max-w-screen-2xl mx-auto'>
        <div className='mb-16'>
          <h1 className='text-4xl md:text-5xl font-serif text-foreground mb-4'>
            All Products
          </h1>

          <p className='text-muted-foreground font-sans text-lg max-w-2xl mb-8'>
            Explore our complete collection of Scandinavian furniture, designed
            for modern living.
          </p>

          <div className='mb-8'>
            <input
              type='text'
              placeholder='Search products...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full max-w-md px-4 py-2 border border-input rounded-full bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
            />
          </div>

          <div className='flex flex-wrap gap-4'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12'>
          {filteredProducts.map((product) => (
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
      <Newsletter />
    </main>
  )
}

export default ShopPage
