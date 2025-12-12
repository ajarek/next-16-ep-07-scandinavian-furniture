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
    <div className='relative aspect-[3/4] overflow-hidden bg-card rounded-xl'>
      <Image
        src={image}
        alt={name}
        fill
        className='object-contain p-8 transition-transform duration-500 group-hover:scale-105'
      />

      {/* Quick View Button */}
      <div className='absolute inset-x-4 bottom-4 translate-y-[calc(100%+16px)] group-hover:translate-y-0 transition-transform duration-300'>
        <button className='w-full py-3 bg-background/90 backdrop-blur-sm shadow-md text-foreground text-sm font-medium rounded-lg hover:bg-foreground hover:text-background transition-colors font-sans'>
          Quick View
        </button>
      </div>
    </div>
    <div className='flex justify-between items-start font-sans'>
      <div>
        <h3 className='text-foreground font-medium group-hover:text-muted-foreground transition-colors'>
          {name}
        </h3>
        <p className='text-muted-foreground text-sm mt-1'>
          Available in 3 colors
        </p>
      </div>
      <span className='text-foreground font-medium'>{price}</span>
    </div>
  </div>
)

export default ProductCard
