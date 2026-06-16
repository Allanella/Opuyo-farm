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

// ─── Hero Background with Real Image ─────────────────────────────────────────
// 👇 Change this path to your actual goat image path
const HERO_IMAGE_PATH = '/hero.jpeg'

function HeroBackground() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {/* Real photo layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE_PATH})` }}
        aria-hidden="true"
      />

      {/* Dark base overlay — deepens the image so text is readable */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(4, 12, 5, 0.62)' }}
      />

      {/* Left-to-right gradient: strong left for text contrast, fades right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(2,8,3,0.88) 0%, rgba(2,8,3,0.65) 45%, rgba(2,8,3,0.20) 75%, transparent 100%)',
        }}
      />

      {/* Bottom fade into page background */}
      <div
        className="absolute inset-x-0 bottom-0 h-56"
        style={{
          background: 'linear-gradient(to top, #020802 0%, transparent 100%)',
        }}
      />

      {/* Subtle top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, rgba(2,8,3,0.55) 0%, transparent 100%)',
        }}
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
      className="inline-flex items-center gap-2 rounded-full border border-[#4a9463]/40 bg-[#1a3d26]/60 px-4 py-1.5 backdrop-blur-md"
    >
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52a46e] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#72c492]" />
      </span>
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#80d4a0]">
        Soroti City, Uganda
      </span>
    </motion.div>
  )
}

// ─── Floating Stat Card ───────────────────────────────────────────────────────
function GoatCapacityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
        scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
        y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
      }}
      className="relative mx-auto lg:absolute lg:right-6 lg:top-[30%] xl:right-16 z-20 w-full max-w-[230px] overflow-hidden rounded-3xl border border-white/[0.12] p-7 text-center backdrop-blur-2xl"
      style={{
        background: 'linear-gradient(160deg, rgba(18,28,18,0.78) 0%, rgba(8,14,8,0.92) 100%)',
        boxShadow:
          '0 32px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)',
      }}
    >
      {/* Top shimmer line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8923a]/50 to-transparent" />

      <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c8923a]/90">
        Boma Capacity
      </div>

      <div className="my-3 text-[58px] font-black leading-none tracking-tight text-[#f5efe0]">
        <AnimatedCounter target={400} />
      </div>

      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35">
        Improved Goats
      </div>

      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#3d7a52]/40 bg-[#3d7a52]/15 px-3 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#72c492]" />
        <span className="text-[10px] font-semibold text-[#72c492] tracking-wide">
          Primary Enterprise
        </span>
      </div>
    </motion.div>
  )
}

// ─── Trust Strip ─────────────────────────────────────────────────────────────
const TRUST = [
  'Free farm visits',
  'Monthly field days',
  'Hands-on mentorship',
  'Low-cost systems',
]

function TrustStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
      {TRUST.map((item, i) => (
        <React.Fragment key={item}>
          <div className="flex items-center gap-2 text-[12px] font-medium text-white/60 transition-colors hover:text-white/90">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="flex-shrink-0"
            >
              <circle cx="7" cy="7" r="6" stroke="#72c492" strokeWidth="1.2" strokeOpacity="0.6" />
              <path
                d="M4.5 7l1.5 1.5 3.5-3.5"
                stroke="#72c492"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
  { value: 4, suffix: '', label: 'Acre Demo Farm', icon: '🗺️', featured: false },
  { value: 400, suffix: '+', label: 'Goat Capacity', icon: '🐐', featured: true },
  { value: 12, suffix: '', label: 'Fish Ponds Dev.', icon: '🐟', featured: false },
  { value: 'Monthly', suffix: '', label: 'Farmer Field Days', icon: '🌱', featured: false },
]

function StatBelt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 w-full mt-14 lg:mt-18"
    >
      {/* Thin divider above stats */}
      <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STATS.map(({ value, suffix, label, icon, featured }) => (
          <div
            key={label}
            className={[
              'group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20',
              featured
                ? 'border-[#c8923a]/35 bg-gradient-to-br from-[#1e1008]/80 to-[#0e0704]/90'
                : 'border-white/[0.07] bg-gradient-to-br from-[#0a120a]/70 to-[#050a05]/85',
            ].join(' ')}
            style={{ backdropFilter: 'blur(20px)' }}
          >
            {/* Top accent line */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background: featured
                  ? 'linear-gradient(90deg, transparent, #c8923a40, transparent)'
                  : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              }}
            />

            <div className="mb-3 text-xl leading-none">{icon}</div>

            <p
              className={[
                'font-display text-3xl font-black tracking-tight leading-none',
                featured ? 'text-[#d4913a]' : 'text-[#f0ece0]',
              ].join(' ')}
            >
              {value === 'Monthly' ? (
                <span className="text-xl font-bold tracking-normal text-[#f0ece0]">Monthly</span>
              ) : (
                <AnimatedCounter target={value as number} suffix={suffix} />
              )}
            </p>

            <p className="mt-2.5 text-[10px] font-semibold uppercase tracking-wider text-white/35 group-hover:text-white/55 transition-colors">
              {label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020802] flex flex-col justify-between pt-28 pb-10 lg:pt-36">

      {/* Photo background with overlays */}
      <HeroBackground />

      {/* Main content area */}
      <div className="relative z-20 flex-1 flex items-center w-full">
        <Container className="w-full">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center w-full">

            {/* ── Left content ── */}
            <div className="flex flex-col items-start text-left lg:col-span-7 xl:col-span-8 space-y-6">

              <LocationBadge />

              {/* Eyebrow tag */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <span className="inline-block rounded-md bg-[#c8923a]/10 border border-[#c8923a]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#d4913a]">
                  Demonstration Farm &middot; Est. 2020
                </span>
              </motion.div>

              {/* Headline */}
              <h1 className="font-display text-[clamp(34px,5.2vw,64px)] font-black leading-[1.04] tracking-tight text-[#f4ede0]">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  Where Goat Farming
                </motion.span>
                <motion.span
                  className="block text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #72c492 0%, #4fa66f 60%, #3a8c5a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                >
                  Becomes Real Profit.
                </motion.span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42 }}
                className="max-w-[520px] text-[15px] sm:text-[16px] leading-[1.75] text-[#c8d8c0]/80"
              >
                East Africa's model for small-farm transformation — anchored by our 400-capacity
                improved goat herd, with integrated fish farming, apiary management, and crop
                systems that generate year-round income.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.52 }}
                className="flex flex-col sm:flex-row gap-3 pt-1 w-full sm:w-auto"
              >
                <Button
                  href="#about"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto justify-center whitespace-nowrap"
                >
                  Visit the Farm
                </Button>
                <Button
                  href="#contact"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto justify-center whitespace-nowrap border-white/20 hover:bg-white/8 transition-colors"
                >
                  Book a Training Session
                </Button>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.62 }}
                className="pt-3"
              >
                <TrustStrip />
              </motion.div>
            </div>

            {/* ── Right column: floating card ── */}
            <div className="relative min-h-[160px] lg:min-h-0 lg:col-span-5 xl:col-span-4 w-full flex items-center justify-center">
              <GoatCapacityCard />
            </div>

          </div>
        </Container>
      </div>

      {/* Stat metrics belt */}
      <Container className="relative z-30 w-full">
        <StatBelt />
      </Container>

    </section>
  )
}