import type { Metadata } from "next"
import "./globals.css"
import { MainLayout } from "@/components/layout/main-layout"
import { getAllContent, buildSearchIndex } from "@/lib/content"

export const metadata: Metadata = {
  title: "Mechatronik Lexikon - LAP Fachgespräch",
  description: "Umfassendes Nachschlagewerk für die LAP Prüfung",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const content = await getAllContent()

  // Extract only the navigation data (without content) for the client component
  const categories = content.map(({ id, number, title, headings }) => ({
    id,
    number,
    title,
    headings,
  }))

  // Build full-text search index
  const searchIndex = buildSearchIndex(content)

  return (
    <html lang="de" className="scroll-smooth dark">
      <body className="font-sans antialiased">
        <MainLayout categories={categories} searchIndex={searchIndex}>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
