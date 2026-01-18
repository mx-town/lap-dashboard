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
        "panel-card",
        hover && "panel-card-hover cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
