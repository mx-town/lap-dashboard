"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface HeadingNode {
  id: string
  text: string
  level: 2 | 3
}

interface CategoryData {
  id: string
  number: number
  title: string
  headings: HeadingNode[]
}

interface CategoryTreeProps {
  categories: CategoryData[]
}

export function CategoryTree({ categories }: CategoryTreeProps) {
  const [activeHeading, setActiveHeading] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const headingRefs = useRef<Map<string, HTMLAnchorElement>>(new Map())

  // Auto-scroll sidebar to keep active heading visible
  useEffect(() => {
    if (activeHeading) {
      const el = headingRefs.current.get(activeHeading)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }
  }, [activeHeading])

  // IntersectionObserver to track visible heading
  useEffect(() => {
    const allHeadings = categories.flatMap(cat =>
      cat.headings.filter(h => h.level === 2).map(h => ({ ...h, categoryId: cat.id }))
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(e => e.isIntersecting)
        if (visible) {
          const headingId = visible.target.id
          setActiveHeading(headingId)

          const heading = allHeadings.find(h => h.id === headingId)
          if (heading) {
            setActiveCategory(heading.categoryId)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    allHeadings.forEach(heading => {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [categories])

  return (
    <nav className="space-y-1">
      {categories.map((category) => {
        const isActive = category.id === activeCategory
        const sectionHeadings = category.headings.filter(h => h.level === 2)

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
              {sectionHeadings.map((heading) => {
                const isHeadingActive = heading.id === activeHeading
                // Extract section number from heading text (e.g., "1.1 Basisschutz" -> "1.1")
                const numberMatch = heading.text.match(/^([\d.]+)/)
                const sectionNumber = numberMatch ? numberMatch[1] : ''
                const sectionTitle = heading.text.replace(/^[\d.]+\s*/, '')

                return (
                  <a
                    key={heading.id}
                    ref={(el) => {
                      if (el) headingRefs.current.set(heading.id, el)
                    }}
                    href={`#${heading.id}`}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-all",
                      "hover:bg-bg-secondary",
                      isHeadingActive
                        ? "bg-accent-primary/10 text-accent-primary font-medium"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    <span className="font-mono w-8 flex-shrink-0">{sectionNumber}</span>
                    <span className="flex-1">{sectionTitle}</span>
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
