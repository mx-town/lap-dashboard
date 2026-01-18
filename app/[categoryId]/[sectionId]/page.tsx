"use client"

import { useEffect, useRef } from "react"
import { useParams, useSearchParams } from "next/navigation"
import {
  getCategoryById,
  getSectionById,
  getEntriesBySection,
  entries,
} from "@/data"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { ContentRenderer } from "@/components/content/content-renderer"

export default function SectionPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  
  const categoryId = params.categoryId as string
  const sectionId = params.sectionId as string
  const entryId = searchParams.get("entry")

  const category = getCategoryById(categoryId)
  const section = getSectionById(sectionId)
  const sectionEntries = section ? getEntriesBySection(entries, sectionId) : []
  const entryRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Scroll to entry if deep linked
  useEffect(() => {
    if (entryId && entryRefs.current[entryId]) {
      setTimeout(() => {
        entryRefs.current[entryId]?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }, 100)
    }
  }, [entryId])

  if (!category || !section) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-text-secondary">Nicht gefunden</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <Breadcrumb categoryId={categoryId} sectionId={sectionId} />

        <header className="mb-8">
          <div className="mb-3">
            <span className="text-sm font-medium text-accent-primary uppercase tracking-wide">
              {category.icon} {category.title}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight mb-2">
            {section.title}
          </h1>
          <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
            {category.subtitle}
          </p>
        </header>

        <div className="space-y-12">
          {sectionEntries.map((entry) => (
            <article
              key={entry.id}
              id={entry.id}
              ref={(el) => {
                entryRefs.current[entry.id] = el
              }}
              className="scroll-mt-8"
            >
              <h2 className="text-2xl font-semibold text-text-primary mb-4 tracking-tight">
                {entry.title}
              </h2>
              
              {entry.image && (
                <div className="mb-6">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full rounded-lg border border-border-subtle bg-bg-secondary p-6"
                  />
                </div>
              )}

              <ContentRenderer blocks={entry.content} />
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
