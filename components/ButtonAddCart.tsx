'use client'

import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'
import type { Furniture } from '@/types/typeFurniture'
import { toast } from 'sonner'
import { Plus } from 'lucide-react'
import { Button } from './ui/button'

const ButtonAddCart = ({
  id,
  name,
  image,
  category,
  description,
  price,
  quantity,
}: Furniture) => {
  const router = useRouter()
  const { addItemToCart, items } = useCartStore()
  return (
    <Button
      onClick={() => {
        if (items.some((i) => i.id === id)) {
          toast('This item is already in your cart')
          router.push('/shop')
          return
        }
        addItemToCart({
          id,
          name,
          image,
          category,
          description,
          price,
          quantity,
        })
        
        toast.success('Product added to cart')
        router.push('/shop')
      }}
      aria-label='Add to cart'
      className='flex items-center gap-2 cursor-pointer '
    >
      {' '}
      <Plus />
      Add cart
    </Button>
  )
}

export default ButtonAddCart