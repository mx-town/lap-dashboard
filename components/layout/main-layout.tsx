"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { categories, sections } from "@/data"
import { CategoryTree } from "@/components/navigation/category-tree"
import { SearchPopup } from "./search-popup"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
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
      {/* Full-width header */}
      <header className="h-10 w-full flex border-b border-border-subtle bg-white flex-shrink-0">
        {/* Left: App name (matches sidebar width) */}
        <div className="w-72 flex-shrink-0 h-full flex items-center px-4 border-r border-border-subtle">
          <Link href="/" className="text-sm font-semibold text-text-primary tracking-tight">
            Mechatronik Lexikon
          </Link>
        </div>
        {/* Right: Search (same padding as main content) */}
        <div className="flex-1 flex items-center px-6 gap-2">
          <div className="flex-1 relative max-w-full">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4 pointer-events-none z-10" />
            <input
              type="text"
              placeholder="Begriff suchen... (⌘K)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
              className="w-full pl-8 pr-3 py-1 text-sm bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent-primary/20 focus:border-accent-primary rounded transition-all"
            />
          </div>
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-1 text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded transition-colors flex-shrink-0"
            aria-label="Menu öffnen"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-72 h-full overflow-y-auto border-r border-border-subtle bg-white flex-shrink-0">
          <div className="p-4">
            <CategoryTree
              categories={categories}
              sections={sections}
            />
          </div>
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="fixed top-10 left-0 h-[calc(100vh-2.5rem)] w-72 bg-white border-r border-border-subtle z-50 lg:hidden transition-transform duration-300 ease-in-out">
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-bg-secondary">
                  <h2 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                    Inhaltsverzeichnis
                  </h2>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 text-text-muted hover:text-text-primary hover:bg-bg-tertiary rounded-lg transition-colors"
                    aria-label="Navigation schließen"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-4">
                  <CategoryTree
                    categories={categories}
                    sections={sections}
                  />
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
      />
    </div>
  )
}
