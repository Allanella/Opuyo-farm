'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from './Container'
import { Eye, HardHat, Sprout, TrendingUp, ArrowRight } from 'lucide-react'

// ─── STAGE-SPECIFIC DYNAMIC IMAGE SLIDESHOW POOLS ───────────────────────────
const stepImagesPool = {
  '01': [
    'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTry7-XaqA1ZtyUQLGzt--6IrgcfSrx2Ouvc6C6JJAoPY1NyNOPoUfZVnQ6rhumg50SouXpXpr7QWxU_jU',
    'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRaYz4Ly8bCCkkFeFZuEGBPmITB3rAByiZZIYdxeAb-lYU-tCpkyadLd8XuOrhd1WHQLkRDqp3kea7v0Uk'
  ],
  '02': [
    '/goatFarm.jpeg',
    'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSADFDIYuE2jluu39ZGRrukjJzzfSpg7KiB1oeX-zyrvxnnkNfOCSzpV1ucCKzJxzrY49Enbildl73bIso'
  ],
  '03': [
    'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTSIgjcaKP4XBBkqU9BmMhogFTqa5-MnE6lS1FXIIITvgnBW5rHb2t9ffDEMWTZRClsmVD7RnMEahSn0O8',
    '/crop-production.png'
  ],
  '04': [
    'https://www.fao.org/images/reusavefoodlibraries/news-images/19717464365_91a2328742_o.jpg?sfvrsn=9471ec39_0',
    'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQGx36L-bjj7yxr0jlAdM49CYoWY5h4lUlysWhk1ueKd24a0sT8NmvHExMqhq5KNKmAPL43kAkFfWorQSg'
  ]
}

export const Training: React.FC = () => {
  // Track current image indexes for all 4 distinct steps independently
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({
    '01': 0,
    '02': 0,
    '03': 0,
    '04': 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random step slot to update so transitions stagger beautifully
      const stepKeys = ['01', '02', '03', '04']
      const randomKey = stepKeys[Math.floor(Math.random() * stepKeys.length)]
      
      setImageIndexes((prev) => ({
        ...prev,
        [randomKey]: (prev[randomKey] + 1) % 2 // Toggle between pooled assets safely
      }))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      number: '01',
      icon: Eye,
      title: 'Observe & Study',
      description: 'Walk through active production cycles and witness live, validated farming strategies working on the ground.',
      glow: 'rgba(14, 165, 233, 0.15)',
      accent: '#0ea5e9',
    },
    {
      number: '02',
      icon: HardHat,
      title: 'Hands-on Practice',
      description: 'Get into the field to manage livestock, mix nutrient profiles, and handle equipment under expert supervision.',
      glow: 'rgba(74, 222, 128, 0.15)',
      accent: '#4ade80',
    },
    {
      number: '03',
      icon: Sprout,
      title: 'Deploy Locally',
      description: 'Translate precise structural blueprints and bio-security protocols onto your own land with total confidence.',
      glow: 'rgba(22, 163, 74, 0.12)',
      accent: '#16a34a',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Scale & Monetize',
      description: 'Plug directly into verified market structures to extract maximum cash value from premium, high-yield outputs.',
      glow: 'rgba(13, 148, 136, 0.15)',
      accent: '#0d9488',
    },
  ]

  return (
    <section id="training" className="relative bg-[#f7f5f0] py-24 md:py-32 overflow-hidden border-t border-[#16a34a]/10">
      
      {/* Eye-catching bottom glow utilizing vibrant client asset palettes */}
      <div 
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full pointer-events-none opacity-[0.08] filter blur-[120px]"
        style={{ background: 'radial-gradient(circle, #0ea5e9 0%, #16a34a 100%)' }}
      />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#16a34a]/20 bg-[#16a34a]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#15803d] mb-4">
            🌱 The Learning Model
          </div>
          <h2 className="text-balance text-4xl font-black text-[#0d2210] tracking-tight md:text-5xl leading-none">
            The Growth Framework
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-pretty text-[15px] leading-relaxed text-[#0d2210]/70">
            A precise, high-impact progression engineered to transform traditional smallholder farmers into highly profitable agribusiness operators.
          </p>
        </motion.div>

        {/* Journey Timeline Wrapper */}
        <div className="relative">
          
          {/* Connecting Track Line (Desktop Only) — Remapped to modern greens */}
          <div className="absolute left-[12%] right-[12%] top-16 hidden h-[2px] bg-gradient-to-r from-[#0ea5e9]/20 via-[#16a34a]/40 to-[#0d9488]/20 lg:block" />

          {/* Steps Track Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const currentImgPool = stepImagesPool[step.number as keyof typeof stepImagesPool]
              const currentActiveImg = currentImgPool[imageIndexes[step.number]]

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col items-center p-4 text-center"
                >
                  {/* Step Marker Badge Frame */}
                  <div className="relative z-20 mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-[#16a34a]/15 bg-white shadow-sm transition-all duration-300 group-hover:border-[#16a34a]/30 group-hover:shadow-md overflow-hidden">
                    
                    {/* Dynamic Image Canvas backing the icons */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                      <AnimatePresence mode="popLayout">
                        <motion.img
                          key={currentActiveImg}
                          src={currentActiveImg}
                          alt=""
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.12 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.7, ease: 'easeInOut' }}
                          className="h-full w-full object-cover filter mix-blend-luminosity scale-105"
                        />
                      </AnimatePresence>
                    </div>

                    {/* Glowing halo behind active card element */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md pointer-events-none z-10"
                      style={{ backgroundColor: step.glow }}
                    />

                    {/* Center Icon Frame */}
                    <div className="relative z-20 bg-white/60 p-2.5 rounded-xl backdrop-blur-[2px] border border-white/40">
                      <step.icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" style={{ color: step.accent }} />
                    </div>
                    
                    {/* Floating Serial Counter */}
                    <span className="absolute top-1 right-1 text-[9px] font-mono font-bold tracking-wider text-[#0d2210]/50 bg-[#f7f5f0]/90 px-1.5 py-0.5 rounded-md border border-[#16a34a]/10 z-20">
                      {step.number}
                    </span>
                  </div>

                  {/* Text Context Area */}
                  <h3 className="text-lg font-bold text-[#0d2210] tracking-tight group-hover:text-[#15803d] transition-colors relative z-10">
                    {step.title}
                  </h3>
                  
                  <p className="mt-2.5 text-xs leading-relaxed text-[#0d2210]/70 max-w-[240px] relative z-10">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Refined Action Footer Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-center border-t border-[#16a34a]/10 pt-12 text-center"
        >
          <p className="text-[14px] text-[#0d2210]/70 max-w-md mb-6 leading-relaxed">
            Ready to implement audited commercial procedures and unlock real economic output on your land?
          </p>
          
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-[#16a34a] hover:bg-[#15803d] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-98"
          >
            Book a Field Training Session
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </Container>
    </section>
  )
}