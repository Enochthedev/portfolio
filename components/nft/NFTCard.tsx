"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Info, ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Persona from "@/components/Persona"
import { useMobile } from "@/hooks/use-mobile"
import type { NFT } from "@/types"

interface NFTCardProps {
  nft: NFT
  index: number
  isHovered: boolean
  onHover: (id: number | null) => void
  onSelect: (nft: NFT) => void
}

/**
 * NFTCard component for displaying NFT information
 *
 * @param nft - NFT data to display
 * @param index - Index for staggered animations
 * @param isHovered - Whether the card is being hovered
 * @param onHover - Hover state handler
 * @param onSelect - Selection handler
 */
export function NFTCard({ nft, index, isHovered, onHover, onSelect }: NFTCardProps) {
  const isMobile = useMobile()

  const rarityColors = {
    Common: "bg-gray-500",
    Uncommon: "bg-green-500",
    Rare: "bg-blue-500",
    Epic: "bg-purple-500",
    Legendary: "bg-yellow-500",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: isMobile ? -2 : -5 }}
      className="group"
      onMouseEnter={() => onHover(nft.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Card className="comic-border overflow-hidden border-primary hover:shadow-lg transition-all duration-300 shadow-glow-sm">
        <div className="relative">
          <Image
            src={nft.image || "/placeholder.svg"}
            alt={nft.name}
            width={300}
            height={300}
            loading="lazy"
            className="w-full aspect-square object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge className={`${rarityColors[nft.rarity]} text-white text-xs md:text-sm`}>{nft.rarity}</Badge>
          </div>
          <div className="absolute bottom-2 right-2">
            <Persona
              emotion={isHovered ? "excited" : "default"}
              size={isMobile ? "tiny" : "small"}
              animate={isHovered}
            />
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary" size={isMobile ? "sm" : "default"} onClick={() => onSelect(nft)}>
              View Details
            </Button>
          </div>
        </div>
        <CardContent className="p-3 md:p-4">
          <h3 className="text-base md:text-lg font-bold">{nft.name}</h3>
          <p className="text-xs md:text-sm text-muted-foreground">{nft.collection}</p>
        </CardContent>
        <CardFooter className="p-3 pt-0 md:p-4 md:pt-0 flex justify-between">
          <Button variant="ghost" size="sm" className="gap-1 text-primary" onClick={() => onSelect(nft)}>
            <Info className="h-3 w-3 md:h-4 md:w-4" />
            <span className="text-xs md:text-sm">Info</span>
          </Button>
          {nft.link && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-accent-blue text-accent-blue hover:bg-accent-blue/10"
            >
              <a href={nft.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm">View</span>
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

