'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface StatCardProps {
  value: string
  label: string
  suffix?: string
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    const numericValue = parseInt(value.replace(/\D/g, ''), 10)
    if (isNaN(numericValue)) {
      setDisplayValue(value)
      return
    }

    let currentValue = 0
    const increment = Math.max(1, Math.floor(numericValue / 30))
    const interval = setInterval(() => {
      currentValue += increment
      if (currentValue >= numericValue) {
        currentValue = numericValue
        clearInterval(interval)
      }
      setDisplayValue(currentValue.toString())
    }, 30)

    return () => clearInterval(interval)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-primary">{displayValue}</div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}
