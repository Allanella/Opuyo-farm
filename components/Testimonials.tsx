'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'
import { Card } from './Card'
import { Star } from 'lucide-react'

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Joseph Otim',
      role: 'Smallholder Farmer',
      content:
        'The training at Opuyo transformed my understanding of modern goat farming. I now have 50 goats and earning significant income monthly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    },
    {
      name: 'Grace Akello',
      role: 'Women Farmer Group Leader',
      content:
        'Their demonstration of fish farming and value addition gave us confidence. Our group now runs a successful fish pond operation.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    },
    {
      name: 'David Owiny',
      role: 'Youth Farmer',
      content:
        'The apiary training and agribusiness skills from Opuyo helped me establish a profitable honey production business.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop',
    },
    {
      name: 'Mary Namusana',
      role: 'Farmer Cooperative Member',
      content:
        'Practical demonstrations combined with mentorship - that is what makes Opuyo special. Highly recommended for serious farmers.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    },
  ]

  return (
    <section id="testimonials" className="bg-muted/30 py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            Farmer Success Stories
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Real farmers, real results. Hear from those who have transformed their farms with our
            training.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-foreground italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="mt-6 border-t border-border pt-4">
                  <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
