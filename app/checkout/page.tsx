"use client"

import React, { useState } from "react"
import { useCartStore } from "@/store/cartStore"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, CreditCard, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const Checkout = () => {
  const { items, removeAllFromCart } = useCartStore()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * (item.quantity ?? 1),
    0
  )

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      removeAllFromCart()
      router.push("/") // Or a success page if one existed
      // In a real app, we'd handle the order submission here
      toast("Order placed successfully! Thank you for shopping with NØRD.")
    }, 2000)
  }

  if (items.length === 0) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center px-4'>
        <h1 className='text-3xl font-serif mb-4'>Your cart is empty</h1>
        <p className='text-muted-foreground mb-8'>
          Add some items to your cart to proceed to checkout.
        </p>
        <Link href='/shop'>
          <Button size='lg'>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-8'>
          <Link
            href='/cart'
            className='inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            <ArrowLeft size={16} className='mr-2' />
            Back to Cart
          </Link>
          <h1 className='text-3xl md:text-4xl font-serif text-foreground mt-4'>
            Checkout
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          {/* Checkout Form */}
          <div className='lg:col-span-7 space-y-8'>
            <form
              id='checkout-form'
              onSubmit={handleCheckout}
              className='space-y-8'
            >
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className='text-xl font-serif'>
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    We&apos;ll use this email to send you order details.
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email address</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='you@example.com'
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className='text-xl font-serif'>
                    Shipping Address
                  </CardTitle>
                  <CardDescription>
                    Where should we send your order?
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='firstName'>First name</Label>
                      <Input id='firstName' placeholder='Jane' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='lastName'>Last name</Label>
                      <Input id='lastName' placeholder='Doe' required />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='address'>Address</Label>
                    <Input id='address' placeholder='123 Nordic Way' required />
                  </div>

                  <div className='grid grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='city'>City</Label>
                      <Input id='city' placeholder='Stockholm' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='postalCode'>Postal code</Label>
                      <Input id='postalCode' placeholder='123 45' required />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='country'>Country</Label>
                    <Input
                      id='country'
                      defaultValue='Sweden'
                      readOnly
                      className='bg-muted'
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Details */}
              <Card>
                <CardHeader>
                  <CardTitle className='text-xl font-serif'>
                    Payment Details
                  </CardTitle>
                  <CardDescription>
                    Secure encrypted transaction.
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='cardName'>Name on card</Label>
                    <Input id='cardName' placeholder='Jane Doe' required />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='cardNumber'>Card number</Label>
                    <div className='relative'>
                      <Input
                        id='cardNumber'
                        placeholder='0000 0000 0000 0000'
                        required
                        className='pl-10'
                      />
                      <CreditCard className='absolute left-3 top-2.5 h-4 w-4 text-muted-foreground' />
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='expiry'>Expiry Date</Label>
                      <Input id='expiry' placeholder='MM/YY' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='cvc'>CVC</Label>
                      <Input id='cvc' placeholder='123' required />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-5'>
            <div className='sticky top-24 space-y-6'>
              <Card className='bg-muted/30 border-muted'>
                <CardHeader>
                  <CardTitle className='text-xl font-serif'>
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-6'>
                  {/* Items List */}
                  <div className='space-y-4 max-h-[300px] overflow-auto pr-2'>
                    {items.map((item) => (
                      <div key={item.id} className='flex gap-4'>
                        <div className='relative h-16 w-16 rounded-md overflow-hidden bg-background border shrink-0'>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className='object-cover'
                          />
                        </div>
                        <div className='flex-1'>
                          <h4 className='text-sm font-medium'>{item.name}</h4>
                          <p className='text-xs text-muted-foreground capitalize'>
                            {item.category}
                          </p>
                          <div className='flex justify-between items-center mt-1'>
                            <p className='text-xs text-muted-foreground'>
                              Qty: {item.quantity}
                            </p>
                            <p className='text-sm font-medium'>
                              ${(item.price * (item.quantity ?? 1)).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='border-t border-border pt-4 space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span className='text-muted-foreground'>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between text-sm'>
                      <span className='text-muted-foreground'>Shipping</span>
                      <span className='text-green-600 font-medium'>Free</span>
                    </div>
                  </div>

                  <div className='border-t border-border pt-4 flex justify-between font-serif font-medium text-lg'>
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type='submit'
                    form='checkout-form'
                    className='w-full'
                    size='lg'
                    disabled={isProcessing}
                  >
                    {isProcessing
                      ? "Processing..."
                      : `Pay $${cartTotal.toFixed(2)}`}
                  </Button>
                </CardFooter>
              </Card>

              <div className='flex items-center justify-center gap-2 text-xs text-muted-foreground'>
                <Truck className='h-4 w-4' />
                <span>Free shipping on all orders</span>
                <span className='mx-2'>•</span>
                <Check className='h-4 w-4' />
                <span>30-day returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
