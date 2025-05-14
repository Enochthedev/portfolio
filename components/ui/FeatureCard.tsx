"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Feature } from "@/types"

interface FeatureCardProps {
  feature: Feature
  index: number
  delay?: number
}

export function FeatureCard({ feature, index, delay = 0 }: FeatureCardProps) {
  const { title, description, icon, link, color, textColor } = feature

  // Text animation variants
  const titleVariants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + index * 0.1 + 0.3,
        duration: 0.4,
        type: "spring",
        stiffness: 120,
      },
    },
  }

  const descriptionVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: delay + index * 0.1 + 0.4,
        duration: 0.5,
      },
    },
  }

  const exploreVariants = {
    initial: { opacity: 0, x: -5 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay + index * 0.1 + 0.5,
        duration: 0.3,
      },
    },
    hover: {
      x: 5,
      transition: { type: "spring", stiffness: 300 },
    },
  }

  return (
    <div className="relative w-full h-full perspective">
      {/* Comic strip styling container */}
      <div className="absolute inset-0 border-4 border-black rounded-lg shadow-comic overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: "url('/images/comic-pattern.svg')",
            backgroundSize: "cover",
          }}
        />

        {/* Comic strip corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-black rounded-tl-lg z-10"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-black rounded-tr-lg z-10"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-black rounded-bl-lg z-10"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-black rounded-br-lg z-10"></div>

        {/* Halftone dots pattern for comic effect */}
        <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-20 h-20 bg-black opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-black opacity-5 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>

      {/* Card content */}
      <motion.div
        className={`${color} ${textColor} p-6 rounded-lg h-full relative z-10`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: delay + index * 0.1,
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.03,
          transition: { type: "spring", stiffness: 300 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={link} className="absolute inset-0 z-20" aria-label={title}>
          <span className="sr-only">{title}</span>
        </Link>

        <div className="flex flex-col h-full">
          <motion.div
            className="text-3xl mb-4"
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: delay + index * 0.1 + 0.2,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            {icon}
          </motion.div>

          <motion.h3
            className="text-xl md:text-2xl font-bold mb-2 comic-title"
            variants={titleVariants}
            initial="initial"
            animate="animate"
          >
            {title}
          </motion.h3>

          <motion.p
            className="opacity-80 mb-4 flex-grow comic-text-body text-sm md:text-base"
            variants={descriptionVariants}
            initial="initial"
            animate="animate"
          >
            {description}
          </motion.p>

          <motion.div
            className="flex items-center font-bold comic-action-text"
            variants={exploreVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <span>Explore</span>
            <motion.div className="ml-2">
              <ArrowRight size={16} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
