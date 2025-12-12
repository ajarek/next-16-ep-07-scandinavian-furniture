import { Search, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import ModeToggle from "./ModeToggle"
 
const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/collection", label: "Collection" },
    { href: "/about", label: "About Us" },
    { href: "/journal", label: "Journal" },
]

const Navbar = () => (
  <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50'>
    <div className='max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between'>
      {/* Logo */}
      <div className='flex-1'>
        <Link
          href='/'
          className='text-3xl font-serif text-foreground tracking-tight'
        >
          NØRD
        </Link>
      </div>

      {/* Center Menu */}
      <div className='hidden md:flex items-center space-x-12'>
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide font-sans'
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right Icons */}
      <div className='flex-1 flex items-center justify-end space-x-6'>
        <button className='text-muted-foreground hover:text-foreground transition-colors'>
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button className='text-muted-foreground hover:text-foreground transition-colors'>
          <User size={20} strokeWidth={1.5} />
        </button>
        <button className='text-muted-foreground hover:text-foreground transition-colors relative'>
          <ShoppingCart size={20} strokeWidth={1.5} />
          <span className='absolute -top-1 -right-1 flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
          </span>
        </button>
        <ModeToggle />
      </div>
    </div>
  </nav>
)

export default Navbar
