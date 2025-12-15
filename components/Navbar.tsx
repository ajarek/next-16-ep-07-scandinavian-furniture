"use client"

import { useState, useEffect } from "react"
import { Search, ShoppingCart, User, Menu, X, LogIn as LogInIcon } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import ModeToggle from "./ModeToggle"
import { useRouter } from "next/navigation"
import { useCartStore } from "@/store/cartStore"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About Us" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const { items } = useCartStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  const totalItems = mounted
    ? items.reduce((acc, item) => acc + (item.quantity ?? 1), 0)
    : 0

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50'>
      <div className='max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between'>
        {/* Mobile Menu Button - Left */}
        <div className='md:hidden flex-1'>
          <button
            onClick={() => setIsOpen(true)}
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Logo - Center on mobile, Left on desktop */}
        <div className='flex items-center justify-center md:justify-start flex-1 md:flex-none'>
          <Link
            href='/'
            className='text-3xl font-serif text-foreground tracking-tight'
            onClick={() => setIsOpen(false)}
          >
            NØRD
          </Link>
        </div>

        {/* Desktop Menu - Center */}
        <div className='hidden md:flex flex-1 items-center justify-center space-x-12'>
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
        <div className='flex-1 flex items-center justify-end space-x-4 md:space-x-6'>
          <button
            className='text-muted-foreground hover:text-foreground transition-colors hidden sm:block'
            onClick={() => router.push("/shop")}
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <SignedOut>
              <SignUpButton>
                <Button className=' flex  cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-5 text-base font-bold tracking-[0.015em]'>
                  <User size={20} strokeWidth={1.5} />
                </Button>
              </SignUpButton>

              <SignInButton>
                <Button className='bg-secondary hover:bg-secondary/80 text-secondary-foreground flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-5   text-base font-bold tracking-[0.015em]'>
                  <LogInIcon size={20} strokeWidth={1.5} />
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

          <button
            className='text-muted-foreground hover:text-foreground transition-colors relative'
            onClick={() => router.push("/cart")}
          >
            <ShoppingCart size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className='absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground font-medium animate-in fade-in zoom-in duration-300'>
                {totalItems}
              </span>
            )}
          </button>

          <ModeToggle />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 top-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col lg:hidden'
          >
            {/* Mobile Header */}
            <div className='flex items-center justify-between p-6 h-20 border-b border-white/10 '>
              <div className='flex-1'>
                {/* Placeholder to balance close button */}
              </div>
              <span className='text-3xl font-serif text-white tracking-tight'>
                NØRD
              </span>
              <div className='flex-1 flex justify-end'>
                <button
                  onClick={() => setIsOpen(false)}
                  className='text-white/70 hover:text-white transition-colors'
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Mobile Links */}
            <div className='flex flex-col items-center justify-center flex-1 space-y-8 bg-black/60 backdrop-blur-md p-6'>
              {links.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className='text-3xl font-serif text-white/90 hover:text-white transition-colors'
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Area */}
            <div className='p-8 flex justify-center space-x-8 text-white/80 bg-black/60 backdrop-blur-md'>
              <button
                className='text-white/70 hover:text-white transition-colors'
                onClick={() => router.push("/shop")}
              >
                <Search size={24} strokeWidth={1.5} />
              </button>
              <SignedOut>
              <SignUpButton>
                <Button className=' flex  cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-5 text-base font-bold tracking-[0.015em]'>
                  <User size={20} strokeWidth={1.5} />
                </Button>
              </SignUpButton>

              <SignInButton>
                <Button className='bg-secondary hover:bg-secondary/80 text-secondary-foreground flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-5   text-base font-bold tracking-[0.015em]'>
                  <LogInIcon size={20} strokeWidth={1.5} />
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
