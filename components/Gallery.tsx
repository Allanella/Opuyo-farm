'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from './Container'
import { Lightbox } from './Lightbox'
import { Maximize2 } from 'lucide-react'

interface PillarCardProps {
  title: string
  description: string
  index: number
}

interface GalleryItem {
  src: string
  alt: string
  className: string
}

function PillarCard({ title, description, index }: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl p-6 cursor-default transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.6) 100%)',
        border: '1px solid rgba(22, 163, 74, 0.08)',
        boxShadow: '0 4px 20px -2px rgba(5, 20, 11, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      }}
    >
      {/* ─── HOVER BACKGROUND LIGHT TRANSITION (EGG-YOLK AMBER RADIANCE) ─── */}
      <motion.div
        variants={{
          initial: { scale: 0.8, opacity: 0 },
          hover: { scale: 1.2, opacity: 1 }
        }}
        initial="initial"
        whileHover="hover"
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none mix-blend-multiply z-0"
        style={{
          background: 'radial-gradient(circle at 0% 0%, rgba(245, 158, 11, 0.12) 0%, transparent 65%)',
          filter: 'blur(15px)',
        }}
      />

      {/* Top glowing edge line indicator */}
      <div 
        className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, #f59e0b, #d97706)' }}
      />
      
      <h4 className="relative z-10 text-[15px] font-black text-[#05140b] tracking-tight group-hover:text-[#d97706] transition-colors duration-300">
        {title}
      </h4>
      <p className="relative z-10 mt-2 text-[13.5px] leading-relaxed text-[#05140b]/70 group-hover:text-[#05140b]/80 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  )
}

