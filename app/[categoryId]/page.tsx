import Link from "next/link"
import { notFound } from "next/navigation"
import {
  getCategoryById,
  getSectionsByCategory,
  categories,
} from "@/data"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { NumberBadge } from "@/components/ui/number-badge"

export function generateStaticParams() {
  return categories.map((category) => ({
    categoryId: category.id,
  }))
}

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params
  const category = getCategoryById(categoryId)
  
  if (!category) {
    notFound()
  }

  const sections = getSectionsByCategory(categoryId)

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <Breadcrumb categoryId={categoryId} />

        <header className="mb-8">
          <div className="mb-3">
            <span className="text-4xl">{category.icon}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight mb-2">
            {category.title}
          </h1>
          <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
            {category.subtitle}
          </p>
        </header>

        <nav className="space-y-2">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`/${categoryId}/${section.id}`}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-bg-secondary transition-colors group"
            >
              <NumberBadge number={section.number} />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                  {section.title}
                </h2>
              </div>
              <span className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
