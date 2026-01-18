// ============================================================================
// ENTRIES - Mechanisches Messen/Prüfen (Category 7)
// ============================================================================

import type { Entry, ContentBlock } from '../types';

const entriesData: Array<{
  id: string;
  sectionId: string;
  title: string;
  content: ContentBlock[];
  image?: string;
}> = [
  {
    id: "messschieber",
    sectionId: "messgeraete",
    title: "Messschieber",
    image: "/images/messschieber.png",
    content: [
      {
        type: 'definition',
        text: 'Ein Messschieber ist ein Längenmessgerät für Außen-, Innen- und Tiefenmessungen.'
      },
      {
        type: 'list',
        title: 'Aufbau',
        items: [
          'Hauptskala (mm)',
          'Nonius (1/10 oder 1/20 mm)',
          'Außen-/Innenmessschenkel',
          'Tiefenmessstab'
        ]
      },
      {
        type: 'paragraph',
        text: 'Ablesung: Ganzzahl auf Hauptskala + Nonius-Strich, der mit Hauptskala fluchtet.'
      },
      {
        type: 'table',
        headers: ['Nonius-Typ', 'Genauigkeit'],
        rows: [
          ['1/10-Nonius', '0,1 mm'],
          ['1/20-Nonius', '0,05 mm']
        ]
      },
      {
        type: 'warning',
        text: 'Die Messflächen müssen sauber und das Werkstück gratfrei sein. Vor der Messung Nullpunkt prüfen.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Wellendurchmesser 25.00mm, Bohrung 10.05mm messen'
      }
    ]
  },
  {
    id: "buegelmessschraube",
    sectionId: "messgeraete",
    title: "Bügelmessschraube (Mikrometer)",
    image: "/images/mikrometer.png",
    content: [
      {
        type: 'definition',
        text: 'Eine Bügelmessschraube (Mikrometer) ist ein präzises Längenmessgerät mit höherer Genauigkeit als ein Messschieber.'
      },
      {
        type: 'list',
        title: 'Aufbau',
        items: [
          'Bügel',
          'Amboss',
          'Messspindel',
          'Hülse (Hauptskala)',
          'Trommel (Teilung)'
        ]
      },
      {
        type: 'paragraph',
        text: 'Funktionsweise: Feingewinde: 1 Umdrehung = 0,5 mm Vorschub. Trommel hat 50 Teilungen → 1 Teilung = 0,01 mm.'
      },
      {
        type: 'table',
        headers: ['Eigenschaft', 'Wert'],
        rows: [
          ['Genauigkeit', '0,01 mm'],
          ['Messbereich', '25 mm (z.B. 0-25mm, 25-50mm)']
        ]
      },
      {
        type: 'warning',
        text: 'Ratsche verwenden für konstante Messkraft! Vor der Messung: Nullpunkt mit Einstellmass prüfen.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Bolzendurchmesser 12.00mm auf 0.01mm genau messen'
      }
    ]
  },
  {
    id: "messuhr",
    sectionId: "messgeraete",
    title: "Messuhr",
    image: "/images/messuhr.png",
    content: [
      {
        type: 'definition',
        text: 'Eine Messuhr zeigt Längenänderungen mit hoher Genauigkeit an.'
      },
      {
        type: 'table',
        headers: ['Eigenschaft', 'Wert'],
        rows: [
          ['Genauigkeit', '0.01mm'],
          ['Messbereich', 'meist 10mm']
        ]
      },
      {
        type: 'list',
        title: 'Anwendung',
        items: [
          'Rundlauf',
          'Planlauf',
          'Ebenheit',
          'Vergleichsmessungen'
        ]
      },
      {
        type: 'paragraph',
        text: 'Sie wird im Stativ oder Magnethalter befestigt. Vor der Messung auf Null stellen. Für dynamische Messungen Tastspitze und Federkraft beachten.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Rundlauf einer Welle < 0.02mm prüfen'
      }
    ]
  },
  {
    id: "stahllineal",
    sectionId: "messgeraete",
    title: "Stahllineal",
    content: [
      {
        type: 'definition',
        text: 'Das Stahllineal ist ein präzises Längenmessgerät für gerade Kanten und Oberflächen.'
      },
      {
        type: 'table',
        headers: ['Eigenschaft', 'Wert'],
        rows: [
          ['Genauigkeit', '0.5mm']
        ]
      },
      {
        type: 'list',
        title: 'Verwendung',
        items: [
          'Anreißen',
          'Prüfen von Ebenheit',
          'Prüfen von Geradheit'
        ]
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Ebenheit prüfen, Anreißen von Linien'
      }
    ]
  },
  {
    id: "haarwinkel",
    sectionId: "messgeraete",
    title: "Haarwinkel",
    content: [
      {
        type: 'definition',
        text: 'Ein Haarwinkel ist ein gehärteter 90°-Stahlwinkel mit geschliffenen Kanten für Winkligkeitsprüfung.'
      },
      {
        type: 'paragraph',
        text: 'Anwendung: Winkligkeitsprüfung. Kein Lichtspalt = 90° korrekt.'
      },
      {
        type: 'note',
        text: 'Wichtig für Werkstückausrichtung und Winkelprüfung.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Rechten Winkel prüfen, Anreißen'
      }
    ]
  },
  {
    id: "radienlehre",
    sectionId: "lehren",
    title: "Radienlehre",
    content: [
      {
        type: 'definition',
        text: 'Die Radienlehre ist ein Prüfmittel zum Messen von Innen- und Außenradien.'
      },
      {
        type: 'paragraph',
        text: 'Verfügbar in verschiedenen Radien (z.B. 1mm, 2mm, 5mm). Vergleichsmessung durch Anlegen an Werkstück. Kein Lichtspalt = Übereinstimmung.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Radius einer Rundung prüfen'
      }
    ]
  },
  {
    id: "grenzrachenlehre",
    sectionId: "lehren",
    title: "Grenzrachenlehre",
    content: [
      {
        type: 'definition',
        text: 'Die Grenzrachenlehre hat zwei Prüfrachen: Gutseite (G) und Ausschussseite (A).'
      },
      {
        type: 'paragraph',
        text: 'Prüft, ob Maß innerhalb der Toleranz liegt. Schnelle Gut/Schlecht-Prüfung ohne genaue Maßangabe. Für Wellen.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Toleranzprüfung von Fertigteilen'
      }
    ]
  },
  {
    id: "gewindelehrdorn",
    sectionId: "lehren",
    title: "Gewindelehrdorn",
    content: [
      {
        type: 'definition',
        text: 'Der Gewindelehrdorn (Gewindelehre) prüft Innengewinde auf Maßgenauigkeit.'
      },
      {
        type: 'paragraph',
        text: 'Verfügbar als Durchgangslehre (Gut) und Ausschusslehre (Schlecht). Gut-Seite einschraubar, Ausschuss-Seite max. 2 Umdrehungen.'
      },
      {
        type: 'note',
        text: 'Wichtig für Gewindetoleranzen.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Gewinde M8 prüfen'
      }
    ]
  }
];

export const entries: Entry[] = entriesData.map(entry => ({
  id: entry.id,
  sectionId: entry.sectionId,
  title: entry.title,
  content: entry.content,
  image: entry.image
}));
