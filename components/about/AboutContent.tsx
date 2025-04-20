"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AboutContentProps {
  isMobile: boolean
}

export function AboutContent({ isMobile }: AboutContentProps) {
  if (isMobile) {
    return (
      <div className="flex flex-col items-center mb-12 w-full">
        <motion.div
          className="mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/content.png"
            alt="Wave character"
            width={180}
            height={180}
            loading="lazy"
            className="mx-auto"
          />
          <motion.div
            className="absolute -right-2 top-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            💡
          </motion.div>
          <motion.div
            className="absolute -left-2 bottom-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.3 }}
          >
            🎮
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center w-full"
        >
          <h2 className="text-2xl font-bold mb-4 text-primary">Hello, I'm Wave!</h2>
          <p className="text-base mb-3">
            I'm a streamer, coder, and content creator with a passion for building communities and creating engaging
            experiences.
          </p>
          <p className="text-base mb-4">
            When I'm not coding or streaming, you might find me exploring new technologies, creating digital art, or
            connecting with my amazing community.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["Streamer", "Developer", "Creator", "Web3", "Community"].map((tag, index) => (
              <motion.span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 mx-auto">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative">
          <Image
            src="/images/content.png"
            alt="Wave character"
            width={300}
            height={300}
            loading="lazy"
            className="mx-auto"
          />
          <motion.div
            className="absolute -right-4 top-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            💡
          </motion.div>
          <motion.div
            className="absolute -left-4 bottom-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.3 }}
          >
            🎮
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center lg:text-left"
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">Hello, I'm Wave!</h2>
        <p className="text-lg mb-4">
          I'm a streamer, coder, and content creator with a passion for building communities and creating engaging
          experiences. My journey began with a simple love for technology and has evolved into a multifaceted adventure
          spanning streaming, web development, and Web3 innovation.
        </p>
        <p className="text-lg mb-4">
          When I'm not coding or streaming, you might find me exploring new technologies, creating digital art, or
          connecting with my amazing community. I believe in the power of creativity and technology to bring people
          together.
        </p>
        <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
          {["Streamer", "Developer", "Creator", "Web3 Enthusiast", "Community Builder"].map((tag, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

