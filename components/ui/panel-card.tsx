import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface PanelCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function PanelCard({ children, className, hover = true, onClick }: PanelCardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-border-subtle rounded-xl p-6",
        "shadow-card transition-all duration-200",
        hover && "hover:shadow-card-hover hover:border-border-panel cursor-pointer",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
