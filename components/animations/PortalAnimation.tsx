"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PortalAnimationProps {
  className?: string
}

export function PortalAnimation({ className = "" }: PortalAnimationProps) {
  const portalVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const glowVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-full bg-purple-500 blur-xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
        style={{ opacity: 0.5 }}
      />

      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <motion.div variants={portalVariants} initial="initial" animate="animate">
          <Image
            src="/images/portal.png"
            alt="Portal"
            width={300}
            height={300}
            loading="lazy"
            className="w-full h-full"
            priority={true}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
