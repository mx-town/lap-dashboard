"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import {
  getCategoryById,
  getSectionById,
  getEntriesBySection,
  entries,
} from "@/data"
import { PanelCard } from "@/components/ui/panel-card"
import { NumberBadge } from "@/components/ui/number-badge"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { ContentRenderer } from "@/components/content/content-renderer"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function SectionPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const categoryId = params.categoryId as string
  const sectionId = params.sectionId as string
  const entryId = searchParams.get("entry")

  const category = getCategoryById(categoryId)
  const section = getSectionById(sectionId)
  const sectionEntries = section ? getEntriesBySection(entries, sectionId) : []
  const selectedEntry = entryId
    ? sectionEntries.find((e) => e.id === entryId)
    : null

  const [dialogOpen, setDialogOpen] = useState(!!selectedEntry)

  useEffect(() => {
    setDialogOpen(!!selectedEntry)
  }, [entryId])

  if (!category || !section) {
    return <div>Not found</div>
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb categoryId={categoryId} sectionId={sectionId} />

        <div className="mt-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <NumberBadge number={section.number} />
            <div>
              <h1 className="text-3xl font-light text-text-primary">
                {section.title}
              </h1>
              <p className="text-text-secondary">
                {category.icon} {category.title}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectionEntries.map((entry) => (
            <Link
              key={entry.id}
              href={`/${categoryId}/${sectionId}?entry=${entry.id}`}
            >
              <PanelCard hover>
                <div className="p-5">
                  <h2 className="text-base font-semibold text-text-primary mb-2">
                    {entry.title}
                  </h2>
                  {entry.image && (
                    <div className="mt-3 flex items-center justify-center bg-bg-tertiary rounded p-2">
                      <img
                        src={entry.image}
                        alt={entry.title}
                        className="max-h-20 max-w-full object-contain opacity-70"
                      />
                    </div>
                  )}
                </div>
              </PanelCard>
            </Link>
          ))}
        </div>

        <Dialog open={dialogOpen} onOpenChange={(open) => {
          setDialogOpen(open)
          if (!open) {
            router.push(`/${categoryId}/${sectionId}`)
          }
        }}>
          {selectedEntry && (
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-bg-secondary border-border-subtle">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-text-primary">
                  {selectedEntry.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                {selectedEntry.image && (
                  <div className="mb-6">
                    <img
                      src={selectedEntry.image}
                      alt={selectedEntry.title}
                      className="w-full max-h-64 object-contain rounded-lg bg-bg-tertiary p-4 border border-border-subtle"
                    />
                  </div>
                )}
                <ContentRenderer blocks={selectedEntry.content} />
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </div>
  )
}
