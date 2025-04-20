import type { NFT, RarityLevel } from "@/types/api"

// Simulated API function to fetch NFTs
export async function getNFTs(): Promise<NFT[]> {
  // In a real app, this would be a fetch call to an API endpoint
  return [
    {
      id: 1,
      name: "Pixel Wave #001",
      description: "A pixelated wave character from the WaveDidWhat universe.",
      image: "/placeholder.svg?height=300&width=300",
      collection: "Pixel Waves",
      rarity: "Rare",
      link: "https://opensea.io",
    },
    {
      id: 2,
      name: "Cartoon Coder #042",
      description: "A cartoon character coding in a futuristic environment.",
      image: "/placeholder.svg?height=300&width=300",
      collection: "Cartoon Coders",
      rarity: "Uncommon",
      link: "https://opensea.io",
    },
    {
      id: 3,
      name: "Stream Dreams #007",
      description: "A dreamy representation of the streaming experience.",
      image: "/placeholder.svg?height=300&width=300",
      collection: "Stream Dreams",
      rarity: "Epic",
      link: "https://opensea.io",
    },
    {
      id: 4,
      name: "Digital Dimension #123",
      description: "A portal to a digital dimension where code comes to life.",
      image: "/placeholder.svg?height=300&width=300",
      collection: "Digital Dimensions",
      rarity: "Legendary",
      link: "https://opensea.io",
    },
    {
      id: 5,
      name: "Crypto Companion #056",
      description: "A friendly companion for your crypto journey.",
      image: "/placeholder.svg?height=300&width=300",
      collection: "Crypto Companions",
      rarity: "Common",
      link: "https://opensea.io",
    },
    {
      id: 6,
      name: "Web3 Wizard #089",
      description: "A wizard mastering the arts of Web3 development.",
      image: "/placeholder.svg?height=300&width=300",
      collection: "Web3 Wizards",
      rarity: "Rare",
      link: "https://opensea.io",
    },
  ]
}

// Helper function to get rarity color
export function getRarityColor(rarity: RarityLevel): string {
  switch (rarity) {
    case "Common":
      return "bg-gray-500"
    case "Uncommon":
      return "bg-green-500"
    case "Rare":
      return "bg-blue-500"
    case "Epic":
      return "bg-purple-500"
    case "Legendary":
      return "bg-yellow-500"
    default:
      return "bg-gray-500"
  }
}

