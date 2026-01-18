// ============================================================================
// ENTRIES - Schutzkonzepte (Category 1)
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
    id: "basisschutz",
    sectionId: "basisschutz-fehlerschutz",
    title: "Basisschutz (Schutz gegen direktes Berühren)",
    content: [
      {
        type: 'definition',
        text: 'Schutz von Personen vor dem Berühren aktiver (spannungsführender) Teile im Normalbetrieb.'
      },
      {
        type: 'list',
        title: 'Maßnahmen',
        items: [
          'Isolierung aktiver Teile (Kabelummantelung, Gehäuse)',
          'Abdeckungen und Gehäuse (IP-Schutzarten, mindestens IP2X oder IPXXB)',
          'Hindernisse und Abstände (im Industriebereich)',
          'Schutz durch Standort (nur Elektrofachkräfte haben Zugang)'
        ]
      }
    ]
  },
  {
    id: "fehlerschutz",
    sectionId: "basisschutz-fehlerschutz",
    title: "Fehlerschutz (Schutz bei indirektem Berühren)",
    content: [
      {
        type: 'definition',
        text: 'Schutz von Personen vor gefährlichen Berührungsspannungen an leitfähigen Gehäusen, die durch einen Isolationsfehler unter Spannung stehen.'
      },
      {
        type: 'list',
        title: 'Maßnahmen',
        items: [
          'Schutzerdung – Gehäuse mit PE verbinden, Fehlerstrom löst Sicherung aus',
          'Fehlerstrom-Schutzeinrichtung (FI/RCD) – erkennt Differenzstrom',
          'Schutzisolierung (Schutzklasse II) – doppelte Isolierung',
          'Schutzkleinspannung (SELV/PELV) – ungefährliche Spannung',
          'Schutztrennung – galvanische Trennung vom Netz'
        ]
      }
    ]
  },
  {
    id: "zusatzschutz",
    sectionId: "basisschutz-fehlerschutz",
    title: "Zusatzschutz",
    content: [
      {
        type: 'definition',
        text: 'Zusätzliche Schutzmaßnahme bei Versagen von Basis- und Fehlerschutz.'
      },
      {
        type: 'warning',
        text: 'In Österreich: FI mit IΔn ≤ 30 mA Pflicht für Steckdosen bis 32 A.'
      }
    ]
  },
  {
    id: "schutzklasse-0",
    sectionId: "schutzklassen",
    title: "Schutzklasse 0",
    image: "/images/schutzklasse0.png",
    content: [
      {
        type: 'definition',
        text: 'Schutzklasse 0 bietet nur Basisisolierung ohne Schutzleiteranschluss. Der Schutz erfolgt ausschließlich durch die Umgebung (z.B. isolierter Standort).'
      },
      {
        type: 'warning',
        text: 'Diese Schutzklasse ist in der Schweiz und vielen anderen Ländern nicht mehr zulässig, da sie keinen ausreichenden Schutz gegen elektrischen Schlag bietet.'
      },
      {
        type: 'example',
        title: 'Historisch',
        text: 'Historische Geräte ohne Schutzleiter (heute nicht mehr erlaubt)'
      }
    ]
  },
  {
    id: "schutzklasse-1",
    sectionId: "schutzklassen",
    title: "Schutzklasse I",
    image: "/images/schutzklasse1.png",
    content: [
      {
        type: 'definition',
        text: 'Schutzklasse I verfügt über Basisisolierung und einen Schutzleiteranschluss (PE). Alle berührbaren leitfähigen Teile sind mit dem Schutzleiter verbunden.'
      },
      {
        type: 'paragraph',
        text: 'Bei einem Isolationsfehler löst die Schutzeinrichtung (RCD/Sicherung) aus und verhindert so gefährliche Berührungsspannungen. Symbol: Erdungszeichen.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Waschmaschine, Elektroherd, Bohrmaschine mit Metallgehäuse'
      }
    ]
  },
  {
    id: "schutzklasse-2",
    sectionId: "schutzklassen",
    title: "Schutzklasse II",
    image: "/images/schutzklasse2.png",
    content: [
      {
        type: 'definition',
        text: 'Schutzklasse II bietet Schutzisolierung durch doppelte oder verstärkte Isolierung. Ein Schutzleiteranschluss ist nicht erforderlich.'
      },
      {
        type: 'paragraph',
        text: 'Das Gerät hat meist ein Kunststoffgehäuse. Das Symbol ist ein doppeltes Quadrat. Diese Bauweise bietet hohe Sicherheit auch ohne Erdung.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Handy-Ladegerät, Haarföhn, Akkuschrauber, viele Elektrowerkzeuge'
      }
    ]
  },
  {
    id: "schutzklasse-3",
    sectionId: "schutzklassen",
    title: "Schutzklasse III",
    image: "/images/schutzklasse3.png",
    content: [
      {
        type: 'definition',
        text: 'Schutzklasse III arbeitet mit Schutzkleinspannung (SELV/PELV). Die Betriebsspannung beträgt maximal 50V AC oder 120V DC.'
      },
      {
        type: 'paragraph',
        text: 'Die Speisung erfolgt über einen Sicherheitstransformator. Durch die niedrige Spannung besteht keine Gefahr eines elektrischen Schlags. Symbol: Drei ineinander liegende Quadrate oder "III".'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'LED-Lampen 12V, Spielzeug, Klingeltransformatoren, Gartenbeleuchtung'
      }
    ]
  },
  {
    id: "selv-pelv",
    sectionId: "schutzklassen",
    title: "SELV / PELV",
    content: [
      {
        type: 'definition',
        text: 'SELV (Safety Extra Low Voltage) und PELV (Protective Extra Low Voltage) sind Schutzkleinspannungssysteme.'
      },
      {
        type: 'table',
        headers: ['System', 'Beschreibung'],
        rows: [
          ['SELV', 'Vollständig isolierte Stromquellen, keine Erdverbindung, höchste Sicherheitsstufe'],
          ['PELV', 'Erlaubt einen geerdeten Pol, mit Erdverbindung für Funktionserdung']
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Beleuchtung 12V, Spielzeug, medizinische Geräte'
      }
    ]
  },
  {
    id: "ip-schutzarten",
    sectionId: "ip-schutzarten",
    title: "IP-Schutzarten",
    image: "/images/ip-code.png",
    content: [
      {
        type: 'definition',
        text: 'Der IP-Code (International Protection) nach DIN EN 60529 gibt den Schutzgrad eines Gehäuses an.'
      },
      {
        type: 'paragraph',
        text: 'Aufbau: Kennzeichnung IP XY. Erste Ziffer = Fremdkörperschutz, zweite Ziffer = Wasserschutz.'
      }
    ]
  },
  {
    id: "ip-fremdkoerperschutz",
    sectionId: "ip-schutzarten",
    title: "IP-Code Erste Ziffer – Fremdkörper- und Berührungsschutz",
    content: [
      {
        type: 'definition',
        text: 'Die erste Ziffer des IP-Codes beschreibt den Schutz gegen Fremdkörper und Berührung.'
      },
      {
        type: 'table',
        headers: ['Code', 'Schutzgrad'],
        rows: [
          ['0', 'Kein Schutz'],
          ['1', 'Feste Fremdkörper ≥ 50 mm (Handrücken)'],
          ['2', 'Feste Fremdkörper ≥ 12,5 mm (Finger)'],
          ['3', 'Feste Fremdkörper ≥ 2,5 mm (Werkzeug)'],
          ['4', 'Feste Fremdkörper ≥ 1 mm (Draht)'],
          ['5', 'Staubgeschützt (Staub kann eindringen, beeinträchtigt Funktion nicht)'],
          ['6', 'Staubdicht (kein Staubeintritt)']
        ]
      }
    ]
  },
  {
    id: "ip-wasserschutz",
    sectionId: "ip-schutzarten",
    title: "IP-Code Zweite Ziffer – Wasserschutz",
    content: [
      {
        type: 'definition',
        text: 'Die zweite Ziffer des IP-Codes beschreibt den Schutz gegen Wasser.'
      },
      {
        type: 'table',
        headers: ['Code', 'Schutzgrad'],
        rows: [
          ['0', 'Kein Schutz'],
          ['1', 'Senkrechtes Tropfwasser'],
          ['2', 'Tropfwasser bei 15° Neigung'],
          ['3', 'Sprühwasser bis 60°'],
          ['4', 'Spritzwasser allseitig'],
          ['5', 'Strahlwasser (Düse 6,3 mm)'],
          ['6', 'Starkes Strahlwasser (Düse 12,5 mm)'],
          ['7', 'Zeitweiliges Untertauchen (bis 1 m, 30 min)'],
          ['8', 'Dauerhaftes Untertauchen (Tiefe nach Herstellerangabe)'],
          ['9K', 'Hochdruck-/Dampfstrahlreinigung (nach ISO 20653)']
        ]
      }
    ]
  },
  {
    id: "ip-praxisbeispiele",
    sectionId: "ip-schutzarten",
    title: "IP-Schutzarten Praxisbeispiele",
    content: [
      {
        type: 'definition',
        text: 'Häufig verwendete IP-Schutzarten in der Praxis.'
      },
      {
        type: 'table',
        headers: ['IP-Code', 'Anwendung'],
        rows: [
          ['IP20', 'Schaltschrank innen'],
          ['IP44', 'Außenbereich, Spritzwasser geschützt'],
          ['IP54', 'Staubgeschützt, Spritzwasser'],
          ['IP65', 'Staubdicht, Strahlwasser'],
          ['IP67', 'Staubdicht, Untertauchen bis 1m'],
          ['IP68', 'Staubdicht, dauerhaftes Untertauchen']
        ]
      },
      {
        type: 'example',
        title: 'Typische Anwendungen',
        text: 'IP20 (Innenbereich), IP44 (Bad), IP65 (Außen), IP67 (Untertauchen)'
      }
    ]
  },
  {
    id: "nullung",
    sectionId: "sicherheitskonzepte",
    title: "Nullung (Schutzerdung)",
    content: [
      {
        type: 'definition',
        text: 'Nullung ist eine Schutzmaßnahme, bei der alle berührbaren leitfähigen Teile mit dem Neutralleiter (PEN) oder Schutzleiter (PE) verbunden werden.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Schutzleiterverbindung'
      }
    ]
  },
  {
    id: "galvanische-trennung",
    sectionId: "sicherheitskonzepte",
    title: "Galvanische Trennung",
    content: [
      {
        type: 'definition',
        text: 'Zwei Stromkreise ohne leitende (galvanische) Verbindung. Es besteht keine direkte elektrische Verbindung zwischen den Kreisen.'
      },
      {
        type: 'paragraph',
        text: 'Primärseite: Die Eingangsseite, die mit der Energiequelle (z.B. Netz 230 V) verbunden ist. Hier wird Energie eingespeist.'
      },
      {
        type: 'paragraph',
        text: 'Sekundärseite: Die Ausgangsseite, die den Verbraucher versorgt. Sie ist von der Primärseite galvanisch getrennt.'
      },
      {
        type: 'warning',
        text: 'Zwischen Primär- und Sekundärseite besteht KEINE leitende Verbindung. Die Energieübertragung erfolgt durch magnetische, optische oder mechanische Kopplung.'
      },
      {
        type: 'list',
        title: 'Realisierung der galvanischen Trennung',
        items: [
          'Transformator – Energie wird über magnetische Kopplung übertragen',
          'Optokoppler – Signal wird über Licht übertragen (LED → Fototransistor)',
          'Relais – Signal wird mechanisch übertragen. Spule und Kontakte sind elektrisch getrennt'
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Netzteil, Medizintechnik (Patientenschutz), Messgeräte, SPS-Eingänge'
      }
    ]
  },
  {
    id: "schutztrennung",
    sectionId: "sicherheitskonzepte",
    title: "Schutztrennung",
    content: [
      {
        type: 'definition',
        text: 'Galvanische Trennung vom Netz durch Trenntransformator. Sekundärseite ist erdfrei.'
      },
      {
        type: 'paragraph',
        text: 'Funktionsweise: Bei Berührung eines Außenleiters kann kein Strom über den Körper zur Erde fließen, da kein geschlossener Stromkreis entsteht.'
      },
      {
        type: 'list',
        title: 'Anwendung',
        items: [
          'Rasiersteckdosen in Badezimmern',
          'Baustellentransformatoren',
          'Werkstätten'
        ]
      },
      {
        type: 'warning',
        text: 'Nur EIN Verbraucher pro Sekundärwicklung. Keine Erdung der Sekundärseite.'
      },
      {
        type: 'example',
        title: 'Beispiele',
        text: 'Rasiersteckdose im Bad, Baustellentransformator'
      }
    ]
  },
  {
    id: "rcd",
    sectionId: "sicherheitskonzepte",
    title: "RCD / FI-Schutzschalter",
    image: "/images/rcd.png",
    content: [
      {
        type: 'definition',
        text: 'Der RCD (Residual Current Device) oder FI-Schutzschalter schützt Personen vor elektrischem Schlag.'
      },
      {
        type: 'list',
        title: 'Aufbau',
        items: [
          'Summenstromwandler (Ringkern)',
          'Auslösemechanik',
          'Schaltkontakte',
          'Prüftaste'
        ]
      },
      {
        type: 'paragraph',
        text: 'Funktionsweise: Alle aktiven Leiter (L und N) führen durch den Summenstromwandler. Im Normalbetrieb ist die Stromsumme null. Bei Fehlerstrom entsteht eine Differenz → Auslösung.'
      },
      {
        type: 'table',
        headers: ['Auslösestrom', 'Anwendung'],
        rows: [
          ['10 mA', 'Erhöhter Schutz'],
          ['30 mA', 'Personenschutz'],
          ['300 mA / 500 mA', 'Brandschutz']
        ]
      },
      {
        type: 'table',
        headers: ['Typ', 'Anwendung', 'Status'],
        rows: [
          ['AC', 'Veraltet', 'Nicht mehr empfohlen'],
          ['A', 'Standard', 'Haushaltsgeräte'],
          ['F', 'Frequenzumrichter', 'Spezialanwendung'],
          ['B', 'PV, E-Mobilität', 'Gleichstromanteile']
        ]
      },
      {
        type: 'example',
        title: 'Typische Anwendungen',
        text: 'Typ A für Haushaltsgeräte, Typ B für Frequenzumrichter, Typ AC veraltet'
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
