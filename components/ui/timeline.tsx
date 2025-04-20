"use client"

import { motion } from "framer-motion"

interface TimelineEvent {
  year: number | string
  title: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
  controls: any
}

export function Timeline({ events, controls }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>

      {events.map((event, index) => (
        <motion.div
          key={index}
          className={`relative flex items-start mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.2 + 0.1 * index,
              },
            },
            hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          }}
        >
          <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
            <div className="comic-border bg-card p-4 hover:shadow-md transition-all duration-300 shadow-glow-sm">
              <h3 className="text-lg font-bold text-primary">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-sm">{event.year}</span>
          </div>
          <div className="w-1/2"></div>
        </motion.div>
      ))}
    </div>
  )
}

