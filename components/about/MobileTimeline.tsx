"use client"

import { motion } from "framer-motion"
import type { TimelineEvent } from "@/types"

interface MobileTimelineProps {
  events: TimelineEvent[]
  controls: any
}

/**
 * MobileTimeline component - A vertical timeline optimized for mobile devices
 *
 * @param events - Array of timeline events
 * @param controls - Animation controls
 */
export function MobileTimeline({ events, controls }: MobileTimelineProps) {
  return (
    <div className="relative pl-8">
      {/* Vertical timeline line */}
      <div className="absolute left-3 top-0 bottom-0 w-1 bg-primary/30"></div>

      {events.map((event, index) => (
        <motion.div
          key={index}
          className="relative mb-6 last:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: 0.1 * index,
              },
            },
            hidden: { opacity: 0, x: -20 },
          }}
        >
          {/* Year circle */}
          <div className="absolute left-0 transform -translate-x-1/2 w-7 h-7 bg-primary rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-xs">{event.year}</span>
          </div>

          {/* Content - Add text-center class */}
          <div className="comic-border bg-card p-3 hover:shadow-md transition-all duration-300 shadow-glow-sm text-center">
            <h3 className="text-base font-bold text-primary">{event.title}</h3>
            <p className="text-sm text-muted-foreground">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

