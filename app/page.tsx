"use client"

import { categories, sections, entries, getSectionsByCategory, getEntriesBySection } from "@/data"
import { ContentRenderer } from "@/components/content/content-renderer"

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">
      {categories.map(cat => (
        <section key={cat.id} id={cat.id} className="space-y-10">
          <header className="border-b border-border-subtle pb-4">
            <h1 className="text-2xl font-semibold text-text-primary">
              <span className="font-mono text-lg text-text-muted mr-2">{cat.number}.</span>
              {cat.title}
            </h1>
            <p className="text-text-muted mt-1.5 text-sm">{cat.subtitle}</p>
          </header>

          {getSectionsByCategory(cat.id).map(sec => (
            <div key={sec.id} id={sec.id} className="space-y-6 scroll-mt-12">
              <h2 className="text-lg font-medium text-text-primary pb-2 border-b border-border-subtle/60">
                <span className="font-mono text-sm text-text-muted mr-2">{sec.number}</span>
                {sec.title}
              </h2>

              <div className="space-y-10">
                {getEntriesBySection(entries, sec.id).map(entry => (
                  <article key={entry.id} id={entry.id} className="scroll-mt-12">
                    <h3 className="text-base font-medium text-text-primary mb-4">
                      {entry.title}
                    </h3>

                    {entry.image && (
                      <div className="mb-5">
                        <img
                          src={entry.image}
                          alt={entry.title}
                          className="w-full rounded border border-border-subtle bg-bg-secondary p-4"
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
