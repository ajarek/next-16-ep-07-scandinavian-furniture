import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const Navbar = () => (
  <nav className='fixed top-0 left-0 right-0 z-50 bg-[#F8F6F3]/80 backdrop-blur-md border-b border-zinc-200/50'>
    <div className='max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between'>
      {/* Logo */}
      <div className='flex-1'>
        <Link
          href='/'
          className='text-3xl font-serif text-zinc-900 tracking-tight'
        >
          NØRD
        </Link>
      </div>

      {/* Center Menu */}
      <div className='hidden md:flex items-center space-x-12'>
        {["Shop", "Collection", "About Us", "Journal"].map((item) => (
          <Link
            key={item}
            href={`/`}
            className='text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors uppercase tracking-wide font-sans'
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right Icons */}
      <div className='flex-1 flex items-center justify-end space-x-6'>
        <button className='text-zinc-600 hover:text-zinc-900 transition-colors'>
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button className='text-zinc-600 hover:text-zinc-900 transition-colors'>
          <User size={20} strokeWidth={1.5} />
        </button>
        <button className='text-zinc-600 hover:text-zinc-900 transition-colors relative'>
          <ShoppingCart size={20} strokeWidth={1.5} />
          <span className='absolute -top-1 -right-1 flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-zinc-900'></span>
          </span>
        </button>
      </div>
    </div>
  </nav>
)

export default Navbar
