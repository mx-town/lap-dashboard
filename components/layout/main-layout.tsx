"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { CategoryTree } from "@/components/navigation/category-tree"
import { SearchPopup } from "./search-popup"

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

interface SearchEntry {
  id: string
  title: string
  categoryId: string
  categoryTitle: string
  categoryNumber: number
  sectionNumber: string
  content: string
}

interface MainLayoutProps {
  children: React.ReactNode
  categories: CategoryData[]
  searchIndex: SearchEntry[]
}

export function MainLayout({ children, categories, searchIndex }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)

  // Cmd/Ctrl + K shortcut
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="h-screen w-full flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <header className="h-11 w-full flex border-b border-border-subtle bg-white flex-shrink-0">
        {/* Left: App name */}
        <div className="w-64 flex-shrink-0 h-full flex items-center px-5 border-r border-border-subtle">
          <Link href="/" className="text-sm font-medium text-text-primary hover:text-accent-primary transition-colors">
            Mechatronik Lexikon
          </Link>
        </div>
        {/* Right: Search */}
        <div className="flex-1 flex items-center px-6 gap-3">
          <div className="flex-1 relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Suchen... (⌘K)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
              className="w-full pl-9 pr-4 py-1.5 text-sm bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent-primary/30 focus:border-accent-primary/40 rounded-md transition-colors"
            />
          </div>
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-text-muted hover:text-text-primary rounded transition-colors flex-shrink-0"
            aria-label="Menu öffnen"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-72 h-full overflow-y-auto scrollbar-hide border-r border-border-subtle bg-white flex-shrink-0">
          <div className="p-4">
            <CategoryTree categories={categories} />
          </div>
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="fixed top-11 left-0 h-[calc(100vh-2.75rem)] w-64 bg-white border-r border-border-subtle z-50 lg:hidden">
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
                  <span className="text-xs font-medium text-text-muted uppercase tracking-wide">
                    Inhalt
                  </span>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-1 text-text-muted hover:text-text-primary rounded transition-colors"
                    aria-label="Navigation schließen"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-4">
                  <CategoryTree categories={categories} />
                </div>
              </div>
            </aside>
          </>
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 overflow-y-auto">{children}</main>
      </div>

      {/* Search popup */}
      <SearchPopup
        query={searchQuery}
        onQueryChange={setSearchQuery}
        isOpen={searchOpen}
        onClose={() => {
          setSearchQuery("")
          setSearchOpen(false)
        }}
        onResultSelect={() => setSearchQuery("")}
        searchIndex={searchIndex}
      />
    </div>
  )
}
