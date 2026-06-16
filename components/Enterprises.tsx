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
      color: 'from-[#b8721a]/20 to-transparent',
      accent: '#b8721a',
    },
    {
      title: 'Fish Farming Unit',
      description: 'High-density commercial aquaculture infrastructure featuring 12 production ponds optimized for local markets.',
      features: ['12 High-Yield Ponds', 'Water Quality Automation', 'Practical Training Setups'],
      icon: Droplet,
      image: '/fish-farming.png',
      color: 'from-[#2b5c8f]/20 to-transparent',
      accent: '#3b82f6',
    },
    {
      title: 'Apiary Unit',
      description: 'Precision modern apiculture practices engineered for organic honey extraction and regional pollination.',
      features: ['Modern Top-Bar Hives', 'Honey Processing Ready', 'Ecosystem Bio-Linkage'],
      icon: Flower,
      image: '/apiary.png',
      color: 'from-[#a17818]/20 to-transparent',
      accent: '#d4913a',
    },
    {
      title: 'Crop Production',
      description: 'Diversified multi-tier cropping strategies including premium pineapple variants and resilient vegetable configurations.',
      features: ['Pineapple Top Exports', 'Intercropping Systems', 'Soil Moisture Retention'],
      icon: Leaf,
      image: '/crop-production.png',
      color: 'from-[#1e4620]/30 to-transparent',
      accent: '#72c492',
    },
    {
      title: 'Fodder Bank',
      description: 'Zero-grazing feed security platforms utilizing high-protein lines like Napier Grass, Brachiaria, and Calliandra.',
      features: ['Napier & Brachiaria Banks', 'Year-Round Feed Reserves', 'Drastically Lower Input Costs'],
      icon: Zap,
      image: '/fodder-bank.png',
      color: 'from-[#4d1a66]/20 to-transparent',
      accent: '#a855f7',
    },
    {
      title: 'Value Addition Corner',
      description: 'Downstream agribusiness processing facilities designed to package raw output into high-margin consumer products.',
      features: ['Shea Butter Refining', 'Pure Honey Bottling', 'Organic Fertilizer Bags'],
      icon: Package,
      image: '/value-addition.png',
      color: 'from-[#5c3a21]/30 to-transparent',
      accent: '#f43f5e',
    },
  ]

  const featuredItem = enterprises.find((e) => e.featured)
  const secondaryItems = enterprises.filter((e) => !e.featured)

  return (
    <section id="enterprises" className="relative bg-[#040904] py-24 md:py-32 overflow-hidden">
      
      {/* Soft Background Radial Light Ring */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full pointer-events-none opacity-10 filter blur-[140px]"
        style={{ background: 'radial-gradient(circle, #3d7a52 0%, transparent 80%)' }}
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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3d7a52]/30 bg-[#3d7a52]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#72c492] mb-4">
            💼 Operational Model
          </div>
          <h2 className="text-balance text-4xl font-black text-[#f0e9d8] tracking-tight md:text-5xl leading-none">
            Commercial Enterprises
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-pretty text-[15px] leading-relaxed text-white/50">
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
              <div className="group relative overflow-hidden rounded-3xl border border-[#b8721a]/30 bg-gradient-to-br from-[#120b03]/90 to-[#071206]/80 p-6 md:p-10 shadow-2xl backdrop-blur-md">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b8721a]/40 to-transparent" />
                
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Media Frame Left */}
                  <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-white/5 relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040904] via-transparent to-transparent z-10 opacity-40" />
                    <img
                      src={featuredItem.image}
                      alt={featuredItem.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Context Block Right */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#b8721a]/40 bg-[#b8721a]/10 px-3.5 py-1">
                      <featuredItem.icon className="h-4 w-4 text-[#d4913a]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4913a]">Flagship Enterprise</span>
                    </div>
                    
                    <h3 className="text-3xl font-black tracking-tight text-[#f0e9d8]">
                      {featuredItem.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/60 max-w-xl">
                      {featuredItem.description}
                    </p>

                    {/* Integrated Horizontal Badges */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {featuredItem.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2 text-xs font-medium text-white/70 transition-colors group-hover:border-[#b8721a]/20"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#d4913a]" />
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
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#0a120b]/60 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#3d7a52]/30 hover:-translate-y-1"
              >
                {/* Image Module Header Area */}
                <div className="relative w-full h-48 overflow-hidden border-b border-white/5">
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} z-10 transition-opacity group-hover:opacity-40`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a120b] via-transparent to-transparent z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating Action/Icon Sphere */}
                  <div 
                    className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 backdrop-blur-md shadow-md"
                    style={{ backgroundColor: 'rgba(4,9,4,0.75)' }}
                  >
                    <item.icon className="h-5 w-5" style={{ color: item.accent }} />
                  </div>
                </div>

                {/* Text Content Block */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-bold text-[17px] tracking-tight text-[#f0e9d8] group-hover:text-[#72c492] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">
                      {item.description}
                    </p>
                  </div>

                  {/* Micro Pillar Tags */}
                  <div className="mt-5 pt-4 border-t border-white/[0.04] space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] font-medium text-white/40 group-hover:text-white/60 transition-colors">
                        <div className="h-1 w-1 rounded-full" style={{ backgroundColor: item.accent }} />
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