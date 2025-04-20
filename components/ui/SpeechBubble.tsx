"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { BaseProps } from "@/types"

interface SpeechBubbleProps extends BaseProps {
  position?: "top" | "right" | "bottom" | "left"
  delay?: number
}

/**
 * SpeechBubble component for comic-style speech bubbles
 *
 * @param children - Content to be rendered inside the bubble
 * @param className - Additional CSS classes
 * @param position - Position of the bubble arrow
 * @param delay - Animation delay in seconds
 */
export function SpeechBubble({ children, className, position = "bottom", delay = 0.5 }: SpeechBubbleProps) {
  const positionClasses = {
    top: "bottom-full mb-2",
    right: "left-full ml-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
  }

  const arrowClasses = {
    top: "absolute -bottom-2 left-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-black transform -translate-x-1/2 rotate-45",
    right:
      "absolute -left-2 top-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-black transform -translate-y-1/2 rotate-45",
    bottom:
      "absolute -top-2 left-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-black transform -translate-x-1/2 rotate-45",
    left: "absolute -right-2 top-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-black transform -translate-y-1/2 rotate-45",
  }

  return (
    <motion.div
      className={cn("bg-white rounded-xl p-3 border-2 border-black relative", positionClasses[position], className)}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      {children}
      <div className={arrowClasses[position]}></div>
    </motion.div>
  )
}

