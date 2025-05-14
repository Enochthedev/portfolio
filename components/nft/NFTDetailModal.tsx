"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ExternalLink } from "lucide-react"
import type { NFT } from "@/types"

interface NFTDetailModalProps {
  nft: NFT | null
  onClose: () => void
}

export function NFTDetailModal({ nft, onClose }: NFTDetailModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (nft) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [nft])

  return (
    <AnimatePresence>
      {nft && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-1/2 relative bg-black">
              <OptimizedImage
                src={nft.image}
                alt={nft.name}
                width={600}
                height={600}
                className="w-full h-full object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="md:w-1/2 p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="bg-accent-blue/10 text-accent-blue border-accent-blue">
                  #{nft.tokenId}
                </Badge>
                <Badge variant="secondary">{nft.collection}</Badge>
              </div>

              <h2 className="text-2xl font-bold mb-2">{nft.name}</h2>
              <p className="text-muted-foreground mb-6">{nft.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted p-3 rounded-md">
                  <div className="text-sm text-muted-foreground">Price</div>
                  <div className="font-bold">{nft.price} ETH</div>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <div className="text-sm text-muted-foreground">Rarity</div>
                  <div className="font-bold">{nft.rarity}</div>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <div className="text-sm text-muted-foreground">Created</div>
                  <div className="font-bold">{nft.created}</div>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <div className="text-sm text-muted-foreground">Creator</div>
                  <div className="font-bold">{nft.creator}</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Attributes</h3>
                <div className="flex flex-wrap gap-2">
                  {nft.attributes.map((attr, index) => (
                    <Badge key={index} variant="outline" className="bg-muted">
                      {attr}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="default" className="w-full gap-2 bg-accent-blue hover:bg-accent-blue/90">
                  View on OpenSea
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
