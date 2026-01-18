"use client"

import { X } from "lucide-react"
import { CategoryTree } from "@/components/navigation/category-tree"
import type { Category, Section } from "@/data"
import { cn } from "@/lib/utils"

interface SidebarProps {
  categories: Category[]
  sections: Section[]
  currentCategoryId?: string
  currentSectionId?: string
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({
  categories,
  sections,
  currentCategoryId,
  currentSectionId,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 h-screen w-80 bg-bg-secondary border-r border-border-subtle z-50 lg:z-auto transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border-subtle">
            <h2 className="text-lg font-semibold text-text-primary">Navigation</h2>
            <button
              onClick={onClose}
              className="lg:hidden p-1 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <CategoryTree
              categories={categories}
              sections={sections}
              currentCategoryId={currentCategoryId}
              currentSectionId={currentSectionId}
            />
          </div>
        </div>
      </aside>
    </>
  )
}
