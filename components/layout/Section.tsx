import { cn } from "@/lib/utils"
import type { BaseProps } from "@/types"

interface SectionProps extends BaseProps {
  id?: string
}

/**
 * Section component for consistent page sections
 *
 * @param children - Content to be rendered inside the section
 * @param className - Additional CSS classes
 * @param id - Optional ID for the section
 */
export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-8 md:py-12 px-4", className)}>
      <div className="container mx-auto">{children}</div>
    </section>
  )
}
