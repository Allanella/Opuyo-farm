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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl"
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="h-full w-full rounded-lg object-contain"
              />
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 rounded-lg bg-black/50 p-2 text-white hover:bg-black/70"
              >
                <X size={24} />
              </button>
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-lg bg-black/50 p-2 text-white hover:bg-black/70"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-black/50 p-2 text-white hover:bg-black/70"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
