import type { ContentStream, Project } from "@/types/api"

// Simulated API function to fetch content streams
export async function getContentStreams(): Promise<ContentStream[]> {
  // In a real app, this would be a fetch call to an API endpoint
  return [
    {
      id: 1,
      title: "Coding a React App from Scratch",
      platform: "Twitch",
      date: "31-03-25",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 2,
      title: "Web3 Development Tutorial",
      platform: "YouTube",
      date: "24-03-25",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 3,
      title: "Building a 3D Portfolio with Three.js",
      platform: "Twitch",
      date: "15-03-25",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 4,
      title: "Creating NFT Art Live",
      platform: "YouTube",
      date: "01-03-25",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
  ]
}

// Format date from DD-MM-YY to relative time
export function formatDate(dateString: string): string {
  const [day, month, year] = dateString.split("-").map(Number)
  const date = new Date(2000 + year, month - 1, day) // Year is 20XX
  const now = new Date()

  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return "Today"
  if (diffDays === 1) return "Yesterday"
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? "s" : ""} ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? "s" : ""} ago`
  return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? "s" : ""} ago`
}

// Simulated API function to fetch projects
export async function getProjects(): Promise<Project[]> {
  return [
    {
      id: 1,
      title: "React Portfolio",
      description: "A responsive portfolio website built with React and TailwindCSS.",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      image: "/placeholder.svg?height=150&width=300",
      color: "border-primary",
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description: "A decentralized marketplace for buying and selling NFTs.",
      tags: ["Web3", "Solidity", "Next.js"],
      image: "/placeholder.svg?height=150&width=300",
      color: "border-secondary",
    },
    {
      id: 3,
      title: "Streaming Dashboard",
      description: "A custom dashboard for managing streams and viewer interactions.",
      tags: ["React", "Node.js", "Socket.io"],
      image: "/placeholder.svg?height=150&width=300",
      color: "border-accent-blue",
    },
    {
      id: 4,
      title: "3D Portfolio",
      description: "An interactive 3D portfolio built with Three.js and React Three Fiber.",
      tags: ["Three.js", "React", "WebGL"],
      image: "/placeholder.svg?height=150&width=300",
      color: "border-accent-green",
    },
    {
      id: 5,
      title: "AI Chat Bot",
      description: "A custom chatbot for stream interactions using AI.",
      tags: ["Python", "TensorFlow", "API"],
      image: "/placeholder.svg?height=150&width=300",
      color: "border-primary",
    },
    {
      id: 6,
      title: "Mobile App",
      description: "A cross-platform mobile app for community engagement.",
      tags: ["React Native", "Firebase", "Redux"],
      image: "/placeholder.svg?height=150&width=300",
      color: "border-secondary",
    },
  ]
}

