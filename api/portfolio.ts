import type { PortfolioProject } from "@/types/api"

// Simulated API function to fetch portfolio projects
export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  // In a real app, this would be a fetch call to an API endpoint
  return [
    {
    id: 1,
    title: "Personal Portfolio",
    description: "A responsive portfolio website built with React and TailwindCSS, featuring animated transitions and interactive elements. The design focuses on showcasing projects in a clean, organized manner while providing an engaging user experience.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "TailwindCSS", "Framer Motion", "Responsive Design"],
    link: "https://wavedidwhat.xyz",
    githubLink: "https://github.com/enochthedev/portfolio",
    demoType: "site",
    category: "Web Development"
    },
    {
      id: 2,
      title: "RelayHelp",
      description: "A Discord-integrated customer support platform that enables ticket creation, automation, AI features, and workspace dashboards. Built to streamline server support workflows.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "PostgreSQL", "Discord API", "Prisma", "AI"],
      link: "https://relayhelp.com",
      githubLink: "https://github.com/enochthedev/RelayHelp-frontend",
      category: "Web2"
    },
    {
      id:3,
      title: "Relayhelp Bot",
      description: "A powerful Discord bot for RelayHelp that automates ticket management, AI responses, and workspace interactions. Designed to enhance user experience and streamline support processes.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Discord.js", "TypeScript", "Redis", "PostgreSQL", "AI"],
      githubLink: "https://github.com/enochthedev/Relayhelp-bot",
      category: "Web2"
    },
    {
      id: 4,
      title: "Relayhelp Backend",
      description: "The backend API for RelayHelp, built with elixir and Phoenix. It provides robust support for ticket management, user authentication, and real-time updates via WebSockets.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Elixir", "Phoenix", "PostgreSQL", "WebSockets"],
      githubLink: "https://github.com/enochthedev/Relayhelp-backend",
      category: "Web2"
    },
    {
      id: 5,
      title: "Bean Bot",
      description: "A modular Web3 Discord bot with domains for trading, automation, AI tools, and mempool sniping. Built to support degens, devs, and community managers.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Discord.js", "TypeScript", "Redis", "Web3", "AI", "Rust"],
      githubLink: "https://github.com/enochthedev/bean-bot",
      category: "Web3"
    },
    {
      id: 6,
      title: "Peeksy",
      description: "Peeksy turns ordinary links into beautiful, embedded previews using Open Graph and metadata scraping. It’s designed to enhance user experience by making URLs visually engaging in blogs, chat apps, or dashboards.",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://peeksyme.vercel.app/",
      githubLink: "https://github.com/enochthedev/peeksy",
      tags: ["NextJs", "R3F", "WebGL", "3D"],
      category: "Creative"
    },
    {
      id: 7,
      title: "Nuse Bot",
      description: "An AI-powered assistant for Discord and Telegram that helps users automate tasks, get summaries, and interact with bots across multiple platforms.",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://nusebot.vercel.app/",
      tags: ["Node.js", "Telegram API", "DiscordJS", "Langchain", "LLM","NextJS"],
      category: "AI & ML"
    },
    {
      id: 8,
      title: "Mint Bot",
      description: "A high-speed NFT minting bot with mempool monitoring, CLI, Flashbots support, and Solana + EVM chain integration. Built for power users and DAOs.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Rust", "Solana", "Ethereum", "Redis", "CLI"],
      category: "Web3"
    },
    {
      id: 9,
      title: "Gitsink",
      description: "A GitHub-to-API sync engine that enriches project metadata using a custom markdown file and offers a developer dashboard with API key control.",
      image: "/placeholder.svg?height=300&width=500",
      githubLink: "https://github.com/coffeeRoom/gitsink",
      tags: ["Node.js", "Supabase", "GitHub API", "Redis", "GraphQL", "Open Source"],
      category: "Web2"
    },
    {
      id: 10,
      title: "Drip Pay",
      description: "A crypto-native billing system for recurring payments and subscriptions using smart contracts. Supports multiple chains and token types.",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://drippay.vercel.app",
      tags: ["Solidity", "ERC20", "Smart Contracts", "Billing", "Next.js"],
      category: "Web3"
    },
    {
      id: 11,
      title: "Project Hub",
      description: "An open-source platform for students to discover and contribute to project ideas based on interests and skillsets. Includes AI recommendations and contributor credits.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "AI", "TailwindCSS", "Education"],
      category: "Web Development"
    },
    {
      id: 12,
      title: "Paper Trail",
      description: "A retro book-themed markdown reader with animated page transitions. Built for immersive reading experiences, blending nostalgia with modern frontend tools.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Markdown", "Framer Motion"],
      link: "https://mdpapertrail.vercel.app",
      githubLink: "https://github.com/enochthedevname/mdpapertrail",
      demoType: "site",
      category: "Creative"
    },
    {
      id: 13,
      title: "Streamline",
      description:
        "A custom dashboard for managing streams and viewer interactions, with real-time analytics and chat integration. Streamers can monitor engagement, manage alerts, and analyze performance metrics all in one centralized interface.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "Socket.io", "Chart.js"],
      category: "Web Development",
    },
    {
      id: 14,
      title: "Onchain Bot Tester",
      description:
        "An internal testing environment for Discord bot modules and message listeners. Helps debug features in isolation before deploying to production bots like Bean Bot both onchain and offchain.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "Socket.io", "Chart.js"],
      category: "Web Development",
    },
    {
      id: 15,
      title: "Project Hub",
      description:
        "A Site for students to find projects for their skills and interests.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "Next.js", "TailwindCSS", "AI"],
      link: "https://myprojecthub.vercel.app/",
      category: "Web Development",
    },
    {
      id: 16,
      title: "Discord NPM package",
      description:
        "A custom Discord bot development toolkit published as an NPM package. Simplifies command registration, permission handling, and modular structure for large-scale bot projects.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Node.js", "Discord.js", "TypeScript", "NPM", "CLI"],
      link: "https://www.npmjs.com/package/create-discord-ts-bot",
      category: "Web Development",
    },
    {
      id: 17,
      title: "MetaMint Studio",
      description: "An IPFS uploader and metadata preview tool designed for mintpad creators. Users can upload images and fill in NFT data to generate valid metadata.json files.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "NFT.storage", "IPFS", "Metadata", "Form Handling"],
      // Not yet shipped
      category: "Web3"
    },
    {
      id: 18,
      title: "Gas Watch",
      description: "A real-time gas estimation component that fetches and displays live gas fees in native token and USD across chains. Meant to be embedded in dApps and mintpads.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Ethers.js", "Gas Estimation", "UI Widget", "Chainlink", "Next.js"],
      // Not yet shipped
      category: "Web3"
    },
    {
      id: 19,
      title: "StableMint",
      description: "A proof-of-concept minting module that enables NFT mints priced in USD using Chainlink price feeds. Converts value to ETH/MATIC at runtime for stable user pricing.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Solidity", "Chainlink", "ERC721", "Oracle", "Pricing"],
      // Not yet shipped
      category: "Web3"
    },
    {
      id: 20,
      title: "MintFactory",
      description: "An interface that allows users to deploy their own NFT contracts with custom configurations like supply, royalties, and mint price. Supports front-end contract deployment with safety checks.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Ethers.js", "Solidity", "Factory Pattern", "Frontend Deployment"],
      // Not yet shipped
      category: "Web3"
    },
    {
      id: 21,
      title: "Launch Lite",
      description: "A lightweight mintpad MVP that brings together wallet connect, gas estimator, metadata uploader, and contract deployment to let creators launch NFT mints on multiple chains.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Web3", "IPFS", "Gas Estimation", "Solidity"],
      // Not yet shipped
      category: "Web3"
    },
    {
      id: 22,
      title: "Onchain Watch",
      description: "A Web3 analytics tool that monitors onchain transactions and triggers Discord alerts for suspicious or tracked wallet activity. Built for degen monitoring and sniping alerts.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Web3", "Ethers.js", "Discord API", "Node.js"],
      // Not yet shipped
      category: "Web3"
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
    case "Web2":
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
    case "Web2":
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
