'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'
import { Star } from 'lucide-react'

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Joseph Otim',
      role: 'Smallholder Farmer',
      content:
        'The training at Opuyo transformed my understanding of modern goat farming. I now have 50 goats and earn a significant income monthly.',
      rating: 5,
    },
    {
      name: 'Grace Akello',
      role: 'Women Farmer Group Leader',
      content:
        'Their demonstration of fish farming and value addition gave us confidence. Our group now runs a successful fish pond operation.',
      rating: 5,
    },
    {
      name: 'David Owiny',
      role: 'Youth Farmer',
      content:
        'The apiary training and agribusiness skills from Opuyo helped me establish a profitable honey production business.',
      rating: 5,
    },
    {
      name: 'Mary Namusana',
      role: 'Farmer Cooperative Member',
      content:
        'Practical demonstrations combined with mentorship - that is what makes Opuyo special. Highly recommended for serious farmers.',
      rating: 5,
    },
  ]

  return (
    <section 
      id="testimonials" 
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: '#05140b' }}
    >
      {/* ─── BACKGROUND LIGHT TRANSITIONS ─── */}
      {/* Center ambient light pulse */}
      <motion.div
        animate={{ opacity: [0.1, 0.22, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(29,184,122,0.15) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }}
      />

      <Container className="relative z-10">
        {/* Section Header Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4ade80] mb-4">
            🌟 Verified Impact
          </div>
          <h2 className="text-balance text-3xl font-black text-[#e8f5ec] tracking-tight md:text-5xl leading-[1.12]">
            Farmer Success Stories
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-pretty text-sm sm:text-base text-white/60">
            Real farmers, real results. Hear from those who have transformed their farms with our
            hands-on demonstration tracks.
          </p>
        </motion.div>

        {/* Testimonials Adaptive Grid Matrix */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between rounded-2xl p-6 backdrop-blur-md cursor-default transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.005) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.02)',
              }}
            >
              {/* ─── HOVER ACCENT LIGHT TRANSITION LAYER ─── */}
              <motion.div
                variants={{
                  initial: { scale: 0.8, opacity: 0 },
                  hover: { scale: 1.15, opacity: 0.12 }
                }}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute inset-0 pointer-events-none mix-blend-screen z-0"
                style={{
                  background: 'radial-gradient(circle at 50% 100%, rgba(74,222,128,0.4) 0%, transparent 65%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Upper glass rim accent border line element */}
              <div
                className="absolute inset-x-0 top-0 h-px opacity-20 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(74,222,128,0.4), transparent)' }}
              />

              {/* Core Content Box Layout */}
              <div className="relative z-10">
                {/* Premium Golden-Green Rating Accent Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-3.5 w-3.5 fill-[#4ade80] text-[#4ade80] drop-shadow-[0_0_4px_rgba(74,222,128,0.3)]" 
                    />
                  ))}
                </div>

                {/* Testimonial Verbatim Quote Segment */}
                <p className="text-[13.5px] leading-relaxed text-white/70 font-medium italic group-hover:text-white/80 transition-colors duration-300">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Identification Footer Container */}
              <div className="relative z-10 mt-8 border-t border-white/10 pt-4 flex items-center gap-3">
                {/* Clean Initial-Based Avatar Badge with Interactive Frame */}
                <div 
                  className="h-10 w-10 rounded-xl flex items-center justify-center font-black text-sm text-[#4ade80] border transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: 'rgba(74,222,128,0.06)',
                    borderColor: 'rgba(74,222,128,0.2)',
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-sm font-black text-[#e8f5ec] tracking-tight group-hover:text-[#4ade80] transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-[11px] font-medium tracking-wide text-white/40 mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}