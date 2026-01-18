"use client"

import { Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState, KeyboardEvent } from "react"
import Link from "next/link"

interface HeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  onMenuClick?: () => void
}

export function Header({ searchQuery, onSearchChange, onMenuClick }: HeaderProps) {
  const router = useRouter()

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="border-b border-border-subtle bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 flex-1">
            <h1 className="text-xl font-semibold text-text-primary">
              Mechatronik Lexikon
            </h1>
          </Link>
          
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-5 h-5" />
            <Input
              type="text"
              placeholder="Begriff suchen... (Enter)"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={handleSearch}
              className="pl-10 pr-4 py-2 bg-bg-tertiary border-border-subtle text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
            />
          </div>

          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary rounded-md transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
