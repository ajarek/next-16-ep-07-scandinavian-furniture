import Image from "next/image";
import Link from "next/link";

const Editorial = () => (
  <section className='relative h-screen w-full overflow-hidden mt-32 group'>
    <Image
      src='/craftsman.png'
      alt='Craftsman working'
      fill
      className='object-cover transition-transform duration-[2s] group-hover:scale-105'
    />
    <div className='absolute inset-0 bg-black/40' />
    <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6'>
      <span className='text-sm font-medium tracking-[0.2em] uppercase mb-6 text-white/80 font-sans'>
        Our Philosophy
      </span>
      <h2 className='text-6xl md:text-8xl font-serif mb-8 tracking-tight'>
        Made to Last
      </h2>
      <p className='max-w-xl text-xl text-white/90 font-light mb-12 leading-relaxed font-sans'>
        Every piece tells a story of craftsmanship, patience, and respect for
        the material. We believe in furniture that ages gracefully with you.
      </p>
      <Link
        href='/about'
        className='px-12 py-4 bg-white text-zinc-900 rounded-full font-medium hover:bg-zinc-100 transition-colors font-sans'
      >
        Discover our story
      </Link>
    </div>
  </section>
)

export default Editorial