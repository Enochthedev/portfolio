"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Cloud {
  id: number
  top: string
  left: string
  width: string
  height: string
  color: string
  duration: number
  delay: number
  direction: number
}

/**
 * FloatingClouds component for animated cloud backgrounds
 */
export function FloatingClouds() {
  const [clouds, setClouds] = useState<Cloud[]>([])

  useEffect(() => {
    // Generate clouds only on client-side to avoid hydration mismatch
    const cloudColors = ["bg-purple-400", "bg-purple-300", "bg-pink-300", "bg-indigo-300"]
    const newClouds = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      width: `${Math.random() * 20 + 10}rem`,
      height: `${Math.random() * 10 + 5}rem`,
      color: cloudColors[Math.floor(Math.random() * cloudColors.length)],
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
      direction: Math.random() > 0.5 ? 1 : -1,
    }))
    setClouds(newClouds)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className={`absolute rounded-full blur-md ${cloud.color}`}
          style={{
            top: cloud.top,
            left: cloud.left,
            width: cloud.width,
            height: cloud.height,
          }}
          animate={{
            y: [0, cloud.direction * 20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: cloud.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
