// ============================================================================
// ENTRIES - Schutzkonzepte (Category 1)
// ============================================================================

import type { Entry } from '../types';
import { createContentBlocks, subcategoryToSectionMap } from '../helpers';

const oldTerms = [
  {
    id: "schutzklasse-0",
    title: "Schutzklasse 0",
    image: "/images/schutzklasse0.png",
    description: "Schutzklasse 0 bietet nur Basisisolierung ohne Schutzleiteranschluss. Der Schutz erfolgt ausschliesslich durch die Umgebung (z.B. isolierter Standort). Diese Schutzklasse ist in der Schweiz und vielen anderen Ländern nicht mehr zulässig, da sie keinen ausreichenden Schutz gegen elektrischen Schlag bietet.",
    example: "Historische Geräte ohne Schutzleiter (heute nicht mehr erlaubt)",
    category: "schutzkonzepte",
    subcategory: "schutzklassen",
  },
  {
    id: "schutzklasse-1",
    title: "Schutzklasse I",
    image: "/images/schutzklasse1.png",
    description: "Schutzklasse I verfügt über Basisisolierung und einen Schutzleiteranschluss (PE). Alle berührbaren leitfähigen Teile sind mit dem Schutzleiter verbunden. Bei einem Isolationsfehler löst die Schutzeinrichtung (RCD/Sicherung) aus und verhindert so gefährliche Berührungsspannungen. Symbol: Erdungszeichen.",
    example: "Waschmaschine, Elektroherd, Bohrmaschine mit Metallgehäuse",
    category: "schutzkonzepte",
    subcategory: "schutzklassen",
  },
  {
    id: "schutzklasse-2",
    title: "Schutzklasse II",
    image: "/images/schutzklasse2.png",
    description: "Schutzklasse II bietet Schutzisolierung durch doppelte oder verstärkte Isolierung. Ein Schutzleiteranschluss ist nicht erforderlich. Das Gerät hat meist ein Kunststoffgehäuse. Das Symbol ist ein doppeltes Quadrat. Diese Bauweise bietet hohe Sicherheit auch ohne Erdung.",
    example: "Handy-Ladegerät, Haarföhn, Akkuschrauber, viele Elektrowerkzeuge",
    category: "schutzkonzepte",
    subcategory: "schutzklassen",
  },
  {
    id: "schutzklasse-3",
    title: "Schutzklasse III",
    image: "/images/schutzklasse3.png",
    description: "Schutzklasse III arbeitet mit Schutzkleinspannung (SELV/PELV). Die Betriebsspannung beträgt maximal 50V AC oder 120V DC. Die Speisung erfolgt über einen Sicherheitstransformator. Durch die niedrige Spannung besteht keine Gefahr eines elektrischen Schlags. Symbol: Drei ineinander liegende Quadrate oder 'III'.",
    example: "LED-Lampen 12V, Spielzeug, Klingeltransformatoren, Gartenbeleuchtung",
    category: "schutzkonzepte",
    subcategory: "schutzklassen",
  },
  {
    id: "selv-pelv",
    title: "SELV / PELV",
    image: "/images/placeholder.png",
    description: "SELV (Safety Extra Low Voltage) und PELV (Protective Extra Low Voltage) sind Schutzkleinspannungssysteme. SELV hat vollständig isolierte Stromquellen, PELV erlaubt einen geerdeten Pol. SELV: Keine Erdverbindung, höchste Sicherheitsstufe. PELV: Mit Erdverbindung, für Funktionserdung.",
    example: "Beleuchtung 12V, Spielzeug, medizinische Geräte",
    category: "schutzkonzepte",
    subcategory: "schutzklassen",
  },
  {
    id: "ip-schutzarten",
    title: "IP-Schutzarten",
    image: "/images/ip-code.png",
    description: "Der IP-Code (International Protection) nach DIN EN 60529 gibt den Schutzgrad eines Gehäuses an. Die erste Ziffer (0-6) bezeichnet den Schutz gegen Fremdkörper und Berührung, die zweite Ziffer (0-8) den Schutz gegen Wasser. Beispiel: IP65 bedeutet staubdicht und geschützt gegen Strahlwasser.",
    example: "IP20 (Innenbereich), IP44 (Bad), IP65 (Aussen), IP67 (Untertauchen)",
    category: "schutzkonzepte",
    subcategory: "ip-schutzarten",
  },
  {
    id: "nullung",
    title: "Nullung (Schutzerdung)",
    image: "/images/placeholder.png",
    description: "Nullung ist eine Schutzmaßnahme, bei der alle berührbaren leitfähigen Teile mit dem Neutralleiter (PEN) oder Schutzleiter (PE) verbunden werden.",
    example: "Schutzleiterverbindung",
    category: "schutzkonzepte",
    subcategory: "sicherheitskonzepte",
  },
  {
    id: "galvanische-trennung",
    title: "Galvanische Trennung",
    image: "/images/placeholder.png",
    description: "Galvanische Trennung bedeutet die elektrische Isolation zwischen zwei Stromkreisen ohne leitende Verbindung. Realisierung: Transformator (magnetische Kopplung), Optokoppler (optische Kopplung), Relais (mechanische Kopplung). Energie oder Signale werden ohne direkten Elektronenfluss übertragen.",
    example: "Netzteil, Medizintechnik (Patientenschutz), Messgeräte, SPS-Eingänge",
    category: "schutzkonzepte",
    subcategory: "sicherheitskonzepte",
  },
  {
    id: "rcd",
    title: "RCD / FI-Schutzschalter",
    image: "/images/rcd.png",
    description: "Der RCD (Residual Current Device) oder FI-Schutzschalter schützt Personen vor elektrischem Schlag. Aufbau: Summenstromwandler (Ringkern), Auslösemechanik, Schaltkontakte, Prüftaste. Funktionsweise: Alle aktiven Leiter (L und N) führen durch den Summenstromwandler. Im Normalbetrieb ist die Stromsumme null. Bei Fehlerstrom entsteht eine Differenz → Auslösung. Auslöseströme: 30mA (Personenschutz), 10mA (erhöhter Schutz), 300mA/500mA (Brandschutz). Typen: AC (veraltet), A (Standard), F (Frequenzumrichter), B (PV, E-Mobilität).",
    example: "Typ A für Haushaltsgeräte, Typ B für Frequenzumrichter, Typ AC veraltet",
    category: "schutzkonzepte",
    subcategory: "sicherheitskonzepte",
  },
];

export const entries: Entry[] = oldTerms.map(term => {
  const sectionId = subcategoryToSectionMap[term.subcategory || ''] || 'schutzklassen';
  
  return {
    id: term.id,
    sectionId,
    title: term.title,
    content: createContentBlocks(term.description, term.example),
    image: term.image !== "/images/placeholder.png" ? term.image : undefined,
  };
});
