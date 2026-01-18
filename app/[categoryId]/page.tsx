import Link from "next/link"
import { notFound } from "next/navigation"
import {
  getCategoryById,
  getSectionsByCategory,
  categories,
} from "@/data"
import { Breadcrumb } from "@/components/layout/breadcrumb"

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
    <div className="px-6 py-6">
      <header className="mb-6 flex-shrink-0">
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight mb-3">
          {category.subtitle}
        </h1>
        <Breadcrumb categoryId={categoryId} />
      </header>

      <nav className="space-y-2">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`/${categoryId}/${section.id}`}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-bg-secondary transition-colors group"
          >
            <span className="font-mono text-sm text-text-muted flex-shrink-0">
              {section.number}
            </span>
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
  )
}
