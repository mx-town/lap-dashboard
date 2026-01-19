"use client"

import { useState, useEffect } from "react"
import type { Category, Section } from "@/data"
import { getSectionsByCategory } from "@/data"
import { cn } from "@/lib/utils"

interface CategoryTreeProps {
  categories: Category[]
  sections: Section[]
  currentCategoryId?: string
  currentSectionId?: string
}

export function CategoryTree({
  categories,
  sections,
  currentCategoryId,
  currentSectionId,
}: CategoryTreeProps) {
  const [scrollActiveSection, setScrollActiveSection] = useState<string | null>(null)
  const [scrollActiveCategory, setScrollActiveCategory] = useState<string | null>(null)

  // IntersectionObserver to track visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting section
        const visible = entries.find(e => e.isIntersecting)
        if (visible) {
          const sectionId = visible.target.id
          setScrollActiveSection(sectionId)

          // Find the category for this section
          const section = sections.find(s => s.id === sectionId)
          if (section) {
            setScrollActiveCategory(section.categoryId)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    // Observe all section elements
    sections.forEach(sec => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  // Use scroll-based highlighting, fall back to URL-based
  const activeCategoryId = scrollActiveCategory || currentCategoryId
  const activeSectionId = scrollActiveSection || currentSectionId

  return (
    <nav className="space-y-1">
      {categories.map((category) => {
        const categorySections = getSectionsByCategory(category.id)
        const isActive = category.id === activeCategoryId

        return (
          <div key={category.id}>
            <a
              href={`#${category.id}`}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                "hover:bg-bg-secondary",
                isActive
                  ? "bg-accent-primary/10 text-accent-primary"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              <span className="flex-1 text-left flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-text-muted">
                  {category.number}.
                </span>
                <span>{category.title}</span>
              </span>
            </a>

            <div className="ml-8 mt-1 space-y-0.5">
              {categorySections.map((section) => {
                const isSectionActive = section.id === activeSectionId
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-all",
                      "hover:bg-bg-secondary",
                      isSectionActive
                        ? "bg-accent-primary/10 text-accent-primary font-medium"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    <span className="font-mono text-xs text-text-muted flex-shrink-0">
                      {section.number}
                    </span>
                    <span className="flex-1">{section.title}</span>
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
