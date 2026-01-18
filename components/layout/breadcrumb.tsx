import { ChevronRight } from "lucide-react"
import Link from "next/link"
import type { Category, Section } from "@/data"
import { getCategoryById, getSectionById } from "@/data"

interface BreadcrumbProps {
  categoryId?: string
  sectionId?: string
}

export function Breadcrumb({ categoryId, sectionId }: BreadcrumbProps) {
  const category = categoryId ? getCategoryById(categoryId) : null
  const section = sectionId ? getSectionById(sectionId) : null

  const crumbs = [
    { label: "Start", href: "/" },
  ]

  if (category) {
    crumbs.push({ label: category.title, href: `/${category.id}` })
  }

  if (section) {
    crumbs.push({ label: section.title, href: `/${categoryId}/${section.id}` })
  }

  return (
    <nav className="flex items-center gap-2 text-sm text-text-secondary">
      {crumbs.map((crumb, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {idx > 0 && <ChevronRight className="w-4 h-4" />}
          {idx === crumbs.length - 1 ? (
            <span className="text-text-primary">{crumb.label}</span>
          ) : (
            <Link
              href={crumb.href}
              className="hover:text-text-primary transition-colors"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
