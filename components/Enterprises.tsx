'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from './Container'
import {
  Zap,
  Droplet,
  Flower,
  Leaf,
  Package,
  Award,
  CheckCircle2
} from 'lucide-react'

// ─── MASTER CACHE POOL OF ALL AVAILABLE ENTERPRISE OBJECTS ───────────────────
const enterprisePool = [
  {
    id: 'goat',
    title: 'Goat Breeding Unit',
    description: 'Our flagship commercial enterprise featuring elite Galla and Boer genetics managed within a specialized 50m × 30m bio-secure boma layout.',
    features: ['Galla & Boer Genetics', 'Breeding Stock Sales', 'Weight Performance Track', 'Deworming Frameworks', 'High-Yield Meat Production'],
    icon: Award,
    image: '/goat-breeding.png',
    color: 'from-[#16a34a]/20 via-[#4ade80]/10 to-transparent',
    accent: '#16a34a',
  },
  {
    id: 'fish',
    title: 'Fish Farming Unit',
    description: 'High-density commercial aquaculture infrastructure featuring 12 production ponds optimized for local markets.',
    features: ['12 High-Yield Ponds', 'Water Quality Automation', 'Practical Training Setups'],
    icon: Droplet,
    image: '/fish-farming.png',
    color: 'from-[#0ea5e9]/20 via-[#0d9488]/10 to-transparent', 
    accent: '#0d9488',
  },
  {
    id: 'apiary',
    title: 'Apiary Unit',
    description: 'Precision modern apiculture practices engineered for organic honey extraction and regional pollination.',
    features: ['Modern Top-Bar Hives', 'Honey Processing Ready', 'Ecosystem Bio-Linkage'],
    icon: Flower,
    image: '/apiary.png',
    color: 'from-[#eab308]/20 via-[#16a34a]/10 to-transparent',
    accent: '#16a34a',
  },
  {
    id: 'crop',
    title: 'Crop Production',
    description: 'Diversified multi-tier cropping strategies including premium pineapple variants and resilient vegetable configurations.',
    features: ['Pineapple Top Exports', 'Intercropping Systems', 'Soil Moisture Retention'],
    icon: Leaf,
    image: '/crop-production.png',
    color: 'from-[#4ade80]/20 via-[#15803d]/10 to-transparent',
    accent: '#4ade80',
  },
  {
    id: 'fodder',
    title: 'Fodder Bank',
    description: 'Zero-grazing feed security platforms utilizing high-protein lines like Napier Grass, Brachiaria, and Calliandra.',
    features: ['Napier & Brachiaria Banks', 'Year-Round Feed Reserves', 'Drastically Lower Input Costs'],
    icon: Zap,
    image: '/fodder-bank.png',
    color: 'from-[#22c55e]/20 via-[#0ea5e9]/10 to-transparent',
    accent: '#22c55e',
  },
  {
    id: 'value',
    title: 'Value Addition Corner',
    description: 'Downstream agribusiness processing facilities designed to package raw output into high-margin consumer products.',
    features: ['Shea Butter Refining', 'Pure Honey Bottling', 'Organic Fertilizer Bags'],
    icon: Package,
    image: '/value-addition.png',
    color: 'from-[#0d9488]/20 via-[#4ade80]/10 to-transparent',
    accent: '#0d9488',
  },
]

