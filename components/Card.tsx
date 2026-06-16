import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  )
}
