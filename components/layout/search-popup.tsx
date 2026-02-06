"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import Fuse from "fuse.js"
import { Search } from "lucide-react"

interface SearchEntry {
  id: string
  title: string
  categoryId: string
  categoryTitle: string
  categoryNumber: number
  sectionNumber: string
  content: string
}

interface SearchPopupProps {
  query: string
  onQueryChange: (query: string) => void
  isOpen: boolean
  onClose: () => void
  onResultSelect?: () => void
  searchIndex: SearchEntry[]
}

// Extract a snippet around the matched term
function getSnippet(content: string, query: string, maxLength: number = 120): string {
  const lowerContent = content.toLowerCase()
  const lowerQuery = query.toLowerCase()
  const index = lowerContent.indexOf(lowerQuery)

  if (index === -1) {
    // No direct match found, return start of content
    return content.length > maxLength ? content.slice(0, maxLength) + "..." : content
  }

  // Calculate snippet boundaries
  const start = Math.max(0, index - 40)
  const end = Math.min(content.length, index + query.length + 80)

  let snippet = content.slice(start, end)
  if (start > 0) snippet = "..." + snippet
  if (end < content.length) snippet = snippet + "..."

  return snippet
}

// Highlight matching terms in text
function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  const parts = text.split(regex)

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-500/30 text-accent-warning rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  )
}

export function SearchPopup({
  query,
  onQueryChange,
  isOpen,
  onClose,
  onResultSelect,
  searchIndex,
}: SearchPopupProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Configure Fuse.js for full-text search
  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: [
          { name: "title", weight: 2 },
          { name: "content", weight: 1 },
          { name: "categoryTitle", weight: 0.5 },
        ],
        threshold: 0.4,
        includeScore: true,
        includeMatches: true,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [searchIndex]
  )

  const searchResults = useMemo(() => {
    if (!query.trim() || query.length < 2) return []
    return fuse.search(query).slice(0, 10)
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
    const element = document.getElementById(entryId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.pushState(null, "", `#${entryId}`)
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
      navigateToEntry(searchResults[selectedIndex].item.id)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-full max-w-lg z-50 px-4">
        <div className="bg-bg-surface rounded-lg shadow-lg border border-border-subtle overflow-hidden">
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
          {query.trim() && query.length >= 2 && (
            <div className="max-h-[28rem] overflow-y-auto">
              {searchResults.length > 0 ? (
                <ul className="py-2">
                  {searchResults.map((result, index) => {
                    const entry = result.item
                    const snippet = getSnippet(entry.content, query)

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
                          <div className="font-semibold text-text-primary mb-1">
                            {highlightMatch(entry.title, query)}
                          </div>
                          <div className="text-sm text-text-muted mb-1.5">
                            {entry.categoryNumber}. {entry.categoryTitle}
                          </div>
                          {snippet && (
                            <div className="text-xs text-text-secondary line-clamp-2">
                              {highlightMatch(snippet, query)}
                            </div>
                          )}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <div className="py-8 text-center text-text-muted">
                  <p>Keine Ergebnisse für &quot;{query}&quot;</p>
                </div>
              )}
            </div>
          )}

          {/* Hint when query too short */}
          {query.trim() && query.length < 2 && (
            <div className="py-6 text-center text-text-muted text-sm">
              Mindestens 2 Zeichen eingeben...
            </div>
          )}
        </div>
      </div>
    </>
  )
}
