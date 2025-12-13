"use client"

import Image from "next/image"
import Contact from "@/components/Contact"
import { motion, Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const AboutPage = () => {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      {/* Hero Section with Team Photo */}
      <section className='relative w-full h-[60vh] md:h-[70vh] overflow-hidden'>
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className='absolute inset-0'
        >
          <Image
            src='/team.png'
            alt='The NØRD International Team'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/30' />
        </motion.div>

        <div className='absolute inset-0 flex items-center justify-center'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='text-4xl md:text-6xl font-bold text-white drop-shadow-lg tracking-tight text-center px-4'
          >
            Meet the Team
          </motion.h1>
        </div>
      </section>

      {/* Marketing Description */}
      <section className='py-20 px-6 md:px-12 max-w-5xl mx-auto text-center'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          className='space-y-8'
        >
          <motion.div variants={fadeInUp} className='space-y-4'>
            <p className='text-sm md:text-base font-medium tracking-widest text-primary uppercase'>
              Our Story
            </p>
            <h2 className='text-3xl md:text-4xl font-serif font-medium text-foreground'>
              Crafting functionality with Scandinavian soul.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className='prose prose-lg mx-auto text-muted-foreground leading-relaxed'
          >
            <p>
              At NØRD, we believe that your home should be a sanctuary—a place
              where design meets daily life in perfect harmony. Founded in the
              heart of Scandinavia, our journey began with a simple mission: to
              bring the timeless elegance of Nordic design to the world, without
              compromising on quality or sustainability.
            </p>
            <p>
              Our diverse international team brings together master craftsmen,
              innovative designers, and sustainability experts from over 15
              countries. United by a shared passion for natural materials and
              minimalist aesthetics, we create furniture that stands the test of
              time. Every curve is considered, every joint is secured, and every
              piece tells a story of dedication.
            </p>
            <p>
              We are more than just a furniture brand; we are a collective of
              dreamers and makers committed to reducing our environmental
              footprint. Using ethically sourced woods and eco-friendly
              finishes, we ensure that beauty today doesn&apos;t cost the earth
              tomorrow.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Contact />
      </motion.div>
    </main>
  )
}

export default AboutPage
