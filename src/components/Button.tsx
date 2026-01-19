'use client'

import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, className = '', ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-asdsc-navy text-white hover:bg-asdsc-charcoal',
      secondary: 'bg-asdsc-gold text-asdsc-navy hover:bg-opacity-90',
      outline: 'border-2 border-asdsc-navy text-asdsc-navy hover:bg-asdsc-off-white',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? '⏳' : props.children}
      </button>
    )
  }
)

Button.displayName = 'Button'
