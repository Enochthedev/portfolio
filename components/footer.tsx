"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitch, Youtube } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const isMobile = useMobile()

  return (
    <footer className="w-full border-t bg-primary text-white wave-bg pt-6 md:pt-10">
      <div className="container flex flex-col items-center justify-between gap-4 py-4 md:flex-row md:py-6">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <span className="text-lg md:text-xl font-bold comic-text text-secondary">Wave</span>
          </motion.div>
          <p className="text-center text-xs md:text-sm text-white/80 md:text-left">
            &copy; {currentYear} Wave. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="shadow-glow-sm">
              <Github className="h-4 w-4 md:h-5 md:w-5 text-white/80 hover:text-secondary" />
              <span className="sr-only">GitHub</span>
            </motion.div>
          </Link>
          <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="shadow-glow-sm">
              <span className="text-white/80 hover:text-secondary font-bold text-base md:text-lg">𝕏</span>
              <span className="sr-only">X</span>
            </motion.div>
          </Link>
          <Link href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="shadow-glow-sm">
              <Twitch className="h-4 w-4 md:h-5 md:w-5 text-white/80 hover:text-secondary" />
              <span className="sr-only">Twitch</span>
            </motion.div>
          </Link>
          <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="shadow-glow-sm">
              <Youtube className="h-4 w-4 md:h-5 md:w-5 text-white/80 hover:text-secondary" />
              <span className="sr-only">YouTube</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </footer>
  )
}

