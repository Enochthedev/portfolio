"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { BaseProps } from "@/types"

interface AnimatedCardProps extends BaseProps {
  index?: number
  delay?: number
  hoverEffect?: boolean
  onClick?: () => void
}

/**
 * AnimatedCard component for animated card containers
 *
 * @param children - Content to be rendered inside the card
 * @param className - Additional CSS classes
 * @param index - Index for staggered animations
 * @param delay - Base delay for animations
 * @param hoverEffect - Whether to apply hover animation
 * @param onClick - Click handler
 */
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
