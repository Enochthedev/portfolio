import type { PortfolioProject } from "@/types/api"

// Simulated API function to fetch portfolio projects
export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  // In a real app, this would be a fetch call to an API endpoint
  return [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website built with React and TailwindCSS, featuring animated transitions and interactive elements. The design focuses on showcasing projects in a clean, organized manner while providing an engaging user experience.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "TailwindCSS", "Framer Motion", "Responsive Design"],
      link: "https://example.com",
      category: "Web Development",
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description:
        "A decentralized marketplace for buying and selling NFTs, built with Next.js and Ethereum smart contracts. Users can browse collections, place bids, and manage their digital assets in a secure environment with wallet integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Web3", "Solidity", "Next.js", "Ethereum"],
      link: "https://example.com",
      category: "Web3",
    },
    {
      id: 3,
      title: "Streaming Dashboard",
      description:
        "A custom dashboard for managing streams and viewer interactions, with real-time analytics and chat integration. Streamers can monitor engagement, manage alerts, and analyze performance metrics all in one centralized interface.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "Socket.io", "Chart.js"],
      link: "https://example.com",
      category: "Web Development",
    },
    {
      id: 4,
      title: "3D Portfolio",
      description:
        "An interactive 3D portfolio built with Three.js and React Three Fiber, featuring custom animations and effects. Visitors can navigate through a 3D space to explore projects, skills, and experiences in an immersive environment.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Three.js", "React", "WebGL", "3D Modeling"],
      link: "https://example.com",
      category: "Creative",
    },
    {
      id: 5,
      title: "AI Chat Bot",
      description:
        "A custom chatbot for stream interactions using AI, capable of responding to viewer questions and commands. The bot learns from interactions over time to provide more personalized and relevant responses to community members.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "TensorFlow", "API", "Machine Learning"],
      link: "https://example.com",
      category: "AI & ML",
    },
    {
      id: 6,
      title: "Mobile App",
      description:
        "A cross-platform mobile app for community engagement, featuring push notifications and user profiles. Members can connect with each other, participate in discussions, and stay updated on the latest events and content releases.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React Native", "Firebase", "Redux", "Mobile Development"],
      link: "https://example.com",
      category: "Mobile",
    },
  ]
}

// Helper function to get category styling
export function getCategoryColor(category: string): string {
  switch (category) {
    case "Web Development":
      return "border-[#8B5CF6]"
    case "Web3":
      return "border-[#3B82F6]"
    case "Creative":
      return "border-[#10B981]"
    case "AI & ML":
      return "border-[#EC4899]"
    case "Mobile":
      return "border-[#FB923C]"
    default:
      return "border-[#8B5CF6]"
  }
}

export function getCategoryBgColor(category: string): string {
  switch (category) {
    case "Web Development":
      return "bg-[#8B5CF6]/10"
    case "Web3":
      return "bg-[#3B82F6]/10"
    case "Creative":
      return "bg-[#10B981]/10"
    case "AI & ML":
      return "bg-[#EC4899]/10"
    case "Mobile":
      return "bg-[#FB923C]/10"
    default:
      return "bg-[#8B5CF6]/10"
  }
}

export function getCategoryTextColor(category: string): string {
  switch (category) {
    case "Web Development":
      return "text-[#8B5CF6]"
    case "Web3":
      return "text-[#3B82F6]"
    case "Creative":
      return "text-[#10B981]"
    case "AI & ML":
      return "text-[#EC4899]"
    case "Mobile":
      return "text-[#FB923C]"
    default:
      return "text-[#8B5CF6]"
  }
}

