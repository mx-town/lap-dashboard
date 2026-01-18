import Link from "next/link"
import { categories } from "@/data"
import { PanelCard } from "@/components/ui/panel-card"
import { NumberBadge } from "@/components/ui/number-badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-light mb-2 text-text-primary">
            Mechatronik Lexikon
          </h1>
          <p className="text-text-secondary">
            Umfassendes Nachschlagewerk für das LAP Fachgespräch
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/${category.id}`}>
              <PanelCard hover>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{category.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <NumberBadge number={`${category.number}`} />
                        <h2 className="text-lg font-semibold text-text-primary">
                          {category.title}
                        </h2>
                      </div>
                      <p className="text-sm text-text-secondary">
                        {category.subtitle}
                      </p>
                    </div>
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
