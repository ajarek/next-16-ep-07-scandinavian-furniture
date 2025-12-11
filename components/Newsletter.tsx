const Newsletter = () => (
  <section className='py-32 px-6 bg-[#F8F6F3]'>
    <div className='max-w-xl mx-auto text-center space-y-8'>
      <h2 className='text-4xl font-serif text-zinc-900'>Join our community</h2>
      <p className='text-zinc-600 font-light font-sans'>
        Subscribe to receive updates, access to exclusive deals, and more.
      </p>
      <form
        className='flex gap-4 max-w-md mx-auto'
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type='email'
          placeholder='Enter your email'
          className='flex-1 bg-white border border-zinc-200 px-6 py-3 rounded-full outline-none focus:border-zinc-400 text-zinc-900 placeholder:text-zinc-400 font-sans'
        />
        <button className='px-8 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors font-sans'>
          Subscribe
        </button>
      </form>
    </div>
  </section>
)

export default Newsletter
