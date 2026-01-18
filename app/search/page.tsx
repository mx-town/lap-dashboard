"use client"

import { useState, useMemo, Suspense } from "react"
import { useRouter } from "next/navigation"
import Fuse from "fuse.js"
import { entries, categories, sections, getCategoryById, getSectionById } from "@/data"
import { PanelCard } from "@/components/ui/panel-card"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { useSearchParams } from "next/navigation"

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const router = useRouter()

  const fuse = useMemo(
    () =>
      new Fuse(entries, {
        keys: ["title", "content"],
        threshold: 0.3,
        includeScore: true,
      }),
    []
  )

  const searchResults = useMemo(() => {
    if (!query.trim()) return []
    return fuse.search(query).map((result) => result.item)
  }, [query, fuse])

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-6 mb-8">
          <h1 className="text-3xl font-light text-text-primary mb-2">
            Suchergebnisse
          </h1>
          {query && (
            <p className="text-text-secondary">
              {searchResults.length} Ergebnis{searchResults.length !== 1 ? "se" : ""} für &quot;{query}&quot;
            </p>
          )}
        </div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((entry) => {
              const section = getSectionById(entry.sectionId)
              const category = section ? getCategoryById(section.categoryId) : null

              return (
                <PanelCard
                  key={entry.id}
                  hover
                  onClick={() => {
                    if (section && category) {
                      router.push(`/${category.id}/${section.id}?entry=${entry.id}`)
                    }
                  }}
                >
                  <div className="p-5">
                    <h2 className="text-base font-semibold text-text-primary mb-2">
                      {entry.title}
                    </h2>
                    {category && section && (
                      <p className="text-xs text-text-muted">
                        {category.icon} {category.title} → {section.title}
                      </p>
                    )}
                  </div>
                </PanelCard>
              )
            })}
          </div>
        ) : query ? (
          <div className="text-center py-16 text-text-secondary">
            <div className="text-4xl mb-3">🔍</div>
            Keine Ergebnisse gefunden.
          </div>
        ) : (
          <div className="text-center py-16 text-text-secondary">
            Bitte geben Sie einen Suchbegriff ein.
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-text-secondary">Lade Suchergebnisse...</div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
