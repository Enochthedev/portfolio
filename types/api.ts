// Portfolio Project Types
export type ProjectCategory = "Web Development" | "Web3" | "Creative" | "AI & ML" | "Mobile"

export interface PortfolioProject {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  category: ProjectCategory
}

// Content Stream Types
export type Platform = "Twitch" | "YouTube"

export interface ContentStream {
  id: number
  title: string
  platform: Platform
  date: string // Format: DD-MM-YY
  thumbnail: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  color: string
}

// Web3 NFT Types
export type RarityLevel = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary"

export interface NFT {
  id: number
  name: string
  description: string
  image: string
  collection: string
  rarity: RarityLevel
  link?: string
}

