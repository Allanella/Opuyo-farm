'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from './Container'
import { Lightbox } from './Lightbox'
import { Maximize2 } from 'lucide-react'

interface GalleryItem {
  src: string
  alt: string
  className: string
}

// ─── EXTENDED POOL OF IMAGE ASSETS FOR CYCLIC VARIATION ──────────────────────
const assetPool = [
  { src: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTry7-XaqA1ZtyUQLGzt--6IrgcfSrx2Ouvc6C6JJAoPY1NyNOPoUfZVnQ6rhumg50SouXpXpr7QWxU_jU', alt: 'Farm Overview & Mixed Cultivation Landscape' },
  { src: '/goatFarm.jpeg', alt: 'Goat Breeding & Livestock Unit' },
  { src: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSADFDIYuE2jluu39ZGRrukjJzzfSpg7KiB1oeX-zyrvxnnkNfOCSzpV1ucCKzJxzrY49Enbildl73bIso', alt: 'Fish Farming & Open Aquaculture Ponds' },
  { src: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTSIgjcaKP4XBBkqU9BmMhogFTqa5-MnE6lS1FXIIITvgnBW5rHb2t9ffDEMWTZRClsmVD7RnMEahSn0O8', alt: 'Modern Apiary & Hillside Beehives' },
  { src: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRaYz4Ly8bCCkkFeFZuEGBPmITB3rAByiZZIYdxeAb-lYU-tCpkyadLd8XuOrhd1WHQLkRDqp3kea7v0Uk', alt: 'Crop Production & Mixed Grain Fields' },
  { src: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQGx36L-bjj7yxr0jlAdM49CYoWY5h4lUlysWhk1ueKd24a0sT8NmvHExMqhq5KNKmAPL43kAkFfWorQSg', alt: 'Fodder Bank & Forage Napier Grass' },
  { src: 'https://www.fao.org/images/reusavefoodlibraries/news-images/19717464365_91a2328742_o.jpg?sfvrsn=9471ec39_0', alt: 'Agro-Processing & Value Addition Products' },
  { src: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRDelQdtaeQQSAGMuNvGmxgLHv35R3tm5FkRXNQMHJrajdG67e6KGTtbQGIQi33nKMhuMhGVnKgbQp56ZE', alt: 'Practical Farmer Training & Field Workshop' },
]

// Grid templates assigned specifically to maintain the look and layout of the original Bento Grid
const layoutSlots = [
  { className: 'md:col-span-2 md:row-span-2 h-[420px] md:h-[540px]' },
  { className: 'md:col-span-2 h-[200px] md:h-[258px]' },
  { className: 'h-[200px] md:h-[258px]' },
  { className: 'h-[200px] md:h-[258px]' },
  { className: 'h-[200px] md:h-[258px]' },
  { className: 'h-[200px] md:h-[258px]' },
  { className: 'md:col-span-2 h-[200px] md:h-[258px]' },
  { className: 'h-[200px] md:h-[258px]' },
]

export const Gallery: React.FC = () => {
  // Generate tracking indices map to slide individual photos dynamically
  const [activeIndices, setActiveIndices] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7])

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      // Pick a random grid position to swap out
      const slotToSwap = Math.floor(Math.random() * layoutSlots.length)
      
      setActiveIndices((prevIndices) => {
        const nextIndices = [...prevIndices]
        
        // Find pool items that aren't currently being displayed on screen
        const unusedIndices = assetPool
          .map((_, i) => i)
          .filter((i) => !nextIndices.includes(i))

        if (unusedIndices.length > 0) {
          // Select a random fresh visual to insert into the targeted slot position
          const randomFreshAsset = unusedIndices[Math.floor(Math.random() * unusedIndices.length)]
          nextIndices[slotToSwap] = randomFreshAsset
        } else {
          // Fallback if assets equal slots: shift array context index sequentially
          const currentAssetIndex = nextIndices[slotToSwap]
          nextIndices[slotToSwap] = (currentAssetIndex + 1) % assetPool.length
        }
        
        return nextIndices
      })
    }, 4000) // Transition rate set to check/swap slots smoothly every 4 seconds

    return () => clearInterval(cycleInterval)
  }, [])

  // Map state engine into actual current image objects fed into Lightbox layout viewports
  const liveImages: GalleryItem[] = layoutSlots.map((slot, index) => {
    const asset = assetPool[activeIndices[index]] || assetPool[index % assetPool.length]
    return {
      src: asset.src,
      alt: asset.alt,
      className: slot.className
    }
  })

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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3d7a52]/20 bg-[#3d7a52]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2d5c3e] mb-4">
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
        <Lightbox images={liveImages}>
          {(onClick) => (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-20px' }}
              className="grid gap-3.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-min"
            >
              {liveImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => onClick(index)}
                  variants={cardVariants}
                  whileTap={{ scale: 0.99 }}
                  className={`group relative w-full overflow-hidden rounded-2xl border border-[#3d7a52]/10 bg-[#e6e2d8]/60 focus:outline-none ${image.className}`}
                >
                  {/* Subtle Light Mode Vignette Shrub Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2210]/40 via-transparent to-transparent z-10 opacity-40 transition-opacity group-hover:opacity-10" />
                  
                  {/* Absolute positioning container for safe AnimatePresence Cross-Fade */}
                  <div className="absolute inset-0 w-full h-full">
                    <AnimatePresence mode="popLayout">
                      <motion.img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="h-full w-full object-cover transition-transform duration-700 ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
                      />
                    </AnimatePresence>
                  </div>
                  
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