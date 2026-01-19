"use client"

import { useState, useEffect, useRef } from "react"
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
  const sectionRefs = useRef<Map<string, HTMLAnchorElement>>(new Map())

  // Auto-scroll sidebar to keep active section visible
  useEffect(() => {
    if (activeSection) {
      const el = sectionRefs.current.get(activeSection)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }
  }, [activeSection])

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
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                "hover:bg-bg-secondary",
                isActive
                  ? "bg-accent-primary/10 text-accent-primary"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              <span className="font-mono w-5">{category.number}.</span>
              <span className="flex-1 text-left">{category.title}</span>
            </a>

            <div className="ml-8 mt-1 space-y-0.5">
              {categorySections.map((section) => {
                const isSectionActive = section.id === activeSection
                return (
                  <a
                    key={section.id}
                    ref={(el) => {
                      if (el) sectionRefs.current.set(section.id, el)
                    }}
                    href={`#${section.id}`}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-all",
                      "hover:bg-bg-secondary",
                      isSectionActive
                        ? "bg-accent-primary/10 text-accent-primary font-medium"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    <span className="font-mono w-8 flex-shrink-0">{section.number}</span>
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
