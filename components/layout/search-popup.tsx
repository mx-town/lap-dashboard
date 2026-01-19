"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import Fuse from "fuse.js"
import { entries, getCategoryById, getSectionById } from "@/data"
import { Search } from "lucide-react"

interface SearchPopupProps {
  query: string
  onQueryChange: (query: string) => void
  isOpen: boolean
  onClose: () => void
  onResultSelect?: () => void
}

export function SearchPopup({ query, onQueryChange, isOpen, onClose, onResultSelect }: SearchPopupProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const fuse = useMemo(
    () =>
      new Fuse(entries, {
        keys: [
          "title",
          { name: "content", getFn: (entry) =>
            entry.content.map((block: any) =>
              block.type === 'paragraph' || block.type === 'definition' ? block.text :
              block.type === 'list' ? block.items?.join(' ') : ''
            ).filter(Boolean).join(' ')
          }
        ],
        threshold: 0.3,
        includeScore: true,
      }),
    []
  )

  const searchResults = useMemo(() => {
    if (!query.trim()) return []
    return fuse.search(query).slice(0, 8).map((result) => result.item)
  }, [query, fuse])

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const navigateToEntry = (entryId: string) => {
    // Scroll to the entry using anchor
    const element = document.getElementById(entryId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Update URL hash without full navigation
      window.history.pushState(null, '', `#${entryId}`)
    }
    onQueryChange("")
    onResultSelect?.()
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => Math.min(prev + 1, searchResults.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === "Enter" && searchResults[selectedIndex]) {
      e.preventDefault()
      navigateToEntry(searchResults[selectedIndex].id)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50 px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-border-subtle overflow-hidden">
          {/* Search Input */}
          <div className="relative p-4 border-b border-border-subtle bg-gradient-to-r from-bg-secondary/50 to-white">
            <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-accent-primary w-5 h-5 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Begriff suchen..."
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pl-12 pr-4 py-3 bg-white border border-border-subtle rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary/50 shadow-sm"
            />
          </div>

          {/* Results */}
          {query.trim() && (
            <div className="max-h-96 overflow-y-auto">
              {searchResults.length > 0 ? (
                <ul className="py-2">
                  {searchResults.map((entry, index) => {
                    const section = getSectionById(entry.sectionId)
                    const category = section ? getCategoryById(section.categoryId) : null

                    return (
                      <li key={entry.id}>
                        <button
                          onClick={() => navigateToEntry(entry.id)}
                          className={`w-full text-left block px-5 py-3.5 transition-all border-l-2 ${
                            index === selectedIndex
                              ? "bg-accent-primary/5 border-l-accent-primary"
                              : "border-l-transparent hover:bg-bg-secondary hover:border-l-accent-primary/50"
                          }`}
                        >
                          <div className="font-semibold text-text-primary mb-1 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50"></span>
                            {entry.title}
                          </div>
                          {category && section && (
                            <div className="text-sm text-text-muted ml-3.5 flex items-center gap-1.5">
                              <span className="font-medium text-text-secondary">{category.title}</span>
                              <span className="text-accent-primary/50">→</span>
                              <span>{section.title}</span>
                            </div>
                          )}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <div className="py-12 text-center text-text-muted">
                  <div className="text-5xl mb-3 opacity-50">🔍</div>
                  <p className="text-sm">Keine Ergebnisse gefunden</p>
                  <p className="text-xs mt-1 text-text-light">Versuchen Sie einen anderen Suchbegriff</p>
                </div>
              )}
            </div>
          )}

          {/* Footer hint */}
          {!query.trim() && (
            <div className="py-6 px-5 text-center text-text-muted border-t border-border-subtle/50 bg-bg-secondary/30">
              <p className="text-sm">Geben Sie einen Begriff ein, um zu suchen</p>
              <p className="text-xs mt-1.5 text-text-light">
                <kbd className="px-1.5 py-0.5 bg-white border border-border-subtle rounded text-xs mr-1">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-white border border-border-subtle rounded text-xs mr-1">↓</kbd>
                zum Navigieren
                <span className="mx-2">|</span>
                <kbd className="px-1.5 py-0.5 bg-white border border-border-subtle rounded text-xs mr-1">Enter</kbd>
                zum Auswählen
                <span className="mx-2">|</span>
                <kbd className="px-1.5 py-0.5 bg-white border border-border-subtle rounded text-xs">Esc</kbd>
                zum Schließen
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
