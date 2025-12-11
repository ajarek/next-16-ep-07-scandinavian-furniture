import Image from "next/image"

const ProductCard = ({
  name,
  price,
  image,
}: {
  name: string
  price: string
  image: string
}) => (
  <div className='group cursor-pointer space-y-4'>
    <div className='relative aspect-[3/4] overflow-hidden bg-white rounded-xl'>
      <Image
        src={image}
        alt={name}
        fill
        className='object-contain p-8 transition-transform duration-500 group-hover:scale-105'
      />

      {/* Quick View Button */}
      <div className='absolute inset-x-4 bottom-4 translate-y-[calc(100%+16px)] group-hover:translate-y-0 transition-transform duration-300'>
        <button className='w-full py-3 bg-white/90 backdrop-blur-sm shadow-md text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-900 hover:text-white transition-colors font-sans'>
          Quick View
        </button>
      </div>
    </div>
    <div className='flex justify-between items-start font-sans'>
      <div>
        <h3 className='text-zinc-900 font-medium group-hover:text-zinc-600 transition-colors'>
          {name}
        </h3>
        <p className='text-zinc-500 text-sm mt-1'>Available in 3 colors</p>
      </div>
      <span className='text-zinc-900 font-medium'>{price}</span>
    </div>
  </div>
)

export default ProductCard
