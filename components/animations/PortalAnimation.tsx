"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PortalAnimationProps {
  size?: number
  className?: string
}

/**
 * PortalAnimation component for animated portal effects
 *
 * @param size - Size of the portal in pixels
 * @param className - Additional CSS classes
 */
export function PortalAnimation({ size = 320, className }: PortalAnimationProps) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      <Image src="/images/portal.png" alt="Portal" width={size} height={size} className="w-full h-full" />
    </motion.div>
  )
}

