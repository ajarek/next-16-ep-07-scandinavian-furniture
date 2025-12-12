import CategoryCard from "./CategoryCard"
import categories from "../data/categories.json"

const Categories = () => {
  return (
    <section className='py-32 px-6 max-w-screen-2xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {categories.map((category) => (
          <CategoryCard key={category.id} title={category.title} image={category.image} />
        ))}
      </div>
    </section>
  )
}

export default Categories
