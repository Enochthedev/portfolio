"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface NavItemProps {
  name: string
  path: string
  isActive: boolean
  isScrolled: boolean
}

export function NavItem({ name, path, isActive, isScrolled }: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative px-5" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative py-2">
        {/* Portal Background */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.15 },
              }}
              style={{
                zIndex: -1,
              }}
            >
              <div className="nav-portal-glow" style={{ width: "120%", height: "120%" }}>
                <Image
                  src="/images/portal.png"
                  alt="Navigation Portal"
                  width={100}
                  height={100}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Link */}
        <Link href={path} className="block">
          <motion.div
            className={`text-sm font-medium transition-colors relative text-center ${
              isActive
                ? isScrolled
                  ? "text-white"
                  : "text-[#8B5CF6]"
                : isScrolled
                  ? "text-white/80"
                  : "text-[#1F2937]"
            }`}
            animate={
              isHovered
                ? {
                    y: -2,
                    transition: { duration: 0.15, ease: "easeOut" },
                  }
                : {
                    y: 0,
                    transition: { duration: 0.15, ease: "easeOut" },
                  }
            }
            style={{
              textShadow: isHovered ? "0px 1px 1px rgba(0,0,0,0.25)" : "none",
              zIndex: 10,
            }}
          >
            <span className="relative z-10">{name}</span>
            {isActive && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FB923C]"
                layoutId="underline"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
              />
            )}
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
