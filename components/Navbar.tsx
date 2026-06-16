'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from './Container'
import { Menu, X, Sprout } from 'lucide-react'

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

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scrolling to morph layout structure smoothly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth operational scroll offset calculator
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    const element = document.querySelector(href)
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 90
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'p-0' 
            : 'p-4 md:p-6 select-none pointer-events-none'
        }`}
      >
        <header
          className={`mx-auto w-full transition-all duration-500 pointer-events-auto ${
            scrolled
              ? 'bg-[#f7f5f0]/90 backdrop-blur-md border-b border-[#3d7a52]/10 shadow-sm py-4'
              : 'bg-[#f7f5f0]/60 backdrop-blur-md max-w-6xl rounded-2xl border border-[#3d7a52]/15 shadow-md py-4 px-4 md:px-6'
          }`}
        >
          <Container className={scrolled ? '' : 'max-w-none px-0'}>
            <nav className="flex items-center justify-between">
              {/* Brand Logo Identity */}
              <a 
                href="#home" 
                onClick={(e) => handleScrollToSection(e, '#home')}
                className="flex items-center gap-2 group z-50"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3d7a52]/10 border border-[#3d7a52]/20 text-[#2d5c3e] group-hover:bg-[#3d7a52] group-hover:text-[#f7f5f0] transition-all duration-300">
                  <Sprout className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-black uppercase tracking-wider text-[#0d2210]">
                    Opuyo Farm
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#3d7a52] -mt-0.5">
                    Demo & Training
                  </span>
                </div>
              </a>

              {/* Desktop Navigation Link Cluster */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="relative px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0d2210]/70 hover:text-[#2d5c3e] transition-colors rounded-lg group"
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#3d7a52] transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />
                  </a>
                ))}
                
                <a
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, '#contact')}
                  className="ml-4 inline-flex items-center justify-center rounded-xl bg-[#2d5c3e] px-4 py-2.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#f7f5f0] shadow-sm hover:bg-[#3d7a52] transition-colors"
                >
                  Book Visit
                </a>
              </div>

              {/* Mobile Interface Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#3d7a52]/15 bg-white/60 text-[#0d2210] md:hidden z-50 hover:bg-white/90 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </nav>
          </Container>
        </header>
      </div>

      {/* Fullscreen Mobile Drawer Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#f7f5f0] pt-28 px-6 md:hidden flex flex-col justify-between pb-12"
          >
            {/* Background Structural Accent Decor */}
            <div className="absolute inset-0 bg-[radial-gradient(#3d7a52_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

            <div className="flex flex-col gap-3 relative z-10">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="block text-2xl font-black text-[#0d2210] tracking-tight hover:text-[#3d7a52] transition-colors border-b border-[#3d7a52]/5 pb-2"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer Callout Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative z-10 space-y-4"
            >
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, '#contact')}
                className="w-full text-center inline-flex items-center justify-center rounded-xl bg-[#2d5c3e] py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-[#f7f5f0] shadow-md"
              >
                Schedule Field Booking
              </a>
              <p className="text-[11px] text-center text-[#0d2210]/50 font-mono">
                📍 Opuyo Ward, Soroti City, Eastern Uganda
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}