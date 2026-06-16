'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'

interface PillarCardProps {
  title: string
  description: string
  index: number
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
      {/* ─── HOVER BACKGROUND LIGHT TRANSITION ─── */}
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
          background: 'radial-gradient(circle at 0% 0%, rgba(74, 222, 128, 0.12) 0%, transparent 65%)',
          filter: 'blur(15px)',
        }}
      />

      {/* Top glowing edge line indicator */}
      <div 
        className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, #4ade80, #1db87a)' }}
      />
      
      <h4 className="relative z-10 text-[15px] font-black text-[#05140b] tracking-tight group-hover:text-[#16a34a] transition-colors duration-300">
        {title}
      </h4>
      <p className="relative z-10 mt-2 text-[13.5px] leading-relaxed text-[#05140b]/70 group-hover:text-[#05140b]/80 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  )
}

export const About: React.FC = () => {
  const pillars = [
    { title: 'Profitable Smallholder Farming', description: 'Practical modules aimed at boosting yield and commercial viability.' },
    { title: 'Modern Record Keeping', description: 'Streamlined systems to track expenses, manage herds, and calculate true ROI.' },
    { title: 'Disease Control Management', description: 'Proactive veterinary habits and structural safety designs for livestock.' },
    { title: 'Water Harvesting Systems', description: 'Resilient earth-works and collection methods to handle changing dry seasons.' },
    { title: 'Direct-to-Market Strategies', description: 'Eliminating predatory middlemen chains to capture peak value for output.' },
    { title: 'Value Addition Pathways', description: 'Agribusiness skillsets extending standard lifecycles into premium products.' },
  ]

  return (
    <section id="about" className="relative bg-[#f7f5f0] py-24 md:py-32 overflow-hidden">
      
      {/* ─── DYNAMIC DAYLIGHT BACKGROUND LIGHT TRANSITIONS ─── */}
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
                src="/farmer-training.png"
                alt="Farmer training at Opuyo farm"
                className="relative rounded-2xl object-cover w-full h-[220px] border shadow-md grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
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
      </Container>
    </section>
  )
}