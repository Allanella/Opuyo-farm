'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Image {
  src: string
  alt: string
}

interface LightboxProps {
  images: Image[]
  children: (onClick: (index: number) => void) => React.ReactNode
}

export const Lightbox: React.FC<LightboxProps> = ({ images, children }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <>
      {children((index) => setSelectedIndex(index))}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl"
            style={{ backgroundColor: 'rgba(5, 20, 11, 0.85)' }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* ─── NEW LIGHT LAYER TRANSITIONS FOR LIGHTBOX BACKGROUND ─── */}
            {/* Pulsing ambient center glow core behind the image layout */}
            <motion.div
              animate={{ opacity: [0.25, 0.45, 0.25], scale: [0.95, 1.08, 0.95] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] rounded-full pointer-events-none mix-blend-screen"
              style={{
                background: 'radial-gradient(circle, rgba(74,222,128,0.22) 0%, rgba(29,184,122,0.05) 50%, transparent 100%)',
                filter: 'blur(90px)',
              }}
            />

            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-4xl rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              }}
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="h-full w-full max-h-[85vh] object-contain bg-[#05140b]/30"
              />

              {/* Top Glass Header Overlay for Description and Close Button */}
              <div className="absolute inset-x-0 top-0 p-4 flex items-center justify-between bg-gradient-to-b from-[#05140b]/80 to-transparent pointer-events-none">
                <p className="text-xs font-semibold tracking-wider text-white/60 uppercase px-2">
                  {images[selectedIndex].alt || `Gallery Image ${selectedIndex + 1}`}
                </p>

                {/* Close Button UI Control */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedIndex(null)}
                  className="pointer-events-auto rounded-xl border p-2.5 text-white/80 backdrop-blur-md transition-all duration-200"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.4)'
                    e.currentTarget.style.color = '#4ade80'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Navigation Action Buttons Layer */}
              {images.length > 1 && (
                <>
                  {/* Left Control Arrow */}
                  <motion.button
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-xl border p-3 text-white/80 backdrop-blur-md transition-all duration-200"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.4)'
                      e.currentTarget.style.color = '#4ade80'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    <ChevronLeft size={20} />
                  </motion.button>

                  {/* Right Control Arrow */}
                  <motion.button
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-xl border p-3 text-white/80 backdrop-blur-md transition-all duration-200"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.4)'
                      e.currentTarget.style.color = '#4ade80'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    <ChevronRight size={20} />
                  </motion.button>

                  {/* Visual Image Pagination Progress Bar Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5 bg-black/20 text-[10px] font-bold tracking-widest text-white/40 uppercase">
                    <span className="text-[#4ade80]">{selectedIndex + 1}</span> / {images.length}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}