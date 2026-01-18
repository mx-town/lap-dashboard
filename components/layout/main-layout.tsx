"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { categories, sections } from "@/data"
import { usePathname } from "next/navigation"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()

  // Extract category and section IDs from pathname
  const pathParts = pathname.split("/").filter(Boolean)
  const categoryId = pathParts[0] || undefined
  const sectionId = pathParts[1] || undefined

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onMenuClick={() => setSidebarOpen(true)}
      />
      <div className="flex flex-1">
        <Sidebar
          categories={categories}
          sections={sections}
          currentCategoryId={categoryId}
          currentSectionId={sectionId}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="flex-1 lg:ml-72 w-full overflow-x-hidden">{children}</main>
      </div>
    </div>
  )
}
