"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type PersonaProps = {
  emotion?: string
  size?: "tiny" | "small" | "medium" | "large"
  animate?: boolean
  className?: string
}

export default function Persona({
  emotion = "default",
  size = "medium",
  animate = true,
  className = "",
}: PersonaProps) {
  // Map emotions to different persona images (for now we'll use the same image)
  const emotionMap: Record<string, string> = {
    default: "/images/wave-character.png",
    home: "/images/wave-character.png",
    about: "/images/about.png",
    content: "/images/content.png",
    portfolio: "/images/portfolio.png",
    web3: "/images/nft.png",
    nft: "/images/nft.png",
    community: "/images/wave-character.png",
    excited: "/images/wave-character.png",
    confused: "/images/wave-character.png",
    happy: "/images/wave-character.png",
    thinking: "/images/wave-character.png",
    pointing: "/images/wave-character.png",
  }

  // Map sizes to dimensions
  const sizeMap: Record<string, { width: number; height: number }> = {
    tiny: { width: 30, height: 30 },
    small: { width: 50, height: 50 },
    medium: { width: 100, height: 100 },
    large: { width: 200, height: 200 },
  }

  const { width, height } = sizeMap[size]
  const imageSrc = emotionMap[emotion] || emotionMap.default

  // Animation variants
  const variants = {
    idle: {
      y: [0, -5, 0],
      rotate: [-2, 2, -2],
      transition: {
        y: { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" },
        rotate: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
      },
    },
    static: { y: 0, rotate: 0 },
  }

  return (
    <motion.div className={`relative ${className}`} variants={variants} animate={animate ? "idle" : "static"}>
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={`Persona with ${emotion} emotion`}
        width={width}
        height={height}
        loading="lazy"
        className="drop-shadow-md"
      />
    </motion.div>
  )
}