export const Enterprises: React.FC = () => {
  // Array map tracks which data index from enterprisePool is sitting in each layout slot
  // Index 0 = Flagship Row, Indices 1-5 = Secondary Grid Units
  const [slotAssignments, setSlotAssignments] = useState<number[]>([0, 1, 2, 3, 4, 5])

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      // Choose a random layout container slot to run a transition context swap on
      const targetSlot = Math.floor(Math.random() * 6)

      setSlotAssignments((prevAssignments) => {
        const updatedAssignments = [...prevAssignments]
        
        // Find which items from our pool are currently hidden off-screen
        const inactivePoolIndices = enterprisePool
          .map((_, i) => i)
          .filter((i) => !updatedAssignments.includes(i))

        if (inactivePoolIndices.length > 0) {
          // If there are unrendered entries, grab one at random
          const randomNewDataIndex = inactivePoolIndices[Math.floor(Math.random() * inactivePoolIndices.length)]
          updatedAssignments[targetSlot] = randomNewDataIndex
        } else {
          // Fallback array rotator if pool sizes match layout slot allocations
          const currentDataIndex = updatedAssignments[targetSlot]
          updatedAssignments[targetSlot] = (currentDataIndex + 1) % enterprisePool.length
        }

        return updatedAssignments
      })
    }, 4500) // Staggered transition execution checks every 4.5 seconds

    return () => clearInterval(cycleInterval)
  }, [])

  // Pull actual object contexts based on state layout mapping
  const featuredItem = enterprisePool[slotAssignments[0]]
  const secondaryItems = slotAssignments.slice(1).map((poolIndex) => enterprisePool[poolIndex])

  // Content change animation transitions
  const fadeSlideTransition = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <section id="enterprises" className="relative bg-[#f7f5f0] py-24 md:py-32 overflow-hidden">
      
      {/* Eye-catching ambient backdrop blur pooling across the layout */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full pointer-events-none opacity-[0.12] filter blur-[130px]"
        style={{ background: 'radial-gradient(circle, #0ea5e9 0%, #16a34a 60%, transparent 100%)' }}
      />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#16a34a]/20 bg-[#16a34a]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#15803d] mb-4">
            💼 Operational Model
          </div>
          <h2 className="text-balance text-4xl font-black text-[#0d2210] tracking-tight md:text-5xl leading-none">
            Commercial Enterprises
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-pretty text-[15px] leading-relaxed text-[#0d2210]/70">
            A fully integrated circular ecosystem engineered to maximize commercial yield, cross-pollinate systems, and slash operational overhead.
          </p>
        </motion.div>

        {/* Master Bento Container Grid */}
        <div className="space-y-6">
          
          {/* 1. Flagship Master Row */}
          {featuredItem && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="group relative overflow-hidden rounded-3xl border border-[#16a34a]/20 bg-white p-6 md:p-10 shadow-[0_4px_30px_rgba(22,163,74,0.02)] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(22,163,74,0.06)]">
                
                {/* Dynamic Inner Hover Gradient Flash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredItem.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a34a]/30 to-transparent" />
                
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center relative z-10">
                  {/* Media Frame Left */}
                  <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-[#16a34a]/10 relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square bg-[#f7f5f0]">
                    <AnimatePresence mode="popLayout">
                      <motion.img
                        key={featuredItem.image}
                        src={featuredItem.image}
                        alt={featuredItem.title}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-750 ease-out group-hover:scale-103"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Context Block Right */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#16a34a]/30 bg-[#16a34a]/10 px-3.5 py-1">
                      <featuredItem.icon className="h-4 w-4 text-[#15803d]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#15803d]">Flagship Enterprise</span>
                    </div>
                    
                    <AnimatePresence mode="wait">
                      <motion.div key={featuredItem.id} {...fadeSlideTransition}>
                        <h3 className="text-3xl font-black tracking-tight text-[#0d2210] group-hover:text-[#15803d] transition-colors">
                          {featuredItem.title}
                        </h3>
                        <p className="mt-3 text-[14.5px] leading-relaxed text-[#0d2210]/70 max-w-xl">
                          {featuredItem.description}
                        </p>

                        {/* Integrated Horizontal Badges */}
                        <div className="mt-8 flex flex-wrap gap-2">
                          {featuredItem.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 rounded-xl border border-[#16a34a]/10 bg-[#f7f5f0]/50 px-3.5 py-2 text-xs font-semibold text-[#0d2210]/80 transition-all group-hover:bg-white group-hover:border-[#16a34a]/30 group-hover:shadow-sm"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#16a34a]" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. Secondary Grid Units */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryItems.map((item, index) => (
              <motion.div
                key={index} // Using index to keep layout structure locked in position stably
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#16a34a]/10 bg-white shadow-sm transition-all duration-300 hover:border-[#16a34a]/30 hover:shadow-md"
              >
                {/* Image Module Header Area */}
                <div className="relative w-full h-48 overflow-hidden border-b border-[#16a34a]/10 bg-[#f7f5f0]">
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={item.image}
                      src={item.image}
                      alt={item.title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                  </AnimatePresence>
                  
                  {/* Floating Action/Icon Sphere */}
                  <div className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-[#16a34a]/20 backdrop-blur-md shadow-md bg-white/90">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={item.id}
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className="h-5 w-5" style={{ color: item.accent }} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Text Content Block */}
                <div className="flex flex-1 flex-col justify-between p-6 relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div key={item.id} {...fadeSlideTransition} className="flex flex-col justify-between h-full flex-1">
                      <div>
                        <h3 className="font-bold text-[17px] tracking-tight text-[#0d2210] group-hover:text-[#15803d] transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-[#0d2210]/70">
                          {item.description}
                        </p>
                      </div>

                      {/* Micro Pillar Tags */}
                      <div className="mt-5 pt-4 border-t border-[#f7f5f0] space-y-2">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] font-semibold text-[#0d2210]/60 group-hover:text-[#0d2210]/80 transition-colors">
                            <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.accent }} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}