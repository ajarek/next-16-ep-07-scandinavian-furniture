import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ title, image }: { title: string; image: string }) => (
  <Link
    href='/'
    className='group block relative overflow-hidden rounded-lg aspect-[3/4]'
  >
    <Image
      src={image}
      alt={title}
      fill
      className='object-cover transition-transform duration-700 group-hover:scale-110'
    />
    <div className='absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500' />
    <div className='absolute bottom-8 left-8'>
      <h3 className='text-white text-3xl font-serif tracking-wide'>{title}</h3>
      <div className='h-[1px] w-0 bg-white mt-4 transition-all duration-500 group-hover:w-full' />
    </div>
  </Link>
)

export default CategoryCard