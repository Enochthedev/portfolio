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

        <div className="flex items-center justify-center gap-6 md:gap-8">
          {/* Twitch */}
          <Link href="https://www.twitch.tv/wavedidwhat" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="shadow-glow-sm flex items-center justify-center h-10 w-10 rounded-full bg-primary-dark/30 hover:bg-[#9146FF]/20 transition-colors"
            >
              <Twitch className="h-5 w-5 md:h-6 md:w-6 text-white/90 hover:text-[#9146FF]" />
              <span className="sr-only">Twitch</span>
            </motion.div>
          </Link>

          {/* X/Twitter - Main */}
          <Link href="https://x.com/wavedidwhat" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="shadow-glow-sm flex items-center justify-center h-10 w-10 rounded-full bg-primary-dark/30 hover:bg-white/10 transition-colors"
            >
              <span className="text-white/90 hover:text-white font-bold text-lg md:text-xl">𝕏</span>
              <span className="sr-only">Twitter</span>
            </motion.div>
          </Link>

          {/* X/Twitter - Crypto */}
          <Link href="https://x.com/itsdefWave" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="shadow-glow-sm flex items-center justify-center h-10 w-10 rounded-full bg-primary-dark/30 hover:bg-[#26a6f2]/20 transition-colors relative"
            >
              <span className="text-white/90 hover:text-[#26a6f2] font-bold text-lg md:text-xl">𝕏</span>
              <span className="absolute -top-1 -right-1 text-[8px] bg-[#26a6f2]/80 text-white px-1 rounded-full">
                crypto
              </span>
              <span className="sr-only">Twitter Crypto</span>
            </motion.div>
          </Link>

          {/* GitHub */}
          <Link href="https://github.com/Enochthedev" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="shadow-glow-sm flex items-center justify-center h-10 w-10 rounded-full bg-primary-dark/30 hover:bg-white/10 transition-colors"
            >
              <Github className="h-5 w-5 md:h-6 md:w-6 text-white/90 hover:text-white" />
              <span className="sr-only">GitHub</span>
            </motion.div>
          </Link>

          {/* YouTube */}
          <Link href="https://www.youtube.com/@whatsupwave" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="shadow-glow-sm flex items-center justify-center h-10 w-10 rounded-full bg-primary-dark/30 hover:bg-[#FF0000]/20 transition-colors"
            >
              <Youtube className="h-5 w-5 md:h-6 md:w-6 text-white/90 hover:text-[#FF0000]" />
              <span className="sr-only">YouTube</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </footer>
  )
}
