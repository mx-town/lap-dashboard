import type { Metadata } from "next"
import "./globals.css"

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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
