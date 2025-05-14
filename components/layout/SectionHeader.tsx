"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import type { BaseProps } from "@/types"
import { useMobile } from "@/hooks/use-mobile"

interface SectionHeaderProps extends BaseProps {
  title: string | ReactNode
  description?: string | ReactNode
  titleClassName?: string
  descriptionClassName?: string
  animated?: boolean
  delay?: number
}

/**
 * SectionHeader component for consistent section headers
 *
 * @param title - The title of the section
 * @param description - Optional description text
 * @param className - Additional CSS classes for the container
 * @param titleClassName - Additional CSS classes for the title
 * @param descriptionClassName - Additional CSS classes for the description
 * @param animated - Whether to animate the header
 * @param delay - Animation delay in seconds
 */
export function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  animated = true,
  delay = 0,
}: SectionHeaderProps) {
  const isMobile = useMobile()

  if (!animated) {
    return (
      <div className={cn("text-center mb-6 md:mb-8", className)}>
        <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 comic-text", titleClassName)}>
          {title}
        </h2>
        {description && (
          <p className={cn("text-base md:text-xl text-muted-foreground max-w-2xl mx-auto", descriptionClassName)}>
            {description}
          </p>
        )}
      </div>
    )
  }

  return (
    <motion.div
      className={cn("text-center mb-6 md:mb-8", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 comic-text", titleClassName)}>
        {title}
      </h2>
      {description && (
        <p className={cn("text-base md:text-xl text-muted-foreground max-w-2xl mx-auto", descriptionClassName)}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
