"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import type { Category, Section } from "@/data"
import { getSectionsByCategory } from "@/data"
import { NumberBadge } from "@/components/ui/number-badge"
import Link from "next/link"
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
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(currentCategoryId ? [currentCategoryId] : [])
  )

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId)
    } else {
      newExpanded.add(categoryId)
    }
    setExpandedCategories(newExpanded)
  }

  return (
    <nav className="space-y-1">
      {categories.map((category) => {
        const categorySections = getSectionsByCategory(category.id)
        const isExpanded = expandedCategories.has(category.id)
        const isActive = category.id === currentCategoryId

        return (
          <div key={category.id} className="select-none">
            <button
              onClick={() => toggleCategory(category.id)}
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
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-text-muted flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 text-text-muted flex-shrink-0" />
              )}
            </button>

            {isExpanded && (
              <div className="ml-8 mt-1 space-y-0.5">
                {categorySections.map((section) => {
                  const isSectionActive = section.id === currentSectionId
                  return (
                    <Link
                      key={section.id}
                      href={`/${category.id}/${section.id}`}
                      className={cn(
                        "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-all",
                        "hover:bg-bg-secondary",
                        isSectionActive
                          ? "bg-accent-primary/10 text-accent-primary font-medium"
                          : "text-text-secondary hover:text-text-primary"
                      )}
                    >
                      <NumberBadge number={section.number} />
                      <span className="flex-1">{section.title}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
