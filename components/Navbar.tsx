'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from './Container'
import { Menu, X } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Enterprises', href: '#enterprises' },
  { label: 'Training', href: '#training' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

// Array of background visuals used for dynamic header ambient shifting before scrolling
const dynamicBgImages = [
  '/images/hero-farm-1.jpg',
  '/images/hero-farm-2.jpg',
  '/images/hero-farm-3.jpg'
]

// ─── FIXED ROUNDED LOGO CONTAINER ───────────────────────────────────────────
function LogoMark() {
  return (
    <div className="relative w-9 h-9 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
      <Image
        src="/image.png" 
        alt="Opuyo Mixed Demonstration Farm Logo"
        width={40} 
        height={40}
        priority
        className="object-contain rounded-full"
      />
    </div>
  )
}

// ─── Active section tracker ─────────────────────────────────────────────────
function useActiveSection(items: NavItem[]) {
  const [active, setActive] = useState('#home')
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') return

    const observers: IntersectionObserver[] = []
    items.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [items, pathname])

  return active
}

// ─── Desktop Nav Link ───────────────────────────────────────────────────────
function NavLink({
  item,
  isActive,
  scrolled,
  onNavigate,
}: {
  item: NavItem
  isActive: boolean
  scrolled: boolean
  onNavigate: (href: string) => void
}) {
  return (
    <a
      href={item.href}
      onClick={(e) => { 
        e.preventDefault()
        onNavigate(item.href)
      }}
      className="relative px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 group"
      style={{ color: isActive
        ? '#4ade80'
        : (scrolled ? 'rgba(232,245,236,0.65)' : 'rgba(240,236,224,0.65)')
      }}
    >
      {item.label}
      <motion.span
        layoutId="nav-dot"
        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4ade80]"
        style={{ shadow: '0 0 8px rgba(74,222,128,0.5)' }}
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <span
        className="absolute bottom-0 left-3.5 right-3.5 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 bg-[#4ade80]/40"
      />
    </a>
  )
}

// ─── MAIN NAVBAR ─────────────────────────────────────────────────────────────
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [bgIndex, setBgIndex] = useState(0)
  const active = useActiveSection(navItems)
  
  const router = useRouter()
  const pathname = usePathname()

  // Background cyclic transition engine loop
  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % dynamicBgImages.length)
    }, 5000)
    return () => clearInterval(bgTimer)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavigation = (href: string, closeMobileMenu?: () => void) => {
    closeMobileMenu?.()

    if (pathname === '/') {
      const el = document.querySelector(href)
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth',
        })
      }
    } else {
      router.push(`/${href}`)
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50"
        initial={false}
        animate={{ paddingTop: scrolled ? 0 : 16, paddingLeft: scrolled ? 0 : 16, paddingRight: scrolled ? 0 : 16 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.header
          initial={false}
          animate={{
            borderRadius: scrolled ? 0 : 16,
            borderBottomWidth: scrolled ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full overflow-hidden relative"
          style={{
            background: scrolled ? 'rgba(10,15,12,0.75)' : 'transparent',
            backdropFilter: 'blur(20px)',
            borderColor: scrolled ? 'rgba(74,222,128,0.15)' : 'transparent',
            borderStyle: 'solid',
          }}
        >
          {/* Dynamic Image Canvas: Controls seamless changing transitions when unscrolled */}
          <AnimatePresence mode="wait">
            {!scrolled && (
              <motion.div
                key={bgIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.18 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0 -z-10 pointer-events-none mix-blend-luminosity"
              >
                <Image
                  src={dynamicBgImages[bgIndex]}
                  alt="Dynamic Background Layer"
                  fill
                  priority
                  className="object-cover scale-105 filter blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>

          <Container>
            <div className="flex items-center justify-between py-3.5 relative z-10">
              
              {/* Logo / Brand Container */}
              <a 
                href="#home" 
                onClick={(e) => { 
                  e.preventDefault()
                  handleNavigation('#home', () => setIsOpen(false)) 
                }}
                className="flex items-center gap-3 z-50 select-none group"
              >
                <LogoMark />
                
                <span 
                  className="font-bold text-[11px] sm:text-[13px] uppercase tracking-[0.16em] sm:tracking-[0.2em] transition-colors duration-200 whitespace-nowrap text-[#e8f5ec]"
                >
                  Opuyo Mixed Demonstration Farm
                </span>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1.5">
                {navItems.map((item) => (
                  <NavLink 
                    key={item.href} 
                    item={item} 
                    isActive={pathname === '/' && active === item.href} 
                    scrolled={scrolled} 
                    onNavigate={handleNavigation}
                  />
                ))}
              </div>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 z-50 rounded-full text-[#e8f5ec] transition-colors duration-200"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </Container>
        </motion.header>
      </motion.div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[280px] bg-[#0a0f0c] border-l border-white/5 p-6 pt-24 flex flex-col gap-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(item.href, () => setIsOpen(false))
                  }}
                  className="text-sm font-bold uppercase tracking-[0.15em] py-2 border-b border-white/5 transition-colors"
                  style={{ color: pathname === '/' && active === item.href ? '#4ade80' : 'rgba(232,245,236,0.6)' }}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}