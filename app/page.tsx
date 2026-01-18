"use client"

import Link from "next/link"
import { categories } from "@/data"
import { MainLayout } from "@/components/layout/main-layout"

export default function HomePage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Welcome Section */}
          <header className="mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
              Willkommen im Mechatronik Lexikon
            </h1>
            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-3xl">
              Umfassendes Nachschlagewerk für das LAP Fachgespräch. Hier finden Sie
              alle wichtigen Begriffe und Konzepte der Mechatronik, übersichtlich
              nach Kategorien geordnet.
            </p>
          </header>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-fr">
            {categories.map((category, index) => {
              // Create varied grid spans for visual interest
              const isLarge = index === 0 || index === 4 || index === 8
              const isWide = index === 2 || index === 6
              
              return (
                <Link
                  key={category.id}
                  href={`/${category.id}`}
                  className={`group relative overflow-hidden rounded-xl border border-border-subtle bg-white hover:border-accent-primary/50 hover:shadow-lg transition-all ${
                    isLarge ? "md:col-span-2 md:row-span-2" : ""
                  } ${isWide ? "md:col-span-2" : ""}`}
                >
                  <div className={`p-6 lg:p-8 h-full flex flex-col ${
                    isLarge ? "justify-between min-h-[280px]" : "justify-start min-h-[180px]"
                  }`}>
                    <div className="flex items-start gap-4 mb-4">
                      <span className={`flex-shrink-0 ${
                        isLarge ? "text-5xl lg:text-6xl" : "text-4xl lg:text-5xl"
                      }`}>
                        {category.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-mono font-semibold text-accent-primary">
                            {category.number}.
                          </span>
                          <h2 className={`font-semibold text-text-primary group-hover:text-accent-primary transition-colors ${
                            isLarge ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
                          }`}>
                            {category.title}
                          </h2>
                        </div>
                        <p className={`text-text-secondary leading-relaxed ${
                          isLarge ? "text-base lg:text-lg" : "text-sm lg:text-base"
                        }`}>
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-border-subtle">
                      <span className="text-sm text-text-muted group-hover:text-accent-primary transition-colors">
                        Kategorie erkunden
                      </span>
                      <span className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
