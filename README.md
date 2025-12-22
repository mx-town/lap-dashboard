# Mechatronik Lexikon - LAP Fachgespräch

Eine interaktive Next.js Website zur Vorbereitung auf das Fachgespräch der Lehrabschlussprüfung (LAP) für Mechatroniker.

## Features

- **10 Hauptkategorien** mit detaillierten Begriffen
- **Fuzzy-Search** mit Fuse.js zum schnellen Finden
- **Animationen** mit Framer Motion
- **Responsive Design** für alle Geräte
- **Dunkles Design** mit lila/blauen Gradienten

## Hauptkategorien

| Nr. | Kategorie | Bearbeitet von |
|-----|-----------|----------------|
| 1 | Schutzkonzepte | Kilian |
| 2 | ET Gesetze | Josh |
| 3 | Schaltkasten | Noel |
| 4 | Halbleitertechnik | Niklas M |
| 5 | Kabel/Leitungen/Stecker | Celine |
| 6 | Mechanische Bearbeitung | Wenger |
| 7 | Mechanisches Messen/Prüfen | Wenger |
| 8 | Pneumatik | Lukas |
| 9 | Regelungs-/Steuerungstechnik/SPS | Andreas |
| 10 | Netzsysteme | Offen |

## Installation

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Dann öffne [http://localhost:3000](http://localhost:3000) im Browser.

## Projekt Struktur

```
mechatronik-lexikon/
├── app/
│   ├── layout.tsx      # Root Layout
│   ├── page.tsx        # Hauptseite
│   └── globals.css     # Global Styles
├── components/ui/      # UI Komponenten
├── data/
│   └── terms.ts        # Alle Begriffe und Kategorien
├── lib/
│   └── utils.ts        # Hilfsfunktionen
└── public/images/      # Bilder
```

## Begriffe hinzufügen

Bearbeite `data/terms.ts`:

```typescript
{
  id: "mein-begriff",
  title: "Mein Begriff",
  image: "/images/mein-bild.png",
  description: "Ausführliche Beschreibung...",
  example: "Praktische Beispiele",
  category: "schutzkonzepte", // Kategorie-ID
}
```

## Deployment

```bash
# Für statisches Hosting (GitHub Pages, Netlify)
npm run build
```

Die Dateien landen im `out/` Ordner.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Fuse.js
- Radix UI

## Lizenz

Erstellt für die LAP-Vorbereitung 2025.
