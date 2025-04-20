"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, ExternalLink } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { ContentTabs } from "@/components/ui/ContentTabs"
import { ParallaxContainer } from "@/components/ui/ParallaxContainer"
import { NFTCard } from "@/components/nft/NFTCard"
import { NFTDetailModal } from "@/components/nft/NFTDetailModal"
import { AnimatedCard } from "@/components/ui/AnimatedCard"
import { ComicCard } from "@/components/ui/ComicCard"
import type { NFT, Project, TabItem } from "@/types"
import { getNFTs } from "@/api/web3"

export default function Web3Page() {
  const [hoveredNFT, setHoveredNFT] = useState<number | null>(null)
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null)
  const [nfts, setNfts] = useState<NFT[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNFTs() {
      try {
        const data = await getNFTs()
        setNfts(data)
      } catch (error) {
        console.error("Failed to fetch NFTs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNFTs()
  }, [])

  const web3Projects: Project[] = [
    {
      title: "NFT Marketplace",
      description:
        "A decentralized marketplace for buying and selling NFTs, built with Next.js and Ethereum smart contracts.",
      image: "/placeholder.svg?height=250&width=500",
      tags: ["Ethereum", "Smart Contracts", "Next.js", "Web3.js"],
      link: "https://example.com",
    },
    {
      title: "Token Generator",
      description: "A tool for creating and deploying custom ERC-20 and ERC-721 tokens on various blockchains.",
      image: "/placeholder.svg?height=250&width=500",
      tags: ["Solidity", "ERC-20", "ERC-721", "Multi-chain"],
      link: "https://example.com",
    },
    {
      title: "DAO Governance",
      description: "A decentralized autonomous organization (DAO) governance platform for community decision-making.",
      image: "/placeholder.svg?height=250&width=500",
      tags: ["DAO", "Governance", "Voting", "Smart Contracts"],
      link: "https://example.com",
    },
    {
      title: "DeFi Dashboard",
      description: "A dashboard for tracking and managing DeFi investments across multiple protocols.",
      image: "/placeholder.svg?height=250&width=500",
      tags: ["DeFi", "Yield Farming", "Staking", "Analytics"],
      link: "https://example.com",
    },
  ]

  const galleryContent = (
    <ParallaxContainer className="relative">
      {/* Exhibition background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="parallax-element absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-xl"
          data-speed="2"
        ></div>
        <div
          className="parallax-element absolute bottom-40 right-20 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-xl"
          data-speed="1.5"
        ></div>
        <div
          className="parallax-element absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full opacity-10 blur-xl"
          data-speed="3"
        ></div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-pulse text-primary">Loading NFT gallery...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nfts.map((nft, index) => (
            <NFTCard
              key={nft.id}
              nft={nft}
              index={index}
              isHovered={hoveredNFT === nft.id}
              onHover={setHoveredNFT}
              onSelect={setSelectedNFT}
            />
          ))}
        </div>
      )}

      <NFTDetailModal nft={selectedNFT} onClose={() => setSelectedNFT(null)} />
    </ParallaxContainer>
  )

  const projectsContent = (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {web3Projects.map((project, index) => (
          <AnimatedCard key={index} index={index}>
            <ComicCard borderColor="border-accent-blue" className="h-full">
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <Button variant="secondary" size="sm" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Project</span>
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-accent-blue">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-accent-blue text-accent-blue">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </ComicCard>
          </AnimatedCard>
        ))}
      </div>

      <div className="mt-12 p-6 comic-border bg-card border-accent-blue shadow-glow">
        <h3 className="text-xl font-bold mb-4 text-accent-blue">Web3 Resources</h3>
        <p className="mb-4">
          Interested in learning more about Web3 and blockchain development? Check out these resources to get started:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-center gap-2">
            <span className="text-accent-blue">→</span>
            <span>Ethereum Developer Documentation</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent-blue">→</span>
            <span>Solidity Programming Language</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent-blue">→</span>
            <span>Web3.js and Ethers.js Libraries</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-accent-blue">→</span>
            <span>OpenZeppelin Smart Contract Templates</span>
          </li>
        </ul>
        <Button variant="outline" className="w-full border-accent-blue text-accent-blue hover:bg-accent-blue/10">
          View All Resources
        </Button>
      </div>
    </div>
  )

  const tabs: TabItem[] = [
    {
      value: "gallery",
      label: "NFT Gallery",
      emotion: "excited",
      content: galleryContent,
    },
    {
      value: "projects",
      label: "Web3 Projects",
      emotion: "web3",
      content: projectsContent,
    },
  ]

  return (
    <Section className="bg-gradient-to-b from-[#F3F4F6] to-[#FAFAFA]">
      <SectionHeader
        title={
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/wave_web3.png"
              alt="Web3 & NFTs"
              width={800}
              height={400}
              loading="lazy"
              className="rounded-lg shadow-glow"
            />
          </div>
        }
        description="Explore my NFT gallery and Web3 projects!"
      />

      <div className="flex justify-center mb-8">
        <Button
          variant="default"
          size="lg"
          className="gap-2 bg-accent-blue hover:bg-accent-blue/90 animate-pulse shadow-glow"
        >
          <Wallet className="h-5 w-5" />
          <span>Connect Wallet</span>
        </Button>
      </div>

      <ContentTabs tabs={tabs} defaultValue="gallery" className="mb-20" />

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-primary">Join My Web3 Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Follow me on social media to stay updated with my latest Web3 projects and NFT releases!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-glow-sm">
            X
          </Button>
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 shadow-glow-sm">
            Discord
          </Button>
          <Button variant="default" className="bg-accent-blue hover:bg-accent-blue/90 shadow-glow">
            Subscribe to Updates
          </Button>
        </div>
      </div>
    </Section>
  )
}

