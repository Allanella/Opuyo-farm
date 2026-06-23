'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion'
import { Container } from './Container'

// ─── Green Palette Identity ──────────────────────────────────────────────────
// light-green : #4ade80 (Vibrant active plant life)
// veg-green   : #16a34a (Rich commercial vegetation)
// water-green : #1db87a (Tropical aquatic/teal light source)
// deep-green  : #05140b (Deep base ambient canvas depth)

function AnimatedCounter({
  target,
  suffix = '',
  duration = 1.8,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString())
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, target, { duration, ease: [0.16, 1, 0.3, 1] })
    
    // Safely update DOM text node on animation changes
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest
      }
    })

    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [inView, count, target, duration, rounded])

  return (
    <span className="tracking-tight">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  )
}

function FloatingParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: 3 + (i % 4) * 2,
    x: (i * 37 + 11) % 95,
    y: (i * 53 + 7) % 90,
    delay: (i * 0.3) % 3,
    duration: 4 + (i % 5),
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.id % 3 === 0
              ? 'rgba(74,222,128,0.5)'
              : p.id % 3 === 1
              ? 'rgba(29,184,122,0.4)'
              : 'rgba(22,163,74,0.35)',
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.9, 1.2, 0.9],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Extended array for cyclic background rotation containing all 5 images
const HERO_IMAGES = ['/hero.jpeg', '/tomato.jpeg', '/tractor.jpeg', '/cow.jpeg', '/groundnut.jpeg']

function HeroBackground() {
  const [currentIdx, setCurrentIdx] = useState(0)

  // Rotate images sequentially every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {/* Structural photo component base layer with smooth fade cross-transitions */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={HERO_IMAGES[currentIdx]}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGES[currentIdx]})` }}
          aria-hidden="true"
        />
      </AnimatePresence>

      {/* Primary rich deep organic emerald backdrop color transformation */}
      <div className="absolute inset-0 bg-[#05140b]/80 z-0" />

      {/* Soft gradient text protector overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(110deg, #05140b 15%, rgba(5,20,11,0.85) 45%, rgba(5,20,11,0.4) 75%, transparent 100%)',
        }}
      />

      {/* ─── AMBIENT LIGHT LAYER TRANSITIONS ─── */}
      {/* Lower Left dynamic green light pocket */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none mix-blend-screen z-0"
        style={{
          background: 'radial-gradient(circle, rgba(74,222,128,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Top Right dynamic teal green light sweep */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], x: [-30, 30, -30], y: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[10%] right-[5%] w-[650px] h-[650px] rounded-full pointer-events-none mix-blend-screen z-0"
        style={{
          background: 'radial-gradient(circle, rgba(29,184,122,0.22) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Bottom section layout fade separator */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 z-0"
        style={{ background: 'linear-gradient(to top, #f7f5f0 0%, transparent 100%)' }}
      />
    </div>
  )
}

function LocationBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 backdrop-blur-md"
      style={{
        background: 'rgba(29,184,122,0.15)',
        border: '1px solid rgba(74,222,128,0.4)',
      }}
    >
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1db87a] opacity-70" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
      </span>
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4ade80]">
        Soroti City, Uganda
      </span>
    </motion.div>
  )
}

function GoatCapacityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
      transition={{
        opacity: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 },
        scale:   { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 },
        y:       { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.45 },
      }}
      className="relative mx-auto lg:absolute lg:right-4 lg:top-[22%] xl:right-10 z-20 w-full max-w-[240px] overflow-hidden rounded-3xl p-7 text-center backdrop-blur-xl"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        border: '1px solid rgba(74,222,128,0.25)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(74,222,128,0.6), transparent)' }}
      />

      <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-[#4ade80]">
        Boma Capacity
      </p>

      <div className="relative my-3 text-[60px] font-black leading-none tracking-tight text-[#e8f5ec]">
        <AnimatedCounter target={400} />
      </div>

      <p className="relative text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
        Improved Goats
      </p>

      <div
        className="relative mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1"
        style={{
          background: 'rgba(29,184,122,0.15)',
          border: '1px solid rgba(29,184,122,0.3)',
        }}
      >
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-[#1db87a]"
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-[10px] font-semibold tracking-wide text-[#4ade80]">
          Primary Enterprise
        </span>
      </div>
    </motion.div>
  )
}

const TRUST = ['Free farm visits', 'Monthly field days', 'Hands-on mentorship', 'Low-cost systems']

function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
      {TRUST.map((item, i) => (
        <React.Fragment key={item}>
          <motion.div
            className="flex items-center gap-2 text-[12px] font-medium transition-colors cursor-default text-white/60"
            whileHover={{ color: '#4ade80' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="flex-shrink-0">
              <circle cx="7" cy="7" r="6" stroke="#1db87a" strokeWidth="1.2" strokeOpacity="0.7" />
              <path d="M4.5 7l1.5 1.5 3.5-3.5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item}
          </motion.div>
          {i < TRUST.length - 1 && (
            <div className="hidden h-3.5 w-px sm:block bg-white/10" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

interface StatItem {
  value: number | string
  suffix: string
  label: string
  icon: string
  color: string
  featured: boolean
}

const STATS: StatItem[] = [
  { value: 4,         suffix: '',  label: 'Acre Demo Farm',       icon: '🗺️', color: '#4ade80', featured: false },
  { value: 400,      suffix: '+', label: 'Goat Capacity',        icon: '🐐', color: '#1db87a', featured: true  },
  { value: 12,        suffix: '',  label: 'Fish Ponds Dev.',       icon: '🐟', color: '#4ade80', featured: false },
  { value: 'Monthly', suffix: '',  label: 'Farmer Field Days',     icon: '🌱', color: '#4ade80', featured: false },
]

function StatBelt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 w-full mt-14"
    >
      <div
        className="mb-6 h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(74,222,128,0.2), transparent)' }}
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STATS.map(({ value, suffix, label, icon, featured }, idx) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative overflow-hidden rounded-2xl p-5 cursor-default backdrop-blur-lg"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
              border: featured ? '1px solid rgba(74,222,128,0.3)' : '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background: featured
                  ? 'linear-gradient(90deg, transparent, rgba(74,222,128,0.4), transparent)'
                  : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              }}
            />

            <div className="mb-3 text-xl leading-none">{icon}</div>

            <div
              className="font-display text-3xl font-black tracking-tight leading-none"
              style={{ color: featured ? '#4ade80' : '#e8f5ec' }}
            >
              {typeof value === 'string' ? (
                <span className="text-[18px] font-bold text-[#e8f5ec]">{value}</span>
              ) : (
                <AnimatedCounter target={value} suffix={suffix} />
              )}
            </div>

            <p className="mt-2.5 text-[10px] font-semibold uppercase tracking-wider text-white/40">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-28 pb-10 lg:pt-36"
      style={{ background: '#05140b' }}
    >
      <HeroBackground />
      <FloatingParticles />

      {/* Primary Content Structure */}
      <div className="relative z-20 flex-1 flex items-center w-full">
        <Container className="w-full">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center w-full">

            {/* Left Column Content Layout */}
            <div className="flex flex-col items-start text-left lg:col-span-7 xl:col-span-8 space-y-6">
              
              <LocationBadge />

              {/* Establishment Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <span
                  className="inline-block rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{
                    background: 'rgba(22,163,74,0.15)',
                    border: '1px solid rgba(22,163,74,0.3)',
                    color: '#4ade80',
                  }}
                >
                  Opuyo Mixed Demonstration Farm &middot; Est. 2020
                </span>
              </motion.div>

              {/* Bold Typography Title Grid */}
              <h1 className="font-display text-[clamp(34px,5.2vw,66px)] font-black leading-[1.03] tracking-tight text-[#e8f5ec]">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  Where agribusiness
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-[#4ade80] via-[#1db87a] to-[#16a34a] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                >
                  transforms livelihoods.
                </motion.span>
              </h1>

              {/* Description Paragraph Container */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42 }}
                className="max-w-[520px] text-[15px] sm:text-[16px] leading-[1.78] text-white/70"
              >
                East Africa's model for small-farm transformation — anchored by our 400-capacity
                improved goat herd, with integrated fish farming, apiary management, and crop
                systems that generate year-round income.
              </motion.p>

              {/* Interactive CTA Controls */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.52 }}
                className="flex flex-col sm:flex-row gap-3 pt-1 w-full sm:w-auto"
              >
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] whitespace-nowrap text-[#05140b]"
                  style={{
                    background: 'linear-gradient(135deg, #4ade80 0%, #1db87a 100%)',
                    boxShadow: '0 4px 24px rgba(74,222,128,0.3)',
                  }}
                >
                  Visit the Farm
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-200 bg-white/5 border border-white/10 text-white hover:bg-white/10"
                >
                  Book a Training Session
                </motion.a>
              </motion.div>

              {/* Trust Indicators Column */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.62 }}
                className="pt-3"
              >
                <TrustStrip />
              </motion.div>
            </div>

            {/* Right Column Layout Wrapper */}
            <div className="relative min-h-[160px] lg:min-h-0 lg:col-span-5 xl:col-span-4 w-full flex items-center justify-center">
              <GoatCapacityCard />
            </div>

          </div>
        </Container>
      </div>

      {/* Global Bottom Metric Strip */}
      <Container className="relative z-30 w-full">
        <StatBelt />
      </Container>
    </section>
  )
}