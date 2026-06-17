'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'
import {
  Eye,
  TrendingUp,
  Users,
  Award,
  Leaf,
  Handshake,
  Droplet,
  Flower,
} from 'lucide-react'

export const WhyVisit: React.FC = () => {
  const benefits = [
    {
      icon: Eye,
      title: 'Practical Demonstrations',
      description: 'See proven, working farming structures and high-yield systems in action right on our live demonstration plots.',
    },
    {
      icon: Users,
      title: 'Farmer Mentorship',
      description: 'Gain unfiltered, direct operational guidance and field insights from experienced agricultural professionals.',
    },
    {
      icon: Award,
      title: 'Modern Goat Breeding',
      description: 'Master premium breeding techniques, weight milestones, and structures for elite Boer and Galla variants.',
    },
    {
      icon: Droplet,
      title: 'Fish Farming Training',
      description: 'De-risk your investment by learning commercial water quality management and feeding programs inside active ponds.',
    },
    {
      icon: Flower,
      title: 'Apiary Training',
      description: 'Develop precise beehive management and organic extraction skillsets optimized for regional honey markets.',
    },
    {
      icon: Leaf,
      title: 'Crop Integration',
      description: 'Adopt sustainable intercropping setups, organic moisture conservation methods, and high-value fruit tactics.',
    },
    {
      icon: TrendingUp,
      title: 'Agribusiness Skills',
      description: 'Build reliable financial tracking frameworks and evaluate exact production costs to treat your farm as a business.',
    },
    {
      icon: Handshake,
      title: 'Market-Oriented Farming',
      description: 'Tap into direct value chains, avoid predatory middlemen networks, and learn optimal product positioning.',
    },
  ]

  return (
    <section id="why-visit" className="relative bg-[#f7f5f0] py-24 md:py-32 overflow-hidden">
      
      {/* Editorial geometric light overlay divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3d7a52]/20 to-transparent" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Sticky Editorial Context Anchor */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d97706] mb-4">
                🎓 Knowledge Hub
              </div>
              <h2 className="text-balance text-3xl font-black text-[#0d2210] tracking-tight md:text-4xl leading-[1.15]">
                Why Aggressive Producers Training at Opuyo Farm
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[#0d2210]/70">
                Theoretical coursework fails when it meets harsh dry seasons. Farmers, cooperatives, and agriprenuers visit our facility to study real-world biological systems that yield profit under local constraints.
              </p>
              
              <div className="mt-8 hidden lg:block border-l-2 border-[#f59e0b]/40 pl-4 space-y-3">
                <p className="text-xs font-bold text-[#d97706] uppercase tracking-wider">Field Impact Metrics</p>
                <p className="text-[13px] text-[#0d2210]/60 italic">"Replacing guesswork and traditional trial-and-error with audited commercial procedures."</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Asymmetric Tactile Grid */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#3d7a52]/10 bg-white p-6 shadow-[0_2px_6px_rgba(13,34,16,0.01)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_16px_32px_rgba(13,34,16,0.05)] hover:border-[#f59e0b]/30"
                >
                  <div>
                    {/* Minimal Technical Icon Ring — Seamlessly shifts to egg-yolk yellow on card hover */}
                    <div className="mb-4 inline-flex rounded-xl border border-[#3d7a52]/15 bg-[#f7f5f0] p-2.5 text-[#3d7a52] transition-colors group-hover:bg-[#f59e0b] group-hover:text-white group-hover:border-transparent">
                      <benefit.icon className="h-5 w-5" />
                    </div>

                    {/* Subtitle handles the smooth color transformation */}
                    <h3 className="text-[15.5px] font-bold text-[#0d2210] tracking-tight group-hover:text-[#d97706] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#0d2210]/65">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Micro-indicator subtle card edge lines adjusted to egg-yolk palette */}
                  <div className="absolute right-0 bottom-0 h-8 w-8 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-4 left-4 h-8 w-8 rotate-45 border-t border-l border-[#f59e0b]/40" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}