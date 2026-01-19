'use client'

import React, { useEffect, useState } from 'react'

interface ProgressBarProps {
  progress: number
  animated?: boolean
  label?: string
  showPercentage?: boolean
  color?: 'navy' | 'gold' | 'emerald'
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  animated = true,
  label,
  showPercentage = true,
  color = 'gold',
}) => {
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    if (animated) {
      const interval = setInterval(() => {
        setDisplayProgress((prev) => {
          const next = prev + Math.random() * 10
          return Math.min(next, progress)
        })
      }, 100)

      return () => clearInterval(interval)
    } else {
      setDisplayProgress(progress)
    }
  }, [progress, animated])

  const colorMap = {
    navy: 'bg-asdsc-navy',
    gold: 'bg-asdsc-gold',
    emerald: 'bg-asdsc-emerald',
  }

  return (
    <div className="w-full">
      {label && <p className="text-sm font-semibold text-asdsc-charcoal mb-2">{label}</p>}
      <div className="w-full h-2 bg-asdsc-gray rounded-full overflow-hidden">
        <div
          className={`h-full ${colorMap[color]} transition-all duration-300`}
          style={{ width: `${Math.min(displayProgress, 100)}%` }}
        />
      </div>
      {showPercentage && (
        <p className="text-xs font-semibold text-asdsc-charcoal mt-2">
          {Math.round(displayProgress)}%
        </p>
      )}
    </div>
  )
}
