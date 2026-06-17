'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface ContactFormProps {
  apiKey: string
}

export const ContactForm: React.FC<ContactFormProps> = ({ apiKey }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Direct pipeline submission straight to the Web3Forms servers
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          from_name: 'Opuyo Mixed Farm Portal'
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        console.error('Web3Forms System Error Payload:', result)
        setStatus('error')
      }
    } catch (error) {
      console.error('Form External Network Error:', error)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input 
          type="text" 
          name="name" 
          required 
          placeholder="Your Name" 
          className="w-full p-3 rounded-xl border border-[#3d7a52]/20 bg-white text-xs text-[#0d2210] outline-none focus:border-[#f59e0b]/50"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="Your Email Address" 
            className="w-full p-3 rounded-xl border border-[#3d7a52]/20 bg-white text-xs text-[#0d2210] outline-none focus:border-[#f59e0b]/50"
          />
        </div>
        <div>
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number (Optional)" 
            className="w-full p-3 rounded-xl border border-[#3d7a52]/20 bg-white text-xs text-[#0d2210] outline-none focus:border-[#f59e0b]/50"
          />
        </div>
      </div>
      <div>
        <textarea 
          name="message" 
          required 
          rows={4} 
          placeholder="Your Message..." 
          className="w-full p-3 rounded-xl border border-[#3d7a52]/20 bg-white text-xs text-[#0d2210] outline-none focus:border-[#f59e0b]/50 resize-none"
        />
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full py-3 bg-[#2d5c3e] text-white text-xs font-bold rounded-xl hover:bg-[#3d7a52] disabled:bg-gray-400 transition-colors shadow-sm"
      >
        {status === 'loading' ? 'Sending Message Securely...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 text-xs text-green-800 bg-green-100/80 rounded-xl border border-green-200">
          Message sent successfully! Our management will reply within 24 hours.
        </motion.div>
      )}
      {status === 'error' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 text-xs text-red-800 bg-red-100/80 rounded-xl border border-red-200">
          Submission failed. Please check your network connection or active access key variables.
        </motion.div>
      )}
    </form>
  )
}