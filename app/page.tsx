"use client"

import { categories, sections, entries, getSectionsByCategory, getEntriesBySection } from "@/data"
import { ContentRenderer } from "@/components/content/content-renderer"

export default function HomePage() {
  return (
    <div className="px-6 py-8 space-y-16">
      {categories.map(cat => (
        <section key={cat.id} id={cat.id} className="space-y-12">
          <header className="border-b border-border-subtle pb-4">
            <span className="font-mono text-sm text-text-muted">{cat.number}.</span>
            <h1 className="text-3xl font-bold text-text-primary">{cat.title}</h1>
            <p className="text-text-secondary mt-1">{cat.subtitle}</p>
          </header>

          {getSectionsByCategory(cat.id).map(sec => (
            <div key={sec.id} id={sec.id} className="space-y-8 scroll-mt-6">
              <h2 className="text-xl font-semibold text-text-primary">
                <span className="font-mono text-text-muted mr-2">{sec.number}</span>
                {sec.title}
              </h2>

              <div className="space-y-10">
                {getEntriesBySection(entries, sec.id).map(entry => (
                  <article key={entry.id} id={entry.id} className="scroll-mt-6">
                    <h3 className="text-lg font-medium text-text-primary mb-4">{entry.title}</h3>

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
          ))}
        </section>
      ))}
    </div>
  )
}
