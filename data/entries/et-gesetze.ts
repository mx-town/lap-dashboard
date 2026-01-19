// ============================================================================
// ENTRIES - ET Gesetze (Category 2)
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
    id: "ladungsgesetz",
    sectionId: "grundgesetze",
    title: "Ladungsgesetz",
    content: [
      {
        type: 'definition',
        text: 'Die elektrische Ladung Q ist das Produkt aus Stromstärke I und Zeit t.'
      },
      {
        type: 'formula',
        latex: 'Q = I \\times t',
        description: 'Ladungsgesetz'
      },
      {
        type: 'paragraph',
        text: 'Die Einheit der elektrischen Ladung ist Coulomb (C). Es gilt: 1 C = 1 A × 1 s.'
      },
      {
        type: 'list',
        title: 'Umstellungen',
        items: [
          'I = Q / t',
          't = Q / I'
        ]
      },
      {
        type: 'note',
        text: '1 Ah (Ampere-Stunde) = 3600 C – relevant für Akkukapazitäten.'
      },
      {
        type: 'example',
        title: 'Praxisbeispiel',
        text: 'Akkukapazität: 5 Ah = 18000 C'
      }
    ]
  },
  {
    id: "ohmsches-gesetz",
    sectionId: "grundgesetze",
    title: "Ohmsches Gesetz",
    image: "/images/ohm.png",
    content: [
      {
        type: 'definition',
        text: 'Das Ohmsche Gesetz beschreibt die Proportionalität zwischen Spannung U und Strom I, wobei der Widerstand R der Proportionalitätsfaktor ist.'
      },
      {
        type: 'formula',
        latex: 'U = R \\times I',
        description: 'Ohmsches Gesetz'
      },
      {
        type: 'paragraph',
        text: 'Es ist das fundamentale Gesetz der Elektrotechnik und bildet die Grundlage für die Berechnung von Widerständen und Strömen in Schaltungen.'
      },
      {
        type: 'list',
        title: 'Umstellungen',
        items: [
          'R = \\frac{U}{I}',
          'I = \\frac{U}{R}'
        ]
      },
      {
        type: 'note',
        text: 'Eselsbrücke: "URI" – Spannung = Widerstand × Strom'
      },
      {
        type: 'example',
        title: 'Berechnungsbeispiel',
        text: 'U = 12V, R = 4Ω → I = 12V / 4Ω = 3A'
      }
    ]
  },
  {
    id: "kirchhoff-strom",
    sectionId: "grundgesetze",
    title: "Kirchhoffsches Stromgesetz",
    image: "/images/kirchhoff-strom.png",
    content: [
      {
        type: 'definition',
        text: 'Die Knotenregel (1. Kirchhoffsches Gesetz) besagt: Die Summe aller Ströme an einem Knotenpunkt ist null.'
      },
      {
        type: 'formula',
        latex: '\\sum I = 0',
        description: 'Knotenregel'
      },
      {
        type: 'formula',
        latex: '\\sum I_{zuflie\\ss end} = \\sum I_{abflie\\ss end}',
        description: 'Alternative Formulierung'
      },
      {
        type: 'paragraph',
        text: 'Dies folgt aus der Ladungserhaltung. Anwendung: Berechnung von Strömen in Parallelschaltungen und verzweigten Netzen.'
      },
      {
        type: 'example',
        title: 'Beispiel',
        text: 'I₁ + I₂ = I₃ + I₄ (bei 4 Leitern an einem Knoten)'
      }
    ]
  },
  {
    id: "kirchhoff-spannung",
    sectionId: "grundgesetze",
    title: "Kirchhoffsches Spannungsgesetz",
    image: "/images/kirchhoff-spannung.png",
    content: [
      {
        type: 'definition',
        text: 'Die Maschenregel (2. Kirchhoffsches Gesetz) besagt: Die Summe aller Spannungen in einer geschlossenen Masche ist null.'
      },
      {
        type: 'formula',
        latex: '\\sum U = 0',
        description: 'Maschenregel'
      },
      {
        type: 'formula',
        latex: 'U_{Quelle} = \\sum U_{Verbraucher}',
        description: 'Alternative Formulierung'
      },
      {
        type: 'paragraph',
        text: 'Grundlage für die Berechnung von Spannungen in Reihenschaltungen und Maschen.'
      },
      {
        type: 'example',
        title: 'Reihenschaltung',
        text: 'U_q = U₁ + U₂ + U₃'
      }
    ]
  },
  {
    id: "leistungsgesetz",
    sectionId: "leistung-arbeit",
    title: "Elektrische Leistung",
    image: "/images/leistung.png",
    content: [
      {
        type: 'definition',
        text: 'Die elektrische Leistung P ist das Produkt aus Spannung U und Strom I.'
      },
      {
        type: 'formula',
        latex: 'P = U \\times I',
        description: 'Grundformel'
      },
      {
        type: 'paragraph',
        text: 'Die Einheit ist Watt (W). Es gilt: 1 kW = 1000 W.'
      },
      {
        type: 'list',
        title: 'Abgeleitete Formeln',
        items: [
          'P = I² × R (bei bekanntem Strom)',
          'P = \\frac{U^2}{R} (bei bekannter Spannung)'
        ]
      },
      {
        type: 'paragraph',
        text: 'Bei Wechselstrom unterscheidet man verschiedene Leistungsarten:'
      },
      {
        type: 'formula',
        latex: 'P = U \\times I \\times \\cos \\varphi',
        description: 'Wirkleistung (W)'
      },
      {
        type: 'formula',
        latex: 'Q = U \\times I \\times \\sin \\varphi',
        description: 'Blindleistung (var)'
      },
      {
        type: 'formula',
        latex: 'S = U \\times I',
        description: 'Scheinleistung (VA)'
      },
      {
        type: 'formula',
        latex: 'S^2 = P^2 + Q^2',
        description: 'Zusammenhang der Leistungsarten'
      },
      {
        type: 'formula',
        latex: '\\cos \\varphi = \\frac{P}{S}',
        description: 'Leistungsfaktor'
      },
      {
        type: 'example',
        title: 'Berechnungsbeispiel',
        text: '230V × 10A = 2300W = 2.3kW'
      }
    ]
  },
  {
    id: "elektrische-arbeit",
    sectionId: "leistung-arbeit",
    title: "Elektrische Arbeit",
    content: [
      {
        type: 'definition',
        text: 'Die elektrische Arbeit W ist das Produkt aus Leistung P und Zeit t.'
      },
      {
        type: 'formula',
        latex: 'W = P \\times t',
        description: 'Elektrische Arbeit'
      },
      {
        type: 'paragraph',
        text: 'Einheiten: Wattsekunde (Ws) oder Joule (J), Kilowattstunde (kWh).'
      },
      {
        type: 'list',
        title: 'Umrechnung',
        items: [
          '1 kWh = 3.600.000 Ws',
          '1 kWh = 3,6 MJ'
        ]
      },
      {
        type: 'note',
        text: 'Stromzähler messen in kWh – Grundlage für die Stromrechnung.'
      },
      {
        type: 'example',
        title: 'Verbrauchsberechnung',
        text: '100W × 5h = 500Wh = 0.5kWh'
      }
    ]
  },
  {
    id: "widerstandsgesetz",
    sectionId: "widerstaende-schaltungen",
    title: "Widerstandsgesetz",
    content: [
      {
        type: 'definition',
        text: 'Der Widerstand R eines Leiters hängt vom spezifischen Widerstand ρ, der Leiterlänge l und dem Leiterquerschnitt A ab.'
      },
      {
        type: 'formula',
        latex: 'R = \\rho \\times \\frac{l}{A}',
        description: 'Widerstandsgesetz'
      },
      {
        type: 'paragraph',
        text: 'ρ (Rho): Spezifischer Widerstand in Ω·mm²/m, l: Leiterlänge in m, A: Leiterquerschnitt in mm².'
      },
      {
        type: 'table',
        headers: ['Material', 'Spezifischer Widerstand ρ (20°C)'],
        rows: [
          ['Kupfer', '0,0178 Ω·mm²/m'],
          ['Aluminium', '0,028 Ω·mm²/m']
        ]
      },
      {
        type: 'example',
        title: 'Berechnungsbeispiel',
        text: 'Kupferdraht: l = 100m, A = 1.5mm² → R = 0.0178 × 100 / 1.5 = 1.19Ω'
      }
    ]
  },
  {
    id: "reihen-parallelschaltung",
    sectionId: "widerstaende-schaltungen",
    title: "Reihen- und Parallelschaltung",
    content: [
      {
        type: 'definition',
        text: 'Widerstände können in Reihe oder parallel geschaltet werden, wobei sich der Gesamtwiderstand unterschiedlich berechnet.'
      },
      {
        type: 'paragraph',
        text: 'Reihenschaltung: Der Strom ist überall gleich, die Spannung teilt sich auf.'
      },
      {
        type: 'formula',
        latex: 'R_{ges} = R_1 + R_2 + R_3 + \\ldots',
        description: 'Reihenschaltung'
      },
      {
        type: 'paragraph',
        text: 'Parallelschaltung: Die Spannung ist überall gleich, der Strom teilt sich auf.'
      },
      {
        type: 'formula',
        latex: '\\frac{1}{R_{ges}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\ldots',
        description: 'Parallelschaltung (allgemein)'
      },
      {
        type: 'formula',
        latex: 'R_{ges} = \\frac{R_1 \\times R_2}{R_1 + R_2}',
        description: 'Zwei Widerstände parallel'
      },
      {
        type: 'note',
        text: 'Die Parallelschaltung ergibt immer einen kleineren Gesamtwiderstand als der kleinste Einzelwiderstand.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Drei Widerstände in Reihe/Parallel'
      }
    ]
  },
  {
    id: "spannungs-stromteiler",
    sectionId: "spannungs-stromteiler",
    title: "Spannungs- und Stromteiler",
    content: [
      {
        type: 'definition',
        text: 'Spannungs- und Stromteiler sind Grundschaltungen zur Aufteilung von Spannungen bzw. Strömen.'
      },
      {
        type: 'paragraph',
        text: 'Spannungsteiler: Die Spannung teilt sich im Verhältnis der Widerstände.'
      },
      {
        type: 'formula',
        latex: 'U_2 = U_{ges} \\times \\frac{R_2}{R_1 + R_2}',
        description: 'Spannungsteiler'
      },
      {
        type: 'paragraph',
        text: 'Stromteiler: Der Strom teilt sich umgekehrt proportional zu den Widerständen. Durch den kleineren Widerstand fließt mehr Strom.'
      },
      {
        type: 'formula',
        latex: 'I_1 = I_{ges} \\times \\frac{R_2}{R_1 + R_2}',
        description: 'Stromteiler'
      },
      {
        type: 'example',
        title: 'Anwendungen',
        text: 'Potentiometer, Shunt-Widerstand'
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
