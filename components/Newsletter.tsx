'use client'

import { toast } from "sonner"

const Newsletter = () => {
    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        if (!email) {
            toast.error('Please enter an email address')
            return
        }
        toast.success(email + ' Thank you for subscribing!')
        e.currentTarget.reset()
    }

    return (
  <section className='py-32 px-6 bg-muted/30'>
    <div className='max-w-xl mx-auto text-center space-y-8'>
      <h2 className='text-4xl font-serif text-foreground'>
        Join our community
      </h2>
      <p className='text-muted-foreground font-light font-sans'>
        Subscribe to receive updates, access to exclusive deals, and more.
      </p>
      <form
        className='flex gap-4 max-w-md mx-auto'
        onSubmit={handleSubscribe}
      >
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          required
          className='flex-1 bg-background border border-input px-6 py-3 rounded-full outline-none focus:border-ring text-foreground placeholder:text-muted-foreground font-sans'
        />
        <button className='px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors font-sans' type='submit'>
          Subscribe
        </button>
      </form>
    </div>
  </section>
)
}
export default Newsletter
