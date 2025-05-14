"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFoundContent() {
  const [portalOpacity, setPortalOpacity] = useState(0)

  useEffect(() => {
    setPortalOpacity(1)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-10 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-600 to-red-700 z-0" />

      {/* Animated stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-100"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Portal animations */}
      <div
        className="absolute w-40 h-40 opacity-0 z-0 portal-spin"
        style={{
          top: "15%",
          left: "10%",
          opacity: portalOpacity,
          animation: "portal-spin 20s linear infinite, portal-fade 2s ease-in-out forwards",
        }}
      >
        <Image src="/images/portal.png" alt="Portal" width={160} height={160} loading="lazy" className="portal-glow" />
      </div>

      <div
        className="absolute w-24 h-24 opacity-0 z-0 portal-spin"
        style={{
          bottom: "20%",
          right: "15%",
          opacity: portalOpacity,
          animation: "portal-spin 15s linear infinite reverse, portal-fade 2.5s ease-in-out forwards",
        }}
      >
        <Image src="/images/portal.png" alt="Portal" width={96} height={96} loading="lazy" className="portal-glow" />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
        <h1 className="text-7xl md:text-9xl font-bold text-cream-100 comic-text mb-2 text-center">Oops!</h1>

        <h2 className="text-xl md:text-3xl text-cream-100 comic-text mb-8 text-center">
          Looks like you took a wrong turn.
        </h2>

        {/* Image with hover effect */}
        <motion.div
          whileHover={{
            y: [0, -10, 0],
            transition: {
              y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" },
            },
          }}
          className="relative w-full max-w-xl my-6"
        >
          <Image
            src="/images/404.png"
            alt="404 - Page Not Found"
            width={800}
            height={450}
            loading="lazy"
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Button with bounce effect */}
        <motion.div
          whileHover={{
            scale: 1.05,
            y: [0, -5, 0],
            transition: {
              y: { repeat: Number.POSITIVE_INFINITY, duration: 0.5 },
              scale: { duration: 0.2 },
            },
          }}
          className="mt-8"
        >
          <Link
            href="/"
            className="bg-yellow-100 hover:bg-yellow-200 text-black font-bold py-3 px-8 rounded-lg shadow-comic text-lg transition-all duration-300"
          >
            Take Me Back
          </Link>
        </motion.div>

        <p className="mt-8 text-cream-100 text-center max-w-md">
          Don't worry, even Rick gets lost sometimes. Let's get you back to a dimension you recognize.
        </p>
      </div>
    </div>
  )
}
