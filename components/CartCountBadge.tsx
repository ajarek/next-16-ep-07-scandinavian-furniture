"use client"

import { useCartStore } from "@/store/cartStore"

const CartCountBadge = () => {
  const items = useCartStore((state) => state.items)
  const totalItems = items.reduce((acc, item) => acc + (item.quantity ?? 1), 0)

  if (totalItems === 0) return null

  return (
    <span className='absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground font-medium animate-in fade-in zoom-in duration-300'>
      {totalItems}
    </span>
  )
}

export default CartCountBadge
