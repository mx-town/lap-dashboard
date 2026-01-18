// ============================================================================
// ENTRIES - Kabel/Leitungen/Stecker (Category 5)
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
    id: "leitungsbezeichnung",
    sectionId: "leitungsbezeichnung",
    title: "Leitungsbezeichnung (NYM, NYY, H07V-U, etc.)",
    content: [
      {
        type: 'definition',
        text: 'Leitungsbezeichnungen codieren Aufbau, Isolierung und Anwendung der Kabel.'
      },
      {
        type: 'paragraph',
        text: 'Beispiel NYM-J 3×1,5: N = Normenleitung, Y = PVC-Isolierung, M = Mantelleitung, J = mit Schutzleiter (grün-gelb), 3×1,5 = 3 Adern à 1,5 mm². Ohne J: Kein Schutzleiter (z.B. NYM-O).'
      },
      {
        type: 'table',
        headers: ['Bezeichnung', 'Beschreibung', 'Anwendung'],
        rows: [
          ['NYM-J', 'PVC-Mantelleitung mit Schutzleiter', 'Unterputz'],
          ['NYY-J', 'PVC-Erdkabel mit Schutzleiter', 'Erdverlegung'],
          ['H07V-U', 'Eindrähtige Aderleitung', 'Schaltschrank'],
          ['H07V-K', 'Feindrähtige Aderleitung', 'Flexible Verbindungen'],
          ['H07RN-F', 'Gummischlauchleitung', 'Baustelle'],
          ['E30/E90', 'Brandmeldekabel', 'Funktionserhalt 30/90 min bei Brand']
        ]
      },
      {
        type: 'example',
        title: 'Typische Anwendungen',
        text: 'NYM-J 3×1.5mm², H07V-K 3×2.5mm²'
      }
    ]
  },
  {
    id: "kabeltypen",
    sectionId: "leitungsbezeichnung",
    title: "Kabeltypen",
    image: "/images/kabel.png",
    content: [
      {
        type: 'definition',
        text: 'Wichtige Kabeltypen in der Schweiz mit spezifischen Anwendungen.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Beschreibung', 'Anwendung'],
        rows: [
          ['TT', 'Installationskabel für feste Verlegung', 'Hausinstallation'],
          ['Td', 'Flachkabel für Geräteanschluss', 'Geräte'],
          ['FE0', 'Halogenfrei für öffentliche Bauten', 'Öffentliche Gebäude'],
          ['PUR', 'Polyurethan-Mantel für Schleppketten', 'Bewegliche Anwendungen']
        ]
      },
      {
        type: 'table',
        headers: ['Leiter', 'Farbe'],
        rows: [
          ['L1', 'Braun'],
          ['L2', 'Schwarz'],
          ['L3', 'Grau'],
          ['N', 'Blau'],
          ['PE', 'Grün-Gelb']
        ]
      },
      {
        type: 'example',
        title: 'Beispiele',
        text: 'TT 3×1.5mm², Td 3×0.75mm², H07RN-F (Gummikabel)'
      }
    ]
  },
  {
    id: "aderkennzeichnung",
    sectionId: "aderkennzeichnung",
    title: "Aderkennzeichnung",
    content: [
      {
        type: 'definition',
        text: 'Aderkennzeichnung identifiziert die Funktion der einzelnen Leiter in Kabeln und Leitungen.'
      },
      {
        type: 'table',
        headers: ['Leiter', 'Farbe', 'Beschreibung'],
        rows: [
          ['L1', 'Braun', 'Außenleiter/Phase 1'],
          ['L2', 'Schwarz', 'Außenleiter/Phase 2'],
          ['L3', 'Grau', 'Außenleiter/Phase 3'],
          ['N', 'Blau', 'Neutralleiter'],
          ['PE', 'Grün-Gelb', 'Schutzleiter'],
          ['PEN', 'Grün-Gelb mit blauer Markierung', 'Kombinierter Neutral- und Schutzleiter']
        ]
      },
      {
        type: 'warning',
        text: 'PE (Grün-Gelb) ist ausschließlich für Schutzleiter, nie für andere Zwecke!'
      },
      {
        type: 'note',
        text: 'In Steuerungen auch nummeriert (z.B. 1-99 für Steuerkreise).'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Drehstromkabel mit Aderkennzeichnung'
      }
    ]
  },
  {
    id: "steckverbinder-cee",
    sectionId: "steckertypen",
    title: "CEE-Stecker",
    image: "/images/cee-stecker.png",
    content: [
      {
        type: 'definition',
        text: 'CEE-Industriestecker sind nach Farben codiert und bieten hohe Schutzart und sichere Verriegelung.'
      },
      {
        type: 'table',
        headers: ['Farbe', 'Spannung', 'Beschreibung'],
        rows: [
          ['Blau', '230 V', 'Einphasig'],
          ['Rot', '400 V', 'Dreiphasig'],
          ['Gelb', '110 V', 'Baustelle'],
          ['Grün', '>50 V', '100-300 Hz']
        ]
      },
      {
        type: 'paragraph',
        text: 'Die Polzahl gibt die Anzahl der Kontakte an (z.B. 3P+N+PE = 5-polig).'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'CEE 16A 3P (blau) für Camping, CEE 32A 5P (rot) für Baustelle'
      }
    ]
  },
  {
    id: "steckverbinder-m12",
    sectionId: "steckertypen",
    title: "M12 Steckverbinder",
    image: "/images/m12.png",
    content: [
      {
        type: 'definition',
        text: 'M12 ist der Industrie-Standard für Sensor- und Aktoranschlüsse. Verschiedene Kodierungen verhindern Fehlstecken.'
      },
      {
        type: 'table',
        headers: ['Kodierung', 'Anwendung', 'Datenrate'],
        rows: [
          ['A-kodiert', 'Sensoren/Aktoren', '-'],
          ['B-kodiert', 'PROFIBUS', '-'],
          ['D-kodiert', 'Industrial Ethernet', '100 Mbit'],
          ['X-kodiert', 'Industrial Ethernet', '10 Gbit']
        ]
      },
      {
        type: 'note',
        text: 'Schutzart bis IP67.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'M12 A-kodiert 4-polig für Näherungsschalter'
      }
    ]
  },
  {
    id: "steckertypen",
    sectionId: "steckertypen",
    title: "Steckertypen (Schuko, CEE blau/rot, Kaltgeräte)",
    content: [
      {
        type: 'definition',
        text: 'Verschiedene Steckertypen für unterschiedliche Anwendungen und Spannungen.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Spannung', 'Strom', 'Pole', 'Anwendung'],
        rows: [
          ['Schuko (Typ F)', '250 V', '16 A (3680 W)', '3 (L, N, PE)', 'Standard DE/AT, kein Verpolungsschutz'],
          ['Blauer CEE', '230 V', '16 A', '3 (L, N, PE)', 'Camping, Außen, Baustellen, IP44'],
          ['Roter CEE', '400 V', '16–125 A', '5 (L1, L2, L3, N, PE)', 'Drehstrom, Industrie'],
          ['C13/C14 (Kaltgeräte)', '250 V', '10 A', '3', 'Computer, Monitore, Messgeräte'],
          ['C15/C16 (Heißgeräte)', '250 V', '10 A, bis 120°C', '3', 'Wasserkocher, Server']
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Haushaltsstecker, Industriestecker, Kaltgerätestecker'
      }
    ]
  },
  {
    id: "e30-e90-brandmeldekabel",
    sectionId: "leitungsbezeichnung",
    title: "E30/E90 Brandmeldekabel",
    content: [
      {
        type: 'definition',
        text: 'Brandmeldekabel sind spezielle Leitungen für Brandmeldeanlagen mit Feuerwiderstand.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Feuerwiderstand', 'Beschreibung'],
        rows: [
          ['E30', '30 Minuten', 'Funktionserhalt bei Brand'],
          ['E90', '90 Minuten', 'Funktionserhalt bei Brand']
        ]
      },
      {
        type: 'paragraph',
        text: 'Halten Funktion im Brandfall aufrecht.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Brandmeldekabel für Rauchmelder, Alarmzentrale'
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
