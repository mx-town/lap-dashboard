// ============================================================================
// ENTRIES - Schaltkasten (Category 3)
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
    id: "schaltschrank-aufbau",
    sectionId: "schaltschrank-aufbau",
    title: "Aufbau Schaltschrank",
    image: "/images/schaltschrank.png",
    content: [
      {
        type: 'definition',
        text: 'Ein Schaltschrank enthält alle elektrischen Komponenten übersichtlich und sicher.'
      },
      {
        type: 'list',
        title: 'Aufbau von oben nach unten',
        items: [
          'Einspeisung/Hauptschalter',
          'Sicherungen/RCD',
          'Steuerungsebene (SPS, Relais)',
          'Leistungsebene (Schütze, FU)',
          'Klemmenleisten'
        ]
      },
      {
        type: 'note',
        text: 'Wichtig sind Kabelkanäle für ordentliche Verdrahtung.'
      },
      {
        type: 'example',
        title: 'Typische Komponenten',
        text: 'Rittal-Schrank, Eaton-Komponenten, Siemens SPS'
      }
    ]
  },
  {
    id: "rcd-fi",
    sectionId: "schutzschalter",
    title: "Fehlerstromschutzschalter (FI / RCD)",
    image: "/images/rcd.png",
    content: [
      {
        type: 'definition',
        text: 'Der Fehlerstromschutzschalter (FI/RCD) schützt Personen vor elektrischem Schlag durch Erkennung von Fehlerströmen.'
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
        text: 'Funktionsweise: Alle aktiven Leiter (L und N) führen durch den Summenstromwandler. Im Normalbetrieb ist die Stromsumme null (Hinleiter = Rückleiter). Bei Fehlerstrom (z.B. über Körper zur Erde) entsteht eine Differenz → Spannung wird induziert → Auslösung.'
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
        title: 'Anwendungsbeispiele',
        text: 'Typ A für Haushaltsgeräte, Typ B für Frequenzumrichter'
      }
    ]
  },
  {
    id: "sicherungsautomat",
    sectionId: "schutzschalter",
    title: "Leitungsschutzschalter (LS)",
    image: "/images/ls-schalter.png",
    content: [
      {
        type: 'definition',
        text: 'Ein Leitungsschutzschalter (LS) schützt Leitungen vor Überlast und Kurzschluss.'
      },
      {
        type: 'list',
        title: 'Aufbau',
        items: [
          'Bimetall (thermisch)',
          'Magnetspule mit Schlaganker (magnetisch)',
          'Schaltkontakte',
          'Lichtbogenkammer'
        ]
      },
      {
        type: 'paragraph',
        text: 'Thermische Auslösung: Bimetall erwärmt sich bei Überlast, verbiegt sich und löst zeitverzögert aus.'
      },
      {
        type: 'paragraph',
        text: 'Magnetische Auslösung: Bei Kurzschluss erzeugt der hohe Strom ein starkes Magnetfeld. Der Schlaganker löst unverzögert (< 0,1 s) aus.'
      },
      {
        type: 'table',
        headers: ['Charakteristik', 'Auslösebereich', 'Anwendung'],
        rows: [
          ['B', '3–5 × In', 'Haushalt'],
          ['C', '5–10 × In', 'Motoren'],
          ['D', '10–20 × In', 'Transformatoren'],
          ['K', '8–14 × In', 'Motoren'],
          ['Z', '2–3 × In', 'Elektronik']
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'B16A für Steckdosen, C16A für Motoren'
      }
    ]
  },
  {
    id: "msr",
    sectionId: "schutzschalter",
    title: "Motorschutzrelais (MSR)",
    content: [
      {
        type: 'definition',
        text: 'Ein Motorschutzrelais (MSR) schützt Motoren vor Überlast durch thermische Auslösung.'
      },
      {
        type: 'list',
        title: 'Aufbau',
        items: [
          'Thermische Bimetall-Auslöser (einer pro Phase)',
          'Einstellrad für Nennstrom',
          'Hilfskontakte (95-96 NC, 97-98 NO)'
        ]
      },
      {
        type: 'paragraph',
        text: 'Funktionsweise: Bei Überlast erwärmen sich die Bimetalle und schalten den Hilfskontakt um. Dieser unterbricht den Steuerstromkreis des Schützes.'
      },
      {
        type: 'warning',
        text: 'Auslöseart: Nur thermisch (zeitverzögert). KEIN Kurzschlussschutz! Immer zusätzlich Sicherungen oder LS für Kurzschlussschutz vorschalten.'
      },
      {
        type: 'note',
        text: 'Phasenausfallerkennung: Bei Ausfall einer Phase erwärmt sich ein Bimetall stärker → asymmetrische Auslösung.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'MSR für 3-phasigen Motor'
      }
    ]
  },
  {
    id: "mss",
    sectionId: "schutzschalter",
    title: "Motorschutzschalter (MSS)",
    content: [
      {
        type: 'definition',
        text: 'Ein Motorschutzschalter (MSS) kombiniert Überlastschutz und Kurzschlussschutz in einem Gerät.'
      },
      {
        type: 'list',
        title: 'Aufbau',
        items: [
          'Thermischer UND magnetischer Auslöser',
          'Hauptkontakte',
          'Einstellrad',
          'Manueller Ein-/Ausschalter'
        ]
      },
      {
        type: 'paragraph',
        text: 'Funktionsweise: Kombiniert Überlastschutz (thermisch) und Kurzschlussschutz (magnetisch) in einem Gerät.'
      },
      {
        type: 'note',
        text: 'Vorteil gegenüber MSR: Keine zusätzlichen Sicherungen nötig, kann als Hauptschalter verwendet werden.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'MSS für Motorschutz mit integriertem LS'
      }
    ]
  },
  {
    id: "schuetz",
    sectionId: "schaltgeraete",
    title: "Schütz",
    image: "/images/schuetz.png",
    content: [
      {
        type: 'definition',
        text: 'Ein Schütz ist ein elektromagnetisch betätigter Schalter für hohe Ströme.'
      },
      {
        type: 'list',
        title: 'Aufbau',
        items: [
          'Magnetspule (A1/A2)',
          'Eisenkern',
          'Hauptkontakte (1-2, 3-4, 5-6)',
          'Hilfskontakte NO (13-14) und NC (21-22)'
        ]
      },
      {
        type: 'paragraph',
        text: 'Funktionsweise: Steuerspannung an A1-A2 erregt die Spule. Das Magnetfeld zieht den Kern an und schließt die Hauptkontakte. Ohne Spannung öffnet die Feder.'
      },
      {
        type: 'table',
        headers: ['Kontaktbezeichnung', 'Bedeutung'],
        rows: [
          ['Erste Ziffer', 'Kontaktnummer'],
          ['1-2', 'NC (Öffner)'],
          ['3-4', 'NO (Schließer)']
        ]
      },
      {
        type: 'paragraph',
        text: 'Selbsthaltung: Ein Schließer-Hilfskontakt (13-14) wird parallel zum Taster geschaltet. Nach Betätigung hält sich das Schütz selbst.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Motorschütz für Drehstrommotoren, Wendeschützschaltung'
      }
    ]
  },
  {
    id: "selbsthaltung",
    sectionId: "schaltgeraete",
    title: "Selbsthaltung",
    content: [
      {
        type: 'definition',
        text: 'Die Selbsthaltung hält einen Schaltzustand auch nach dem Loslassen des Tasters aufrecht.'
      },
      {
        type: 'paragraph',
        text: 'Realisierung durch paralleles Rückschalten eines Hilfskontakts. Start-Taster schaltet ein, Stop-Taster schaltet aus.'
      },
      {
        type: 'note',
        text: 'Wichtig für Schütz-Schaltungen und SPS-Programmierung.'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Start-Stop-Schaltung mit Selbsthaltung'
      }
    ]
  },
  {
    id: "softstarter",
    sectionId: "schaltgeraete",
    title: "Softstarter",
    content: [
      {
        type: 'definition',
        text: 'Ein Softstarter ermöglicht sanftes Anlaufen und Stoppen von Motoren durch Phasenanschnittsteuerung.'
      },
      {
        type: 'list',
        title: 'Aufbau',
        items: [
          'Antiparallele Thyristoren (pro Phase)',
          'Steuerelektronik',
          'Kühlkörper'
        ]
      },
      {
        type: 'paragraph',
        text: 'Funktionsweise: Die Steuerelektronik regelt den Zündwinkel der Thyristoren. Die effektive Motorspannung steigt beim Start von z.B. 30% auf 100% an. Beim Stopp wird sie sanft reduziert.'
      },
      {
        type: 'list',
        title: 'Vorteile',
        items: [
          'Reduzierter Anlaufstrom (3–4× statt 6–8× In)',
          'Weniger mechanische Belastung',
          'Kein Spannungseinbruch im Netz'
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Softstarter für Pumpen, Lüfter, Förderbänder, Kompressoren'
      }
    ]
  },
  {
    id: "zeitrelais",
    sectionId: "schaltgeraete",
    title: "Zeitrelais",
    content: [
      {
        type: 'definition',
        text: 'Ein Zeitrelais verzögert Schaltvorgänge um definierte Zeiträume.'
      },
      {
        type: 'list',
        title: 'Aufbau',
        items: [
          'Elektronische Zeitsteuerung',
          'Relaiskontakte',
          'Einstellpotentiometer',
          'Funktionswahlschalter'
        ]
      },
      {
        type: 'table',
        headers: ['Funktion', 'Beschreibung'],
        rows: [
          ['Einschaltverzögerung', 'Ausgang schaltet verzögert EIN, sofort AUS'],
          ['Ausschaltverzögerung', 'Ausgang schaltet sofort EIN, verzögert AUS'],
          ['Impuls (Wischer)', 'Ausgang gibt Impuls definierter Länge'],
          ['Stern-Dreieck', 'Spezielle Funktion für Motorumschaltung']
        ]
      },
      {
        type: 'note',
        text: 'Einstellbereich meist 0.05s bis 300h.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Treppenhauslicht, Staranlaufsteuerung'
      }
    ]
  },
  {
    id: "taster-schalter",
    sectionId: "schaltgeraete",
    title: "Taster / Schalter",
    content: [
      {
        type: 'definition',
        text: 'Taster und Schalter sind Bedienelemente für elektrische Schaltungen.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Verhalten', 'Ausführungen'],
        rows: [
          ['Taster', 'Mit Rückstellung (Taste loslassen = Rückstellung)', 'Druck-, Zug-, Wipp- oder Drehtaster'],
          ['Schalter', 'Bleiben in der gewählten Stellung', 'Druck-, Zug-, Wipp- oder Drehtaster']
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Not-Aus-Taster, Ein/Aus-Schalter'
      }
    ]
  },
  {
    id: "hutschiene-blockklemmen",
    sectionId: "komponenten",
    title: "Hutschiene / Reihenklemmen",
    content: [
      {
        type: 'definition',
        text: 'Hutschiene und Reihenklemmen ermöglichen die sichere Befestigung und Verbindung von Komponenten im Schaltschrank.'
      },
      {
        type: 'paragraph',
        text: 'Hutschiene: Genormte Tragschiene (35 mm nach DIN EN 60715) aus verzinktem Stahl. Bauteile werden aufgerastet.'
      },
      {
        type: 'paragraph',
        text: 'Reihenklemmen: Schraubanschluss oder Federklemme (Push-In). Beschriftungsträger für Kennzeichnung.'
      },
      {
        type: 'table',
        headers: ['Farbe', 'Verwendung'],
        rows: [
          ['Grau', 'Allgemein'],
          ['Blau', 'Neutralleiter'],
          ['Grün-Gelb', 'Schutzleiter']
        ]
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'DIN-Schiene, Klemmenleiste 10mm'
      }
    ]
  },
  {
    id: "sicherungstrenner",
    sectionId: "komponenten",
    title: "Sicherungstrenner",
    content: [
      {
        type: 'definition',
        text: 'Der Sicherungstrenner kombiniert Trenner und Sicherung in einem Gerät.'
      },
      {
        type: 'list',
        title: 'Funktionen',
        items: [
          'Sicheres Trennen unter Last',
          'Schutz vor Überstrom'
        ]
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'Haupttrenner im Schaltschrank'
      }
    ]
  },
  {
    id: "netzteil",
    sectionId: "komponenten",
    title: "Netzteil",
    content: [
      {
        type: 'definition',
        text: 'Ein Netzteil wandelt Netzspannung in eine niedrigere Gleichspannung um.'
      },
      {
        type: 'list',
        title: 'Aufbau',
        items: [
          'Transformator oder Schaltregler',
          'Gleichrichter',
          'Siebkondensator',
          'Spannungsregler'
        ]
      },
      {
        type: 'paragraph',
        text: 'Funktionsweise: 230 V AC → Transformation/Schaltung → Gleichrichtung → Glättung → Stabilisierung → z.B. 24 V DC.'
      },
      {
        type: 'note',
        text: 'Typische Ausgangsspannung: 24 V DC für SPS und Sensorik (Industriestandard).'
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: '24V DC Netzteil 2.5A für SPS'
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
