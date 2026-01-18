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
    <div className="px-6 py-6">
      <header className="mb-6 flex-shrink-0">
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight mb-3">
          {category.subtitle}
        </h1>
        <Breadcrumb categoryId={categoryId} sectionId={sectionId} />
      </header>

      <div className="space-y-12">
        {sectionEntries.map((entry) => (
          <article
            key={entry.id}
            id={entry.id}
            ref={(el) => {
              entryRefs.current[entry.id] = el as HTMLDivElement | null
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
  )
}
