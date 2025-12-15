"use client"

import { useCartStore } from "@/store/cartStore"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Minus, Plus, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const Cart = () => {
  const {
    items,
    removeItemFromCart,
    increment,
    decrement,

    removeAllFromCart,
  } = useCartStore()

  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * (item.quantity ?? 1),
    0
  )

  if (items.length === 0) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center px-4'>
        <h1 className='text-3xl font-serif mb-4'>Your cart is empty</h1>
        <p className='text-muted-foreground mb-8'>
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Link href='/shop'>
          <Button size='lg'>Start Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-3xl md:text-4xl font-serif text-foreground'>
            Shopping Cart
          </h1>
          <Button
            variant='ghost'
            className='text-muted-foreground hover:text-destructive'
            onClick={removeAllFromCart}
          >
            Clear Cart
          </Button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Cart Items List */}
          <div className='lg:col-span-2 space-y-6'>
            {items.map((item) => (
              <div
                key={item.id}
                className='flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-card border border-border/50 shadow-sm'
              >
                <div className='relative w-full sm:w-32 sm:h-32 h-64 shrink-0 bg-muted rounded-md overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className='object-cover'
                  />
                </div>

                <div className='flex-1 flex flex-col justify-between'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <h3 className='text-lg font-medium text-foreground'>
                        {item.name}
                      </h3>
                      <p className='text-sm text-muted-foreground capitalize'>
                        {item.category}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItemFromCart(item.id)}
                      className='text-muted-foreground hover:text-destructive transition-colors p-1'
                    >
                      <Trash2 size={18} />
                      <span className='sr-only'>Remove</span>
                    </button>
                  </div>

                  <div className='flex items-end justify-between mt-4'>
                    <div className='flex items-center gap-3 border border-border rounded-full px-2 py-1'>
                      <button
                        onClick={() => decrement(item.id)}
                        className='p-1 hover:text-primary transition-colors disabled:opacity-50'
                        disabled={item.quantity === 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className='w-4 text-center text-sm font-medium'>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increment(item.id)}
                        className='p-1 hover:text-primary transition-colors'
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className='text-right'>
                      <p className='text-lg font-semibold'>
                        ${(item.price * (item.quantity ?? 1)).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href='/shop'
              className='inline-flex items-center text-sm text-muted-foreground hover:text-primary mt-4'
            >
              <ArrowLeft size={16} className='mr-2' />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <div className='bg-card border border-border/50 rounded-lg p-6 shadow-sm sticky top-24'>
              <h2 className='text-xl font-serif font-medium mb-6'>
                Order Summary
              </h2>

              <div className='space-y-4 mb-6'>
                <div className='flex justify-between text-muted-foreground'>
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-muted-foreground'>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className='border-t border-border pt-4 flex justify-between font-medium text-lg'>
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <Button asChild className='w-full' size='lg'>
                <Link href='/checkout'>Checkout</Link>
              </Button>

              <p className='text-xs text-center text-muted-foreground mt-4'>
                Secure Checkout - Free Shipping on all orders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
