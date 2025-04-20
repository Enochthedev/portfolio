"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import type { Feature } from "@/types"

interface FeatureCardProps {
  feature: Feature
  index?: number
  delay?: number
}

/**
 * FeatureCard component for displaying feature information
 *
 * @param feature - Feature data to display
 * @param index - Index for staggered animations
 * @param delay - Base delay for animations
 */
export function FeatureCard({ feature, index = 0, delay = 0 }: FeatureCardProps) {
  const { title, description, icon, link, color, textColor } = feature
  const isMobile = useMobile()

  const iconBackgrounds = {
    "Content Hub": "bg-green-500",
    Portfolio: "bg-yellow-200",
    "Web3 & NFTs": "bg-orange-300",
    Community: "bg-blue-300",
  }

  const iconBg = iconBackgrounds[title as keyof typeof iconBackgrounds] || "bg-purple-300"

  return (
    <motion.div
      className={`${color} ${textColor} p-4 md:p-6 rounded-lg border-4 border-black shadow-comic`}
      whileHover={{ y: isMobile ? -2 : -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + index * 0.1, duration: 0.5 }}
    >
      <div className="flex items-start mb-3 md:mb-4">
        <div className={cn("mr-2 md:mr-3 p-1 border-2 border-black rounded-md", iconBg)}>
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
            <span className="text-xl md:text-2xl">{icon}</span>
          </div>
        </div>
        <h3 className="text-lg md:text-2xl font-bold">{title}</h3>
      </div>
      <p className="mb-3 md:mb-4 text-sm md:text-base">{description}</p>
      <Link href={link} className="inline-flex items-center text-purple-700 font-bold text-sm md:text-base">
        Explore <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
      </Link>
    </motion.div>
  )
}

