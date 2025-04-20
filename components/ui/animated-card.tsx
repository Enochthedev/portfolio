"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  index?: number
  delay?: number
  hoverEffect?: boolean
  onClick?: () => void
}

export function AnimatedCard({
  children,
  className,
  index = 0,
  delay = 0,
  hoverEffect = true,
  onClick,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={cn("group", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay + index * 0.1 }}
      whileHover={hoverEffect ? { y: -5 } : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

