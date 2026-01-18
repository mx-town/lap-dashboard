"use client"

import Link from "next/link"
import { categories } from "@/data"

export default function HomePage() {
  return (
    <div className="h-full flex flex-col px-6 py-6">
      {/* Welcome Section */}
      <header className="mb-6 flex-shrink-0">
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight mb-2">
          Willkommen im Mechatronik Lexikon
          </h1>
        <p className="text-base lg:text-lg text-text-secondary leading-relaxed max-w-3xl">
          Umfassendes Nachschlagewerk für das LAP Fachgespräch. Hier finden Sie
          alle wichtigen Begriffe und Konzepte der Mechatronik, übersichtlich
          nach Kategorien geordnet.
        </p>
      </header>

      {/* Bento Grid - Dense, fits viewport */}
      <div className="flex-1 min-h-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
        {categories.map((category, index) => {
                      return (
            <Link
                    key={category.id}
              href={`/${category.id}`}
              className="group relative overflow-hidden rounded-lg border border-border-subtle bg-white hover:border-accent-primary/50 hover:shadow-md transition-all flex flex-col items-center justify-center p-4 aspect-square"
                  >
              <div className="flex flex-col items-center gap-3 text-center w-full">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg bg-bg-secondary border border-border-subtle flex items-center justify-center flex-shrink-0">
                  <span className="text-xs lg:text-sm font-mono font-semibold text-text-muted uppercase">
                    {category.number}
                  </span>
                      </div>
                <h2 className="font-semibold text-sm lg:text-base text-text-primary group-hover:text-accent-primary transition-colors">
                  {category.title}
                </h2>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
