'use client'

import React from 'react'

interface SkeletonProps {
  width?: string
  height?: string
  circle?: boolean
  count?: number
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = 'w-full',
  height = 'h-4',
  circle = false,
  count = 1,
  className = '',
}) => {
  const skeletons = Array.from({ length: count })

  return (
    <>
      {skeletons.map((_, i) => (
        <div
          key={i}
          className={`
            skeleton
            ${width}
            ${height}
            ${circle ? 'rounded-full' : 'rounded-lg'}
            ${i < skeletons.length - 1 ? 'mb-4' : ''}
            ${className}
          `}
        />
      ))}
    </>
  )
}
