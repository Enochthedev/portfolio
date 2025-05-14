"use client"

import { motion } from "framer-motion"

export function FloatingClouds() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute w-24 h-16 bg-purple-400 rounded-full blur-md"
        style={{ top: "15%", right: "10%" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute w-32 h-20 bg-purple-300 rounded-full blur-md"
        style={{ bottom: "30%", left: "5%" }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute w-20 h-12 bg-pink-300 rounded-full blur-md"
        style={{ top: "60%", right: "15%" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
    </div>
  )
}
