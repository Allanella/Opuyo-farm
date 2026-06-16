'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { Button } from './Button'
import { Container } from './Container'

// ─── Animated Counter ──────────────────────────────────────────────────────────
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
    const controls = animate(count, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    })
    return controls.stop
  }, [inView, count, target, duration])

  return (
    <span ref={ref} className="tracking-tight">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

// ─── Scene Background SVG ────────────────────────────────────────────────────
function SceneBackground() {
  return (
    <div className="absolute inset-0 h-full w-full select-none overflow-hidden">
      <svg
        className="h-full w-full object-cover"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="sky-glow" cx="70%" cy="30%" r="55%">
            <stop offset="0%" stopColor="#142e19" />
            <stop offset="100%" stopColor="#040a04" />
          </radialGradient>
          <radialGradient id="sun-glow" cx="68%" cy="32%" r="35%">
            <stop offset="0%" stopColor="#b8721a" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#b8721a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sky */}
        <rect width="1200" height="700" fill="url(#sky-glow)" />
        <rect width="1200" height="700" fill="url(#sun-glow)" />

        {/* Dynamic Sun Elements */}
        <ellipse cx="820" cy="220" rx="80" ry="80" fill="#c8821a" opacity="0.1" />
        <ellipse cx="820" cy="220" rx="44" ry="44" fill="#c8821a" opacity="0.15" />
        <circle cx="820" cy="220" r="22" fill="#e09e4f" opacity="0.5" />

        {/* Clouds */}
        <path d="M980,175 Q1020,155 1065,168 Q1055,148 1035,144 Q1015,140 998,158 Z" fill="#0d2210" opacity="0.3" />
        <path d="M1060,155 Q1105,132 1150,148 Q1138,128 1115,124 Q1093,120 1075,140 Z" fill="#0d2210" opacity="0.2" />

        {/* Mid hills */}
        <path d="M0,420 Q140,385 280,408 Q420,430 560,400 Q700,372 840,395 Q980,418 1200,382 L1200,520 Q1020,498 840,512 Q660,526 520,504 Q340,480 200,500 Q100,512 0,502 Z" fill="#091a0b" opacity="0.95" />

        {/* Near ground */}
        <path d="M0,470 Q100,452 220,468 Q360,486 500,460 Q650,434 800,456 Q960,478 1100,458 L1200,460 L1200,590 Q980,570 800,584 Q580,600 380,578 Q200,558 80,575 L0,582 Z" fill="#051206" />

        {/* Foreground soil */}
        <path d="M0,535 Q160,518 320,532 Q500,548 680,528 Q860,508 1040,525 L1200,520 L1200,700 L0,700 Z" fill="#020502" />

        {/* Trees left */}
        <path d="M80,420 L80,358 Q80,340 84,328 Q88,308 80,295 Q72,308 76,328 Q80,340 80,358 Z" fill="#0d2210" opacity="0.8" />
        <ellipse cx="80" cy="292" rx="28" ry="42" fill="#0d2210" opacity="0.85" />
        <ellipse cx="68" cy="308" rx="22" ry="34" fill="#071206" opacity="0.9" />

        {/* Trees right */}
        <path d="M870,396 L870,328 Q870,310 875,298 Q880,278 870,264 Q860,278 865,298 Q870,310 870,328 Z" fill="#0d2210" opacity="0.75" />
        <ellipse cx="870" cy="260" rx="32" ry="48" fill="#091a0b" opacity="0.8" />

        {/* Farm buildings */}
        <rect x="600" y="424" width="58" height="44" rx="2" fill="#030803" opacity="0.9" stroke="#0d2210" strokeWidth="1" />
        <polygon points="596,426 662,426 635,398 628,398" fill="#051206" opacity="0.95" />
      </svg>
      
      {/* Animated Light Ray Flare */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none filter blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(212,145,58,0.12) 0%, transparent 70%)' }}
      />
    </div>
  )
}

// ─── Location Badge ───────────────────────────────────────────────────────────
function LocationBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 rounded-full border border-[#3d7a52]/30 bg-gradient-to-r from-[#3d7a52]/20 to-transparent px-4 py-1.5 backdrop-blur-md"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52a46e] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#72c492]"></span>
      </span>
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#72c492]">
        Soroti City, Uganda
      </span>
    </motion.div>
  )
}

// ─── Goat Capacity Float Card ─────────────────────────────────────────────────
function GoatCapacityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: [0, -12, 0]
      }}
      transition={{ 
        initial: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
      className="relative mx-auto lg:absolute lg:right-4 lg:top-1/4 xl:right-12 z-20 w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/10 p-6 text-center shadow-2xl backdrop-blur-xl"
      style={{ 
        background: 'linear-gradient(135deg, rgba(25,18,10,0.7) 0%, rgba(10,8,5,0.85) 100%)',
        boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1)'
      }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b8721a]/60 to-transparent" />
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#d4913a]/90">
        Boma Capacity
      </p>
      <p className="font-display my-2 text-[52px] font-black leading-none text-[#f0e9d8] tracking-tight">
        <AnimatedCounter target={400} />
      </p>
      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/40">
        Improved Goats
      </p>
      <div className="mt-4 inline-block rounded-full border border-[#3d7a52]/40 bg-[#3d7a52]/10 px-3 py-1 text-[10px] font-semibold text-[#72c492] tracking-wide">
        ⚡ Primary Enterprise
      </div>
    </motion.div>
  )
}

