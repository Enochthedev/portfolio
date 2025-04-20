"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionHeaderProps {
  title: string | ReactNode
  description?: string | ReactNode
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  animated?: boolean
  delay?: number
}

export function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  animated = true,
  delay = 0,
}: SectionHeaderProps) {
  const content = (
    <div className={cn("text-center mb-8", className)}>
      <h2 className={cn("text-4xl md:text-5xl font-extrabold mb-4 comic-text", titleClassName)}>{title}</h2>
      {description && (
        <p className={cn("text-xl text-muted-foreground max-w-2xl mx-auto", descriptionClassName)}>{description}</p>
      )}
    </div>
  )

  if (!animated) return content

  return (
    <motion.div
      className={cn("text-center mb-8", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <h2 className={cn("text-4xl md:text-5xl font-extrabold mb-4 comic-text", titleClassName)}>{title}</h2>
      {description && (
        <p className={cn("text-xl text-muted-foreground max-w-2xl mx-auto", descriptionClassName)}>{description}</p>
      )}
    </motion.div>
  )
}

