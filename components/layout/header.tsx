"use client"

import { Search, Menu } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, KeyboardEvent, useEffect } from "react"
import Link from "next/link"
import { SearchPopup } from "./search-popup"

interface HeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  onMenuClick?: () => void
}

export function Header({ searchQuery, onSearchChange, onMenuClick }: HeaderProps) {
  const router = useRouter()
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

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
    } else if (e.key === "Escape") {
      setSearchOpen(false)
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center gap-4">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <h1 className="text-xl font-semibold text-text-primary tracking-tight">
                Mechatronik Lexikon
              </h1>
            </Link>
            
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-5 h-5 pointer-events-none z-10" />
              <input
                type="text"
                placeholder="Begriff suchen... (⌘K)"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleSearch}
                onFocus={() => setSearchOpen(true)}
                className="w-full pl-10 pr-4 py-2.5 bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/20 focus:border-accent-primary rounded-lg transition-all"
              />
            </div>

            {onMenuClick && (
              <button
                onClick={onMenuClick}
                className="lg:hidden p-2 text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded-lg transition-colors flex-shrink-0"
                aria-label="Menu öffnen"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </header>

      <SearchPopup
        query={searchQuery}
        onQueryChange={onSearchChange}
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  )
}
