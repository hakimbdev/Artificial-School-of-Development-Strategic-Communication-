'use client'

import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
  hoverable?: boolean
}

export const Card: React.FC<CardProps> = ({ className = '', children, hoverable = true }) => {
  return (
    <div
      className={`
        bg-white rounded-xl p-6 shadow-md border border-asdsc-gray
        ${hoverable ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`mb-4 pb-4 border-b border-asdsc-gray ${className}`}>
    {children}
  </div>
)

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`${className}`}>{children}</div>

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`mt-4 pt-4 border-t border-asdsc-gray ${className}`}>
    {children}
  </div>
)
