"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface StarsBackgroundProps {
  count?: number
}

interface Star {
  id: number
  top: string
  left: string
  size: number
  duration: number
  delay: number
}

/**
 * StarsBackground component for animated star backgrounds
 *
 * @param count - Number of stars to render
 */
export function StarsBackground({ count = 50 }: StarsBackgroundProps) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate stars only on client-side to avoid hydration mismatch
    const newStars = Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
    setStars(newStars)
  }, [count])

  return (
    <div className="absolute inset-0 z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  )
}
