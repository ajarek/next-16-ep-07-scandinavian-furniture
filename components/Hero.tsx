import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Hero = () => (
  <section className='relative pt-32 min-h-screen flex items-center'>
    <div className='max-w-screen-2xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
      {/* Text Content */}
      <div className='space-y-8 pr-8 lg:order-1 order-2 pb-12 lg:pb-0 z-10'>
        <div className='space-y-4'>
          <h2 className='text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase font-sans'>
            Made for Everyday Life
          </h2>
          <h1 className='text-6xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1] tracking-tight'>
            Timeless <br className='hidden lg:block' />
            Scandinavian <br className='hidden lg:block' />
            Design
          </h1>
        </div>

        <p className='text-lg text-muted-foreground max-w-md font-light leading-relaxed font-sans'>
          Crafting spaces that breathe. Experience the harmony of natural
          materials and minimalist forms, designed to bring calm to your modern
          home.
        </p>

        <Link
          href='/shop'
          className='group inline-flex items-center px-8 py-4 bg-transparent border border-foreground rounded-full text-foreground font-medium transition-all duration-300 hover:bg-foreground hover:text-background font-sans'
        >
          Discover the Collection
          <ArrowRight className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1' />
        </Link>
      </div>

      {/* Hero Image */}
      <div className='relative h-[60vh] lg:h-[80vh] w-full lg:order-2 order-1 overflow-hidden rounded-2xl group'>
        <Image
          src='/hero.png'
          alt='Minimalist Living Room'
          fill
          className='object-cover transition-transform duration-1000 group-hover:scale-105'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      </div>
    </div>
  </section>
)

export default Hero
