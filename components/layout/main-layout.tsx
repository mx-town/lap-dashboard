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
      <header className="h-12 w-full flex border-b border-border-subtle bg-white/95 backdrop-blur-sm flex-shrink-0 shadow-sm">
        {/* Left: App name (matches sidebar width) */}
        <div className="w-72 flex-shrink-0 h-full flex items-center px-5 border-r border-border-subtle">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-sm">
              <span className="text-white text-xs font-bold">M</span>
            </div>
            <span className="text-sm font-semibold text-text-primary tracking-tight group-hover:text-accent-primary transition-colors">
              Mechatronik Lexikon
            </span>
          </Link>
        </div>
        {/* Right: Search (same padding as main content) */}
        <div className="flex-1 flex items-center px-6 gap-3">
          <div className="flex-1 relative max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4 pointer-events-none z-10" />
            <input
              type="text"
              placeholder="Begriff suchen... (⌘K)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
              className="w-full pl-9 pr-4 py-1.5 text-sm bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/20 focus:border-accent-primary/50 rounded-lg transition-all shadow-sm hover:shadow"
            />
          </div>
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded-lg transition-all flex-shrink-0 hover:shadow-sm"
            aria-label="Menu öffnen"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar - sticky with independent scroll */}
        <aside className="hidden lg:flex lg:flex-col w-72 flex-shrink-0 border-r border-border-subtle bg-gradient-to-b from-white to-bg-secondary/30">
          <div className="sticky top-0 h-[calc(100vh-3rem)] overflow-y-auto">
            <div className="p-4 pb-8">
              <CategoryTree
                categories={categories}
                sections={sections}
              />
            </div>
          </div>
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="fixed top-12 left-0 h-[calc(100vh-3rem)] w-72 bg-white border-r border-border-subtle z-50 lg:hidden shadow-xl animate-in slide-in-from-left duration-200">
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between px-5 py-3 border-b border-border-subtle bg-gradient-to-r from-bg-secondary to-white">
                  <h2 className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    Inhaltsverzeichnis
                  </h2>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-1.5 text-text-muted hover:text-text-primary hover:bg-bg-tertiary rounded-lg transition-all hover:shadow-sm"
                    aria-label="Navigation schließen"
                  >
                    <X className="w-4 h-4" />
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
