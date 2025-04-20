"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Persona from "@/components/persona"
import type { NFT } from "@/components/ui/nft-card"

interface NFTDetailModalProps {
  nft: NFT | null
  onClose: () => void
}

export function NFTDetailModal({ nft, onClose }: NFTDetailModalProps) {
  if (!nft) return null

  const rarityColors = {
    Common: "bg-gray-500",
    Uncommon: "bg-green-500",
    Rare: "bg-blue-500",
    Epic: "bg-purple-500",
    Legendary: "bg-yellow-500",
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="comic-border bg-card border-primary rounded-lg overflow-hidden max-w-md w-full shadow-glow"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <Image
              src={nft.image || "/placeholder.svg"}
              alt={nft.name}
              width={500}
              height={500}
              className="w-full aspect-square object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge className={`${rarityColors[nft.rarity]} text-white`}>{nft.rarity}</Badge>
            </div>
            <div className="absolute bottom-2 right-2">
              <Persona emotion="excited" size="small" />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-primary">{nft.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">Collection: {nft.collection}</p>
            <p className="mb-6">{nft.description}</p>
            <div className="flex justify-between">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              {nft.link && (
                <Button asChild className="bg-accent-blue hover:bg-accent-blue/90 shadow-glow-sm">
                  <a href={nft.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <span>View on OpenSea</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

