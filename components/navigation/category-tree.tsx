"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import type { Category, Section } from "@/data"
import { getSectionsByCategory } from "@/data"
import { NumberBadge } from "@/components/ui/number-badge"
import { StatusDot } from "@/components/ui/status-dot"
import Link from "next/link"

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
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                isActive
                  ? "bg-bg-tertiary text-accent-primary"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
              }`}
            >
              <StatusDot active={isActive} />
              <span className="flex-1 text-left flex items-center gap-2">
                <span className="font-mono text-xs">{category.number}.</span>
                <span>{category.title}</span>
              </span>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {isExpanded && (
              <div className="ml-6 mt-1 space-y-1">
                {categorySections.map((section) => {
                  const isSectionActive = section.id === currentSectionId
                  return (
                    <Link
                      key={section.id}
                      href={`/${category.id}/${section.id}`}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors block ${
                        isSectionActive
                          ? "bg-bg-tertiary text-accent-primary"
                          : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                      }`}
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
