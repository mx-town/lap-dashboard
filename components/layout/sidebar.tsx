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
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-white border-r border-border-subtle z-50 lg:z-auto transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-bg-secondary">
            <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Inhaltsverzeichnis
            </h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-text-muted hover:text-text-primary hover:bg-bg-tertiary rounded-lg transition-colors"
              aria-label="Navigation schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
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
