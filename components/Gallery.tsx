'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'
import { Lightbox } from './Lightbox'
import { Maximize2 } from 'lucide-react'

export const Gallery: React.FC = () => {
  const images = [
    { src: '/hero-goat-farm.png', alt: 'Farm Overview', className: 'md:col-span-2 md:row-span-2 h-[420px] md:h-[540px]' },
    { src: '/goat-breeding.png', alt: 'Goat Breeding Unit', className: 'md:col-span-2 h-[200px] md:h-[258px]' },
    { src: '/fish-farming.png', alt: 'Fish Farming Ponds', className: 'h-[200px] md:h-[258px]' },
    { src: '/apiary.png', alt: 'Modern Beehives', className: 'h-[200px] md:h-[258px]' },
    { src: '/crop-production.png', alt: 'Crop Production Fields', className: 'h-[200px] md:h-[258px]' },
    { src: '/fodder-bank.png', alt: 'Fodder Bank', className: 'h-[200px] md:h-[258px]' },
    { src: '/value-addition.png', alt: 'Value Addition Products', className: 'md:col-span-2 h-[200px] md:h-[258px]' },
    { src: '/farmer-training.png', alt: 'Farmer Training Session', className: 'h-[200px] md:h-[258px]' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="gallery" className="relative bg-[#f7f5f0] py-24 md:py-32 overflow-hidden">
      
      {/* Structural geometric top line separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3d7a52]/10 to-transparent" />

      <Container>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3d7a52]/20 bg-[#3d7a52]/8 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2d5c3e] mb-4">
            📸 Visual Tour
          </div>
          <h2 className="text-balance text-4xl font-black text-[#0d2210] tracking-tight md:text-5xl leading-none">
            Field Records & Gallery
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-pretty text-[15px] leading-relaxed text-[#0d2210]/70">
            A visual documentation of active agricultural models, operational infrastructures, and practical knowledge shared on open training days.
          </p>
        </motion.div>

        {/* Lightbox Functional Grid */}
        <Lightbox images={images}>
          {(onClick) => (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-20px' }}
              className="grid gap-3.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-min"
            >
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => onClick(index)}
                  variants={cardVariants}
                  whileTap={{ scale: 0.99 }}
                  className={`group relative w-full overflow-hidden rounded-2xl border border-[#3d7a52]/10 bg-[#e6e2d8]/60 focus:outline-none ${image.className}`}
                >
                  {/* Subtle Light Mode Vignette Shrub Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2210]/40 via-transparent to-transparent z-10 opacity-40 transition-opacity group-hover:opacity-10" />
                  
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
                  />
                  
                  {/* High End Hover Glassmorphism Utility HUD */}
                  <div className="absolute inset-0 bg-[#0d2210]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col justify-between p-5 text-left">
                    <div className="self-end flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 border border-white/20 backdrop-blur-md text-white shadow-md">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#72c492]">Opuyo Live</p>
                      <h4 className="text-sm font-bold text-white tracking-tight mt-0.5">{image.alt}</h4>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </Lightbox>
      </Container>
    </section>
  )
}