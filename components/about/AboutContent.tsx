"use client"

import { motion } from "framer-motion"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Persona from "@/components/Persona"
import { ComicCard } from "@/components/ui/ComicCard"

interface AboutContentProps {
  isMobile: boolean
}

export function AboutContent({ isMobile }: AboutContentProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <motion.div className="max-w-4xl w-full" variants={containerVariants} initial="hidden" animate="visible">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
        <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
          <div className="relative mb-6">
            <OptimizedImage
              src="/images/about.png"
              alt="Wave's Portrait"
              width={300}
              height={300}
              className="rounded-lg shadow-glow"
            />
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <Persona emotion="happy" size="small" />
            </motion.div>
          </div>

          <motion.h3 className="text-xl md:text-2xl font-bold mb-2 text-primary" variants={itemVariants}>
            Wave
          </motion.h3>
          <motion.p
            className="text-sm md:text-base text-center md:text-left text-muted-foreground"
            variants={itemVariants}
          >
            Streamer, Developer, Web3 Enthusiast
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ComicCard className="h-full p-6">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-secondary">My Story</h3>
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Hey there! I'm Wave, a developer and content creator with a passion for building interactive web
                experiences and sharing my journey with others.
              </p>
              <p>
                What started as a hobby coding stream has evolved into a vibrant community of tech enthusiasts,
                creators, and gamers who share a passion for innovation.
              </p>
              <p>
                When I'm not streaming or coding, you can find me exploring the latest in Web3 technology, collecting
                NFTs, or designing new features for this website!
              </p>
            </div>
          </ComicCard>
        </motion.div>
      </div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <ComicCard className="p-4 md:p-5 h-full">
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl mb-2">💻</div>
              <h4 className="font-bold mb-2">Developer</h4>
              <p className="text-sm text-muted-foreground">
                Building with React, Next.js, and exploring the frontiers of Web3 technology.
              </p>
            </div>
          </ComicCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ComicCard className="p-4 md:p-5 h-full">
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl mb-2">🎮</div>
              <h4 className="font-bold mb-2">Streamer</h4>
              <p className="text-sm text-muted-foreground">
                Sharing my coding journey, gaming adventures, and creative process live on stream.
              </p>
            </div>
          </ComicCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ComicCard className="p-4 md:p-5 h-full">
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl mb-2">🌐</div>
              <h4 className="font-bold mb-2">Community Builder</h4>
              <p className="text-sm text-muted-foreground">
                Creating spaces for tech enthusiasts to connect, learn, and grow together.
              </p>
            </div>
          </ComicCard>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
