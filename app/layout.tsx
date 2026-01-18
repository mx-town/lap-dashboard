import type { Metadata } from "next"
import "./globals.css"
import { MainLayout } from "@/components/layout/main-layout"

export const metadata: Metadata = {
  title: "Mechatronik Lexikon - LAP Fachgespräch",
  description: "Umfassendes Nachschlagewerk für die LAP Prüfung",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="font-sans antialiased">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
