'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './Button'
import { Container } from './Container'

export const CTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-3xl text-center text-white"
        >
          <h2 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Ready to Transform Your Farm Into a Profitable Business?
          </h2>

          <p className="mt-6 text-pretty text-lg md:text-xl text-white/90">
            Visit Opuyo Mixed Demonstration Farm and discover practical farming systems that work.
            Our experienced team is ready to guide you toward agricultural success.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <Button href="#contact" variant="secondary" size="lg">
              Schedule a Visit
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Contact Us Today
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/80">
            💡 Monthly farmer field days. Hands-on training. Life-changing results.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
