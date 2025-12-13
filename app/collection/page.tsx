import React from "react"
import Image from "next/image"
import Link from "next/link"

const CollectionPage = () => {
  const collections = [
    {
      name: "Dining room",
      image: "/Collection-1.webp",
      description: "Comfort meets minimalism",
    },
    {
      name: "Living room",
      image: "/Collection-2.webp",
      description: "Centerpieces for gathering",
    },
    {
      name: "Bedroom",
      image: "/Collection-3.webp",
      description: "Relax in style",
    },
  ]

  return (
    <main className='bg-background min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-[85vh] w-full flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/hero.png'
            alt='Minimalist Living Room'
            fill
            className='object-cover'
            priority
            quality={90}
          />
          {/* Subtle overlay for text readability if needed */}
          <div className='absolute inset-0 bg-black/10' />
        </div>

        <div className='relative z-10 flex flex-col items-center justify-center text-center px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000'>
          <h1 className='text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-md tracking-tight'>
            The NØRD Collection
          </h1>
          <p className='text-lg md:text-xl text-white/90 mb-10 font-sans max-w-xl mx-auto drop-shadow-sm font-light leading-relaxed'>
            Curated pieces that define the essence of Scandinavian living.
            Simplicity, functionality, and beauty in perfect harmony.
          </p>

          <Link href='/shop' passHref>
            <button className='bg-white text-black border-2 border-black rounded-lg px-8 py-3 text-sm md:text-base font-medium tracking-widest uppercase hover:bg-black hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105'>
              Go to the store
            </button>
          </Link>
        </div>
      </section>

      {/* Tabs / Sub-Collections Section */}
      <section className='py-20 px-6 max-w-screen-2xl mx-auto'>
        <h2 className='text-2xl md:text-4xl font-serif  mb-6 drop-shadow-md tracking-tight'>
         Other collections
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {collections.map((collection, index) => (
            <div
              key={index}
              className='group relative h-[400px] w-full overflow-hidden rounded-sm cursor-pointer'
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500' />

              <div className='absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500'>
                <p className='text-sm uppercase tracking-widest mb-2 opacity-80 font-sans'>
                  Collection {index + 1}
                </p>
                <h2 className='text-3xl font-serif mb-2'>{collection.name}</h2>
                <div className='h-px w-0 group-hover:w-12 bg-white transition-all duration-500 delay-100 mb-2' />
                <p className='text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200'>
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CollectionPage
