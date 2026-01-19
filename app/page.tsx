"use client"

import { categories, sections, entries, getSectionsByCategory, getEntriesBySection } from "@/data"
import { ContentRenderer } from "@/components/content/content-renderer"

export default function HomePage() {
  return (
    <div className="px-8 py-10 space-y-20">
      {categories.map(cat => (
        <section key={cat.id} id={cat.id} className="space-y-12">
          <header className="border-b border-border-subtle pb-5">
            <h1 className="text-3xl font-bold text-text-primary flex items-baseline gap-3">
              <span className="font-mono text-xl text-accent-primary/70">{cat.number}.</span>
              <span>{cat.title}</span>
            </h1>
            <p className="text-text-secondary mt-2 text-base">{cat.subtitle}</p>
          </header>

          {getSectionsByCategory(cat.id).map(sec => (
            <div key={sec.id} id={sec.id} className="space-y-8 scroll-mt-16">
              <div className="flex items-baseline gap-3 pb-2 border-b border-border-subtle/50">
                <span className="font-mono text-sm text-accent-primary font-semibold bg-accent-primary/10 px-2 py-0.5 rounded">{sec.number}</span>
                <h2 className="text-xl font-semibold text-text-primary">{sec.title}</h2>
              </div>

              <div className="space-y-12">
                {getEntriesBySection(entries, sec.id).map(entry => (
                  <article key={entry.id} id={entry.id} className="scroll-mt-16 group">
                    <h3 className="text-lg font-semibold text-text-primary mb-5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/60 group-hover:bg-accent-primary transition-colors"></span>
                      {entry.title}
                    </h3>

                    {entry.image && (
                      <div className="mb-6">
                        <img
                          src={entry.image}
                          alt={entry.title}
                          className="w-full rounded-xl border border-border-subtle bg-bg-secondary p-6 shadow-sm hover:shadow-md transition-shadow"
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
