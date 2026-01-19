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
    <nav className="space-y-1">
      {categories.map((category) => {
        const categorySections = getSectionsByCategory(category.id)
        const isActive = category.id === activeCategory

        return (
          <div key={category.id}>
            <a
              href={`#${category.id}`}
              className={cn(
                "block px-3 py-2 text-sm transition-colors rounded",
                isActive
                  ? "text-text-primary font-medium"
                  : "text-text-muted hover:text-text-primary"
              )}
            >
              <span className="font-mono text-xs mr-2 text-text-muted">{category.number}.</span>
              {category.title}
            </a>

            <div className="ml-5 border-l border-border-subtle">
              {categorySections.map((section) => {
                const isSectionActive = section.id === activeSection
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={cn(
                      "block pl-4 pr-3 py-1.5 text-sm transition-colors",
                      isSectionActive
                        ? "text-accent-primary border-l-2 border-accent-primary -ml-px"
                        : "text-text-muted hover:text-text-secondary"
                    )}
                  >
                    <span className="font-mono text-xs mr-2">{section.number}</span>
                    {section.title}
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
