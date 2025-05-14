"use client"

import { motion } from "framer-motion"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Badge } from "@/components/ui/badge"
import { ComicCard } from "@/components/ui/ComicCard"
import type { NFT } from "@/types"

interface NFTCardProps {
  nft: NFT
  index: number
  isHovered: boolean
  onHover: (id: number | null) => void
  onSelect: (nft: NFT) => void
}

export function NFTCard({ nft, index, isHovered, onHover, onSelect }: NFTCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onHoverStart={() => onHover(nft.id)}
      onHoverEnd={() => onHover(null)}
      onClick={() => onSelect(nft)}
      className="cursor-pointer"
    >
      <ComicCard className="overflow-hidden">
        <div className="relative">
          <OptimizedImage
            src={nft.image}
            alt={nft.name}
            width={400}
            height={400}
            className="w-full aspect-square object-cover"
            animationDelay={index * 0.1}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Badge variant="secondary" className="mb-2">
                {nft.collection}
              </Badge>
              <h3 className="text-lg font-bold text-white mb-1">{nft.name}</h3>
              <p className="text-sm text-white/80">{nft.description.substring(0, 60)}...</p>
            </motion.div>
          </motion.div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">{nft.name}</h3>
            <Badge variant="outline" className="bg-accent-blue/10 text-accent-blue border-accent-blue">
              #{nft.tokenId}
            </Badge>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-muted-foreground">{nft.collection}</span>
            <span className="text-sm font-medium">{nft.price} ETH</span>
          </div>
        </div>
      </ComicCard>
    </motion.div>
  )
}
