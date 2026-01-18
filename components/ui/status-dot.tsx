import { cn } from "@/lib/utils"

interface StatusDotProps {
  active?: boolean
  className?: string
}

export function StatusDot({ active = false, className }: StatusDotProps) {
  return (
    <span
      className={cn(
        "status-dot",
        active ? "status-dot-active" : "status-dot-inactive",
        className
      )}
    />
  )
}
