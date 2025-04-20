"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import type { FactPanel } from "@/types"

interface FactPanelsProps {
  panels: FactPanel[]
  controls: any
}

/**
 * FactPanels component for displaying fact panels
 *
 * @param panels - Array of fact panels
 * @param controls - Animation controls
 */
export function FactPanels({ panels, controls }: FactPanelsProps) {
  const isMobile = useMobile()

  // For mobile, we'll show fewer panels initially and add a "load more" button
  const visiblePanels = isMobile ? panels.slice(0, 3) : panels

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {visiblePanels.map((panel, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                delay: 0.1 * index,
              },
            },
            hidden: { opacity: 0, y: 30 },
          }}
        >
          <Card
            className={`comic-border overflow-hidden h-full ${panel.color} hover:shadow-lg transition-all duration-300 shadow-glow-sm`}
          >
            {/* Add text-center class for mobile */}
            <CardContent className={`p-4 md:p-6 relative z-10 ${isMobile ? "text-center" : ""}`}>
              <div className={`text-3xl md:text-4xl mb-3 md:mb-4 ${isMobile ? "mx-auto" : ""}`}>{panel.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{panel.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{panel.content}</p>
            </CardContent>
          </Card>
          <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-background border-2 border-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
            {index + 1}
          </div>
        </motion.div>
      ))}

      {/* Show remaining panels on mobile with animation */}
      {isMobile &&
        panels.slice(3).map((panel, index) => (
          <motion.div
            key={index + 3}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  delay: 0.3 + 0.1 * index,
                },
              },
              hidden: { opacity: 0, y: 30 },
            }}
          >
            <Card
              className={`comic-border overflow-hidden h-full ${panel.color} hover:shadow-lg transition-all duration-300 shadow-glow-sm`}
            >
              {/* Add text-center class for mobile */}
              <CardContent className="p-4 relative z-10 text-center">
                <div className="text-3xl mb-3 mx-auto">{panel.icon}</div>
                <h3 className="text-lg font-bold mb-1">{panel.title}</h3>
                <p className="text-sm text-muted-foreground">{panel.content}</p>
              </CardContent>
            </Card>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-background border-2 border-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
              {index + 4}
            </div>
          </motion.div>
        ))}
    </div>
  )
}

