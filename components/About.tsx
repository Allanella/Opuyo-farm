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
      className="group relative overflow-hidden rounded-2xl border border-[#3d7a52]/12 bg-white p-6 shadow-[0_2px_8px_rgba(13,34,16,0.02)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_12px_24px_rgba(13,34,16,0.06)] hover:border-[#3d7a52]/30"
    >
      {/* Subtle hover accent line */}
      <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-[#3d7a52] to-[#b8721a] opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <h4 className="text-[15px] font-bold text-[#0d2210] tracking-tight group-hover:text-[#3d7a52] transition-colors">
        {title}
      </h4>
      <p className="mt-2 text-[13.5px] leading-relaxed text-[#0d2210]/65">
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
      
      {/* Soft light decorative topography glow */}
      <div 
        className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full pointer-events-none opacity-40 filter blur-[100px]"
        style={{ background: 'radial-gradient(circle, #e3dfd5 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Context & Imagery */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3d7a52]/20 bg-[#3d7a52]/8 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2d5c3e] mb-4">
                🌿 Cultivating Innovation
              </div>
              <h2 className="text-balance text-3xl font-black text-[#0d2210] tracking-tight md:text-4xl leading-[1.15]">
                Transforming the Teso Region Through Hands‑on Mastery
              </h2>
              <p className="mt-4 text-pretty text-[14.5px] leading-relaxed text-[#0d2210]/70">
                Opuyo Farm isn't a theoretical classroom—it is a functional hub dedicated to replacing guesswork with high-yield, premium agriculture.
              </p>

              {/* High Contrast Parameter Blocks */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-xl border border-[#3d7a52]/10 bg-white p-4 shadow-sm min-w-[130px]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#0d2210]/40">Footprint</p>
                  <p className="text-xl font-extrabold text-[#b8721a] mt-0.5">4 Acres</p>
                  <p className="text-[11px] text-[#0d2210]/50 mt-0.5">Prime Demo Land</p>
                </div>
                <div className="rounded-xl border border-[#3d7a52]/10 bg-white p-4 shadow-sm min-w-[130px]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#0d2210]/40">Mission Type</p>
                  <p className="text-xl font-extrabold text-[#3d7a52] mt-0.5">Demonstration</p>
                  <p className="text-[11px] text-[#0d2210]/50 mt-0.5">Practical Training</p>
                </div>
              </div>
            </motion.div>

            {/* Framed Image Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-8 hidden lg:block group"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#3d7a52]/10 to-[#b8721a]/10 opacity-40 blur-sm group-hover:opacity-70 transition duration-500" />
              <img
                src="/farmer-training.png"
                alt="Farmer training at Opuyo farm"
                className="relative rounded-2xl object-cover w-full h-[220px] border border-[#3d7a52]/10 shadow-md grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* Right Column: Clean Grid Blocks */}
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