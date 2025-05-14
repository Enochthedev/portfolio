"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  link: string
  color: string
  textColor: string
  index?: number
  delay?: number
}

export function FeatureCard({
  title,
  description,
  icon,
  link,
  color,
  textColor,
  index = 0,
  delay = 0,
}: FeatureCardProps) {
  const iconBackgrounds = {
    "Content Hub": "bg-green-500",
    Portfolio: "bg-yellow-200",
    "Web3 & NFTs": "bg-orange-300",
    Community: "bg-blue-300",
  }

  const iconBg = iconBackgrounds[title as keyof typeof iconBackgrounds] || "bg-purple-300"

  return (
    <motion.div
      className={`${color} ${textColor} p-6 rounded-lg border-4 border-black shadow-comic`}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + index * 0.1, duration: 0.5 }}
    >
      <div className="flex items-start mb-4">
        <div className={cn("mr-3 p-1 border-2 border-black rounded-md", iconBg)}>
          <div className="w-10 h-10 flex items-center justify-center">
            <span className="text-2xl">{icon}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="mb-4">{description}</p>
      <Link href={link} className="inline-flex items-center text-purple-700 font-bold">
        Explore <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </motion.div>
  )
}
