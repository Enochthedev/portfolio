"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PortalAnimationProps {
  size?: number
  className?: string
}

export function PortalAnimation({ size = 320, className }: PortalAnimationProps) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      <Image
        src="/images/portal.png"
        alt="Portal"
        width={size}
        height={size}
        loading="lazy"
        className="w-full h-full"
      />
    </motion.div>
  )
}

