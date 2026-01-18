"use client"

import { useMemo, Suspense } from "react"
import { useRouter } from "next/navigation"
import Fuse from "fuse.js"
import { entries, getCategoryById, getSectionById } from "@/data"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { useSearchParams } from "next/navigation"
import { MainLayout } from "@/components/layout/main-layout"
import Link from "next/link"

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const fuse = useMemo(
    () =>
      new Fuse(entries, {
        keys: ["title", "content.text", "content.items"],
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
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <Breadcrumb />

        <header className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2 tracking-tight">
            Suchergebnisse
          </h1>
          {query && (
            <p className="text-base lg:text-lg text-text-secondary">
              {searchResults.length} Ergebnis{searchResults.length !== 1 ? "se" : ""} für &quot;{query}&quot;
            </p>
          )}
        </header>

        {searchResults.length > 0 ? (
          <div className="space-y-4">
            {searchResults.map((entry) => {
              const section = getSectionById(entry.sectionId)
              const category = section ? getCategoryById(section.categoryId) : null

              return (
                <Link
                  key={entry.id}
                  href={`/${category?.id}/${section?.id}?entry=${entry.id}`}
                  className="block p-5 rounded-lg border border-border-subtle hover:border-accent-primary/50 hover:bg-bg-secondary transition-all group"
                >
                  <h2 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                    {entry.title}
                  </h2>
                  {category && section && (
                    <p className="text-sm text-text-muted mb-3">
                      {category.icon} {category.title} → {section.title}
                    </p>
                  )}
                  {entry.content.length > 0 && entry.content[0].type === 'paragraph' && (
                    <p className="text-text-secondary line-clamp-2">
                      {'text' in entry.content[0] ? entry.content[0].text : ''}
                    </p>
                  )}
                </Link>
              )
            })}
          </div>
        ) : query ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-lg text-text-secondary mb-2">Keine Ergebnisse gefunden.</p>
            <p className="text-sm text-text-muted">
              Versuchen Sie es mit einem anderen Suchbegriff.
            </p>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-lg text-text-secondary">Bitte geben Sie einen Suchbegriff ein.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <MainLayout>
      <Suspense fallback={
        <div className="min-h-screen bg-bg-primary flex items-center justify-center">
          <div className="text-text-secondary">Lade Suchergebnisse...</div>
        </div>
      }>
        <SearchContent />
      </Suspense>
    </MainLayout>
  )
}
