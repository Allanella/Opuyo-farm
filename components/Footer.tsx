'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'
import { Mail, Leaf, Share2, Globe, ArrowUpRight, Phone } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

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

  const social = [
    { icon: Mail, href: 'mailto:opuyodemofarm@gmail.com', label: 'Email Support' },
    { icon: Share2, href: '#', label: 'Share Platform' },
    { icon: Globe, href: '#', label: 'Official Domain' },
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
                {/* Updated brand header identity alignment */}
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
          <div className="flex items-center gap-2.5">
            {social.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-[#0a120b] text-white/40 transition-all duration-200 hover:border-[#3d7a52]/40 hover:text-[#72c492]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={item.label}
              >
                <item.icon className="h-4 w-4" />
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