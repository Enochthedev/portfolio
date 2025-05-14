"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { StarsBackground } from "@/components/animations/StarsBackground"
import { FloatingClouds } from "@/components/animations/FloatingClouds"
import { FeatureCard } from "@/components/ui/FeatureCard"
import { PortalAnimation } from "@/components/animations/PortalAnimation"
import { SpeechBubble } from "@/components/ui/SpeechBubble"
import { useMobile } from "@/hooks/use-mobile"
import type { Feature } from "@/types"

export default function LandingPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features: Feature[] = [
    {
      title: "About Me",
      description: "Learn about the person behind the persona through animated expressions and comic panels.",
      icon: "👤",
      link: "/about",
      color: "bg-yellow-300",
      textColor: "text-black",
    },
    {
      title: "Content Hub",
      description: "Watch streams, explore coding projects and music in a retro-styled player.",
      icon: "📺",
      link: "/content",
      color: "bg-purple-400",
      textColor: "text-white",
    },
    {
      title: "Portfolio",
      description: "Flip through my projects and discover my skills with animated tags.",
      icon: "📋",
      link: "/portfolio",
      color: "bg-yellow-100",
      textColor: "text-black",
    },
    {
      title: "Web3 & NFTs",
      description: "Explore my NFT gallery styled as an art exhibition.",
      icon: "🎨",
      link: "/web3",
      color: "bg-blue-200",
      textColor: "text-black",
    },
    {
      title: "Community",
      description: "Interact with comic-style speech bubbles, polls, and voting panels.",
      icon: "👥",
      link: "/community",
      color: "bg-purple-400",
      textColor: "text-white",
    },
    {
      title: "Coming Soon",
      description: "More cartoon universe adventures are on the way.",
      icon: "🔮",
      link: "/coming-soon",
      color: "bg-orange-400",
      textColor: "text-black",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotate: (index) => (index % 2 === 0 ? -2 : 2) },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 1,
      },
    },
  }

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #1e1b4b, #3730a3, #4338ca)" }}
    >
      {/* Background elements */}
      <StarsBackground count={isMobile ? 30 : 50} />
      <FloatingClouds />

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4 py-8">
        {/* Header with navigation */}
        <header className="mb-8">
          <div className="flex justify-between items-center">{/* Header title removed */}</div>
        </header>

        {/* Hero section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          {/* Character with speech bubble */}
          <motion.div
            className="relative mb-8 md:mb-0 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <Image
              src="/images/wave-character.png"
              alt="Wave Character"
              width={isMobile ? 150 : 200}
              height={isMobile ? 225 : 300}
              loading="lazy"
              className="z-10 relative"
            />

            {/* Speech bubble */}
            <SpeechBubble position="top" className="absolute -top-16 right-0 max-w-[150px] md:max-w-none">
              <p className="text-black font-bold text-sm md:text-base">Hey there!</p>
            </SpeechBubble>
          </motion.div>

          {/* Portal and main title */}
          <motion.div
            className="relative flex-1 flex justify-center items-center order-1 md:order-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Portal image */}
            <PortalAnimation className="relative w-64 h-64 md:w-80 md:h-80" />

            {/* Title overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <motion.h2
                className="text-3xl md:text-5xl font-extrabold text-purple-400 comic-text text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              >
                Wave
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl font-bold text-white mt-4 comic-text text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
              >
                Streams, Codes
                <br />
                and Vibes
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Feature cards grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                rotate: index % 2 === 0 ? 1 : -1,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <FeatureCard feature={feature} index={index} delay={0} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
