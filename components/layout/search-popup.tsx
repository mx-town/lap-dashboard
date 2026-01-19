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
        className="fixed inset-0 bg-black/10 z-40"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-full max-w-lg z-50 px-4">
        <div className="bg-white rounded-lg shadow-lg border border-border-subtle overflow-hidden">
          {/* Search Input */}
          <div className="relative p-3 border-b border-border-subtle">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Suchen..."
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pl-10 pr-4 py-2 text-sm bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none"
            />
          </div>

          {/* Results */}
          {query.trim() && (
            <div className="max-h-80 overflow-y-auto">
              {searchResults.length > 0 ? (
                <ul className="py-1">
                  {searchResults.map((entry, index) => {
                    const section = getSectionById(entry.sectionId)
                    const category = section ? getCategoryById(section.categoryId) : null

                    return (
                      <li key={entry.id}>
                        <button
                          onClick={() => navigateToEntry(entry.id)}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                            index === selectedIndex
                              ? "bg-bg-secondary"
                              : "hover:bg-bg-secondary/50"
                          }`}
                        >
                          <div className="font-medium text-text-primary">
                            {entry.title}
                          </div>
                          {category && section && (
                            <div className="text-xs text-text-muted mt-0.5">
                              {category.title} → {section.title}
                            </div>
                          )}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <div className="py-8 text-center text-text-muted text-sm">
                  Keine Ergebnisse
                </div>
              )}
            </div>
          )}

          {/* Footer hint */}
          {!query.trim() && (
            <div className="py-4 px-4 text-center text-text-muted text-xs">
              <kbd className="px-1 py-0.5 bg-bg-secondary border border-border-subtle rounded text-xs">↑↓</kbd>
              {" "}navigieren{" "}
              <kbd className="px-1 py-0.5 bg-bg-secondary border border-border-subtle rounded text-xs ml-2">Enter</kbd>
              {" "}auswählen{" "}
              <kbd className="px-1 py-0.5 bg-bg-secondary border border-border-subtle rounded text-xs ml-2">Esc</kbd>
              {" "}schließen
            </div>
          )}
        </div>
      </div>
    </>
  )
}
