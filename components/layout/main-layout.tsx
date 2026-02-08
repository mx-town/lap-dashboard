"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { CategoryTree } from "@/components/navigation/category-tree"
import { SearchPopup } from "./search-popup"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

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
    <div className="h-screen w-full flex flex-col bg-bg-primary overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:static pl-4 lg:pl-0 h-11 w-full lg:flex-row flex-row-reverse flex border-b border-border-subtle bg-bg-primary flex-shrink-0">
        <div className="w-72 flex-1 lg:flex-[unset] lg:flex-shrink-0 h-full flex items-center lg:px-5 border-r border-border-subtle">
          <Link href="/" className="text-sm font-medium text-text-primary hover:text-accent-primary transition-colors">
            Mechatronik Lexikon
          </Link>

            <button
            onClick={() => setSearchOpen(true)}
            className="lg:hidden ml-auto p-4 text-text-muted hover:text-text-primary rounded transition-colors flex-shrink-0"
            aria-label="Suchen"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        <div className="lg:flex-1 flex items-center lg:px-6 gap-3">
          <div className="hidden md:block flex-1 relative max-w-md">
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

          <div className="hidden lg:flex items-center gap-1.5 ml-auto text-xs text-text-muted flex-shrink-0">
            <span>Niklas Martinek</span>
            <span className="text-border-strong">&middot;</span>
            <span>Claude</span>
            <span className="text-border-strong">&middot;</span>
            <span>Vercel</span>
          </div>

          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden ml-auto p-2 text-text-muted hover:text-text-primary rounded transition-colors flex-shrink-0"
            aria-label="Menu öffnen"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden pt-11 lg:pt-0">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-72 h-full overflow-y-auto scrollbar-hide border-r border-border-subtle bg-bg-primary flex-shrink-0">
          <div className="p-4">
            <CategoryTree categories={categories} />
          </div>
        </aside>

        {/* Mobile sidebar sheet */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent 
            side="left" 
            className="w-72 p-0 bg-bg-primary border-r border-border-subtle lg:hidden flex flex-col h-full"
          >
            <SheetHeader className="px-4 py-3 border-b border-border-subtle flex-shrink-0">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-xs font-medium text-text-muted uppercase tracking-wide text-left">
                  Inhalt
                </SheetTitle>
                <span className="text-[10px] text-text-light">Niklas Martinek &middot; Claude &middot; Vercel</span>
              </div>
            </SheetHeader>
            <div 
              className="flex-1 overflow-y-auto px-4 py-4 min-h-0"
              onClick={(e) => {
                // Close sheet when a link is clicked
                const target = e.target as HTMLElement
                if (target.tagName === 'A' || target.closest('a')) {
                  setSidebarOpen(false)
                }
              }}
            >
              <CategoryTree categories={categories} />
            </div>
          </SheetContent>
        </Sheet>

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
