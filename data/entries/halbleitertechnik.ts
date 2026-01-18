// ============================================================================
// ENTRIES - Halbleitertechnik (Category 4)
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
    id: "kondensatoren",
    sectionId: "passive-bauelemente",
    title: "Kondensatoren (Elko, Folie, Keramik)",
    content: [
      {
        type: 'definition',
        text: 'Kondensatoren speichern elektrische Energie im elektrischen Feld. Es gibt verschiedene Bauarten mit unterschiedlichen Eigenschaften.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Aufbau', 'Eigenschaften', 'Kapazität'],
        rows: [
          ['Elektrolytkondensator (Elko)', 'Zwei Aluminiumfolien, getrennt durch elektrolytgetränktes Papier. Oxidschicht als Dielektrikum', 'POLARITÄTSABHÄNGIG – Verpolung führt zur Zerstörung!', '1 µF bis mehrere F'],
          ['Folienkondensator', 'Metallisierte Kunststofffolien (Polyester, Polypropylen)', 'Keine Polarität. Geringe Verluste, hohe Spannungsfestigkeit, selbstheilend', 'nF bis µF'],
          ['Keramikkondensator', 'Keramische Dielektrika in Vielschichtbauweise (MLCC)', 'Keine Polarität. Klasse 1 (NP0/C0G): Stabil. Klasse 2 (X7R, Y5V): Hohe Kapazität, aber temperaturabhängig', 'pF bis µF']
        ]
      },
      {
        type: 'warning',
        text: 'Elektrolytkondensatoren sind POLARITÄTSABHÄNGIG – Verpolung führt zur Zerstörung!'
      },
      {
        type: 'example',
        title: 'Typische Werte',
        text: '100µF Elko, 100nF Folie, 10pF Keramik'
      }
    ]
  },
  {
    id: "ntc-ptc-ldr",
    sectionId: "passive-bauelemente",
    title: "NTC / PTC / LDR",
    content: [
      {
        type: 'definition',
        text: 'Temperatur- und lichtabhängige Widerstände ändern ihren Widerstandswert in Abhängigkeit von Umgebungsbedingungen.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Verhalten', 'Anwendung'],
        rows: [
          ['NTC (Heißleiter)', 'Widerstand SINKT bei steigender Temperatur (Negativer Temperaturkoeffizient)', 'Temperaturmessung, Einschaltstrombegrenzung'],
          ['PTC (Kaltleiter)', 'Widerstand STEIGT bei steigender Temperatur (Positiver Temperaturkoeffizient)', 'Selbstrückstellende Sicherungen (PolySwitch), Übertemperaturschutz'],
          ['LDR (Fotowiderstand)', 'Widerstand SINKT bei steigender Beleuchtung. Hell: wenige Ohm, Dunkel: Megaohm', 'Dämmerungsschalter, Belichtungsmesser']
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Temperatursensor, Überstromschutz, Dämmerungsschalter'
      }
    ]
  },
  {
    id: "widerstandsfarbcode",
    sectionId: "passive-bauelemente",
    title: "Widerstandsfarbcode",
    content: [
      {
        type: 'definition',
        text: 'Farbringe auf Widerständen codieren den Widerstandswert. 4-Ring: Wert + Toleranz. 5-Ring: genauere Werte.'
      },
      {
        type: 'table',
        headers: ['Farbe', 'Wert', 'Multiplikator', 'Toleranz'],
        rows: [
          ['Schwarz', '0', '×1', '-'],
          ['Braun', '1', '×10', '±1%'],
          ['Rot', '2', '×100', '±2%'],
          ['Orange', '3', '×1000', '-'],
          ['Gelb', '4', '×10000', '-'],
          ['Grün', '5', '×100000', '±0.5%'],
          ['Blau', '6', '×1000000', '±0.25%'],
          ['Violett', '7', '×10000000', '±0.1%'],
          ['Grau', '8', '×100000000', '-'],
          ['Weiß', '9', '×1000000000', '-'],
          ['Gold', '-', '×0.1', '±5%'],
          ['Silber', '-', '×0.01', '±10%']
        ]
      },
      {
        type: 'note',
        text: 'Merksatz: "Schwarz Braun Rot Orange Gelb Grün Blau Violett Grau Weiß" = 0–9'
      },
      {
        type: 'example',
        title: 'Beispiel',
        text: 'Braun-Schwarz-Rot-Gold = 1-0-×100-±5% = 1000 Ω = 1 kΩ ±5%'
      }
    ]
  },
  {
    id: "diode",
    sectionId: "dioden",
    title: "Diode",
    image: "/images/diode.png",
    content: [
      {
        type: 'definition',
        text: 'Eine Diode ist ein Halbleiterbauelement mit pn-Übergang aus dotiertem Silizium. Sie leitet Strom nur in eine Richtung.'
      },
      {
        type: 'paragraph',
        text: 'Anode (+) und Kathode (−), Markierung am Kathodenende.'
      },
      {
        type: 'list',
        title: 'Funktionsweise',
        items: [
          'Durchlassrichtung: Strom fließt ab ca. 0,7 V (Si) bzw. 0,3 V (Ge)',
          'Sperrrichtung: Kein Stromfluss bis zur Durchbruchspannung'
        ]
      },
      {
        type: 'list',
        title: 'Anwendung',
        items: [
          'Gleichrichtung',
          'Verpolungsschutz',
          'Freilaufdiode bei induktiven Lasten'
        ]
      },
      {
        type: 'example',
        title: 'Typen',
        text: 'Gleichrichterdiode 1N4007, Zenerdiode, LED, Schottky-Diode'
      }
    ]
  },
  {
    id: "z-diode",
    sectionId: "dioden",
    title: "Z-Diode",
    content: [
      {
        type: 'definition',
        text: 'Eine Z-Diode wird in Sperrrichtung betrieben und hält ab der Zenerspannung eine konstante Spannung aufrecht.'
      },
      {
        type: 'paragraph',
        text: 'Ab der Zenerspannung (z.B. 5,1 V) fließt Strom bei konstanter Spannung.'
      },
      {
        type: 'list',
        title: 'Anwendung',
        items: [
          'Spannungsstabilisierung',
          'Überspannungsschutz',
          'Referenzspannungsquelle'
        ]
      },
      {
        type: 'example',
        title: 'Beispiel',
        text: 'Zener 5.1V für Spannungsreferenz'
      }
    ]
  },
  {
    id: "led",
    sectionId: "dioden",
    title: "LED (Leuchtdiode)",
    content: [
      {
        type: 'definition',
        text: 'Eine LED (Leuchtdiode) emittiert Licht bei Stromfluss.'
      },
      {
        type: 'warning',
        text: 'Vorwiderstand erforderlich!'
      },
      {
        type: 'formula',
        latex: 'R = \\frac{U_{Versorgung} - U_{LED}}{I_{LED}}',
        description: 'Vorwiderstandsberechnung'
      },
      {
        type: 'table',
        headers: ['LED-Typ', 'Spannung U_LED', 'Strom I_LED'],
        rows: [
          ['Rot', '≈ 2 V', '10–20 mA'],
          ['Weiß/Blau', '≈ 3 V', '10–20 mA']
        ]
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'LED mit Vorwiderstand für Anzeige'
      }
    ]
  },
  {
    id: "transistor-bipolar",
    sectionId: "transistoren",
    title: "Bipolarer Transistor",
    image: "/images/transistor-bjt.png",
    content: [
      {
        type: 'definition',
        text: 'Ein bipolarer Transistor besteht aus drei Schichten (NPN oder PNP) mit Emitter (E), Basis (B), Kollektor (C).'
      },
      {
        type: 'paragraph',
        text: 'Funktionsweise: Kleiner Basisstrom I_B steuert großen Kollektorstrom I_C.'
      },
      {
        type: 'formula',
        latex: 'I_C = \\beta \\times I_B',
        description: 'Stromverstärkung'
      },
      {
        type: 'paragraph',
        text: 'β (hFE): Typisch β = 100–300 (Bereich: 20–1000).'
      },
      {
        type: 'table',
        headers: ['Typ', 'Schaltungsart', 'Verwendung'],
        rows: [
          ['NPN', 'Schaltet positive Last gegen Masse (Low-Side)', 'Häufiger verwendet'],
          ['PNP', 'Schaltet Last gegen Plus (High-Side)', 'Spezialanwendungen']
        ]
      },
      {
        type: 'example',
        title: 'Typische Bauteile',
        text: 'BC547 (NPN), BC557 (PNP), als Schalter oder Verstärker'
      }
    ]
  },
  {
    id: "transistor-mosfet",
    sectionId: "transistoren",
    title: "MOSFET (N-Kanal, P-Kanal)",
    image: "/images/mosfet.png",
    content: [
      {
        type: 'definition',
        text: 'Ein MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor) steuert den Stromfluss durch eine Spannung am Gate.'
      },
      {
        type: 'paragraph',
        text: 'Aufbau: Gate (G), Drain (D), Source (S). Gate durch Oxidschicht isoliert.'
      },
      {
        type: 'paragraph',
        text: 'Funktionsweise: Spannung am Gate (U_GS) steuert den Kanal. Nahezu leistungslose Ansteuerung (keine Stromaufnahme am Gate im statischen Betrieb).'
      },
      {
        type: 'table',
        headers: ['Typ', 'Schaltverhalten', 'Eigenschaften'],
        rows: [
          ['N-Kanal', 'Schaltet bei positiver Gate-Spannung', 'Häufiger, niedrigerer R_DS(on)'],
          ['P-Kanal', 'Schaltet bei negativer Gate-Spannung (relativ zu Source)', 'Spezialanwendungen']
        ]
      },
      {
        type: 'list',
        title: 'Betriebsarten',
        items: [
          'Anreicherungstyp: Normalerweise sperrend, schaltet bei Ansteuerung',
          'Verarmungstyp: Normalerweise leitend, sperrt bei Ansteuerung'
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'IRFZ44N für Motorsteuerung, IRF540 für Schaltnetzteile'
      }
    ]
  },
  {
    id: "thyristor",
    sectionId: "spezialbauelemente",
    title: "Thyristor",
    content: [
      {
        type: 'definition',
        text: 'Ein Thyristor ist ein Vierschicht-Halbleiter (PNPN) mit Anode (A), Kathode (K), Gate (G).'
      },
      {
        type: 'paragraph',
        text: 'Funktionsweise: Sperrt ohne Ansteuerung. Zündimpuls am Gate schaltet dauerhaft leitend. Bleibt leitend bis Strom unter Haltestrom fällt (bei AC: jede Halbwelle).'
      },
      {
        type: 'list',
        title: 'Anwendung',
        items: [
          'Phasenanschnittsteuerung',
          'Dimmer',
          'Gleichrichter',
          'Wechselrichter'
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Dimmer, Motorsteuerung, Wechselrichter'
      }
    ]
  },
  {
    id: "operationsverstaerker",
    sectionId: "spezialbauelemente",
    title: "Operationsverstärker",
    content: [
      {
        type: 'definition',
        text: 'Ein Operationsverstärker verstärkt die Differenz zwischen den Eingängen mit sehr hohem Verstärkungsfaktor (> 100.000).'
      },
      {
        type: 'paragraph',
        text: 'Beispiel 741: DIP-8-Gehäuse. Pin 2: Invertierender Eingang (−), Pin 3: Nichtinvertierender Eingang (+), Pin 6: Ausgang, Pin 4: V−, Pin 7: V+.'
      },
      {
        type: 'paragraph',
        text: 'Externe Beschaltung bestimmt die Funktion.'
      },
      {
        type: 'list',
        title: 'Grundschaltungen',
        items: [
          'Invertierender Verstärker',
          'Nichtinvertierender Verstärker',
          'Komparator',
          'Schmitt-Trigger'
        ]
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: '741 als Komparator, Verstärker'
      }
    ]
  },
  {
    id: "ic-ic-sockel",
    sectionId: "spezialbauelemente",
    title: "IC / IC-Sockel",
    content: [
      {
        type: 'definition',
        text: 'Integrierte Schaltungen (IC) enthalten komplexe Schaltungen auf einem Chip.'
      },
      {
        type: 'paragraph',
        text: 'IC-Sockel ermöglichen einfachen Austausch ohne Löten.'
      },
      {
        type: 'list',
        title: 'Wichtige Typen',
        items: [
          'DIP (Dual Inline Package)',
          'SMD (Surface Mount Device)'
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Mikrocontroller, Logik-ICs, Speicher'
      }
    ]
  },
  {
    id: "spule-transformator",
    sectionId: "passive-bauelemente",
    title: "Spule / Transformator",
    content: [
      {
        type: 'definition',
        text: 'Eine Spule (Induktivität) speichert Energie im Magnetfeld. Ein Transformator überträgt Wechselspannung durch magnetische Kopplung zwischen Primär- und Sekundärwicklung.'
      },
      {
        type: 'formula',
        latex: '\\frac{U_1}{U_2} = \\frac{N_1}{N_2}',
        description: 'Spannungsverhältnis beim Transformator'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Netztransformator, Drossel, Schaltnetzteil'
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
