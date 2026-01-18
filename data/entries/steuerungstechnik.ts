// ============================================================================
// ENTRIES - Regelungs-/Steuerungstechnik/SPS (Category 9)
// ============================================================================

import type { Entry } from '../types';
import { createContentBlocks, subcategoryToSectionMap } from '../helpers';

const oldTerms = [
  {
    id: "steuern-regeln",
    title: "Steuern vs. Regeln",
    image: "/images/steuern-regeln.png",
    description: "Steuern: Offene Wirkungskette. Eingabe → Verarbeitung → Ausgabe. Keine Rückmeldung, Störungen werden nicht erkannt. Beispiel: Zeitschaltuhr schaltet Licht ein – egal ob es schon hell ist. Regeln: Geschlossener Regelkreis mit Rückmeldung. Soll-Ist-Vergleich, Störungen werden ausgeregelt. Beispiel: Thermostat misst Temperatur und regelt Heizung nach. Komponenten: Sollwertgeber, Regler, Stellglied, Regelstrecke, Messglied.",
    example: "Steuern: Zeitschaltuhr | Regeln: Thermostat mit Temperaturfühler",
    category: "steuerungstechnik",
    subcategory: "grundlagen",
  },
  {
    id: "regelkreis-reglerarten",
    title: "Regelkreis / Reglerarten (P, I, D, PI, PID)",
    image: "/images/placeholder.png",
    description: "Führungsgröße w: Sollwert (was wollen wir?). Regelgröße x: Istwert (was haben wir?). Regeldifferenz e: e = w − x (Abweichung). Stellgröße y: Ausgangssignal des Reglers an den Aktor. Störgröße z: Unerwünschte Einflüsse von außen. Reglerarten: P-Regler (proportional): Schnell, aber bleibende Regeldifferenz. I-Regler (integral): Langsam, aber keine bleibende Abweichung. D-Regler (differenzial): Reagiert auf Änderungsgeschwindigkeit. PI-Regler: Häufigste Kombination. Guter Kompromiss. PID-Regler: Beste Regelgüte, aber aufwändiger einzustellen.",
    example: "PID-Regler für Temperaturregelung",
    category: "steuerungstechnik",
    subcategory: "grundlagen",
  },
  {
    id: "sps-aufbau",
    title: "SPS Aufbau",
    image: "/images/sps.png",
    description: "Aufbau: CPU, Eingangskarte (DI/AI), Ausgangskarte (DO/AO), Netzteil, Kommunikationsschnittstelle. Arbeitsweise: Zyklische Programmabarbeitung: Eingänge lesen → Programm abarbeiten → Ausgänge setzen. Zykluszeit: Typisch 1–100 ms. Je kürzer, desto schneller die Reaktion.",
    example: "Siemens S7-1200, Beckhoff, Allen-Bradley",
    category: "steuerungstechnik",
    subcategory: "sps-grundlagen",
  },
  {
    id: "sps-programmierung",
    title: "SPS Programmiersprachen",
    image: "/images/sps-sprachen.png",
    description: "IEC 61131-3 definiert 5 Sprachen: KOP (Kontaktplan) - grafisch für Elektriker, FUP (Funktionsplan) - logische Bausteine, AWL (Anweisungsliste) - textbasiert assemblerartig, ST (Strukturierter Text) - Hochsprache, AS (Ablaufsprache) - für Sequenzen. TIA Portal nutzt KOP, FUP, SCL.",
    example: "KOP: Schütz-Selbsthaltung, SCL: Berechnungen",
    category: "steuerungstechnik",
    subcategory: "sps-grundlagen",
  },
  {
    id: "sps-adressierung",
    title: "Adressierung (E, A, M)",
    image: "/images/placeholder.png",
    description: "Eingänge: E0.0 bis E0.7 (erstes Byte), E1.0 bis E1.7 (zweites Byte), ... Ausgänge: A0.0 bis A0.7, A1.0 bis A1.7, ... Merker: M0.0 bis M0.7, ... (interne Hilfsvariablen). Datenbausteine: DB1.DBX0.0 (Bit), DB1.DBW0 (Wort), DB1.DBD0 (Doppelwort). Wichtig für Variablendeklaration und Programmierung.",
    example: "E1.0 = Taster, A2.0 = Schütz, M10.0 = Flag",
    category: "steuerungstechnik",
    subcategory: "sps-grundlagen",
  },
  {
    id: "sps-datentypen",
    title: "Datentypen (BOOL, BYTE, WORD, INT)",
    image: "/images/placeholder.png",
    description: "BOOL: 1 Bit (TRUE/FALSE). BYTE: 8 Bit (0–255). WORD: 16 Bit (0–65535). INT: 16 Bit mit Vorzeichen (−32768 bis +32767). REAL: 32 Bit Gleitkommazahl. Wichtig für Variablendefinition und Datenverarbeitung.",
    example: "BOOL für Schalter, INT für Zähler, REAL für Temperatur",
    category: "steuerungstechnik",
    subcategory: "sps-grundlagen",
  },
  {
    id: "sps-signalarten",
    title: "Signalarten (digital, analog 4–20 mA)",
    image: "/images/placeholder.png",
    description: "Digital: Zwei Zustände: 0 (0 V) oder 1 (24 V bei SPS). Für Taster, Schalter, Schütze. Analog Spannung: 0–10 V oder ±10 V. Für kurze Leitungen. Analog Strom: 4–20 mA. Industriestandard für Sensoren. Bei 0 mA = Drahtbruch erkennbar (Live-Zero-Prinzip). Digital für Schalter/Schütze, Analog für Temperatur, Druck, Durchfluss.",
    example: "Digital: Taster, Schütz | Analog: Temperatursensor 4-20mA",
    category: "steuerungstechnik",
    subcategory: "signalarten-sensoren",
  },
  {
    id: "sps-sensoren-pnp-npn",
    title: "Sensoren – Schaltausgänge (PNP, NPN)",
    image: "/images/placeholder.png",
    description: "PNP (Plus-schaltend): Schaltet +24 V auf den Ausgang. Last liegt zwischen Ausgang und 0 V. Standard in Europa! NPN (Minus-schaltend): Schaltet 0 V auf den Ausgang. Last liegt zwischen +24 V und Ausgang. Standard in Asien. Anschluss: Braun = +24 V, Blau = 0 V, Schwarz = Schaltausgang, (Weiß = zweiter Ausgang).",
    example: "PNP-Sensor für SPS-Eingang, NPN-Sensor für asiatische Systeme",
    category: "steuerungstechnik",
    subcategory: "signalarten-sensoren",
  },
  {
    id: "sps-grundverknuepfungen",
    title: "Grundverknüpfungen (UND, ODER, NICHT, XOR)",
    image: "/images/placeholder.png",
    description: "UND (AND): Q = A ∧ B → Q = 1 wenn ALLE Eingänge = 1. ODER (OR): Q = A ∨ B → Q = 1 wenn MINDESTENS ein Eingang = 1. NICHT (NOT): Q = ¬A → Q ist invertiert. NAND: Q = ¬(A ∧ B) → Invertiertes UND. NOR: Q = ¬(A ∨ B) → Invertiertes ODER. XOR: Q = A ⊕ B → Q = 1 wenn GENAU ein Eingang = 1. Grundlage der Booleschen Algebra und SPS-Programmierung.",
    example: "UND für Sicherheitsschalter, ODER für zwei Taster",
    category: "steuerungstechnik",
    subcategory: "programmierung",
  },
  {
    id: "sps-speicherfunktionen",
    title: "Speicherfunktionen (RS, SR)",
    image: "/images/placeholder.png",
    description: "RS-Speicher: Rücksetzen (R) hat Vorrang. Sicher für Not-Aus! SR-Speicher: Setzen (S) hat Vorrang. Set-Eingang setzt Ausgang auf 1, Reset-Eingang setzt auf 0. Wichtig für Selbsthaltung, Flag-Speicher, Zustandsspeicherung. In KOP als Baustein verfügbar.",
    example: "RS für Alarm-Speicher, SR für Start-Stop-Schaltung",
    category: "steuerungstechnik",
    subcategory: "programmierung",
  },
  {
    id: "sps-zeitfunktionen",
    title: "Zeitfunktionen (TON, TOF, TP)",
    image: "/images/placeholder.png",
    description: "TON (Timer ON Delay): Einschaltverzögerung. Ausgang verzögert EIN, sofort AUS. TOF (Timer OFF Delay): Ausschaltverzögerung. Ausgang sofort EIN, verzögert AUS. TP (Timer Pulse): Impuls/Wischer. Gibt definierten Impuls aus. Wichtig für Zeitsteuerungen, Verzögerungen, Blinkfunktionen. Zeitwert in ms oder s einstellbar.",
    example: "TON für Treppenhauslicht, TOF für Nachlauf, TP für Impuls",
    category: "steuerungstechnik",
    subcategory: "programmierung",
  },
];

export const entries: Entry[] = oldTerms.map(term => {
  const sectionId = subcategoryToSectionMap[term.subcategory || ''] || 'grundlagen-steuerung';
  
  return {
    id: term.id,
    sectionId,
    title: term.title,
    content: createContentBlocks(term.description, term.example),
    image: term.image !== "/images/placeholder.png" ? term.image : undefined,
  };
});
