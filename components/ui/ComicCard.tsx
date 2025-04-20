"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { BaseProps } from "@/types"

interface ComicCardProps extends BaseProps {
  headerContent?: React.ReactNode
  footerContent?: React.ReactNode
  borderColor?: string
  onClick?: () => void
}

/**
 * ComicCard component for comic-styled cards
 *
 * @param children - Content to be rendered inside the card
 * @param className - Additional CSS classes
 * @param headerContent - Optional header content
 * @param footerContent - Optional footer content
 * @param borderColor - Border color class
 * @param onClick - Click handler
 */
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
        "comic-border overflow-hidden hover:shadow-lg transition-all duration-300 shadow-glow-sm border-gray-200",
        borderColor,
        className,
      )}
      onClick={onClick}
    >
      {headerContent && <CardHeader className="p-3 md:p-4">{headerContent}</CardHeader>}
      <CardContent className="p-3 md:p-4">{children}</CardContent>
      {footerContent && <CardFooter className="p-3 pt-0 md:p-4 md:pt-0">{footerContent}</CardFooter>}
    </Card>
  )
}

