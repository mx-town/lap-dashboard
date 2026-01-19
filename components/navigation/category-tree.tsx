"use client"

import { useState, useEffect } from "react"
import type { Category, Section } from "@/data"
import { getSectionsByCategory } from "@/data"
import { cn } from "@/lib/utils"

interface CategoryTreeProps {
  categories: Category[]
  sections: Section[]
}

export function CategoryTree({ categories, sections }: CategoryTreeProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // IntersectionObserver to track visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(e => e.isIntersecting)
        if (visible) {
          const sectionId = visible.target.id
          setActiveSection(sectionId)

          const section = sections.find(s => s.id === sectionId)
          if (section) {
            setActiveCategory(section.categoryId)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    sections.forEach(sec => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <nav className="space-y-2">
      {categories.map((category) => {
        const categorySections = getSectionsByCategory(category.id)
        const isActive = category.id === activeCategory

        return (
          <div key={category.id} className="space-y-1">
            <a
              href={`#${category.id}`}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                "hover:bg-bg-secondary hover:shadow-sm",
                isActive
                  ? "bg-accent-primary/10 text-accent-primary shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              <span className="flex-1 text-left flex items-center gap-2.5">
                <span className={cn(
                  "font-mono text-xs font-bold w-6 h-6 rounded flex items-center justify-center transition-colors",
                  isActive
                    ? "bg-accent-primary text-white"
                    : "bg-bg-tertiary text-text-muted group-hover:bg-accent-primary/20 group-hover:text-accent-primary"
                )}>
                  {category.number}
                </span>
                <span className="truncate">{category.title}</span>
              </span>
            </a>

            <div className="ml-9 border-l-2 border-border-subtle/50 pl-3 space-y-0.5">
              {categorySections.map((section) => {
                const isSectionActive = section.id === activeSection
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm transition-all group/section",
                      "hover:bg-bg-secondary",
                      isSectionActive
                        ? "bg-accent-primary/10 text-accent-primary font-medium border-l-2 border-accent-primary -ml-[calc(0.75rem+2px)] pl-[calc(0.75rem+10px)]"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    <span className={cn(
                      "font-mono text-xs flex-shrink-0 transition-colors",
                      isSectionActive ? "text-accent-primary" : "text-text-muted group-hover/section:text-accent-primary/70"
                    )}>
                      {section.number}
                    </span>
                    <span className="flex-1 truncate">{section.title}</span>
                  </a>
                )
              })}
            </div>
          </div>
        )
      })}
    </nav>
  )
}
