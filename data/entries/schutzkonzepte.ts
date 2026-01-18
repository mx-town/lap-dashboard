// ============================================================================
// ENTRIES - Schutzkonzepte (Category 1)
// ============================================================================

import type { Entry } from '../types';
import { createContentBlocks, subcategoryToSectionMap } from '../helpers';

const oldTerms = [
  // 1.1 Basisschutz und Fehlerschutz
  {
    id: "basisschutz",
    title: "Basisschutz (Schutz gegen direktes Berühren)",
    image: "/images/placeholder.png",
    description: "Definition: Schutz von Personen vor dem Berühren aktiver (spannungsführender) Teile im Normalbetrieb.\n\nMaßnahmen:\n• Isolierung aktiver Teile (Kabelummantelung, Gehäuse)\n• Abdeckungen und Gehäuse (IP-Schutzarten, mindestens IP2X oder IPXXB)\n• Hindernisse und Abstände (im Industriebereich)\n• Schutz durch Standort (nur Elektrofachkräfte haben Zugang)",
    example: "",
    category: "schutzkonzepte",
    subcategory: "basisschutz-fehlerschutz",
  },
  {
    id: "fehlerschutz",
    title: "Fehlerschutz (Schutz bei indirektem Berühren)",
    image: "/images/placeholder.png",
    description: "Definition: Schutz von Personen vor gefährlichen Berührungsspannungen an leitfähigen Gehäusen, die durch einen Isolationsfehler unter Spannung stehen.\n\nMaßnahmen:\n• Schutzerdung – Gehäuse mit PE verbinden, Fehlerstrom löst Sicherung aus\n• Fehlerstrom-Schutzeinrichtung (FI/RCD) – erkennt Differenzstrom\n• Schutzisolierung (Schutzklasse II) – doppelte Isolierung\n• Schutzkleinspannung (SELV/PELV) – ungefährliche Spannung\n• Schutztrennung – galvanische Trennung vom Netz",
    example: "",
    category: "schutzkonzepte",
    subcategory: "basisschutz-fehlerschutz",
  },
  {
    id: "zusatzschutz",
    title: "Zusatzschutz",
    image: "/images/placeholder.png",
    description: "Zusatzschutz: Zusätzliche Schutzmaßnahme bei Versagen von Basis- und Fehlerschutz. In Österreich: FI mit IΔn ≤ 30 mA Pflicht für Steckdosen bis 32 A.",
    example: "",
    category: "schutzkonzepte",
    subcategory: "basisschutz-fehlerschutz",
  },
  // 1.2 Schutzklassen
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
  // 1.3 IP-Schutzarten
  {
    id: "ip-schutzarten",
    title: "IP-Schutzarten",
    image: "/images/ip-code.png",
    description: "Aufbau: Kennzeichnung IP XY. Erste Ziffer = Fremdkörperschutz, zweite Ziffer = Wasserschutz.\n\nDer IP-Code (International Protection) nach DIN EN 60529 gibt den Schutzgrad eines Gehäuses an.",
    example: "",
    category: "schutzkonzepte",
    subcategory: "ip-schutzarten",
  },
  {
    id: "ip-fremdkoerperschutz",
    title: "IP-Code Erste Ziffer – Fremdkörper- und Berührungsschutz",
    image: "/images/placeholder.png",
    description: "Erste Ziffer – Fremdkörper- und Berührungsschutz:\n\n• 0: Kein Schutz\n• 1: Feste Fremdkörper ≥ 50 mm (Handrücken)\n• 2: Feste Fremdkörper ≥ 12,5 mm (Finger)\n• 3: Feste Fremdkörper ≥ 2,5 mm (Werkzeug)\n• 4: Feste Fremdkörper ≥ 1 mm (Draht)\n• 5: Staubgeschützt (Staub kann eindringen, beeinträchtigt Funktion nicht)\n• 6: Staubdicht (kein Staubeintritt)",
    example: "",
    category: "schutzkonzepte",
    subcategory: "ip-schutzarten",
  },
  {
    id: "ip-wasserschutz",
    title: "IP-Code Zweite Ziffer – Wasserschutz",
    image: "/images/placeholder.png",
    description: "Zweite Ziffer – Wasserschutz:\n\n• 0: Kein Schutz\n• 1: Senkrechtes Tropfwasser\n• 2: Tropfwasser bei 15° Neigung\n• 3: Sprühwasser bis 60°\n• 4: Spritzwasser allseitig\n• 5: Strahlwasser (Düse 6,3 mm)\n• 6: Starkes Strahlwasser (Düse 12,5 mm)\n• 7: Zeitweiliges Untertauchen (bis 1 m, 30 min)\n• 8: Dauerhaftes Untertauchen (Tiefe nach Herstellerangabe)\n• 9K: Hochdruck-/Dampfstrahlreinigung (nach ISO 20653)",
    example: "",
    category: "schutzkonzepte",
    subcategory: "ip-schutzarten",
  },
  {
    id: "ip-praxisbeispiele",
    title: "IP-Schutzarten Praxisbeispiele",
    image: "/images/placeholder.png",
    description: "Praxisbeispiele:\n• IP20 = Schaltschrank innen\n• IP44 = Außenbereich, Spritzwasser geschützt\n• IP54 = Staubgeschützt, Spritzwasser\n• IP65 = Staubdicht, Strahlwasser\n• IP67 = Staubdicht, Untertauchen bis 1m\n• IP68 = Staubdicht, dauerhaftes Untertauchen",
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
    description: "Definition: Zwei Stromkreise ohne leitende (galvanische) Verbindung. Es besteht keine direkte elektrische Verbindung zwischen den Kreisen.\n\nPrimärseite: Die Eingangsseite, die mit der Energiequelle (z.B. Netz 230 V) verbunden ist. Hier wird Energie eingespeist.\n\nSekundärseite: Die Ausgangsseite, die den Verbraucher versorgt. Sie ist von der Primärseite galvanisch getrennt.\n\nWichtig: Zwischen Primär- und Sekundärseite besteht KEINE leitende Verbindung. Die Energieübertragung erfolgt durch magnetische, optische oder mechanische Kopplung.\n\nRealisierung der galvanischen Trennung:\n• Transformator – Energie wird über magnetische Kopplung übertragen\n• Optokoppler – Signal wird über Licht übertragen (LED → Fototransistor)\n• Relais – Signal wird mechanisch übertragen. Spule und Kontakte sind elektrisch getrennt.",
    example: "Netzteil, Medizintechnik (Patientenschutz), Messgeräte, SPS-Eingänge",
    category: "schutzkonzepte",
    subcategory: "sicherheitskonzepte",
  },
  {
    id: "schutztrennung",
    title: "Schutztrennung",
    image: "/images/placeholder.png",
    description: "Aufbau: Galvanische Trennung vom Netz durch Trenntransformator. Sekundärseite ist erdfrei.\n\nFunktionsweise: Bei Berührung eines Außenleiters kann kein Strom über den Körper zur Erde fließen, da kein geschlossener Stromkreis entsteht.\n\nAnwendung: Rasiersteckdosen in Badezimmern, Baustellentransformatoren, Werkstätten.\n\nWichtig: Nur EIN Verbraucher pro Sekundärwicklung. Keine Erdung der Sekundärseite.",
    example: "Rasiersteckdose im Bad, Baustellentransformator",
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
