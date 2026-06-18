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
  const WHATSAPP_NUMBER = "256772985505"
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20Opuyo%20Mixed%20Demonstration%20Farm.`
  const TIKTOK_LINK = "https://www.tiktok.com/@opuyodemofarmgmail.com"
  const YOUTUBE_LINK = "https://youtube.com/@opuyomixeddemofarmsoroticity?si=fbOFOttoLhoqAwgH"
  const INSTAGRAM_LINK = "https://instagram.com/opuyomixedfarm"
  const FACEBOOK_LINK = "https://www.facebook.com/profile.php?id=61590793118490"
  const LINKEDIN_OPENINGS_LINK = "https://linkedin.com/company/opuyo-mixed-farm/jobs"

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: (
        <div className="space-y-0.5 text-[#0d2210]/70">
          <p className="font-bold text-[#0d2210]">Opuyo Ward, Soroti City</p>
          <p>Eastern Uganda</p>
          <p className="text-[11px] italic mt-1 text-[#1db87a]">5 km off Kampala–Mbale Highway</p>
        </div>
      ),
    },
    {
      icon: Mail,
      title: 'Email Communications',
      content: (
        <a
          href="mailto:opuyodemofarm@gmail.com"
          className="font-mono text-xs text-[#1db87a] hover:text-[#3a9b5c] transition-colors break-all"
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
          <a href="tel:+256772985505" className="block text-xs font-bold text-[#1db87a] hover:text-[#3a9b5c] hover:underline transition-colors">
            +256 772 985 505
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
          <p className="text-[11px] text-[#1db87a] font-medium">Sunday: Private Bookings Only</p>
        </div>
      ),
    },
  ]

  return (
    <section id="contact" className="relative bg-[#f4faf6] py-24 md:py-32 overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1db87a]/20 to-transparent" />

      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(29,184,122,0.05) 0%, transparent 70%)',
        }}
      />

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-4"
            style={{
              background: 'rgba(29,184,122,0.1)',
              border: '1px solid rgba(29,184,122,0.25)',
              color: '#1db87a',
            }}
          >
            📬 Consultation Hub
          </div>
          <h2 className="text-balance text-4xl font-black text-[#0a2e18] tracking-tight md:text-5xl leading-none">
            Connect With Our Team
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-[#0a2e18]/60">
            Have structural inquiries regarding multi-enterprise designs, upcoming seasonal training intake schedules, or private group field reservations? Reach out below.
          </p>
        </motion.div>

        {/* ── WhatsApp Banner ── */}
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="relative flex items-center justify-between gap-4 rounded-2xl px-6 py-5 mb-10 overflow-hidden group cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #1db87a 0%, #3a9b5c 100%)',
            boxShadow: '0 8px 32px rgba(29,184,122,0.35)',
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none" />

          {/* Decorative circles */}
          <div className="absolute right-0 top-0 w-48 h-48 rounded-full opacity-10 -translate-y-1/2 translate-x-1/4"
            style={{ background: 'white' }} />
          <div className="absolute right-16 bottom-0 w-24 h-24 rounded-full opacity-10 translate-y-1/3"
            style={{ background: 'white' }} />

          <div className="flex items-center gap-4 relative z-10">
            {/* WhatsApp icon */}
            <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
              <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-black text-[15px] leading-tight">Chat on WhatsApp</p>
              <p className="text-white/80 text-[12px] font-medium mt-0.5">+256 772 985 505 · Instant reply during farm hours</p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 relative z-10 bg-white/20 rounded-xl px-4 py-2 flex-shrink-0">
            <span className="text-white font-bold text-[12px] uppercase tracking-wide">Open Chat</span>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </motion.a>

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
                  className="flex gap-4 p-5 rounded-2xl border bg-white/70 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ borderColor: 'rgba(29,184,122,0.15)' }}
                >
                  <div className="flex-shrink-0">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        background: 'rgba(29,184,122,0.1)',
                        border: '1px solid rgba(29,184,122,0.2)',
                        color: '#1db87a',
                      }}
                    >
                      <info.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-mono font-black uppercase tracking-wider text-[#0a2e18]">
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
              <Card
                className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm transition-all duration-300"
                style={{ border: '1px solid rgba(29,184,122,0.15)' }}
              >
                <h3 className="text-xs font-mono font-black uppercase tracking-wider text-[#0a2e18] mb-3">
                  Digital Media &amp; Openings
                </h3>
                <p className="text-[11px] text-[#0a2e18]/55 mb-4 leading-relaxed">
                  Follow our media handles or apply for open training roles.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {/* WhatsApp */}
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-xl text-xs font-medium transition-all duration-200"
                    style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)', color: '#128C7E' }}
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href={FACEBOOK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-xl text-xs font-medium transition-all duration-200 hover:bg-[#1877F2]/10 hover:text-[#1877F2]"
                    style={{ background: '#f4faf6', border: '1px solid rgba(29,184,122,0.1)', color: 'rgba(10,46,24,0.7)' }}
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <span>Facebook</span>
                  </a>

                  {/* TikTok */}
                  <a
                    href={TIKTOK_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-xl text-xs font-medium transition-all duration-200 hover:bg-[#fe2c55]/10 hover:text-[#fe2c55]"
                    style={{ background: '#f4faf6', border: '1px solid rgba(29,184,122,0.1)', color: 'rgba(10,46,24,0.7)' }}
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.05 1.56 4.25 1.12 1.23 2.61 2.01 4.21 2.23v3.91c-1.8-.16-3.52-.94-4.82-2.2-.1-.09-.16-.16-.24-.26v6.92c.02 5.37-4.13 9.47-9.45 9.47A9.23 9.23 0 01.31 14.9c-.1-5.56 4.41-9.71 9.8-9.45v3.94c-2.7-.17-5.07 1.83-5.26 4.5-.23 3.19 2.45 5.56 5.59 5.25 2.53-.25 4.34-2.58 4.21-5.11v-14c.01-.01.01-.01.01-.02z"/></svg>
                    <span>TikTok</span>
                  </a>

                  {/* YouTube */}
                  <a
                    href={YOUTUBE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-xl text-xs font-medium transition-all duration-200 hover:bg-[#FF0000]/10 hover:text-[#FF0000]"
                    style={{ background: '#f4faf6', border: '1px solid rgba(29,184,122,0.1)', color: 'rgba(10,46,24,0.7)' }}
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 3.88 12 3.88 12 3.88s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    <span>YouTube</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-xl text-xs font-medium transition-all duration-200 hover:bg-[#E1306C]/10 hover:text-[#E1306C]"
                    style={{ background: '#f4faf6', border: '1px solid rgba(29,184,122,0.1)', color: 'rgba(10,46,24,0.7)' }}
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <span>Instagram</span>
                  </a>

                  {/* LinkedIn — full width */}
                  <a
                    href={LINKEDIN_OPENINGS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-2 flex items-center justify-center gap-2 p-2 rounded-xl text-xs font-bold transition-all duration-200 hover:bg-[#0077B5] hover:text-white"
                    style={{
                      background: 'rgba(29,184,122,0.08)',
                      border: '1px solid rgba(29,184,122,0.25)',
                      color: '#1db87a',
                    }}
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <span>View LinkedIn Openings</span>
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card
              className="p-6 md:p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm"
              style={{ border: '1px solid rgba(29,184,122,0.15)' }}
            >
              <h3 className="mb-1 text-xl font-bold text-[#0a2e18] tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs text-[#0a2e18]/55 mb-6">
                Fill out the form below. Our management replies within 24 hours.
              </p>
              <ContactForm apiKey="504155a1-025e-4a96-80dd-0e7c4ff66ce9" />
            </Card>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 rounded-2xl overflow-hidden h-96 relative group"
          style={{ border: '1px solid rgba(29,184,122,0.18)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none mix-blend-color z-10 opacity-40 group-hover:opacity-10 transition-opacity duration-500"
            style={{ background: 'rgba(29,184,122,0.08)' }}
          />
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

        {/* Floating WhatsApp bubble — always visible */}
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 15 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            boxShadow: '0 8px 32px rgba(37,211,102,0.5)',
          }}
          aria-label="Chat on WhatsApp"
        >
          {/* Ping ring */}
          <span className="absolute w-full h-full rounded-full animate-ping opacity-30 bg-[#25D366]" />
          <svg className="w-7 h-7 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.a>

      </Container>
    </section>
  )
}