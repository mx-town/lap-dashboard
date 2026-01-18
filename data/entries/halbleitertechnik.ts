// ============================================================================
// ENTRIES - Halbleitertechnik (Category 4)
// ============================================================================

import type { Entry } from '../types';
import { createContentBlocks, subcategoryToSectionMap } from '../helpers';

const oldTerms = [
  {
    id: "kondensatoren",
    title: "Kondensatoren (Elko, Folie, Keramik)",
    image: "/images/placeholder.png",
    description: "Elektrolytkondensator (Elko): Zwei Aluminiumfolien, getrennt durch elektrolytgetränktes Papier. Oxidschicht als Dielektrikum. POLARITÄTSABHÄNGIG – Verpolung führt zur Zerstörung! Hohe Kapazität (1 µF bis mehrere F). Folienkondensator: Metallisierte Kunststofffolien (Polyester, Polypropylen). Keine Polarität. Geringe Verluste, hohe Spannungsfestigkeit, selbstheilend. Keramikkondensator: Keramische Dielektrika in Vielschichtbauweise (MLCC). Keine Polarität. Klasse 1 (NP0/C0G): Stabil. Klasse 2 (X7R, Y5V): Hohe Kapazität, aber temperaturabhängig.",
    example: "100µF Elko, 100nF Folie, 10pF Keramik",
    category: "halbleitertechnik",
    subcategory: "passive-bauelemente",
  },
  {
    id: "ntc-ptc-ldr",
    title: "NTC / PTC / LDR",
    image: "/images/placeholder.png",
    description: "NTC (Heißleiter): Widerstand SINKT bei steigender Temperatur (Negativer Temperaturkoeffizient). Anwendung: Temperaturmessung, Einschaltstrombegrenzung. PTC (Kaltleiter): Widerstand STEIGT bei steigender Temperatur (Positiver Temperaturkoeffizient). Anwendung: Selbstrückstellende Sicherungen (PolySwitch), Übertemperaturschutz. LDR (Fotowiderstand): Widerstand SINKT bei steigender Beleuchtung. Hell: wenige Ohm, Dunkel: Megaohm. Anwendung: Dämmerungsschalter, Belichtungsmesser.",
    example: "Temperatursensor, Überstromschutz, Dämmerungsschalter",
    category: "halbleitertechnik",
    subcategory: "passive-bauelemente",
  },
  {
    id: "widerstandsfarbcode",
    title: "Widerstandsfarbcode",
    image: "/images/placeholder.png",
    description: "Farbringe auf Widerständen codieren den Widerstandswert. 4-Ring: Wert + Toleranz. 5-Ring: genauere Werte. Farben: Schwarz=0, Braun=1, Rot=2, Orange=3, Gelb=4, Grün=5, Blau=6, Violett=7, Grau=8, Weiß=9. Gold=×0.1 (±5%), Silber=×0.01 (±10%). Merksatz: 'Schwarz Braun Rot Orange Gelb Grün Blau Violett Grau Weiß' = 0–9.",
    example: "Braun-Schwarz-Rot-Gold = 1-0-×100-±5% = 1000 Ω = 1 kΩ ±5%",
    category: "halbleitertechnik",
    subcategory: "passive-bauelemente",
  },
  {
    id: "diode",
    title: "Diode",
    image: "/images/diode.png",
    description: "Aufbau: pn-Übergang aus dotiertem Silizium. Anode (+) und Kathode (−), Markierung am Kathodenende. Funktionsweise: Durchlassrichtung: Strom fließt ab ca. 0,7 V (Si) bzw. 0,3 V (Ge). Sperrrichtung: Kein Stromfluss bis zur Durchbruchspannung. Anwendung: Gleichrichtung, Verpolungsschutz, Freilaufdiode bei induktiven Lasten.",
    example: "Gleichrichterdiode 1N4007, Zenerdiode, LED, Schottky-Diode",
    category: "halbleitertechnik",
    subcategory: "dioden",
  },
  {
    id: "z-diode",
    title: "Z-Diode",
    image: "/images/placeholder.png",
    description: "Betrieb: Wird in Sperrrichtung betrieben. Ab der Zenerspannung (z.B. 5,1 V) fließt Strom bei konstanter Spannung. Anwendung: Spannungsstabilisierung, Überspannungsschutz, Referenzspannungsquelle.",
    example: "Zener 5.1V für Spannungsreferenz",
    category: "halbleitertechnik",
    subcategory: "dioden",
  },
  {
    id: "led",
    title: "LED (Leuchtdiode)",
    image: "/images/placeholder.png",
    description: "Funktion: Emittiert Licht bei Stromfluss. Vorwiderstand erforderlich! Berechnung: R = (U_Versorgung − U_LED) / I_LED. Typische Werte: U_LED ≈ 2 V (rot), ≈ 3 V (weiß/blau), I_LED ≈ 10–20 mA.",
    example: "LED mit Vorwiderstand für Anzeige",
    category: "halbleitertechnik",
    subcategory: "dioden",
  },
  {
    id: "transistor-bipolar",
    title: "Bipolarer Transistor",
    image: "/images/transistor-bjt.png",
    description: "Aufbau: Drei Schichten (NPN oder PNP) mit Emitter (E), Basis (B), Kollektor (C). Funktionsweise: Kleiner Basisstrom I_B steuert großen Kollektorstrom I_C. Stromverstärkung β (hFE): I_C = β × I_B. Typisch β = 100–300 (Bereich: 20–1000). NPN: Schaltet positive Last gegen Masse (Low-Side). Häufiger verwendet. PNP: Schaltet Last gegen Plus (High-Side).",
    example: "BC547 (NPN), BC557 (PNP), als Schalter oder Verstärker",
    category: "halbleitertechnik",
    subcategory: "transistoren",
  },
  {
    id: "transistor-mosfet",
    title: "MOSFET (N-Kanal, P-Kanal)",
    image: "/images/mosfet.png",
    description: "Aufbau: Gate (G), Drain (D), Source (S). Gate durch Oxidschicht isoliert. Funktionsweise: Spannung am Gate (U_GS) steuert den Kanal. Nahezu leistungslose Ansteuerung (keine Stromaufnahme am Gate im statischen Betrieb). N-Kanal: Schaltet bei positiver Gate-Spannung. Häufiger, niedrigerer R_DS(on). P-Kanal: Schaltet bei negativer Gate-Spannung (relativ zu Source). Anreicherungstyp: Normalerweise sperrend, schaltet bei Ansteuerung. Verarmungstyp: Normalerweise leitend, sperrt bei Ansteuerung.",
    example: "IRFZ44N für Motorsteuerung, IRF540 für Schaltnetzteile",
    category: "halbleitertechnik",
    subcategory: "transistoren",
  },
  {
    id: "thyristor",
    title: "Thyristor",
    image: "/images/placeholder.png",
    description: "Aufbau: Vierschicht-Halbleiter (PNPN) mit Anode (A), Kathode (K), Gate (G). Funktionsweise: Sperrt ohne Ansteuerung. Zündimpuls am Gate schaltet dauerhaft leitend. Bleibt leitend bis Strom unter Haltestrom fällt (bei AC: jede Halbwelle). Anwendung: Phasenanschnittsteuerung, Dimmer, Gleichrichter, Wechselrichter.",
    example: "Dimmer, Motorsteuerung, Wechselrichter",
    category: "halbleitertechnik",
    subcategory: "spezialbauelemente",
  },
  {
    id: "operationsverstaerker",
    title: "Operationsverstärker",
    image: "/images/placeholder.png",
    description: "Beispiel 741: DIP-8-Gehäuse. Pin 2: Invertierender Eingang (−), Pin 3: Nichtinvertierender Eingang (+), Pin 6: Ausgang, Pin 4: V−, Pin 7: V+. Funktionsweise: Verstärkt die Differenz zwischen den Eingängen mit sehr hohem Verstärkungsfaktor (> 100.000). Externe Beschaltung bestimmt die Funktion. Grundschaltungen: Invertierender Verstärker, Nichtinvertierender Verstärker, Komparator, Schmitt-Trigger.",
    example: "741 als Komparator, Verstärker",
    category: "halbleitertechnik",
    subcategory: "spezialbauelemente",
  },
  {
    id: "ic-ic-sockel",
    title: "IC / IC-Sockel",
    image: "/images/placeholder.png",
    description: "Integrierte Schaltungen (IC) enthalten komplexe Schaltungen auf einem Chip. IC-Sockel ermöglichen einfachen Austausch ohne Löten. Wichtige Typen: DIP (Dual Inline Package), SMD (Surface Mount Device).",
    example: "Mikrocontroller, Logik-ICs, Speicher",
    category: "halbleitertechnik",
    subcategory: "spezialbauelemente",
  },
  {
    id: "spule-transformator",
    title: "Spule / Transformator",
    image: "/images/placeholder.png",
    description: "Eine Spule (Induktivität) speichert Energie im Magnetfeld. Ein Transformator überträgt Wechselspannung durch magnetische Kopplung zwischen Primär- und Sekundärwicklung. Verhältnis: U1/U2 = N1/N2.",
    example: "Netztransformator, Drossel, Schaltnetzteil",
    category: "halbleitertechnik",
    subcategory: "passive-bauelemente",
  },
];

export const entries: Entry[] = oldTerms.map(term => {
  const sectionId = subcategoryToSectionMap[term.subcategory || ''] || 'passive-bauelemente';
  
  return {
    id: term.id,
    sectionId,
    title: term.title,
    content: createContentBlocks(term.description, term.example),
    image: term.image !== "/images/placeholder.png" ? term.image : undefined,
  };
});
