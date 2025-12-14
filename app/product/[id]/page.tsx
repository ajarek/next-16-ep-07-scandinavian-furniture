import React from 'react'
import products from '@/data/products.json'
import Image from 'next/image'
import Counter from '@/components/Cuonter'
import { Button } from '@/components/ui/button'
const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const {id} = await params
  const product = products.find((product) => product.id === +id)
  return (
    <div className='min-h-screen flex flex-col items-center justify-start py-24 px-6 '>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <Image  src={product?.image || ''} alt={product?.name || ''} width={500} height={500} />
        </div>
        <div className='flex flex-col gap-6'>
          <h2 className=' text-4xl font-semibold text-foreground mb-4 '>{product?.name} ID: {id}</h2>
          <p className='text-xl text-muted-foreground font-sans'>{product?.category}</p>
          <p className='text-xl text-muted-foreground font-sans'>{product?.description}</p>
          <p className='text-xl text-muted-foreground font-sans'>{product?.price}</p>
          <Counter/>
          <Button className='w-fit bg-primary text-primary-foreground px-4 py-2 rounded-md'>Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage