'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'
import { Card } from './Card'
import { ContactForm } from './ContactForm'
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock 
} from 'lucide-react'

export const Contact: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/256700000000" 
  const TIKTOK_LINK = "https://www.tiktok.com/@opuyomixedfarm"
  const YOUTUBE_LINK = "https://youtube.com/@opuyomixedfarm"
  const INSTAGRAM_LINK = "https://instagram.com/opuyomixedfarm"
  const FACEBOOK_LINK = "https://facebook.com/opuyomixedfarm"
  const LINKEDIN_OPENINGS_LINK = "https://linkedin.com/company/opuyo-mixed-farm/jobs"

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
          className="font-mono text-xs text-[#2d5c3e] hover:text-[#d97706] transition-colors break-all"
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
          <a href="tel:+256700000000" className="block text-xs font-bold text-[#2d5c3e] hover:text-[#d97706] hover:underline transition-colors">
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
          <p className="text-[11px] text-[#d97706] font-medium">Sunday: Private Bookings Only</p>
        </div>
      ),
    },
  ]

  return (
    <section id="contact" className="relative bg-[#f7f5f0] py-24 md:py-32 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d97706] mb-4">
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {contactInfo.map((info) => (
                <Card 
                  key={info.title} 
                  className="flex gap-4 p-5 rounded-2xl border border-[#3d7a52]/10 bg-[#e6e2d8]/40 backdrop-blur-sm shadow-sm hover:border-[#f59e0b]/40 transition-all duration-300"
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

            {/* Socials Matrix Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <Card className="p-5 rounded-2xl border border-[#f59e0b]/20 bg-white shadow-sm hover:border-[#f59e0b]/50 transition-all duration-300">
                <h3 className="text-xs font-mono font-black uppercase tracking-wider text-[#0d2210] mb-3">
                  Digital Media & Openings
                </h3>
                <p className="text-[11px] text-[#0d2210]/60 mb-4 leading-relaxed">
                  Follow our media handle loops or apply for open training roles.
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-xl bg-[#f7f5f0] border border-[#0d2210]/5 text-xs text-[#0d2210]/80 font-medium hover:bg-[#25D366]/10 hover:text-[#25D366] transition-all duration-200">
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    <span>WhatsApp</span>
                  </a>
                  <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-xl bg-[#f7f5f0] border border-[#0d2210]/5 text-xs text-[#0d2210]/80 font-medium hover:bg-[#1877F2]/10 hover:text-[#1877F2] transition-all duration-200">
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <span>Facebook</span>
                  </a>
                  <a href={TIKTOK_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-xl bg-[#f7f5f0] border border-[#0d2210]/5 text-xs text-[#0d2210]/80 font-medium hover:bg-[#fe2c55]/10 hover:text-[#fe2c55] transition-all duration-200">
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.05 1.56 4.25 1.12 1.23 2.61 2.01 4.21 2.23v3.91c-1.8-.16-3.52-.94-4.82-2.2-.1-.09-.16-.16-.24-.26v6.92c.02 5.37-4.13 9.47-9.45 9.47A9.23 9.23 0 01.31 14.9c-.1-5.56 4.41-9.71 9.8-9.45v3.94c-2.7-.17-5.07 1.83-5.26 4.5-.23 3.19 2.45 5.56 5.59 5.25 2.53-.25 4.34-2.58 4.21-5.11v-14c.01-.01.01-.01.01-.02z"/></svg>
                    <span>TikTok</span>
                  </a>
                  <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-xl bg-[#f7f5f0] border border-[#0d2210]/5 text-xs text-[#0d2210]/80 font-medium hover:bg-[#FF0000]/10 hover:text-[#FF0000] transition-all duration-200">
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 3.88 12 3.88 12 3.88s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    <span>YouTube</span>
                  </a>
                  <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-xl bg-[#f7f5f0] border border-[#0d2210]/5 text-xs text-[#0d2210]/80 font-medium hover:bg-[#E1306C]/10 hover:text-[#E1306C] transition-all duration-200">
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <span>Instagram</span>
                  </a>
                  <a href={LINKEDIN_OPENINGS_LINK} target="_blank" rel="noopener noreferrer" className="col-span-2 flex items-center justify-center gap-2 p-2 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-xs text-[#d97706] font-bold hover:bg-[#0077B5] hover:text-white hover:border-transparent transition-all duration-200">
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span>View LinkedIn Openings</span>
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Side: Form Container */}
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
              
              {/* Updated Access Key Block */}
              <ContactForm apiKey="6351ad97-4368-4cbf-a8c3-eae48f44664d" />
            </Card>
          </motion.div>
        </div>

        {/* Lower Map Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 rounded-2xl overflow-hidden border border-[#3d7a52]/15 shadow-inner bg-[#e6e2d8]/40 h-96 relative group"
        >
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