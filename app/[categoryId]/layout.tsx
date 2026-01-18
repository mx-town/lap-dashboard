"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { categories, sections } from "@/data"
import { usePathname } from "next/navigation"

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()

  // Extract category and section IDs from pathname
  const pathParts = pathname.split("/").filter(Boolean)
  const categoryId = pathParts[0] || undefined
  const sectionId = pathParts[1] || undefined

  return (
    <div className="min-h-screen bg-bg-primary flex">
      <Sidebar
        categories={categories}
        sections={sections}
        currentCategoryId={categoryId}
        currentSectionId={sectionId}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col lg:ml-80">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
