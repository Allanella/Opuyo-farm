'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      
      {/* Alert Banners */}
      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            className="flex items-start gap-3 rounded-xl border border-[#3d7a52]/20 bg-[#3d7a52]/5 p-4 text-[#2d5c3e]"
          >
            <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#3d7a52]" />
            <div>
              <p className="text-xs font-bold font-mono uppercase tracking-wide">Submission Received</p>
              <p className="text-xs text-[#0d2210]/70 mt-0.5">Thank you. Your inquiry has been routed to our farm management team. We will respond shortly.</p>
            </div>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50/50 p-4 text-red-800"
          >
            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-600" />
            <div>
              <p className="text-xs font-bold font-mono uppercase tracking-wide">Routing Failure</p>
              <p className="text-xs text-red-700/80 mt-0.5">Something went wrong while dispatching the message. Please verify your connection or try again directly via email.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="block text-[11px] font-mono font-black uppercase tracking-wider text-[#0d2210]/60">
            Full Name <span className="text-[#b8721a]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#3d7a52]/15 bg-white/60 px-4 py-3 text-xs text-[#0d2210] placeholder-[#0d2210]/30 backdrop-blur-sm transition-all focus:border-[#3d7a52] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3d7a52]/10"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-[11px] font-mono font-black uppercase tracking-wider text-[#0d2210]/60">
            Email Address <span className="text-[#b8721a]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full rounded-xl border border-[#3d7a52]/15 bg-white/60 px-4 py-3 text-xs text-[#0d2210] placeholder-[#0d2210]/30 backdrop-blur-sm transition-all focus:border-[#3d7a52] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3d7a52]/10"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-[11px] font-mono font-black uppercase tracking-wider text-[#0d2210]/60">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+256 700 000000"
          className="w-full rounded-xl border border-[#3d7a52]/15 bg-white/60 px-4 py-3 text-xs text-[#0d2210] placeholder-[#0d2210]/30 backdrop-blur-sm transition-all focus:border-[#3d7a52] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3d7a52]/10"
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-[11px] font-mono font-black uppercase tracking-wider text-[#0d2210]/60">
          Your Message <span className="text-[#b8721a]">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          placeholder="Describe your training needs, enterprise interests, or visitor numbers..."
          className="w-full rounded-xl border border-[#3d7a52]/15 bg-white/60 px-4 py-3 text-xs text-[#0d2210] placeholder-[#0d2210]/30 backdrop-blur-sm transition-all focus:border-[#3d7a52] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3d7a52]/10 resize-none"
        />
      </div>

      {/* Submit Button Action */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={isLoading}
          className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3d7a52] to-[#2d5c3e] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f0e9d8] shadow-md transition-all duration-300 hover:from-[#499463] hover:to-[#38734e] hover:shadow-[#3d7a52]/10 disabled:opacity-50 disabled:pointer-events-none"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-[#f0e9d8]" />
              <span>Routing Message...</span>
            </>
          ) : (
            <>
              <span>Send Secure Message</span>
              <Send className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </Button>
      </div>

    </form>
  )
}