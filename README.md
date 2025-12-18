# Mechatronik Lexikon - LAP Fachgespräch

Eine interaktive Website zur Vorbereitung auf das Fachgespräch der Lehrabschlussprüfung (LAP) für Mechatroniker.

## Features

- **10 Hauptkategorien** mit detaillierten Unterkategorien
- **Suchfunktion** zum schnellen Finden von Begriffen
- **Responsive Design** für Desktop, Tablet und Handy
- **Moderne Benutzeroberfläche** mit klarer Navigation

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

## Verwendung

1. Öffne `index.html` in einem Browser
2. Wähle eine Kategorie aus der Sidebar oder den Karten
3. Nutze die Suche (Strg+K) zum schnellen Finden

## Struktur

```
lap-dashboard/
├── index.html          # Hauptseite
├── css/
│   └── style.css       # Styling
├── js/
│   ├── data.js         # Daten und Inhalte
│   └── app.js          # App-Logik
├── images/             # Bilder für die Erklärungen
└── README.md
```

## Inhalte hinzufügen

Um neue Inhalte hinzuzufügen, bearbeite `js/data.js`:

1. Finde die passende Kategorie in `lexikonData.categories`
2. Füge eine neue Unterkategorie in das `subcategories`-Array ein:

```javascript
{
    id: "mein-thema",
    name: "Mein Thema",
    icon: "📌",
    description: "Kurze Beschreibung",
    content: `
        <h2>Titel</h2>
        <p>Erklärung...</p>
    `,
    images: []
}
```

## Bilder hinzufügen

1. Lege Bilder in den `images/` Ordner
2. Referenziere sie im Content:

```html
<div class="image-container">
    <img src="images/mein-bild.png" alt="Beschreibung">
    <p class="image-caption">Bildunterschrift</p>
</div>
```

## Hosting

Die Website kann einfach gehostet werden:
- **GitHub Pages**: Repository auf GitHub pushen, Pages aktivieren
- **Lokaler Server**: `python -m http.server 8000` im Projektordner
- **Netlify/Vercel**: Repository verbinden

## Lizenz

Erstellt für die LAP-Vorbereitung 2025.
