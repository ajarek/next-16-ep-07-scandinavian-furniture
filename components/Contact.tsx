"use client"

import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Mail, Phone, MapPin } from "lucide-react"

const Contact = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate network request
    setTimeout(() => {
      setLoading(false)
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      })
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <section className='py-16 md:py-24 bg-secondary/30 relative overflow-hidden'>
      {/* Decorative background element */}
      <div className='absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='flex flex-col md:flex-row gap-12 items-start justify-center'>
          {/* Contact Information */}
          <div className='flex-1 space-y-8 max-w-lg'>
            <div>
              <h2 className='text-3xl font-serif font-bold mb-4 text-foreground'>
                Get in Touch
              </h2>
              <p className='text-muted-foreground text-lg'>
                We'd love to hear from you. Whether you have a question about
                our collections, custom orders, or just want to say hello.
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex items-start gap-4 group'>
                <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/20'>
                  <Phone className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <h3 className='font-medium text-foreground'>Phone</h3>
                  <p className='text-muted-foreground'>+46 8 123 45 67</p>
                  <p className='text-sm text-muted-foreground'>
                    Mon-Fri from 8am to 5pm CET
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 group'>
                <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/20'>
                  <Mail className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <h3 className='font-medium text-foreground'>Email</h3>
                  <p className='text-muted-foreground'>
                    hello@nord-furniture.com
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    We usually reply within 24 hours
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 group'>
                <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/20'>
                  <MapPin className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <h3 className='font-medium text-foreground'>
                    Studio & Workshop
                  </h3>
                  <p className='text-muted-foreground'>Södra Vägen 12</p>
                  <p className='text-muted-foreground'>
                    412 54 Gothenburg, Sweden
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className='flex-1 w-full max-w-lg shadow-xl border-white/20 bg-card/60 backdrop-blur-md'>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='first-name'>First name</Label>
                    <Input
                      id='first-name'
                      placeholder='John'
                      required
                      className='bg-background/50 border-input/50 focus:bg-background transition-colors'
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='last-name'>Last name</Label>
                    <Input
                      id='last-name'
                      placeholder='Doe'
                      required
                      className='bg-background/50 border-input/50 focus:bg-background transition-colors'
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='john@example.com'
                    required
                    className='bg-background/50 border-input/50 focus:bg-background transition-colors'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='subject'>Subject</Label>
                  <Input
                    id='subject'
                    placeholder='How can we help?'
                    required
                    className='bg-background/50 border-input/50 focus:bg-background transition-colors'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    id='message'
                    placeholder='Your message...'
                    className='min-h-[120px] bg-background/50 border-input/50 focus:bg-background transition-colors'
                    required
                  />
                </div>
                <Button type='submit' className='w-full' disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
