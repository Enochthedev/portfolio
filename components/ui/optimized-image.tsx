"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { motion } from "framer-motion"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  showPlaceholder?: boolean
  animationDelay?: number
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  showPlaceholder = true,
  animationDelay = 0,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
    >
      {showPlaceholder && !isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse rounded"
          style={{
            width: typeof width === "number" ? `${width}px` : width,
            height: typeof height === "number" ? `${height}px` : height,
          }}
        />
      )}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </motion.div>
  )
}
