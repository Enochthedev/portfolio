"use client"

import { type ReactNode, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import Persona from "@/components/persona"

interface TabItem {
  value: string
  label: string
  emotion?: string
  content: ReactNode
}

interface ContentTabsProps {
  tabs: TabItem[]
  defaultValue?: string
  className?: string
}

export function ContentTabs({ tabs, defaultValue, className }: ContentTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0].value)

  return (
    <Tabs defaultValue={defaultValue || tabs[0].value} className={className} onValueChange={setActiveTab}>
      <div className="flex justify-center mb-8">
        <TabsList className={`grid grid-cols-${tabs.length} w-full max-w-md`}>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="relative">
              {tab.label}
              <AnimatePresence>
                {activeTab === tab.value && tab.emotion && (
                  <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <Persona emotion={tab.emotion} size="small" />
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
