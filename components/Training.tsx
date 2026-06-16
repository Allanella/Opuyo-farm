'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'
import { Eye, HardHat, Sprout, TrendingUp, ArrowRight } from 'lucide-react'

export const Training: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Eye,
      title: 'Observe & Study',
      description: 'Walk through active production cycles and witness live, validated farming strategies working on the ground.',
      glow: 'rgba(61, 122, 82, 0.15)',
      accent: '#72c492',
    },
    {
      number: '02',
      icon: HardHat,
      title: 'Hands-on Practice',
      description: 'Get into the field to manage livestock, mix nutrient profiles, and handle equipment under expert supervision.',
      glow: 'rgba(184, 114, 26, 0.15)',
      accent: '#d4913a',
    },
    {
      number: '03',
      icon: Sprout,
      title: 'Deploy Locally',
      description: 'Translate precise structural blue-prints and bio-security protocols onto your own land with total confidence.',
      glow: 'rgba(114, 196, 146, 0.1)',
      accent: '#3d7a52',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Scale & Monetize',
      description: 'Plug directly into verified market structures to extract maximum cash value from premium, high-yield outputs.',
      glow: 'rgba(212, 145, 58, 0.15)',
      accent: '#b8721a',
    },
  ]

  return (
    <section id="training" className="relative bg-[#040904] py-24 md:py-32 overflow-hidden">
      
      {/* Background ambient lighting accents */}
      <div 
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full pointer-events-none opacity-10 filter blur-[120px]"
        style={{ background: 'radial-gradient(circle, #b8721a 0%, transparent 70%)' }}
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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3d7a52]/30 bg-[#3d7a52]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#72c492] mb-4">
            🌱 The Learning Model
          </div>
          <h2 className="text-balance text-4xl font-black text-[#f0e9d8] tracking-tight md:text-5xl leading-none">
            The Growth Framework
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-pretty text-[15px] leading-relaxed text-white/50">
            A precise, high-impact progression engineered to transform traditional smallholder farmers into highly profitable agribusiness operators.
          </p>
        </motion.div>

        {/* Journey Timeline Wrapper */}
        <div className="relative">
          
          {/* Connecting Track Line (Desktop Only) */}
          <div className="absolute left-[12%] right-[12%] top-16 hidden h-[2px] bg-gradient-to-r from-[#3d7a52]/10 via-[#b8721a]/30 to-[#3d7a52]/10 lg:block" />

          {/* Steps Track Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col items-center p-4 text-center"
              >
                {/* Step Marker Badge */}
                <div className="relative z-20 mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/5 bg-[#0a120b]/80 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:border-[#3d7a52]/40">
                  
                  {/* Subtle individual glow behind active step */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md pointer-events-none"
                    style={{ backgroundColor: step.glow }}
                  />

                  <step.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" style={{ color: step.accent }} />
                  
                  {/* Floating Serial Counter */}
                  <span className="absolute -top-2.5 -right-2.5 text-[10px] font-mono font-bold tracking-wider text-white/30 bg-[#040904] px-2 py-0.5 rounded-full border border-white/5">
                    {step.number}
                  </span>
                </div>

                {/* Text Context Area */}
                <h3 className="text-lg font-bold text-[#f0e9d8] tracking-tight group-hover:text-[#72c492] transition-colors">
                  {step.title}
                </h3>
                
                <p className="mt-2.5 text-xs leading-relaxed text-white/50 max-w-[240px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Refined Action Footer Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-center border-t border-white/[0.04] pt-12 text-center"
        >
          <p className="text-[14px] text-white/60 max-w-md mb-6 leading-relaxed">
            Ready to implement audited commercial procedures and unlock real economic output on your land?
          </p>
          
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#3d7a52] to-[#2d5c3e] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f0e9d8] shadow-lg hover:from-[#499463] hover:to-[#38734e] transition-all duration-300 hover:shadow-[#3d7a52]/20"
          >
            Book a Field Training Session
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </Container>
    </section>
  )
}