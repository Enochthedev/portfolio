import type { ReactNode } from "react"

// Common types
export interface BaseProps {
  className?: string
  children?: ReactNode
}

// NFT related types
export type RarityType = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary"

export interface NFT {
  id: number
  name: string
  description: string
  image: string
  collection: string
  rarity: RarityType
  link?: string
}

// Project related types
export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

// Tab related types
export interface TabItem {
  value: string
  label: string
  emotion?: string
  content: ReactNode
}

// Timeline related types
export interface TimelineEvent {
  year: number | string
  title: string
  description: string
}

// Fact panel related types
export interface FactPanel {
  title: string
  content: string
  icon: ReactNode
  color: string
}

// Feature card related types
export interface Feature {
  title: string
  description: string
  icon: ReactNode
  link: string
  color: string
  textColor: string
}
