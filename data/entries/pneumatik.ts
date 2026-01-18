// ============================================================================
// ENTRIES - Pneumatik (Category 8)
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
    id: "pneumatik-grundlagen",
    sectionId: "pneumatik-grundlagen",
    title: "Pneumatik Grundlagen",
    image: "/images/pneumatik.png",
    content: [
      {
        type: 'definition',
        text: 'Pneumatik nutzt Druckluft (6-8 bar) zur Kraftübertragung.'
      },
      {
        type: 'list',
        title: 'Eigenschaften',
        items: [
          'Komprimierbar (federnd)',
          'Sauber',
          'Schnell'
        ]
      },
      {
        type: 'list',
        title: 'Druckluftaufbereitung',
        items: [
          'Kompressor',
          'Kühler',
          'Filter',
          'Wasserabscheider',
          'Druckregler',
          'Öler'
        ]
      },
      {
        type: 'note',
        text: 'Die Wartungseinheit (FRL) fasst Filter, Regler und Öler zusammen.'
      },
      {
        type: 'example',
        title: 'Typische Werte',
        text: 'Arbeitsdruck 6 bar, Volumenstrom in Nl/min'
      }
    ]
  },
  {
    id: "ewz",
    sectionId: "zylinder",
    title: "Einfachwirkender Zylinder (EWZ)",
    content: [
      {
        type: 'definition',
        text: 'Ein einfachwirkender Zylinder hat einen Druckluftanschluss und Rückstellung durch Feder.'
      },
      {
        type: 'list',
        title: 'Eigenschaften',
        items: [
          'Ansteuerung: 3/2-Ventil',
          'Kraft nur in eine Richtung',
          'Geeignet für einfache Bewegungen ohne große Kräfte'
        ]
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Einfachwirkender Zylinder mit Federrückstellung'
      }
    ]
  },
  {
    id: "dwz",
    sectionId: "zylinder",
    title: "Doppeltwirkender Zylinder (DWZ)",
    content: [
      {
        type: 'definition',
        text: 'Ein doppeltwirkender Zylinder hat zwei Druckluftanschlüsse und aktive Bewegung in beide Richtungen.'
      },
      {
        type: 'list',
        title: 'Eigenschaften',
        items: [
          'Ansteuerung: 5/2- oder 5/3-Ventil',
          'Größere Kraft',
          'Bessere Kontrolle',
          'Höhere Kraft als EWZ'
        ]
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Doppeltwirkender Zylinder für Hub- und Senkbewegung'
      }
    ]
  },
  {
    id: "pneumatik-zylinder",
    sectionId: "zylinder",
    title: "Pneumatikzylinder",
    image: "/images/zylinder.png",
    content: [
      {
        type: 'definition',
        text: 'Pneumatikzylinder wandeln Druckluft in lineare Bewegung um.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Beschreibung'],
        rows: [
          ['Einfachwirkend', 'Druckluft nur auf einer Seite, Rückstellung durch Feder'],
          ['Doppeltwirkend', 'Druckluft beidseitig, Kraft in beide Richtungen']
        ]
      },
      {
        type: 'formula',
        latex: 'F = p \\times A = p \\times \\frac{\\pi \\times d^2}{4}',
        description: 'Kolbenkraft'
      },
      {
        type: 'paragraph',
        text: 'Beispiel: d = 50 mm, p = 6 bar → F = 6 × 10⁵ Pa × (π × 0,05² / 4) = 1178 N.'
      },
      {
        type: 'note',
        text: 'Bei Rückhub: Ringfläche berechnen (Kolbenstange abziehen).'
      },
      {
        type: 'example',
        title: 'Berechnungsbeispiel',
        text: 'Zylinder Ø63mm bei 6 bar: F = 0.6 × 3117mm² = 1870N'
      }
    ]
  },
  {
    id: "pneumatik-ventile",
    sectionId: "ventile",
    title: "Wegeventile (3/2, 5/2, 5/3)",
    image: "/images/ventile.png",
    content: [
      {
        type: 'definition',
        text: 'Wegeventile steuern den Druckluftfluss in pneumatischen Systemen.'
      },
      {
        type: 'paragraph',
        text: 'Schema: Anschlüsse / Schaltstellungen (z.B. 5/2 = 5 Anschlüsse, 2 Stellungen).'
      },
      {
        type: 'table',
        headers: ['Anschluss', 'Bezeichnung (ISO 5599)', 'Funktion'],
        rows: [
          ['1', 'P', 'Druckversorgung'],
          ['2, 4', 'A, B', 'Arbeitsanschlüsse'],
          ['3, 5', 'R, S', 'Entlüftung'],
          ['12, 14', '-', 'Steueranschlüsse']
        ]
      },
      {
        type: 'table',
        headers: ['Ventiltyp', 'Anwendung'],
        rows: [
          ['3/2-Wegeventil', 'Für einfachwirkende Zylinder'],
          ['5/2-Wegeventil', 'Für doppeltwirkende Zylinder'],
          ['5/3-Wegeventil', 'Mit Mittelstellung: gesperrt, entlüftet oder druckbeaufschlagt']
        ]
      },
      {
        type: 'list',
        title: 'Betätigung',
        items: [
          'Manuell',
          'Mechanisch',
          'Elektrisch (Magnetventil)',
          'Pneumatisch'
        ]
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: '5/2-Wegeventil bistabil mit Magnetbetätigung'
      }
    ]
  },
  {
    id: "wartungseinheit",
    sectionId: "pneumatik-komponenten",
    title: "Wartungseinheit",
    content: [
      {
        type: 'definition',
        text: 'Die Wartungseinheit (FRL = Filter-Regler-Luftöler) bereitet Druckluft auf.'
      },
      {
        type: 'table',
        headers: ['Komponente', 'Funktion'],
        rows: [
          ['Filter', 'Entfernt Partikel und Wasser (regelmäßig entleeren!)'],
          ['Regler', 'Stellt konstanten Arbeitsdruck ein (unabhängig vom Netzdruck)'],
          ['Öler', 'Fügt Schmiernebel zu (bei modernen Ventilen oft nicht mehr nötig)']
        ]
      },
      {
        type: 'note',
        text: 'Wichtig für Lebensdauer der Komponenten.'
      },
      {
        type: 'example',
        title: 'Typische Ausführung',
        text: 'FRL-Einheit 1/4", Druckregler 6 bar'
      }
    ]
  },
  {
    id: "manometer",
    sectionId: "pneumatik-komponenten",
    title: "Manometer",
    content: [
      {
        type: 'definition',
        text: 'Das Manometer (Druckmesser) zeigt den aktuellen Druck in bar an.'
      },
      {
        type: 'paragraph',
        text: 'Wichtig zur Überwachung des Systemdrucks. Anschluss meist über T-Stück oder direkt am Regler.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Manometer 0-10 bar für Drucküberwachung'
      }
    ]
  },
  {
    id: "drosselrueckschlagventil",
    sectionId: "pneumatik-komponenten",
    title: "Drosselrückschlagventil",
    content: [
      {
        type: 'definition',
        text: 'Das Drosselrückschlagventil begrenzt die Geschwindigkeit in eine Richtung (drosselt) und lässt die andere Richtung frei.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Beschreibung', 'Eigenschaft'],
        rows: [
          ['Abluftdrosselung', 'Drossel am Abluftanschluss', 'Bessere Kontrolle, Standard in der Industrie'],
          ['Zuluftdrosselung', 'Drossel am Zuluftanschluss', 'Ruckelige Bewegung, selten verwendet']
        ]
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Geschwindigkeitsregelung für Aus- und Einfahrbewegung'
      }
    ]
  },
  {
    id: "elektropneumatik-magnetventil",
    sectionId: "elektropneumatik",
    title: "Elektropneumatik / Magnetventil",
    content: [
      {
        type: 'definition',
        text: 'Elektropneumatik kombiniert elektrische Steuerung mit pneumatischen Aktoren.'
      },
      {
        type: 'paragraph',
        text: 'Aufbau: Elektrische Steuerung (Sensoren, SPS, Taster) + pneumatische Aktoren. Magnetventile als Schnittstelle.'
      },
      {
        type: 'paragraph',
        text: 'Magnetventil: Elektrisch betätigtes Wegeventil. Spule zieht Anker an und schaltet Ventilstellung um.'
      },
      {
        type: 'list',
        title: 'Vorteile',
        items: [
          'Automatisierung',
          'SPS-Anbindung',
          'Sensorintegration',
          'Komplexe Ablaufsteuerungen möglich'
        ]
      },
      {
        type: 'note',
        text: 'Magnetventile werden elektrisch angesteuert (24V DC, 230V AC) und schalten die Druckluft.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: '5/2-Wegeventil mit Magnetspule, SPS-Steuerung'
      }
    ]
  },
  {
    id: "sensoren-pneumatik",
    sectionId: "elektropneumatik",
    title: "Sensoren (induktiv, kapazitiv, Reed)",
    content: [
      {
        type: 'definition',
        text: 'Sensoren erkennen Endlagen und Positionen von pneumatischen Zylindern.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Funktionsweise', 'Anwendung'],
        rows: [
          ['Induktiv', 'Erkennt Metall durch Änderung des Magnetfelds', 'Metallische Zylinder'],
          ['Kapazitiv', 'Reagiert auf alle Materialien', 'Universal'],
          ['Reed', 'Magnetisch betätigte Kontakte', 'Magnetzylinder']
        ]
      },
      {
        type: 'note',
        text: 'Wichtig für Endlagenabfrage bei Zylindern.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Induktiver Näherungsschalter M18, Reed-Schalter für Magnetzylinder'
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
