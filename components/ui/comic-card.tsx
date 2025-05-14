"use client"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ComicCardProps {
  children: ReactNode
  className?: string
  headerContent?: ReactNode
  footerContent?: ReactNode
  borderColor?: string
  onClick?: () => void
}

export function ComicCard({
  children,
  className,
  headerContent,
  footerContent,
  borderColor = "border-primary",
  onClick,
}: ComicCardProps) {
  return (
    <Card
      className={cn(
        "comic-border overflow-hidden hover:shadow-lg transition-all duration-300 shadow-glow-sm",
        borderColor,
        className,
      )}
      onClick={onClick}
    >
      {headerContent && <CardHeader>{headerContent}</CardHeader>}
      <CardContent className="p-4">{children}</CardContent>
      {footerContent && <CardFooter className="p-4 pt-0">{footerContent}</CardFooter>}
    </Card>
  )
}
