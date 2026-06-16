'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

interface StatCardProps {
  value: string | number
  label: string
  suffix?: string
  icon?: React.ReactNode
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, suffix = '', icon }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  
  // Parse target numerical baseline safely
  const numericString = typeof value === 'string' ? value.replace(/\D/g, '') : value.toString()
  const targetNumber = parseInt(numericString, 10)
  const isNonNumeric = isNaN(targetNumber)

  // Framer Motion spring counter orchestration hook state variables
  const motionCount = useMotionValue(0)
  const displayValue = useTransform(motionCount, (current) => 
    isNonNumeric ? value.toString() : Math.round(current).toLocaleString()
  )
  
  const isCardInView = useInView(containerRef, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!isCardInView || isNonNumeric) return
    
    const controls = animate(motionCount, targetNumber, { 
      duration: 2.0, 
      ease: [0.16, 1, 0.3, 1] // Premium cubic bezier ease-out trajectory
    })
    
    return controls.stop
  }, [isCardInView, motionCount, targetNumber, isNonNumeric])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl p-6 text-center backdrop-blur-md cursor-default"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.005) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.02)',
      }}
    >
      {/* ─── NEW INTERACTIVE BACKDROP LIGHT TRANSITION ─── */}
      {/* Hidden background radial halo light that flares on hover transitions */}
      <motion.div
        variants={{
          initial: { scale: 0.8, opacity: 0 },
          hover: { scale: 1.2, opacity: 0.15 }
        }}
        initial="initial"
        whileHover="hover"
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none mix-blend-screen z-0"
        style={{
          background: 'radial-gradient(circle, rgba(74,222,128,0.4) 0%, rgba(29,184,122,0.1) 50%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Card subtle top lighting thin boundary split rule */}
      <div
        className="absolute inset-x-0 top-0 h-px transition-opacity duration-300 opacity-30 group-hover:opacity-100"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(74,222,128,0.4), transparent)' }}
      />

      {/* Optional Top Icon Container Asset Base */}
      {icon && (
        <div className="relative z-10 mb-3 mx-auto text-xl text-white/50 group-hover:text-[#4ade80] transition-colors duration-300">
          {icon}
        </div>
      )}

      {/* Primary Counter Metric Figure Text Block */}
      <div className="relative z-10 font-display text-4xl font-black tracking-tight leading-none text-[#e8f5ec] group-hover:text-[#4ade80] transition-colors duration-300">
        <span ref={textRef}>
          {isNonNumeric ? value : <motion.span>{displayValue}</motion.span>}
        </span>
        {!isNonNumeric && suffix && (
          <span className="ml-0.5 text-2xl font-bold bg-gradient-to-r from-[#4ade80] to-[#1db87a] bg-clip-text text-transparent">
            {suffix}
          </span>
        )}
      </div>

      {/* Label Sub-Text Typography Grid */}
      <p className="relative z-10 mt-3 text-[11px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors duration-300">
        {label}
      </p>
    </motion.div>
  )
}