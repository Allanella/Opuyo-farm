'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'
import { Mail, Leaf, ArrowUpRight, Phone } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  // ─── SOCIALS LINKS DEFINITIONS ───
  const WHATSAPP_LINK = "https://wa.me/256700000000" 
  const TIKTOK_LINK = "https://www.tiktok.com/@opuyomixedfarm"
  const YOUTUBE_LINK = "https://youtube.com/@opuyomixedfarm"
  const INSTAGRAM_LINK = "https://instagram.com/opuyomixedfarm"
  const FACEBOOK_LINK = "https://facebook.com/opuyomixedfarm"
  const LINKEDIN_OPENINGS_LINK = "https://linkedin.com/company/opuyo-mixed-farm/jobs"

  const links = [
    {
      title: 'Quick Links',
      items: [
        { label: 'Home', href: '#' },
        { label: 'About Us', href: '#about' },
        { label: 'Enterprises', href: '#enterprises' },
        { label: 'Field Gallery', href: '#gallery' },
        { label: 'Contact Hub', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      items: [
        { label: 'Farm Training', href: '#contact' },
        { label: 'Demonstrations', href: '#enterprises' },
        { label: 'Consultations', href: '#contact' },
        { label: 'Farm Visits', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { label: 'Success Stories', href: '#testimonials' },
        { label: 'Training Programs', href: '#training' },
        { label: 'Farmer Guide', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
  ]

  // Swapped out volatile icon package properties for structured custom rendering
  const socialMediaMatrix = [
    {
      label: 'Email Support',
      href: 'mailto:opuyodemofarm@gmail.com',
      icon: (
        <Mail className="h-4 w-4" />
      )
    },
    {
      label: 'WhatsApp Chat',
      href: WHATSAPP_LINK,
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    },
    {
      label: 'Facebook',
      href: FACEBOOK_LINK,
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      label: 'TikTok',
      href: TIKTOK_LINK,
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.05 1.56 4.25 1.12 1.23 2.61 2.01 4.21 2.23v3.91c-1.8-.16-3.52-.94-4.82-2.2-.1-.09-.16-.16-.24-.26v6.92c.02 5.37-4.13 9.47-9.45 9.47A9.23 9.23 0 01.31 14.9c-.1-5.56 4.41-9.71 9.8-9.45v3.94c-2.7-.17-5.07 1.83-5.26 4.5-.23 3.19 2.45 5.56 5.59 5.25 2.53-.25 4.34-2.58 4.21-5.11v-14c.01-.01.01-.01.01-.02z"/>
        </svg>
      )
    },
    {
      label: 'YouTube',
      href: YOUTUBE_LINK,
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 3.88 12 3.88 12 3.88s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    },
    {
      label: 'Instagram',
      href: INSTAGRAM_LINK,
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      label: 'LinkedIn Jobs',
      href: LINKEDIN_OPENINGS_LINK,
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    }
  ]

  return (
    <footer className="relative border-t border-white/[0.04] bg-[#040904] overflow-hidden">
      
      {/* Decorative localized organic radial light glow */}
      <div 
        className="absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full pointer-events-none opacity-5 filter blur-[100px]"
        style={{ background: 'radial-gradient(circle, #3d7a52 0%, transparent 70%)' }}
      />

      <Container className="py-16 md:py-20 relative z-10">
        <div className="grid gap-12 md:grid-cols-6 lg:gap-16">
          
          {/* Brand & Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 lg:col-span-3 flex flex-col justify-between"
          >
            <div>
              <div className="mb-5 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3d7a52]/10 border border-[#3d7a52]/30">
                  <Leaf className="h-4 w-4 text-[#72c492]" />
                </div>
                <h3 className="text-xl font-black text-[#f0e9d8] tracking-tight">
                  Opuyo Mixed Demonstration Farm
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-white/50 max-w-sm">
                Transforming smallholder assets into high-yielding commercial models through active field operations, biosecurity integration, and practical modular training systems.
              </p>
            </div>
            
            <div className="mt-6 border-l-2 border-[#b8721a]/60 pl-3.5">
              <p className="text-[11px] font-mono font-bold tracking-wide text-[#d4913a]/90 uppercase">
                "See it, learn it, earn from it — on 1 acre."
              </p>
            </div>
          </motion.div>

          {/* Nav Links Grid */}
          {links.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.05 }}
              className="md:col-span-1"
            >
              <h4 className="text-[11px] font-mono font-black tracking-widest text-[#f0e9d8] uppercase">
                {section.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-1 text-xs text-white/40 transition-all duration-200 hover:text-[#72c492] hover:translate-x-1"
                    >
                      {item.label}
                      <ArrowUpRight className="h-2.5 w-2.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Horizontal separation line */}
        <div className="my-12 border-t border-white/[0.04]" />

        {/* Lower Metadata Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Legal / Location Metadata */}
          <div className="space-y-1">
            <p className="text-[11px] text-white/40 tracking-tight">
              © {currentYear} Opuyo Mixed Demonstration Farm. All rights reserved.
            </p>
            <p className="text-[10px] text-white/20 font-mono">
              Soroti City, Eastern Uganda East Africa
            </p>
          </div>

          {/* Core Interactive Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {socialMediaMatrix.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-[#0a120b] text-white/40 transition-all duration-200 hover:border-[#3d7a52]/40 hover:text-[#72c492]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Structural Credits Section with Integrated Contacts */}
        <div className="mt-8 border-t border-white/[0.02] pt-4 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center text-[9px] font-mono text-white/20">
          <p>Production Environment Node v20.x</p>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 bg-white/[0.01] border border-white/[0.03] px-3 py-1.5 rounded-lg sm:bg-transparent sm:border-none sm:p-0">
            <span className="hover:text-white/40 transition-colors duration-200">
              Developed by <span className="text-white/30 font-bold">Baliddawa Allan</span>
            </span>
            <span className="hidden sm:inline text-white/5">|</span>
            <div className="flex items-center gap-1.5 text-white/30">
              <Phone className="h-2.5 w-2.5 text-[#72c492]/60" />
              <a href="tel:+256700966715" className="hover:text-[#72c492] transition-colors duration-150">+256 700 966 715</a>
              <span className="text-white/10">,</span>
              <a href="tel:+256785639406" className="hover:text-[#72c492] transition-colors duration-150">+256 785 639 406</a>
            </div>
          </div>
        </div>

      </Container>
    </footer>
  )
}