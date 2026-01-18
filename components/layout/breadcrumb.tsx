import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { getCategoryById, getSectionById } from "@/data"
import { cn } from "@/lib/utils"

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
    <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
      {crumbs.map((crumb, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {idx > 0 && (
            <ChevronRight className="w-4 h-4 text-text-light" />
          )}
          {idx === crumbs.length - 1 ? (
            <span className="text-text-primary font-medium">{crumb.label}</span>
          ) : (
            <Link
              href={crumb.href}
              className="hover:text-accent-primary transition-colors"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
