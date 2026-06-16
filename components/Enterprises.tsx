'use client'

import React from 'react'
import { motion } from 'framer-motion'
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

export const Enterprises: React.FC = () => {
  // ─── DYNAMIC DATA CONFIGURATION (UPDATED WITH THE CLIENT'S EYE-CATCHING PALETTE) ───
  const enterprises = [
    {
      title: 'Goat Breeding Unit',
      description:
        'Our flagship commercial enterprise featuring elite Galla and Boer genetics managed within a specialized 50m × 30m bio-secure boma layout.',
      features: [
        'Galla & Boer Genetics',
        'Breeding Stock Sales',
        'Weight Performance Track',
        'Deworming Frameworks',
        'High-Yield Meat Production',
      ],
      icon: Award,
      image: '/goat-breeding.png',
      featured: true,
      // Eye-catching blending gradients using Light & Veg Greens
      color: 'from-[#16a34a]/20 via-[#4ade80]/10 to-transparent',
      accent: '#16a34a', // Veg Green
    },
    {
      title: 'Fish Farming Unit',
      description: 'High-density commercial aquaculture infrastructure featuring 12 production ponds optimized for local markets.',
      features: ['12 High-Yield Ponds', 'Water Quality Automation', 'Practical Training Setups'],
      icon: Droplet,
      image: '/fish-farming.png',
      color: 'from-[#0ea5e9]/20 via-[#0d9488]/10 to-transparent', 
      accent: '#0d9488', // Water Green / Fresh Teal
    },
    {
      title: 'Apiary Unit',
      description: 'Precision modern apiculture practices engineered for organic honey extraction and regional pollination.',
      features: ['Modern Top-Bar Hives', 'Honey Processing Ready', 'Ecosystem Bio-Linkage'],
      icon: Flower,
      image: '/apiary.png',
      color: 'from-[#eab308]/20 via-[#16a34a]/10 to-transparent',
      accent: '#16a34a', // Veg Green
    },
    {
      title: 'Crop Production',
      description: 'Diversified multi-tier cropping strategies including premium pineapple variants and resilient vegetable configurations.',
      features: ['Pineapple Top Exports', 'Intercropping Systems', 'Soil Moisture Retention'],
      icon: Leaf,
      image: '/crop-production.png',
      color: 'from-[#4ade80]/20 via-[#15803d]/10 to-transparent',
      accent: '#4ade80', // Light Green
    },
    {
      title: 'Fodder Bank',
      description: 'Zero-grazing feed security platforms utilizing high-protein lines like Napier Grass, Brachiaria, and Calliandra.',
      features: ['Napier & Brachiaria Banks', 'Year-Round Feed Reserves', 'Drastically Lower Input Costs'],
      icon: Zap,
      image: '/fodder-bank.png',
      color: 'from-[#22c55e]/20 via-[#0ea5e9]/10 to-transparent',
      accent: '#22c55e', // Vibrant Light Green
    },
    {
      title: 'Value Addition Corner',
      description: 'Downstream agribusiness processing facilities designed to package raw output into high-margin consumer products.',
      features: ['Shea Butter Refining', 'Pure Honey Bottling', 'Organic Fertilizer Bags'],
      icon: Package,
      image: '/value-addition.png',
      color: 'from-[#0d9488]/20 via-[#4ade80]/10 to-transparent',
      accent: '#0d9488', // Water Green
    },
  ]

  const featuredItem = enterprises.find((e) => e.featured)
  const secondaryItems = enterprises.filter((e) => !e.featured)

  return (
    // Overhauled from dark #040904 to a gorgeous fresh light cream tone
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
          {/* Badge highlighted using vibrant dynamic veg green */}
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
              {/* Premium white glass card featuring structural border accents */}
              <div className="group relative overflow-hidden rounded-3xl border border-[#16a34a]/20 bg-white p-6 md:p-10 shadow-[0_4px_30px_rgba(22,163,74,0.02)] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(22,163,74,0.06)]">
                
                {/* Dynamic Inner Hover Gradient Flash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredItem.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#16a34a]/30 to-transparent" />
                
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center relative z-10">
                  {/* Media Frame Left */}
                  <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-[#16a34a]/10 relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square bg-[#f7f5f0]">
                    <img
                      src={featuredItem.image}
                      alt={featuredItem.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-750 ease-out group-hover:scale-103"
                    />
                  </div>

                  {/* Context Block Right */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#16a34a]/30 bg-[#16a34a]/10 px-3.5 py-1">
                      <featuredItem.icon className="h-4 w-4 text-[#15803d]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#15803d]">Flagship Enterprise</span>
                    </div>
                    
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
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. Secondary Grid Units */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }} // Dynamic hover lift mechanism
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#16a34a]/10 bg-white shadow-sm transition-all duration-300 hover:border-[#16a34a]/30 hover:shadow-md"
              >
                {/* Image Module Header Area */}
                <div className="relative w-full h-48 overflow-hidden border-b border-[#16a34a]/10 bg-[#f7f5f0]">
                  {/* Color layers overlaying dynamic imagery */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  
                  {/* Floating Action/Icon Sphere */}
                  <div 
                    className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-[#16a34a]/20 backdrop-blur-md shadow-md bg-white/90"
                  >
                    <item.icon className="h-5 w-5" style={{ color: item.accent }} />
                  </div>
                </div>

                {/* Text Content Block */}
                <div className="flex flex-1 flex-col justify-between p-6 relative z-10">
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
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}