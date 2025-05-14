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
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay + index * 0.1,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300 },
    },
  }

  const iconVariants = {
    initial: { scale: 0.8, rotate: -5 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: delay + index * 0.1 + 0.2,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 },
    },
  }

  const arrowVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: { type: "spring", stiffness: 300 },
    },
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg shadow-md ${feature.color} p-6 h-full`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <Link href={feature.link} className="absolute inset-0 z-10" aria-label={feature.title}>
        <span className="sr-only">{feature.title}</span>
      </Link>

      <div className="flex flex-col h-full">
        <motion.div className="text-3xl mb-4" variants={iconVariants}>
          {feature.icon}
        </motion.div>

        <h3 className={`text-xl font-bold mb-2 ${feature.textColor}`}>{feature.title}</h3>

        <p className={`${feature.textColor} opacity-80 mb-4 flex-grow`}>{feature.description}</p>

        <div className={`flex items-center ${feature.textColor} font-medium`}>
          <span>Explore</span>
          <motion.div variants={arrowVariants} className="ml-2">
            <ArrowRight size={16} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
