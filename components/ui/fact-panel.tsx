"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FactPanel {
  title: string
  content: string
  icon: ReactNode
  color: string
}

interface FactPanelsProps {
  panels: FactPanel[]
  controls: any
}

export function FactPanels({ panels, controls }: FactPanelsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {panels.map((panel, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.1 * index,
              },
            },
            hidden: { opacity: 0, y: 50 },
          }}
        >
          <Card
            className={`comic-border overflow-hidden h-full ${panel.color} hover:shadow-lg transition-all duration-300 shadow-glow-sm`}
          >
            <CardContent className="p-6 relative z-10">
              <div className="text-4xl mb-4">{panel.icon}</div>
              <h3 className="text-xl font-bold mb-2">{panel.title}</h3>
              <p className="text-muted-foreground">{panel.content}</p>
            </CardContent>
          </Card>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-border rounded-full flex items-center justify-center text-xs font-bold">
            {index + 1}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
