"use client"
import products from "@/data/products.json"
import Image from "next/image"

import ButtonAddCart from "@/components/ButtonAddCart"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import React, { use } from "react"
const ProductPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params)
  const product = products.find((product) => product.id === +id)
  const [quantity, setQuantity] = React.useState(1)
  const handleAdd = () => {
    setQuantity(quantity + 1)
  }
  const handleSubtract = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1)
  }
  
  return (
    <div className='min-h-screen flex flex-col items-center justify-start py-24 px-6 '>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <Image
            src={product?.image || ""}
            alt={product?.name || ""}
            width={500}
            height={500}
          />
        </div>
        <div className='flex flex-col gap-6'>
          <h2 className=' text-4xl font-semibold text-foreground mb-4 '>
            {product?.name} ID: {id}
          </h2>
          <p className='text-xl text-muted-foreground font-sans'>
            {product?.category}
          </p>
          <p className='text-xl text-muted-foreground font-sans'>
            {product?.description}
          </p>
          <p className='text-xl text-muted-foreground font-sans'>
            {product?.price}
          </p>
          <div className='flex items-center gap-2'>
            <Button onClick={handleSubtract}>
              <Minus />
            </Button>
            <span>{quantity}</span>
            <Button onClick={handleAdd}>
              <Plus />
            </Button>
          </div>
          {product && (
            <ButtonAddCart
              id={product.id.toString()}
              name={product.name}
              image={product.image}
              category={product.category}
              description={product.description}
              price={Number(product.price.replace(/[^0-9.-]+/g, ""))}
              quantity={quantity}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
