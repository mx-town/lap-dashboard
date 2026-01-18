// ============================================================================
// ENTRIES - Regelungs-/Steuerungstechnik/SPS (Category 9)
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
    id: "steuern-regeln",
    sectionId: "grundlagen-steuerung",
    title: "Steuern vs. Regeln",
    image: "/images/steuern-regeln.png",
    content: [
      {
        type: 'definition',
        text: 'Steuern und Regeln sind zwei grundlegende Konzepte der Automatisierungstechnik.'
      },
      {
        type: 'table',
        headers: ['Konzept', 'Struktur', 'Rückmeldung', 'Störungen'],
        rows: [
          ['Steuern', 'Offene Wirkungskette: Eingabe → Verarbeitung → Ausgabe', 'Keine Rückmeldung', 'Werden nicht erkannt'],
          ['Regeln', 'Geschlossener Regelkreis mit Rückmeldung', 'Soll-Ist-Vergleich', 'Werden ausgeregelt']
        ]
      },
      {
        type: 'example',
        title: 'Steuern',
        text: 'Zeitschaltuhr schaltet Licht ein – egal ob es schon hell ist'
      },
      {
        type: 'example',
        title: 'Regeln',
        text: 'Thermostat misst Temperatur und regelt Heizung nach'
      },
      {
        type: 'list',
        title: 'Regelkreis-Komponenten',
        items: [
          'Sollwertgeber',
          'Regler',
          'Stellglied',
          'Regelstrecke',
          'Messglied'
        ]
      }
    ]
  },
  {
    id: "regelkreis-reglerarten",
    sectionId: "grundlagen-steuerung",
    title: "Regelkreis / Reglerarten (P, I, D, PI, PID)",
    content: [
      {
        type: 'definition',
        text: 'Ein Regelkreis vergleicht Soll- und Istwert und regelt die Stellgröße entsprechend.'
      },
      {
        type: 'table',
        headers: ['Größe', 'Symbol', 'Beschreibung'],
        rows: [
          ['Führungsgröße', 'w', 'Sollwert (was wollen wir?)'],
          ['Regelgröße', 'x', 'Istwert (was haben wir?)'],
          ['Regeldifferenz', 'e', 'e = w − x (Abweichung)'],
          ['Stellgröße', 'y', 'Ausgangssignal des Reglers an den Aktor'],
          ['Störgröße', 'z', 'Unerwünschte Einflüsse von außen']
        ]
      },
      {
        type: 'table',
        headers: ['Reglerart', 'Eigenschaft', 'Nachteil'],
        rows: [
          ['P-Regler (proportional)', 'Schnell', 'Bleibende Regeldifferenz'],
          ['I-Regler (integral)', 'Keine bleibende Abweichung', 'Langsam'],
          ['D-Regler (differenzial)', 'Reagiert auf Änderungsgeschwindigkeit', 'Allein nicht stabil'],
          ['PI-Regler', 'Häufigste Kombination. Guter Kompromiss', '-'],
          ['PID-Regler', 'Beste Regelgüte', 'Aufwändiger einzustellen']
        ]
      },
      {
        type: 'example',
        title: 'Anwendung',
        text: 'PID-Regler für Temperaturregelung'
      }
    ]
  },
  {
    id: "sps-aufbau",
    sectionId: "sps-grundlagen",
    title: "SPS Aufbau",
    image: "/images/sps.png",
    content: [
      {
        type: 'definition',
        text: 'Eine SPS (Speicherprogrammierbare Steuerung) ist ein digitaler Steuerungscomputer für industrielle Anwendungen.'
      },
      {
        type: 'list',
        title: 'Aufbau',
        items: [
          'CPU',
          'Eingangskarte (DI/AI)',
          'Ausgangskarte (DO/AO)',
          'Netzteil',
          'Kommunikationsschnittstelle'
        ]
      },
      {
        type: 'paragraph',
        text: 'Arbeitsweise: Zyklische Programmabarbeitung: Eingänge lesen → Programm abarbeiten → Ausgänge setzen.'
      },
      {
        type: 'table',
        headers: ['Zykluszeit', 'Bedeutung'],
        rows: [
          ['Typisch 1–100 ms', 'Je kürzer, desto schneller die Reaktion']
        ]
      },
      {
        type: 'example',
        title: 'Typische Systeme',
        text: 'Siemens S7-1200, Beckhoff, Allen-Bradley'
      }
    ]
  },
  {
    id: "sps-programmierung",
    sectionId: "sps-grundlagen",
    title: "SPS Programmiersprachen",
    image: "/images/sps-sprachen.png",
    content: [
      {
        type: 'definition',
        text: 'IEC 61131-3 definiert 5 standardisierte Programmiersprachen für SPS.'
      },
      {
        type: 'table',
        headers: ['Sprache', 'Abkürzung', 'Beschreibung', 'Anwendung'],
        rows: [
          ['Kontaktplan', 'KOP', 'Grafisch für Elektriker', 'Schütz-Selbsthaltung'],
          ['Funktionsplan', 'FUP', 'Logische Bausteine', 'Verknüpfungen'],
          ['Anweisungsliste', 'AWL', 'Textbasiert assemblerartig', 'Kompakte Programme'],
          ['Strukturierter Text', 'ST/SCL', 'Hochsprache', 'Berechnungen'],
          ['Ablaufsprache', 'AS', 'Für Sequenzen', 'Schrittketten']
        ]
      },
      {
        type: 'note',
        text: 'TIA Portal nutzt KOP, FUP, SCL.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'KOP: Schütz-Selbsthaltung, SCL: Berechnungen'
      }
    ]
  },
  {
    id: "sps-adressierung",
    sectionId: "sps-grundlagen",
    title: "Adressierung (E, A, M)",
    content: [
      {
        type: 'definition',
        text: 'SPS-Adressierung identifiziert Eingänge, Ausgänge und interne Variablen.'
      },
      {
        type: 'table',
        headers: ['Bereich', 'Adressierung', 'Beschreibung'],
        rows: [
          ['Eingänge', 'E0.0 bis E0.7 (erstes Byte), E1.0 bis E1.7 (zweites Byte), ...', 'Digitale Eingänge'],
          ['Ausgänge', 'A0.0 bis A0.7, A1.0 bis A1.7, ...', 'Digitale Ausgänge'],
          ['Merker', 'M0.0 bis M0.7, ...', 'Interne Hilfsvariablen'],
          ['Datenbausteine', 'DB1.DBX0.0 (Bit), DB1.DBW0 (Wort), DB1.DBD0 (Doppelwort)', 'Strukturierte Daten']
        ]
      },
      {
        type: 'note',
        text: 'Wichtig für Variablendeklaration und Programmierung.'
      },
      {
        type: 'example',
        title: 'Beispiele',
        text: 'E1.0 = Taster, A2.0 = Schütz, M10.0 = Flag'
      }
    ]
  },
  {
    id: "sps-datentypen",
    sectionId: "sps-grundlagen",
    title: "Datentypen (BOOL, BYTE, WORD, INT)",
    content: [
      {
        type: 'definition',
        text: 'SPS verwenden verschiedene Datentypen für unterschiedliche Datenformate.'
      },
      {
        type: 'table',
        headers: ['Datentyp', 'Größe', 'Wertebereich', 'Anwendung'],
        rows: [
          ['BOOL', '1 Bit', 'TRUE/FALSE', 'Schalter, Kontakte'],
          ['BYTE', '8 Bit', '0–255', 'Kleine Zahlen'],
          ['WORD', '16 Bit', '0–65535', 'Größere Zahlen'],
          ['INT', '16 Bit mit Vorzeichen', '−32768 bis +32767', 'Zähler, Positionen'],
          ['REAL', '32 Bit Gleitkommazahl', '±3.4×10³⁸', 'Temperatur, Messwerte']
        ]
      },
      {
        type: 'note',
        text: 'Wichtig für Variablendefinition und Datenverarbeitung.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'BOOL für Schalter, INT für Zähler, REAL für Temperatur'
      }
    ]
  },
  {
    id: "sps-signalarten",
    sectionId: "signalarten-sensoren",
    title: "Signalarten (digital, analog 4–20 mA)",
    content: [
      {
        type: 'definition',
        text: 'SPS verarbeiten digitale und analoge Signale von Sensoren und Aktoren.'
      },
      {
        type: 'table',
        headers: ['Signalart', 'Werte', 'Anwendung'],
        rows: [
          ['Digital', '0 (0 V) oder 1 (24 V bei SPS)', 'Taster, Schalter, Schütze'],
          ['Analog Spannung', '0–10 V oder ±10 V', 'Für kurze Leitungen'],
          ['Analog Strom', '4–20 mA', 'Industriestandard für Sensoren']
        ]
      },
      {
        type: 'note',
        text: 'Bei 0 mA = Drahtbruch erkennbar (Live-Zero-Prinzip).'
      },
      {
        type: 'paragraph',
        text: 'Digital für Schalter/Schütze, Analog für Temperatur, Druck, Durchfluss.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'Digital: Taster, Schütz | Analog: Temperatursensor 4-20mA'
      }
    ]
  },
  {
    id: "sps-sensoren-pnp-npn",
    sectionId: "signalarten-sensoren",
    title: "Sensoren – Schaltausgänge (PNP, NPN)",
    content: [
      {
        type: 'definition',
        text: 'Sensoren haben unterschiedliche Schaltausgänge je nach Region und Anwendung.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Schaltverhalten', 'Lastposition', 'Region'],
        rows: [
          ['PNP (Plus-schaltend)', 'Schaltet +24 V auf den Ausgang', 'Zwischen Ausgang und 0 V', 'Standard in Europa'],
          ['NPN (Minus-schaltend)', 'Schaltet 0 V auf den Ausgang', 'Zwischen +24 V und Ausgang', 'Standard in Asien']
        ]
      },
      {
        type: 'table',
        headers: ['Farbe', 'Funktion'],
        rows: [
          ['Braun', '+24 V'],
          ['Blau', '0 V'],
          ['Schwarz', 'Schaltausgang'],
          ['Weiß', 'Zweiter Ausgang (optional)']
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'PNP-Sensor für SPS-Eingang, NPN-Sensor für asiatische Systeme'
      }
    ]
  },
  {
    id: "sps-grundverknuepfungen",
    sectionId: "programmierung",
    title: "Grundverknüpfungen (UND, ODER, NICHT, XOR)",
    content: [
      {
        type: 'definition',
        text: 'Grundverknüpfungen sind die Basis der Booleschen Algebra und SPS-Programmierung.'
      },
      {
        type: 'table',
        headers: ['Verknüpfung', 'Formel', 'Beschreibung'],
        rows: [
          ['UND (AND)', 'Q = A ∧ B', 'Q = 1 wenn ALLE Eingänge = 1'],
          ['ODER (OR)', 'Q = A ∨ B', 'Q = 1 wenn MINDESTENS ein Eingang = 1'],
          ['NICHT (NOT)', 'Q = ¬A', 'Q ist invertiert'],
          ['NAND', 'Q = ¬(A ∧ B)', 'Invertiertes UND'],
          ['NOR', 'Q = ¬(A ∨ B)', 'Invertiertes ODER'],
          ['XOR', 'Q = A ⊕ B', 'Q = 1 wenn GENAU ein Eingang = 1']
        ]
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'UND für Sicherheitsschalter, ODER für zwei Taster'
      }
    ]
  },
  {
    id: "sps-speicherfunktionen",
    sectionId: "programmierung",
    title: "Speicherfunktionen (RS, SR)",
    content: [
      {
        type: 'definition',
        text: 'Speicherfunktionen halten einen Zustand auch nach dem Entfernen des Set-Signals aufrecht.'
      },
      {
        type: 'table',
        headers: ['Typ', 'Vorrang', 'Anwendung'],
        rows: [
          ['RS-Speicher', 'Rücksetzen (R) hat Vorrang', 'Sicher für Not-Aus!'],
          ['SR-Speicher', 'Setzen (S) hat Vorrang', 'Start-Stop-Schaltung']
        ]
      },
      {
        type: 'paragraph',
        text: 'Set-Eingang setzt Ausgang auf 1, Reset-Eingang setzt auf 0.'
      },
      {
        type: 'list',
        title: 'Anwendung',
        items: [
          'Selbsthaltung',
          'Flag-Speicher',
          'Zustandsspeicherung'
        ]
      },
      {
        type: 'note',
        text: 'In KOP als Baustein verfügbar.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'RS für Alarm-Speicher, SR für Start-Stop-Schaltung'
      }
    ]
  },
  {
    id: "sps-zeitfunktionen",
    sectionId: "programmierung",
    title: "Zeitfunktionen (TON, TOF, TP)",
    content: [
      {
        type: 'definition',
        text: 'Zeitfunktionen verzögern Schaltvorgänge um definierte Zeiträume.'
      },
      {
        type: 'table',
        headers: ['Funktion', 'Abkürzung', 'Beschreibung'],
        rows: [
          ['Einschaltverzögerung', 'TON (Timer ON Delay)', 'Ausgang verzögert EIN, sofort AUS'],
          ['Ausschaltverzögerung', 'TOF (Timer OFF Delay)', 'Ausgang sofort EIN, verzögert AUS'],
          ['Impuls/Wischer', 'TP (Timer Pulse)', 'Gibt definierten Impuls aus']
        ]
      },
      {
        type: 'note',
        text: 'Wichtig für Zeitsteuerungen, Verzögerungen, Blinkfunktionen. Zeitwert in ms oder s einstellbar.'
      },
      {
        type: 'example',
        title: 'Anwendungsbeispiele',
        text: 'TON für Treppenhauslicht, TOF für Nachlauf, TP für Impuls'
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
