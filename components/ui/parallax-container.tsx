"use client"

import type React from "react"

import { type ReactNode, useRef } from "react"

interface ParallaxContainerProps {
  children: ReactNode
  className?: string
}

export function ParallaxContainer({ children, className }: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()

    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5

    const elements = document.querySelectorAll(".parallax-element")
    elements.forEach((el) => {
      const speed = Number.parseFloat(el.getAttribute("data-speed") || "1")
      const xOffset = x * 20 * speed
      const yOffset = y * 20 * speed
      el.setAttribute("style", `transform: translate(${xOffset}px, ${yOffset}px)`)
    })
  }

  return (
    <div ref={containerRef} className={className} onMouseMove={handleMouseMove}>
      {children}
    </div>
  )
}
