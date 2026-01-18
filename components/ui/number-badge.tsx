import { cn } from "@/lib/utils"

interface NumberBadgeProps {
  number: string
  className?: string
}

export function NumberBadge({ number, className }: NumberBadgeProps) {
  return (
    <span className={cn("number-badge", className)}>
      {number}
    </span>
  )
}
