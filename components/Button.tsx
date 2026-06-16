import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      href,
      onClick,
      children,
      variant = 'primary',
      size = 'md',
      className = '',
      disabled = false,
      type = 'button',
    },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer'
    const variantStyles = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg',
      outline: 'border-2 border-primary text-primary hover:bg-primary/10',
    }

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

    if (href) {
      return (
        <motion.a
          href={href}
          className={styles}
          whileHover={{ scale: disabled ? 1 : 1.05 }}
          whileTap={{ scale: disabled ? 1 : 0.95 }}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={styles}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {children}
      </motion.button>
    )
  },
)

Button.displayName = 'Button'
