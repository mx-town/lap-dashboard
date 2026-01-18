// ============================================================================
// ENTRIES - Schaltkasten (Category 3)
// ============================================================================

import type { Entry } from '../types';
import { createContentBlocks, subcategoryToSectionMap } from '../helpers';

const oldTerms = [
  {
    id: "schaltschrank-aufbau",
    title: "Aufbau Schaltschrank",
    image: "/images/schaltschrank.png",
    description: "Ein Schaltschrank enthält alle elektrischen Komponenten übersichtlich und sicher. Aufbau von oben nach unten: Einspeisung/Hauptschalter, Sicherungen/RCD, Steuerungsebene (SPS, Relais), Leistungsebene (Schütze, FU), Klemmenleisten. Wichtig sind Kabelkanäle für ordentliche Verdrahtung.",
    example: "Rittal-Schrank, Eaton-Komponenten, Siemens SPS",
    category: "schaltkasten",
    subcategory: "schaltschrank-aufbau",
  },
  {
    id: "rcd-fi",
    title: "Fehlerstromschutzschalter (FI / RCD)",
    image: "/images/rcd.png",
    description: "Aufbau: Summenstromwandler (Ringkern), Auslösemechanik, Schaltkontakte, Prüftaste. Funktionsweise: Alle aktiven Leiter (L und N) führen durch den Summenstromwandler. Im Normalbetrieb ist die Stromsumme null (Hinleiter = Rückleiter). Bei Fehlerstrom (z.B. über Körper zur Erde) entsteht eine Differenz → Spannung wird induziert → Auslösung. Auslöseströme: 30mA (Personenschutz), 10mA (erhöhter Schutz), 300mA/500mA (Brandschutz). Typen: AC (veraltet), A (Standard), F (Frequenzumrichter), B (PV, E-Mobilität).",
    example: "Typ A für Haushaltsgeräte, Typ B für Frequenzumrichter",
    category: "schaltkasten",
    subcategory: "schutzschalter",
  },
  {
    id: "sicherungsautomat",
    title: "Leitungsschutzschalter (LS)",
    image: "/images/ls-schalter.png",
    description: "Aufbau: Bimetall (thermisch), Magnetspule mit Schlaganker (magnetisch), Schaltkontakte, Lichtbogenkammer. Thermische Auslösung: Bimetall erwärmt sich bei Überlast, verbiegt sich und löst zeitverzögert aus. Magnetische Auslösung: Bei Kurzschluss erzeugt der hohe Strom ein starkes Magnetfeld. Der Schlaganker löst unverzögert (< 0,1 s) aus. Charakteristiken: B (3–5 × In) für Haushalt, C (5–10 × In) für Motoren, D (10–20 × In) für Transformatoren, K (8–14 × In) für Motoren, Z (2–3 × In) für Elektronik.",
    example: "B16A für Steckdosen, C16A für Motoren",
    category: "schaltkasten",
    subcategory: "schutzschalter",
  },
  {
    id: "msr",
    title: "Motorschutzrelais (MSR)",
    image: "/images/placeholder.png",
    description: "Aufbau: Thermische Bimetall-Auslöser (einer pro Phase), Einstellrad für Nennstrom, Hilfskontakte (95-96 NC, 97-98 NO). Funktionsweise: Bei Überlast erwärmen sich die Bimetalle und schalten den Hilfskontakt um. Dieser unterbricht den Steuerstromkreis des Schützes. Auslöseart: Nur thermisch (zeitverzögert). KEIN Kurzschlussschutz! Wichtig: Immer zusätzlich Sicherungen oder LS für Kurzschlussschutz vorschalten. Phasenausfallerkennung: Bei Ausfall einer Phase erwärmt sich ein Bimetall stärker → asymmetrische Auslösung.",
    example: "MSR für 3-phasigen Motor",
    category: "schaltkasten",
    subcategory: "schutzschalter",
  },
  {
    id: "mss",
    title: "Motorschutzschalter (MSS)",
    image: "/images/placeholder.png",
    description: "Aufbau: Thermischer UND magnetischer Auslöser, Hauptkontakte, Einstellrad, manueller Ein-/Ausschalter. Funktionsweise: Kombiniert Überlastschutz (thermisch) und Kurzschlussschutz (magnetisch) in einem Gerät. Vorteil gegenüber MSR: Keine zusätzlichen Sicherungen nötig, kann als Hauptschalter verwendet werden.",
    example: "MSS für Motorschutz mit integriertem LS",
    category: "schaltkasten",
    subcategory: "schutzschalter",
  },
  {
    id: "schuetz",
    title: "Schütz",
    image: "/images/schuetz.png",
    description: "Aufbau: Magnetspule (A1/A2), Eisenkern, Hauptkontakte (1-2, 3-4, 5-6), Hilfskontakte NO (13-14) und NC (21-22). Funktionsweise: Steuerspannung an A1-A2 erregt die Spule. Das Magnetfeld zieht den Kern an und schließt die Hauptkontakte. Ohne Spannung öffnet die Feder. Kontaktbezeichnung: Erste Ziffer = Kontaktnummer, zweite Ziffer: 1-2 = NC (Öffner), 3-4 = NO (Schließer). Selbsthaltung: Ein Schließer-Hilfskontakt (13-14) wird parallel zum Taster geschaltet. Nach Betätigung hält sich das Schütz selbst.",
    example: "Motorschütz für Drehstrommotoren, Wendeschützschaltung",
    category: "schaltkasten",
    subcategory: "schaltgeraete",
  },
  {
    id: "selbsthaltung",
    title: "Selbsthaltung",
    image: "/images/placeholder.png",
    description: "Die Selbsthaltung hält einen Schaltzustand auch nach dem Loslassen des Tasters aufrecht. Realisierung durch paralleles Rückschalten eines Hilfskontakts. Start-Taster schaltet ein, Stop-Taster schaltet aus. Wichtig für Schütz-Schaltungen und SPS-Programmierung.",
    example: "Start-Stop-Schaltung mit Selbsthaltung",
    category: "schaltkasten",
    subcategory: "schaltgeraete",
  },
  {
    id: "softstarter",
    title: "Softstarter",
    image: "/images/placeholder.png",
    description: "Aufbau: Antiparallele Thyristoren (pro Phase), Steuerelektronik, Kühlkörper. Funktionsweise: Die Steuerelektronik regelt den Zündwinkel der Thyristoren. Die effektive Motorspannung steigt beim Start von z.B. 30% auf 100% an. Beim Stopp wird sie sanft reduziert. Vorteile: Reduzierter Anlaufstrom (3–4× statt 6–8× In), weniger mechanische Belastung, kein Spannungseinbruch im Netz.",
    example: "Softstarter für Pumpen, Lüfter, Förderbänder, Kompressoren",
    category: "schaltkasten",
    subcategory: "schaltgeraete",
  },
  {
    id: "zeitrelais",
    title: "Zeitrelais",
    image: "/images/placeholder.png",
    description: "Aufbau: Elektronische Zeitsteuerung, Relaiskontakte, Einstellpotentiometer, Funktionswahlschalter. Funktionen: Einschaltverzögerung (Ausgang schaltet verzögert EIN, sofort AUS), Ausschaltverzögerung (Ausgang schaltet sofort EIN, verzögert AUS), Impuls (Wischer) - Ausgang gibt Impuls definierter Länge, Stern-Dreieck - Spezielle Funktion für Motorumschaltung. Einstellbereich meist 0.05s bis 300h.",
    example: "Treppenhauslicht, Staranlaufsteuerung",
    category: "schaltkasten",
    subcategory: "schaltgeraete",
  },
  {
    id: "taster-schalter",
    title: "Taster / Schalter",
    image: "/images/placeholder.png",
    description: "Taster sind Schaltgeräte mit Rückstellung (Taste loslassen = Rückstellung). Schalter bleiben in der gewählten Stellung. Beide verfügbar als Druck-, Zug-, Wipp- oder Drehtaster.",
    example: "Not-Aus-Taster, Ein/Aus-Schalter",
    category: "schaltkasten",
    subcategory: "schaltgeraete",
  },
  {
    id: "hutschiene-blockklemmen",
    title: "Hutschiene / Reihenklemmen",
    image: "/images/placeholder.png",
    description: "Hutschiene: Genormte Tragschiene (35 mm nach DIN EN 60715) aus verzinktem Stahl. Bauteile werden aufgerastet. Reihenklemmen: Schraubanschluss oder Federklemme (Push-In). Beschriftungsträger für Kennzeichnung. Farbcodierung: Grau = allgemein, Blau = Neutralleiter, Grün-Gelb = Schutzleiter.",
    example: "DIN-Schiene, Klemmenleiste 10mm",
    category: "schaltkasten",
    subcategory: "komponenten",
  },
  {
    id: "sicherungstrenner",
    title: "Sicherungstrenner",
    image: "/images/placeholder.png",
    description: "Der Sicherungstrenner kombiniert Trenner und Sicherung in einem Gerät. Ermöglicht sicheres Trennen unter Last und Schutz vor Überstrom.",
    example: "Haupttrenner im Schaltschrank",
    category: "schaltkasten",
    subcategory: "komponenten",
  },
  {
    id: "netzteil",
    title: "Netzteil",
    image: "/images/placeholder.png",
    description: "Aufbau: Transformator oder Schaltregler, Gleichrichter, Siebkondensator, Spannungsregler. Funktionsweise: 230 V AC → Transformation/Schaltung → Gleichrichtung → Glättung → Stabilisierung → z.B. 24 V DC. Typische Ausgangsspannung: 24 V DC für SPS und Sensorik (Industriestandard).",
    example: "24V DC Netzteil 2.5A für SPS",
    category: "schaltkasten",
    subcategory: "komponenten",
  },
];

export const entries: Entry[] = oldTerms.map(term => {
  const sectionId = subcategoryToSectionMap[term.subcategory || ''] || 'komponenten';
  
  return {
    id: term.id,
    sectionId,
    title: term.title,
    content: createContentBlocks(term.description, term.example),
    image: term.image !== "/images/placeholder.png" ? term.image : undefined,
  };
});
