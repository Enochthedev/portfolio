"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { ParallaxContainer } from "@/components/ui/ParallaxContainer"
import { MobileTimeline } from "@/components/about/MobileTimeline"
import { DesktopTimeline } from "@/components/about/DesktopTimeline"
import { FactPanels } from "@/components/about/FactPanels"
import { AboutContent } from "@/components/about/AboutContent"
import { useMobile } from "@/hooks/use-mobile"
import type { TimelineEvent, FactPanel } from "@/types"

export default function AboutPage() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const isMobile = useMobile()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const factPanels: FactPanel[] = [
    {
      title: "Origin Story",
      content: "Started coding at age 12 after discovering an old programming book in the attic. The rest is history!",
      icon: "📚",
      color: "border-primary bg-primary/10",
    },
    {
      title: "Stream Life",
      content:
        "Went live for the first time in 2019 and haven't looked back since. Now streaming code, games, and creative content.",
      icon: "🎮",
      color: "border-secondary bg-secondary/10",
    },
    {
      title: "Tech Stack",
      content:
        "React enthusiast, Next.js advocate, and TailwindCSS lover. Always exploring new technologies to add to my toolkit.",
      icon: "💻",
      color: "border-accent-blue bg-accent-blue/10",
    },
    {
      title: "Web3 Journey",
      content:
        "Dove into the blockchain world in 2021. Now building dApps and collecting NFTs that speak to my creative side.",
      icon: "🔗",
      color: "border-accent-green bg-accent-green/10",
    },
    {
      title: "Community",
      content:
        "Built a vibrant community of tech enthusiasts, creators, and gamers who share a passion for innovation.",
      icon: "👥",
      color: "border-primary bg-primary/10",
    },
    {
      title: "Future Goals",
      content: "Working on merging streaming and interactive web experiences to create something truly unique.",
      icon: "����",
      color: "border-secondary bg-secondary/10",
    },
  ]

  const timelineEvents: TimelineEvent[] = [
    {
      year: 2018,
      title: "The Beginning",
      description: "Started learning web development and fell in love with creating digital experiences.",
    },
    {
      year: 2022,
      title: "Streaming Debut",
      description: "Went live for the first time, sharing my coding journey with a small but supportive audience.",
    },
    {
      year: 2023,
      title: "Community Growth",
      description: "Built a thriving community of fellow developers and creators, expanding my reach and trying new things.",
    },
    {
      year: 2023,
      title: "Web3 Exploration",
      description: "Dove into blockchain technology and started creating NFT collections.",
    },
    {
      year: 2024,
      title: "WaveDidWhat Launch",
      description: "Launched this website to bring together all aspects of my digital presence.",
    },
    {
      year: 2025,
      title: "The Future",
      description: "Continuing to innovate at the intersection of streaming, coding, and Web3.",
    },
  ]

  // Background elements that move with mouse - reduced for mobile
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return // Disable parallax on mobile for better performance

    const { currentTarget, clientX, clientY } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()

    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5

    const elements = document.querySelectorAll(".bg-element")
    elements.forEach((el) => {
      const speed = Number.parseFloat(el.getAttribute("data-speed") || "1")
      const xOffset = x * 20 * speed
      const yOffset = y * 20 * speed
      el.setAttribute("style", `transform: translate(${xOffset}px, ${yOffset}px)`)
    })
  }


return (
  <ParallaxContainer

      className="relative min-h-screen py-8 md:py-12 px-4 bg-gradient-to-b from-[#F3F4F6] to-[#FAFAFA]"
      onMouseMove={handleMouseMove}
    >
      {/* Background elements - fewer on mobile */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="bg-element absolute top-20 left-20 text-4xl md:text-6xl" data-speed="2">
          💥
        </div>
        {!isMobile && (
          <div className="bg-element absolute bottom-40 right-20 text-6xl" data-speed="1.5">
            ❗
          </div>
        )}
        <div className="bg-element absolute top-1/4 right-1/4 text-4xl md:text-6xl" data-speed="2.5">
          ✨
        </div>
      </div>

      <Section className="relative z-10">
        <SectionHeader
          title={
            <span>
              <span className="text-primary">Who is</span> <span className="text-secondary">Wave?</span>
            </span>
          }
          description="The person behind the persona, in comic book style!"
        />

        {/* Use the new AboutContent component */}
        <div className="flex justify-center w-full">
          <AboutContent isMobile={isMobile} />
        </div>

        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 comic-text text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Quick Facts in Comic Panels
        </motion.h2>

        <div ref={ref} className="mb-12 md:mb-20">
          <FactPanels panels={factPanels} controls={controls} />
        </div>

        <motion.div
          className="comic-border bg-muted p-4 md:p-8 max-w-4xl mx-auto shadow-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-primary">
            My Cartoon Universe Timeline
          </h2>

          {/* Conditional rendering based on screen size */}
          {isMobile ? (
            <MobileTimeline events={timelineEvents} controls={controls} />
          ) : (
            <DesktopTimeline events={timelineEvents} controls={controls} />
          )}
        </motion.div>
      </Section>
    </ParallaxContainer>
  )
}
