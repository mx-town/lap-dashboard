import Link from "next/link"
import { notFound } from "next/navigation"
import {
  getCategoryById,
  getSectionsByCategory,
  categories,
} from "@/data"
import { PanelCard } from "@/components/ui/panel-card"
import { NumberBadge } from "@/components/ui/number-badge"
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
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb categoryId={categoryId} />

        <div className="mt-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl font-light text-text-primary">
                {category.title}
              </h1>
              <p className="text-text-secondary">{category.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Link key={section.id} href={`/${categoryId}/${section.id}`}>
              <PanelCard hover>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <NumberBadge number={section.number} />
                    <h2 className="text-base font-semibold text-text-primary">
                      {section.title}
                    </h2>
                  </div>
                </div>
              </PanelCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
