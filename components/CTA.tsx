'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'

export const CTA: React.FC = () => {
  return (
    <section 
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: '#05140b' }}
    >
      {/* ─── AMBIENT BACKGROUND LIGHT TRANSITIONS ─── */}
      {/* Upper Right glowing light source */}
      <motion.div
        animate={{ opacity: [0.12, 0.25, 0.12], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(74,222,128,0.18) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Lower Left dynamic water green light sweep */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15], x: [-20, 20, -20] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-30%] left-[-10%] w-[550px] h-[550px] rounded-full pointer-events-none mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(29,184,122,0.2) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <Container>
        {/* Organic Frosted Glass Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto max-w-4xl rounded-[2.5rem] p-8 md:p-16 text-center backdrop-blur-xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(74,222,128,0.2)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Card subtle top-border lighting effect */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(74,222,128,0.4), transparent)' }}
          />

          {/* Headline with core gradient accent matching */}
          <h2 className="text-balance text-3xl font-black leading-[1.12] tracking-tight md:text-5xl text-[#e8f5ec]">
            Ready to Transform Your Farm Into a{' '}
            <span className="bg-gradient-to-r from-[#4ade80] via-[#1db87a] to-[#16a34a] bg-clip-text text-transparent">
              Profitable Business?
            </span>
          </h2>

          {/* Description Block */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm sm:text-base leading-[1.75] text-white/70">
            Visit Opuyo Mixed Demonstration Farm and discover practical farming systems that work.
            Our experienced team is ready to guide you toward agricultural success.
          </p>

          {/* Styled Action Control Targets */}
          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row justify-center items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] whitespace-nowrap text-[#05140b]"
              style={{
                background: 'linear-gradient(135deg, #4ade80 0%, #1db87a 100%)',
                boxShadow: '0 4px 20px rgba(74,222,128,0.25)',
              }}
            >
              Schedule a Visit
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-200 bg-white/5 border border-white/10 text-white hover:bg-white/10"
            >
              Contact Us Today
            </motion.a>
          </div>

          {/* Dynamic Trust/Info Footer Strip */}
          <div 
            className="mt-10 inline-flex items-center gap-2 rounded-full px-4 py-2 border backdrop-blur-sm"
            style={{
              background: 'rgba(29,184,122,0.06)',
              borderColor: 'rgba(29,184,122,0.18)',
            }}
          >
            <span className="text-[11px] font-medium tracking-wide text-[#4ade80] flex items-center gap-1.5">
              <span className="text-base leading-none">💡</span>
              Monthly farmer field days &bull; Hands-on training &bull; Life-changing results
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}