// ─── Trust Strip ─────────────────────────────────────────────────────────────
const TRUST = ['Free farm visits', 'Monthly field days', 'Hands-on mentorship', 'Low-cost systems']

function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
      {TRUST.map((item, i) => (
        <React.Fragment key={item}>
          <div className="flex items-center gap-2 text-[12px] font-medium text-white/70 transition-colors hover:text-white">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-[#72c492] flex-shrink-0">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
              <path d="M4.5 7l1.5 1.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item}
          </div>
          {i < TRUST.length - 1 && (
            <div className="hidden h-3.5 w-px bg-white/10 sm:block" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

// ─── Stat Belt ────────────────────────────────────────────────────────────────
const STATS = [
  { value: 4, label: 'Acre Demo Farm', icon: '🗺️' },
  { value: 400, suffix: '+', label: 'Goat Capacity Boma', icon: '🐐', featured: true },
  { value: 12, label: 'Fish Ponds Dev.', icon: '🐟' },
  { value: 'Monthly', label: 'Farmer Field Days', icon: '🌱' },
]

function StatBelt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 w-full mt-12 lg:mt-16"
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map(({ value, suffix, label, icon, featured }) => (
          <div
            key={label}
            className={[
              'group relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-1',
              featured ? 'border-[#b8721a]/30' : 'border-white/5',
            ].join(' ')}
            style={{
              background: featured
                ? 'linear-gradient(135deg, rgba(28,16,6,0.75) 0%, rgba(14,8,3,0.9) 100%)'
                : 'linear-gradient(135deg, rgba(10,18,11,0.65) 0%, rgba(5,10,6,0.85) 100%)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}
          >
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-${featured ? '[#b8721a]' : 'white'}/20 to-transparent`} />
            
            <div className="mb-2 text-lg filter drop-shadow-md">
              {icon}
            </div>
            <p className={`font-display text-2xl sm:text-3xl font-black tracking-tight leading-none ${featured ? 'text-[#d4913a]' : 'text-[#f0e9d8]'}`}>
              {value === 'Monthly' ? (
                <span className="text-lg sm:text-xl font-bold tracking-normal">Monthly</span>
              ) : (
                <AnimatedCounter target={value as number} suffix={suffix ?? ''} />
              )}
            </p>
            <p className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/40 group-hover:text-white/60 transition-colors">
              {label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Hero Section Component ───────────────────────────────────────────────────
export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020502] flex flex-col justify-between pt-32 pb-12 lg:pt-36">
      
      {/* Generated background environment nodes */}
      <SceneBackground />

      {/* Modern Vignette Gradient Masks */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(2,5,2,0.7) 0%, rgba(2,5,2,0.4) 50%, rgba(2,5,2,0.95) 100%), linear-gradient(to right, rgba(2,5,2,0.9) 0%, rgba(2,5,2,0.5) 50%, rgba(2,5,2,0.2) 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #020502 0%, transparent 100%)' }}
      />

      {/* Core Grid Layout */}
      <div className="relative z-20 flex-1 flex items-center w-full">
        <Container className="w-full">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center w-full">
            
            {/* Left Content Column */}
            <div className="flex flex-col items-start text-left lg:col-span-7 xl:col-span-8 space-y-6">
              
              <LocationBadge />

              {/* Establishment Label */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <span className="inline-block rounded-md bg-[#b8721a]/10 border border-[#b8721a]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#d4913a]">
                  Demonstration Farm &middot; Est. 2020
                </span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="font-display text-balance text-[clamp(36px,5.5vw,62px)] font-black leading-[1.05] tracking-tight text-[#f0e9d8]">
                <motion.span 
                  className="inline-block"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  Where Goat Farming
                </motion.span>{' '}
                <motion.span 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#72c492] to-[#4fa66f]"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  Becomes Real Profit.
                </motion.span>
              </h1>

              {/* Sub-paragraph description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="max-w-[540px] text-pretty text-[15px] sm:text-[16px] leading-relaxed text-[#f0e9d8]/80"
              >
                East Africa's model for small-farm transformation — anchored by our 400-capacity
                improved goat herd, with integrated fish farming, apiary management, and crop
                systems that generate year-round income.
              </motion.p>

              {/* Call to Actions Interaction Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Button href="#about" variant="primary" size="lg" className="w-full sm:w-auto justify-center shadow-xl shadow-[#3d7a52]/10 whitespace-nowrap">
                  Visit the Farm
                </Button>
                <Button href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto justify-center hover:bg-white/5 transition-colors whitespace-nowrap">
                  Book a Training Session
                </Button>
              </motion.div>

              {/* Trust System Footer Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="pt-4"
              >
                <TrustStrip />
              </motion.div>
            </div>

            {/* Right Column (Floating Graphic Element Layout) */}
            <div className="relative min-h-[180px] lg:min-h-0 lg:col-span-5 xl:col-span-4 w-full flex items-center justify-center">
              <GoatCapacityCard />
            </div>

          </div>
        </Container>
      </div>

      {/* Base Stat Metrics Belt */}
      <Container className="relative z-30 w-full">
        <StatBelt />
      </Container>
      
    </section>
  )
}