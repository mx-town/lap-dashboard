import { cn } from "@/lib/utils"

interface NumberBadgeProps {
  number: string
  className?: string
}

export function NumberBadge({ number, className }: NumberBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center min-w-[1.75rem] h-5 px-1.5 rounded-md",
        "font-mono text-xs font-semibold",
        "bg-accent-primary/10 text-accent-primary",
        "border border-accent-primary/20",
        className
      )}
    >
      {number}
    </span>
  )
}
