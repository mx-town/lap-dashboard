// ============================================================================
// ENTRIES - Netzsysteme (Category 10)
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
    id: "netzsysteme-grundbegriffe",
    sectionId: "netzsysteme-grundbegriffe",
    title: "Grundbegriffe (L, N, PE, PEN)",
    content: [
      {
        type: 'definition',
        text: 'Elektrische Netze verwenden verschiedene Leiter für unterschiedliche Funktionen.'
      },
      {
        type: 'table',
        headers: ['Leiter', 'Bezeichnung', 'Funktion'],
        rows: [
          ['L1, L2, L3', 'Außenleiter', 'Führen Spannung, 120° phasenverschoben'],
          ['N', 'Neutralleiter', 'Rückleiter, bei symmetrischer Last stromlos'],
          ['PE', 'Schutzleiter', 'Protective Earth, verbindet Gehäuse mit Erde. Führt nur Fehlerstrom'],
          ['PEN', 'Kombinierter Leiter', 'Kombinierter Schutz- und Neutralleiter (nur in TN-C)']
        ]
      },
      {
        type: 'note',
        text: 'Wichtig für Verständnis der Netzstruktur.'
      },
      {
        type: 'example',
        title: 'Farbcodierung',
        text: 'L1=Braun, L2=Schwarz, L3=Grau, N=Blau, PE=Grün-Gelb'
      }
    ]
  },
  {
    id: "netzspannungen",
    sectionId: "netzspannungen",
    title: "Netzspannungen (230 V / 400 V)",
    content: [
      {
        type: 'definition',
        text: 'Elektrische Netze verwenden unterschiedliche Spannungen für verschiedene Anwendungen.'
      },
      {
        type: 'table',
        headers: ['System', 'Spannung', 'Beschreibung'],
        rows: [
          ['Einphasig', '230 V', 'Zwischen L und N (Strangspannung)'],
          ['Dreiphasig', '400 V', 'Zwischen zwei Außenleitern (Leiterspannung)']
        ]
      },
      {
        type: 'formula',
        latex: 'U_{Leiter} = U_{Strang} \\times \\sqrt{3}',
        description: 'Zusammenhang Leiter- und Strangspannung'
      },
      {
        type: 'paragraph',
        text: '400 V = 230 V × 1,73'
      },
      {
        type: 'table',
        headers: ['Frequenz', 'Region'],
        rows: [
          ['50 Hz', 'Europa'],
          ['60 Hz', 'USA']
        ]
      },
      {
        type: 'note',
        text: 'Wichtig für Geräteauswahl und Sicherheit.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Haushaltsgeräte 230V, Motoren 400V Drehstrom'
      }
    ]
  },
  {
    id: "stern-dreieckschaltung",
    sectionId: "stern-dreieck",
    title: "Stern- und Dreieckschaltung",
    content: [
      {
        type: 'definition',
        text: 'Motoren können in Stern- oder Dreieckschaltung betrieben werden, wobei sich Spannung und Strom unterschiedlich verteilen.'
      },
      {
        type: 'table',
        headers: ['Schaltung', 'U_Wicklung', 'I_Leiter', 'Anwendung'],
        rows: [
          ['Stern (Y)', '230 V', 'I_Leiter = I_Wicklung', 'Motor bei 400V/690V-Schild: Stern bei 690 V Netz'],
          ['Dreieck (Δ)', '400 V', 'I_Leiter = I_Wicklung × √3', 'Motor bei 400V/690V-Schild: Dreieck bei 400 V Netz']
        ]
      },
      {
        type: 'paragraph',
        text: 'Sternschaltung (Y): Wicklungsenden am Sternpunkt verbunden.'
      },
      {
        type: 'paragraph',
        text: 'Dreieckschaltung (Δ): Wicklungen zwischen Außenleitern.'
      },
      {
        type: 'warning',
        text: 'Phasenausfall: Motor läuft mit reduzierter Leistung weiter, verbleibende Wicklungen werden überlastet und überhitzen. Motorschutzrelais sollte auslösen.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Stern-Dreieck-Anlauf für Motoren, Leistungserhöhung'
      }
    ]
  },
  {
    id: "tn-s-system",
    sectionId: "netzsysteme-typen",
    title: "TN-S-System",
    content: [
      {
        type: 'definition',
        text: 'Im TN-S-System sind PE und N durchgehend getrennt.'
      },
      {
        type: 'paragraph',
        text: 'Fehlerstrom über PE, hoher Kurzschlussstrom → LS löst aus.'
      },
      {
        type: 'list',
        title: 'Vorteile',
        items: [
          'EMV-freundlich',
          'Geringste Störungen',
          'Standard für Neuanlagen'
        ]
      },
      {
        type: 'paragraph',
        text: 'Sternpunkt der Quelle geerdet, Körper über PE geerdet.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Moderne Hausinstallation, Industrieanlagen'
      }
    ]
  },
  {
    id: "tn-c-system",
    sectionId: "netzsysteme-typen",
    title: "TN-C-System",
    content: [
      {
        type: 'definition',
        text: 'Im TN-C-System sind PE und N als PEN kombiniert.'
      },
      {
        type: 'warning',
        text: 'Betriebsströme auf PEN können Gehäusespannungen verursachen. EMV-Probleme, kein FI möglich. Nur für Zuleitung, nicht in Gebäuden!'
      },
      {
        type: 'note',
        text: 'Veraltet, nicht mehr zulässig in neuen Installationen.'
      },
      {
        type: 'example',
        title: 'Historisch',
        text: 'Alte Installationen (vor 1990er Jahren)'
      }
    ]
  },
  {
    id: "tn-c-s-system",
    sectionId: "netzsysteme-typen",
    title: "TN-C-S-System",
    image: "/images/tn-system.png",
    content: [
      {
        type: 'definition',
        text: 'Im TN-C-S-System ist PEN in der Zuleitung, Aufteilung in PE und N am Hausanschluss (HAK).'
      },
      {
        type: 'paragraph',
        text: 'Standard: In Wohngebäuden. Wirtschaftlich und sicher.'
      },
      {
        type: 'note',
        text: 'Ab HAK gilt TN-S, daher RCD möglich. Übergang PEN → PE+N nur einmal erlaubt.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Hausinstallation: TN-C-S ab Hausanschluss, ab HAK TN-S'
      }
    ]
  },
  {
    id: "tt-system",
    sectionId: "netzsysteme-typen",
    title: "TT-System",
    image: "/images/tt-system.png",
    content: [
      {
        type: 'definition',
        text: 'Im TT-System erfolgt die Anlagenerdung über separaten Erder, nicht mit Trafo-Erde verbunden.'
      },
      {
        type: 'warning',
        text: 'FI zwingend erforderlich (geringer Fehlerstrom durch Erdungswiderstand).'
      },
      {
        type: 'paragraph',
        text: 'Wird verwendet, wenn kein durchgehender Schutzleiter vom Netz verfügbar ist.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Landwirtschaftliche Betriebe, ältere Installationen'
      }
    ]
  },
  {
    id: "it-system",
    sectionId: "netzsysteme-typen",
    title: "IT-System",
    image: "/images/it-system.png",
    content: [
      {
        type: 'definition',
        text: 'Im IT-System gibt es keine direkte Erdverbindung (isoliert oder hochohmig).'
      },
      {
        type: 'paragraph',
        text: 'Erster Fehler → kein Ausfall! Isolationsüberwachung meldet.'
      },
      {
        type: 'list',
        title: 'Vorteile',
        items: [
          'Höchste Verfügbarkeit',
          'Kein Ausfall bei erstem Erdschluss'
        ]
      },
      {
        type: 'list',
        title: 'Anwendung',
        items: [
          'OP-Säle',
          'Intensivstationen',
          'Bergbau',
          'Kritische Industrie'
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'OP-Saal mit Isolationsüberwachung, Chemieanlage'
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