// ─── EXTENDED POOL OF IMAGE ASSETS FOR CYCLIC VARIATION ──────────────────────
// MAINTAINED EXISTING ASSETS AND ADDED PLACEHOLDERS
const assetPool = [
  { src: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTry7-XaqA1ZtyUQLGzt--6IrgcfSrx2Ouvc6C6JJAoPY1NyNOPoUfZVnQ6rhumg50SouXpXpr7QWxU_jU', alt: 'Farm Overview & Mixed Cultivation Landscape' },
  { src: '/goatFarm.jpeg', alt: 'Goat Breeding & Livestock Unit' },
  { src: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSADFDIYuE2jluu39ZGRrukjJzzfSpg7KiB1oeX-zyrvxnnkNfOCSzpV1ucCKzJxzrY49Enbildl73bIso', alt: 'Fish Farming & Open Aquaculture Ponds' },
  { src: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTSIgjcaKP4XBBkqU9BmMhogFTqa5-MnE6lS1FXIIITvgnBW5rHb2t9ffDEMWTZRClsmVD7RnMEahSn0O8', alt: 'Modern Apiary & Hillside Beehives' },
  { src: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRaYz4Ly8bCCkkFeFZuEGBPmITB3rAByiZZIYdxeAb-lYU-tCpkyadLd8XuOrhd1WHQLkRDqp3kea7v0Uk', alt: 'Crop Production & Mixed Grain Fields' },
  { src: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQGx36L-bjj7yxr0jlAdM49CYoWY5h4lUlysWhk1ueKd24a0sT8NmvHExMqhq5KNKmAPL43kAkFfWorQSg', alt: 'Fodder Bank & Forage Napier Grass' },
  { src: 'https://www.fao.org/images/reusavefoodlibraries/news-images/19717464365_91a2328742_o.jpg?sfvrsn=9471ec39_0', alt: 'Agro-Processing & Value Addition Products' },
  { src: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRDelQdtaeQQSAGMuNvGmxgLHv35R3tm5FkRXNQMHJrajdG67e6KGTtbQGIQi33nKMhuMhGVnKgbQp56ZE', alt: 'Practical Farmer Training & Field Workshop' },
  // ADD MORE IMAGE PLACEHOLDERS HERE (CHANGE PATHS & ALTS)
  { src: '/freshPeas.jpeg', alt: 'fresh peas' },
  { src: '/passion.jpeg', alt: 'passion fruit' },
  { src: '/irish.jpeg', alt: 'irish' },
]

// ADD VIDEO PLACEHOLDERS HERE (CHANGE PATHS & POSTERS)
const videoPool = [
  { src: '/videoPlaceholder1.mp4', poster: '/videoPoster1.jpeg', title: 'New Video Placeholder 1' },
  { src: '/videoPlaceholder2.mp4', poster: '/videoPoster2.jpeg', title: 'New Video Placeholder 2' },
]

// Grid templates assigned specifically to maintain the look and layout of the original Bento Grid
// EXPANDED LAYOUT SLOTS TO ACCOMMODATE MORE IMAGES/VIDEOS
const layoutSlots = [
  { className: 'md:col-span-2 md:row-span-2 h-[340px] md:h-[500px]' },
  { className: 'md:col-span-2 h-[160px] md:h-[238px]' },
  { className: 'h-[160px] md:h-[238px]' },
  { className: 'h-[160px] md:h-[238px]' },
  { className: 'h-[160px] md:h-[238px]' },
  { className: 'h-[160px] md:h-[238px]' },
  { className: 'md:col-span-2 h-[160px] md:h-[238px]' },
  { className: 'h-[160px] md:h-[238px]' },
  // ADD MORE LAYOUT SLOTS HERE
  { className: 'h-[160px] md:h-[238px]' },
  { className: 'md:col-span-2 h-[160px] md:h-[238px]' },
  { className: 'h-[160px] md:h-[238px]' },
]

export const About: React.FC = () => {
  const pillars = [
    { title: 'Profitable Smallholder Farming', description: 'Practical modules aimed at boosting yield and commercial viability.' },
    { title: 'Modern Record Keeping', description: 'Streamlined systems to track expenses, manage herds, and calculate true ROI.' },
    { title: 'Disease Control Management', description: 'Proactive veterinary habits and structural safety designs for livestock.' },
    { title: 'Water Harvesting Systems', description: 'Resilient earth-works and collection methods to handle changing dry seasons.' },
    { title: 'Direct-to-Market Strategies', description: 'Eliminating predatory middlemen chains to capture peak value for output.' },
    { title: 'Value Addition Pathways', description: 'Agribusiness skillsets extending standard lifecycles into premium products.' },
  ]

  // Generate tracking indices map to slide individual photos dynamically
  // INITIALIZED WITH INDICES CORRESPONDING TO EXPANDED LAYOUT SLOTS
  const [activeIndices, setActiveIndices] = useState<number[]>(layoutSlots.map((_, i) => i))

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      const slotToSwap = Math.floor(Math.random() * layoutSlots.length)
      
      setActiveIndices((prevIndices) => {
        const nextIndices = [...prevIndices]
        const unusedIndices = assetPool
          .map((_, i) => i)
          .filter((i) => !nextIndices.includes(i))

        if (unusedIndices.length > 0) {
          const randomFreshAsset = unusedIndices[Math.floor(Math.random() * unusedIndices.length)]
          nextIndices[slotToSwap] = randomFreshAsset
        } else {
          const currentAssetIndex = nextIndices[slotToSwap]
          nextIndices[slotToSwap] = (currentAssetIndex + 1) % assetPool.length
        }
        
        return nextIndices
      })
    }, 4000)

    return () => clearInterval(cycleInterval)
  }, [])

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
    <section id="about" className="relative bg-[#f7f5f0] py-24 md:py-32 overflow-hidden">
      
      {/* Upper Right ambient light shift halo */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full pointer-events-none mix-blend-multiply"
        style={{ 
          background: 'radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, rgba(29, 184, 122, 0.03) 50%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Middle Center accent background light flare */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], x: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[30%] left-[20%] h-[500px] w-[500px] rounded-full pointer-events-none mix-blend-multiply"
        style={{ 
          background: 'radial-gradient(circle, rgba(29, 184, 122, 0.12) 0%, transparent 65%)',
          filter: 'blur(90px)'
        }}
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Context & Parameters */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#16a34a]/20 bg-[#16a34a]/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#16a34a] mb-4">
                🌿 Cultivating Innovation
              </div>
              <h2 className="text-balance text-3xl font-black text-[#05140b] tracking-tight md:text-4xl leading-[1.15]">
                Transforming the Teso Region Through Hands‑on Mastery
              </h2>
              <p className="mt-4 text-pretty text-[14.5px] leading-relaxed text-[#05140b]/70">
                Opuyo Farm isn't a theoretical classroom—it is a functional hub dedicated to replacing guesswork with high-yield, premium agriculture.
              </p>

              {/* Parametric Data Blocks */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div 
                  className="rounded-xl border p-4 shadow-sm min-w-[130px] backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderColor: 'rgba(5, 20, 11, 0.05)' }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#05140b]/40">Footprint</p>
                  <p className="text-xl font-black mt-0.5 text-[#16a34a]">4 Acres</p>
                  <p className="text-[11px] text-[#05140b]/50 mt-0.5">Prime Demo Land</p>
                </div>
                
                <div 
                  className="rounded-xl border p-4 shadow-sm min-w-[130px] backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderColor: 'rgba(5, 20, 11, 0.05)' }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#05140b]/40">Mission Type</p>
                  <p className="text-xl font-black mt-0.5 text-[#1db87a]">Demonstration</p>
                  <p className="text-[11px] text-[#05140b]/50 mt-0.5">Practical Training</p>
                </div>
              </div>
            </motion.div>

            {/* Framed Graphic Element with Glow Transition Wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-8 hidden lg:block group"
            >
              <div 
                className="absolute -inset-1 rounded-2xl opacity-30 blur-md group-hover:opacity-60 transition duration-500"
                style={{ background: 'linear-gradient(to right, #4ade80, #1db87a)' }}
              />
              <img
                src="/commune.jpeg"
                alt="Farmer training at Opuyo farm"
                className="relative rounded-2xl object-cover w-full h-[320px] md:h-[380px] border shadow-md grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                style={{ borderColor: 'rgba(5, 20, 11, 0.08)' }}
              />
            </motion.div>
          </div>

          {/* Right Column: Dynamic Matrix Grid */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar, index) => (
                <PillarCard
                  key={pillar.title}
                  title={pillar.title}
                  description={pillar.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ─── MEDIA SEPARATOR LINE ─── */}
        <div className="my-24 h-px w-full bg-gradient-to-r from-transparent via-[#3d7a52]/10 to-transparent" />

        {/* ─── DYNAMIC BENTO GALLERY SECTION ─── */}
        <div id="gallery" className="space-y-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3d7a52]/20 bg-[#3d7a52]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2d5c3e] mb-3">
              📸 Visual Tour
            </div>
            <h3 className="text-2xl font-black tracking-tight text-[#0d2210] md:text-3xl">
              Field Records & Gallery
            </h3>
            <p className="mt-2 text-[14.5px] text-[#0d2210]/70 max-w-2xl">
              A visual documentation of active agricultural models, operational infrastructures, and practical knowledge shared on open training days.
            </p>
          </div>

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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d2210]/40 via-transparent to-transparent z-10 opacity-40 transition-opacity group-hover:opacity-10" />
                    
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
          
          {/* ─── ADD VIDEO GALLERY SECTION HERE ─── */}
          <div id="video-gallery" className="pt-12 space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold tracking-tight text-[#0d2210]">
                Featured Videos
              </h3>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {videoPool.map((video, index) => (
                <div key={index} className="relative overflow-hidden rounded-2xl border border-[#3d7a52]/10 bg-[#e6e2d8]/60 shadow-sm">
                  <video 
                    controls 
                    poster={video.poster} 
                    className="w-full h-auto aspect-video object-cover"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-4 bg-white/50 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-[#0d2210] tracking-tight">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </Container>
    </section>
  )
}