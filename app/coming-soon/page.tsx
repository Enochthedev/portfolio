"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react"
import Persona from "@/components/Persona"
import { Section } from "@/components/layout/Section"
import { AnimatedCard } from "@/components/ui/AnimatedCard"

interface UpcomingFeature {
  title: string
  description: string
  eta: string
  category: "Community" | "Content" | "Education" | "AI"
}

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [daysLeft, setDaysLeft] = useState(30)

  // Calculate random days left between 14-45
  useEffect(() => {
    setDaysLeft(Math.floor(Math.random() * (45 - 14 + 1) + 14))
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim() !== "") {
      setIsSubscribed(true)
    }
  }

  const upcomingFeatures: UpcomingFeature[] = [
    {
      title: "Live Collaboration",
      description: "Real-time collaboration tools for community projects",
      eta: "Next Month",
      category: "Community",
    },
    {
      title: "Advanced Analytics",
      description: "Detailed insights for content creators and streamers",
      eta: "In Progress",
      category: "Content",
    },
    {
      title: "Interactive Tutorials",
      description: "Step-by-step coding tutorials with live feedback",
      eta: `${daysLeft} days left`,
      category: "Education",
    },
    {
      title: "AI-Powered Assistant",
      description: "Smart assistant to help with coding and streaming",
      eta: "Planning Phase",
      category: "AI",
    },
  ]

  return (
    <Section className="bg-[#F3F4F6]">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="gap-2 text-[#4B5563] hover:text-[#1F2937]">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Persona emotion="excited" size="medium" />
          </motion.div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1F2937]">
          <span className="text-[#8B5CF6]">Coming</span> Soon
        </h1>

        <div className="flex justify-center mb-4">
          <Badge className="bg-[#8B5CF6]/10 text-[#8B5CF6] border-0 px-3 py-1">
            <Clock size={14} className="mr-1" />
            <span>Under Development</span>
          </Badge>
        </div>

        <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
          We're working on some exciting new features for the Wave universe. Subscribe to get notified when they launch!
        </p>
      </motion.div>

      {/* Upcoming Features */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-[#1F2937]">Upcoming Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingFeatures.map((feature, index) => (
            <AnimatedCard key={index} index={index} delay={0.3}>
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-medium text-[#1F2937]">{feature.title}</h3>
                    <Badge
                      variant="outline"
                      className={`
                        ${
                          feature.category === "Community"
                            ? "bg-[#8B5CF6]/10 text-[#8B5CF6]"
                            : feature.category === "Content"
                              ? "bg-[#FB923C]/10 text-[#FB923C]"
                              : feature.category === "Education"
                                ? "bg-[#10B981]/10 text-[#10B981]"
                                : "bg-[#3B82F6]/10 text-[#3B82F6]"
                        }
                        border-0
                      `}
                    >
                      {feature.category}
                    </Badge>
                  </div>

                  <p className="text-[#4B5563] text-sm mb-4">{feature.description}</p>

                  <div className="flex items-center text-sm text-[#6B7280]">
                    <Calendar size={14} className="mr-1" />
                    <span>ETA: {feature.eta}</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Subscription */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {isSubscribed ? (
          <div className="text-center py-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex justify-center mb-4"
            >
              <div className="bg-[#8B5CF6]/10 p-4 rounded-full">
                <Sparkles size={32} className="text-[#8B5CF6]" />
              </div>
            </motion.div>

            <h3 className="text-xl font-semibold mb-2 text-[#1F2937]">You're on the list!</h3>

            <p className="text-[#4B5563] mb-6">Thanks for subscribing! We'll notify you when new features launch.</p>

            <Link href="/">
              <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED]">Return to Home</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center mb-4">
              <Bell size={20} className="text-[#8B5CF6] mr-2" />
              <h3 className="text-xl font-semibold text-[#1F2937]">Get Notified</h3>
            </div>

            <p className="text-[#4B5563] mb-6">
              Be the first to know when new features are released. No spam, just important updates.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit" className="bg-[#8B5CF6] hover:bg-[#7C3AED] whitespace-nowrap">
                Notify Me
              </Button>
            </form>
          </>
        )}
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-[#6B7280] text-sm">Current development progress</p>

        <div className="w-full bg-[#E5E7EB] h-2 rounded-full mt-2 mb-1 max-w-md mx-auto overflow-hidden">
          <motion.div
            className="bg-[#8B5CF6] h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </div>

        <p className="text-[#6B7280] text-sm">65% Complete</p>
      </motion.div>
    </Section>
  )
}
