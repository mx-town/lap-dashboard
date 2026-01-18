// ============================================================================
// ENTRIES - Mechanische Bearbeitung (Category 6)
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
    id: "metallarten",
    sectionId: "metallarten",
    title: "Metallarten",
    content: [
      {
        type: 'definition',
        text: 'Verschiedene Metallarten haben unterschiedliche Eigenschaften und Anwendungen.'
      },
      {
        type: 'table',
        headers: ['Material', 'Eigenschaften', 'Anwendung'],
        rows: [
          ['Stahl', 'Eisen mit max. 2,06 % Kohlenstoff. S235 (Baustahl), C45 (Vergütungsstahl)', 'Konstruktion, Maschinenbau'],
          ['Aluminium', 'Leicht (2,7 g/cm³), korrosionsbeständig, gute Leitfähigkeit. Bohrerspitze 130°', 'Leichtbau, Elektrotechnik'],
          ['Kupfer', 'Beste Leitfähigkeit nach Silber (58 MS/m)', 'Leitungen, Wicklungen, Platinen'],
          ['Messing', 'Kupfer-Zink-Legierung. Gut zerspanbar, korrosionsfest', 'Klemmen, Kontakte'],
          ['Edelstahl', 'Mind. 10,5 % Chrom, korrosionsfest. Schwerer zu bearbeiten, langsamer bohren', 'Lebensmittel, Chemie, Medizin']
        ]
      },
      {
        type: 'example',
        title: 'Typische Materialien',
        text: 'Stahl, Edelstahl, Aluminium, Messing'
      }
    ]
  },
  {
    id: "drehen",
    sectionId: "bearbeitungsverfahren",
    title: "Drehen",
    image: "/images/drehen.png",
    content: [
      {
        type: 'definition',
        text: 'Drehen ist ein spanendes Fertigungsverfahren mit rotierendem Werkstück und festem Werkzeug.'
      },
      {
        type: 'list',
        title: 'Verfahren',
        items: [
          'Längsdrehen (Durchmesser)',
          'Plandrehen (Stirnfläche)',
          'Einstechen (Nuten)',
          'Gewindeschneiden'
        ]
      },
      {
        type: 'formula',
        latex: 'v = \\frac{\\pi \\times d \\times n}{1000}',
        description: 'Schnittgeschwindigkeit [m/min]'
      },
      {
        type: 'paragraph',
        text: 'Der Vorschub f wird in mm/Umdrehung angegeben.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Welle drehen, Gewinde M10 schneiden, Planfläche bearbeiten'
      }
    ]
  },
  {
    id: "fraesen",
    sectionId: "bearbeitungsverfahren",
    title: "Fräsen",
    image: "/images/fraesen.png",
    content: [
      {
        type: 'definition',
        text: 'Fräsen ist ein spanendes Verfahren mit rotierendem Werkzeug.'
      },
      {
        type: 'list',
        title: 'Verfahren',
        items: [
          'Stirnfräsen (Planflächen)',
          'Umfangsfräsen (seitlich)',
          'Nutfräsen',
          'Profilfräsen'
        ]
      },
      {
        type: 'table',
        headers: ['Fräsrichtung', 'Eigenschaft', 'Anwendung'],
        rows: [
          ['Gleichlauffräsen', 'Bessere Oberflächen', 'Moderne Maschinen'],
          ['Gegenlauffräsen', 'Für ältere Maschinen geeignet', 'Klassische Bearbeitung']
        ]
      },
      {
        type: 'note',
        text: 'CNC-Fräsen ermöglicht komplexe 3D-Formen.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Nut 10×5mm fräsen, Tasche ausfräsen, Kontur fräsen'
      }
    ]
  },
  {
    id: "bohren",
    sectionId: "bearbeitungsverfahren",
    title: "Bohren / Spiralbohrer",
    image: "/images/bohren.png",
    content: [
      {
        type: 'definition',
        text: 'Bohren erzeugt runde Löcher mit einem rotierenden Werkzeug.'
      },
      {
        type: 'table',
        headers: ['Material', 'Spitzenwinkel'],
        rows: [
          ['Stahl', '118°'],
          ['Aluminium', '130°'],
          ['Kunststoff', '130–140°']
        ]
      },
      {
        type: 'warning',
        text: 'Vor dem Bohren: Ankörnen! Schafft Führung für den Bohrer.'
      },
      {
        type: 'formula',
        latex: 'n = \\frac{v \\times 1000}{\\pi \\times d}',
        description: 'Drehzahlberechnung'
      },
      {
        type: 'paragraph',
        text: 'v = Schnittgeschwindigkeit [m/min], d = Bohrerdurchmesser [mm].'
      },
      {
        type: 'table',
        headers: ['Material', 'Richtwert Schnittgeschwindigkeit'],
        rows: [
          ['Stahl', 'v ≈ 25 m/min'],
          ['Aluminium', 'v ≈ 100 m/min']
        ]
      },
      {
        type: 'note',
        text: 'Beim Durchbohren: Vorschub reduzieren. Kühlschmiermittel verbessert Standzeit und Oberfläche.'
      },
      {
        type: 'example',
        title: 'Beispiele',
        text: 'Kernloch M8 = 6.8mm, Durchgangsloch 10mm'
      }
    ]
  },
  {
    id: "koerner-durchschlag",
    sectionId: "bearbeitungsverfahren",
    title: "Körner / Durchschlag",
    content: [
      {
        type: 'definition',
        text: 'Körner und Durchschlag erzeugen Vertiefungen zum Ansetzen von Werkzeugen.'
      },
      {
        type: 'table',
        headers: ['Werkzeug', 'Funktion'],
        rows: [
          ['Körner (Körnerhahn)', 'Erzeugt kleine Vertiefung zum Ansetzen des Bohrers'],
          ['Durchschlag', 'Erzeugt größere Vertiefung']
        ]
      },
      {
        type: 'note',
        text: 'Wichtig für präzises Bohren und Vermeiden von Verrutschen.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Ankörnen vor dem Bohren'
      }
    ]
  },
  {
    id: "senker",
    sectionId: "bearbeitungsverfahren",
    title: "Senker",
    content: [
      {
        type: 'definition',
        text: 'Senker erzeugen kegelförmige oder plane Vertiefungen für Schraubenköpfe.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Beschreibung', 'Anwendung'],
        rows: [
          ['Kegelsenker 90°', 'Kegelförmige Vertiefung', 'Für Senkschrauben, Entgraten von Bohrungen'],
          ['Flachsenker', 'Plane Auflagefläche', 'Für Zylinderkopfschrauben'],
          ['Zapfensenker', 'Mit Führungszapfen', 'Für tiefe Senkungen']
        ]
      },
      {
        type: 'note',
        text: 'Wird nach dem Bohren eingesetzt.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Senken für Senkschrauben M8'
      }
    ]
  },
  {
    id: "reibahle",
    sectionId: "bearbeitungsverfahren",
    title: "Reibahle",
    content: [
      {
        type: 'definition',
        text: 'Die Reibahle erzeugt präzise, runde Löcher mit guter Oberflächengüte.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Anwendung'],
        rows: [
          ['Handreibahlen', 'Manuelle Bearbeitung'],
          ['Maschinenreibahlen', 'Dreh-/Fräsmaschinen']
        ]
      },
      {
        type: 'warning',
        text: 'Vorarbeit: Vorbohren mit geringerem Durchmesser.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Präzisionsloch H7 reiben'
      }
    ]
  },
  {
    id: "gewindeschneiden",
    sectionId: "gewinde",
    title: "Gewindeschneiden (innen/außen)",
    content: [
      {
        type: 'definition',
        text: 'Gewindeschneiden erzeugt Gewinde in Werkstücken oder auf Stangen.'
      },
      {
        type: 'formula',
        latex: 'Kernloch-\\O = Gewinde-\\O - Steigung',
        description: 'Kernlochformel'
      },
      {
        type: 'warning',
        text: 'NICHT "× 0,8" verwenden!'
      },
      {
        type: 'table',
        headers: ['Gewindebohrer', 'Kennzeichnung', 'Verwendung'],
        rows: [
          ['Vorschneider', '1 Ring', 'Erste Bearbeitung'],
          ['Mittelschneider', '2 Ringe', 'Zweite Bearbeitung'],
          ['Fertigschneider', 'Kein Ring oder 3 Ringe', 'Finale Bearbeitung']
        ]
      },
      {
        type: 'paragraph',
        text: 'Technik: ½ Umdrehung vor, ¼ zurück (Spanbrechen). Mit Schneidöl arbeiten!'
      },
      {
        type: 'table',
        headers: ['Gewindeart', 'Werkzeug'],
        rows: [
          ['Innengewinde', 'Gewindebohrer'],
          ['Außengewinde', 'Schneideisen oder Gewindeschneidbacken']
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Innengewinde M8 schneiden, Außengewinde M10'
      }
    ]
  },
  {
    id: "gewindearten",
    sectionId: "gewinde",
    title: "Gewindearten",
    content: [
      {
        type: 'definition',
        text: 'Verschiedene Gewindearten für unterschiedliche Anwendungen.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Flankenwinkel', 'Beschreibung', 'Bezeichnung'],
        rows: [
          ['Metrisch (M)', '60°', 'Standard', 'M8 = 8 mm Außen-Ø'],
          ['Metrisch Fein (MF)', '60°', 'Kleinere Steigung', 'M8×1 = 8 mm Ø, 1 mm Steigung'],
          ['Rohrgewinde (G/R)', '55°', 'G = zylindrisch, R = konisch', 'G1/2, R1/2'],
          ['Trapezgewinde (Tr)', '30°', 'Für Spindeln, Vorschubmuttern', 'Tr16×4']
        ]
      },
      {
        type: 'paragraph',
        text: 'Bezeichnung: Durchmesser × Steigung (z.B. M8×1.25). Rechts- und Linksgewinde möglich.'
      },
      {
        type: 'example',
        title: 'Beispiele',
        text: 'M8, M10×1.5, Trapezgewinde Tr16×4'
      }
    ]
  },
  {
    id: "schrauben-muttern-scheiben",
    sectionId: "verbindungselemente",
    title: "Schrauben / Muttern / Scheiben",
    content: [
      {
        type: 'definition',
        text: 'Schrauben, Muttern und Scheiben sind Verbindungselemente für Bauteile.'
      },
      {
        type: 'list',
        title: 'Schraubentypen',
        items: [
          'Sechskantschraube',
          'Senkschraube',
          'Zylinderkopfschraube'
        ]
      },
      {
        type: 'list',
        title: 'Scheibentypen',
        items: [
          'Unterlegscheibe',
          'Federscheibe',
          'Sicherungsscheibe'
        ]
      },
      {
        type: 'paragraph',
        text: 'Materialien: Stahl, Edelstahl, Kunststoff.'
      },
      {
        type: 'table',
        headers: ['Festigkeitsklasse', 'Zugfestigkeit', 'Streckgrenze', 'Beschreibung'],
        rows: [
          ['4.6', '400 N/mm²', '240 N/mm²', 'Weich'],
          ['8.8', '800 N/mm²', '640 N/mm²', 'Standard'],
          ['10.9', '1000 N/mm²', '900 N/mm²', 'Hochfest'],
          ['12.9', '1200 N/mm²', '1080 N/mm²', 'Höchstfest']
        ]
      },
      {
        type: 'paragraph',
        text: 'Beispiel 8.8: 8 × 100 = 800 N/mm² Zugfestigkeit, 8 × 0,8 × 100 = 640 N/mm² Streckgrenze.'
      },
      {
        type: 'example',
        title: 'Beispiele',
        text: 'Sechskantschraube M8, Mutter M8, Unterlegscheibe'
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
