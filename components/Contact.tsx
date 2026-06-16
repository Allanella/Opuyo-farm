'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'
import { Card } from './Card'
import { ContactForm } from './ContactForm'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: (
        <div className="space-y-0.5 text-[#0d2210]/70">
          <p className="font-bold text-[#0d2210]">Opuyo Ward, Soroti City</p>
          <p>Eastern Uganda</p>
          <p className="text-[11px] italic mt-1 text-[#3d7a52]">5 km off Kampala–Mbale Highway</p>
        </div>
      ),
    },
    {
      icon: Mail,
      title: 'Email Communications',
      content: (
        <a
          href="mailto:opuyodemofarm@gmail.com"
          className="font-mono text-xs text-[#2d5c3e] hover:text-[#3d7a52] transition-colors break-all"
        >
          opuyodemofarm@gmail.com
        </a>
      ),
    },
    {
      icon: Phone,
      title: 'Phone Bookings',
      content: (
        <div className="space-y-1">
          <a href="tel:+256700000000" className="block text-xs font-bold text-[#2d5c3e] hover:underline">
            +256 (0) 700 000000
          </a>
          <p className="text-[11px] text-[#0d2210]/50">Call or WhatsApp for field bookings</p>
        </div>
      ),
    },
    {
      icon: Clock,
      title: 'Gate Hours',
      content: (
        <div className="space-y-1 text-xs text-[#0d2210]/70">
          <p><span className="font-semibold text-[#0d2210]">Mon - Fri:</span> 8:00 AM - 5:00 PM</p>
          <p><span className="font-semibold text-[#0d2210]">Saturday:</span> 9:00 AM - 1:00 PM</p>
          <p className="text-[11px] text-[#b8721a] font-medium">Sunday: Private Bookings Only</p>
        </div>
      ),
    },
  ]

  return (
    <section id="contact" className="relative bg-[#f7f5f0] py-24 md:py-32 overflow-hidden">
      
      {/* Decorative Top Separator Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3d7a52]/10 to-transparent" />

      <Container>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3d7a52]/20 bg-[#3d7a52]/8 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2d5c3e] mb-4">
            📬 Consultation Hub
          </div>
          <h2 className="text-balance text-4xl font-black text-[#0d2210] tracking-tight md:text-5xl leading-none">
            Connect With Our Team
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-[#0d2210]/70">
            Have structural inquiries regarding multi-enterprise designs, upcoming seasonal training intake schedules, or private group field reservations? Reach out below.
          </p>
        </motion.div>

        {/* Core Section Grid */}
        <div className="grid gap-8 lg:grid-cols-3 items-start">
          
          {/* Left Side: Information Cards Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:col-span-1"
          >
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title} 
                className="flex gap-4 p-5 rounded-2xl border border-[#3d7a52]/10 bg-[#e6e2d8]/40 backdrop-blur-sm shadow-sm hover:border-[#3d7a52]/30 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3d7a52]/10 border border-[#3d7a52]/20 text-[#2d5c3e]">
                    <info.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-mono font-black uppercase tracking-wider text-[#0d2210]">
                    {info.title}
                  </h3>
                  <div className="text-xs leading-relaxed">{info.content}</div>
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Right Side: High End Form Component Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 md:p-8 rounded-2xl border border-[#3d7a52]/10 bg-[#e6e2d8]/20 backdrop-blur-sm shadow-sm">
              <h3 className="mb-1 text-xl font-bold text-[#0d2210] tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs text-[#0d2210]/60 mb-6">
                Fill out the secure communication routing file below. Our management replies within 24 hours.
              </p>
              <ContactForm />
            </Card>
          </motion.div>
        </div>

        {/* Lower Map Block Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 rounded-2xl overflow-hidden border border-[#3d7a52]/15 shadow-inner bg-[#e6e2d8]/40 h-96 relative group"
        >
          {/* Muted design overlay filter tint */}
          <div className="absolute inset-0 bg-[#3d7a52]/5 pointer-events-none mix-blend-color z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
          
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Soroti%20City%20Uganda&t=&z=13&ie=UTF8&iwloc=B&output=embed"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Opuyo Mixed Demonstration Farm Location"
            className="w-full h-full relative z-0"
          />
        </motion.div>
      </Container>
    </section>
  )
}