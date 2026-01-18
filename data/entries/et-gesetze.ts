// ============================================================================
// ENTRIES - ET Gesetze (Category 2)
// ============================================================================

import type { Entry } from '../types';
import { createContentBlocks, subcategoryToSectionMap } from '../helpers';

const oldTerms = [
  {
    id: "ladungsgesetz",
    title: "Ladungsgesetz",
    image: "/images/placeholder.png",
    description: "Formel: Q = I × t. Die elektrische Ladung ist das Produkt aus Stromstärke und Zeit. Einheit: Coulomb (C). 1 C = 1 A × 1 s. Umstellungen: I = Q / t, t = Q / I. Merkhilfe: 1 Ah (Ampere-Stunde) = 3600 C – relevant für Akkukapazitäten.",
    example: "Akkukapazität: 5 Ah = 18000 C",
    category: "et-gesetze",
    subcategory: "grundgesetze",
  },
  {
    id: "ohmsches-gesetz",
    title: "Ohmsches Gesetz",
    image: "/images/ohm.png",
    description: "Formel: U = R × I. Die Spannung ist proportional zum Strom. Der Widerstand ist der Proportionalitätsfaktor. Umstellungen: R = U / I, I = U / R. Eselsbrücke: 'URI' – Spannung = Widerstand × Strom. Es ist das fundamentale Gesetz der Elektrotechnik.",
    example: "U = 12V, R = 4Ω → I = 12V / 4Ω = 3A",
    category: "et-gesetze",
    subcategory: "grundgesetze",
  },
  {
    id: "kirchhoff-strom",
    title: "Kirchhoffsches Stromgesetz",
    image: "/images/kirchhoff-strom.png",
    description: "Knotenregel: Die Summe aller Ströme an einem Knotenpunkt ist null. ΣI = 0 bzw. ΣI_zufließend = ΣI_abfließend. Anwendung: Berechnung von Strömen in Parallelschaltungen und verzweigten Netzen. Dies folgt aus der Ladungserhaltung.",
    example: "I1 + I2 = I3 + I4 (bei 4 Leitern an einem Knoten)",
    category: "et-gesetze",
    subcategory: "grundgesetze",
  },
  {
    id: "kirchhoff-spannung",
    title: "Kirchhoffsches Spannungsgesetz",
    image: "/images/kirchhoff-spannung.png",
    description: "Maschenregel: Die Summe aller Spannungen in einer geschlossenen Masche ist null. ΣU = 0 bzw. U_Quelle = ΣU_Verbraucher. Anwendung: Berechnung von Spannungen in Reihenschaltungen und Maschen. Grundlage für die Berechnung von Schaltungen.",
    example: "Uq = U1 + U2 + U3 (Reihenschaltung)",
    category: "et-gesetze",
    subcategory: "grundgesetze",
  },
  {
    id: "leistungsgesetz",
    title: "Elektrische Leistung",
    image: "/images/leistung.png",
    description: "Grundformel: P = U × I. Abgeleitete Formeln: P = I² × R (bei bekanntem Strom), P = U² / R (bei bekannter Spannung). Einheit: Watt (W). 1 kW = 1000 W. Wechselstrom – Leistungsarten: Wirkleistung P = U × I × cos φ (W), Blindleistung Q = U × I × sin φ (var), Scheinleistung S = U × I (VA). Es gilt: S² = P² + Q². Leistungsfaktor: cos φ = P / S.",
    example: "230V × 10A = 2300W = 2.3kW",
    category: "et-gesetze",
    subcategory: "leistung-arbeit",
  },
  {
    id: "elektrische-arbeit",
    title: "Elektrische Arbeit",
    image: "/images/placeholder.png",
    description: "Formel: W = P × t. Einheit: Wattsekunde (Ws) oder Joule (J), Kilowattstunde (kWh). Umrechnung: 1 kWh = 3.600.000 Ws = 3,6 MJ. Praxis: Stromzähler messen in kWh – Grundlage für die Stromrechnung.",
    example: "Verbrauch berechnen: 100W × 5h = 500Wh = 0.5kWh",
    category: "et-gesetze",
    subcategory: "leistung-arbeit",
  },
  {
    id: "widerstandsgesetz",
    title: "Widerstandsgesetz",
    image: "/images/placeholder.png",
    description: "Formel: R = ρ × l / A. ρ (Rho): Spezifischer Widerstand in Ω·mm²/m. l: Leiterlänge in m. A: Leiterquerschnitt in mm². Wichtige ρ-Werte bei 20°C: Kupfer = 0,0178 Ω·mm²/m, Aluminium = 0,028 Ω·mm²/m.",
    example: "Kupferdraht: l = 100m, A = 1.5mm² → R = 0.0178 × 100 / 1.5 = 1.19Ω",
    category: "et-gesetze",
    subcategory: "widerstaende-schaltungen",
  },
  {
    id: "reihen-parallelschaltung",
    title: "Reihen- und Parallelschaltung",
    image: "/images/placeholder.png",
    description: "Reihenschaltung: R_ges = R1 + R2 + R3 + ... → Strom überall gleich, Spannung teilt sich auf. Parallelschaltung: 1/R_ges = 1/R1 + 1/R2 + 1/R3 + ... Zwei parallel: R_ges = (R1 × R2) / (R1 + R2) → Spannung überall gleich, Strom teilt sich auf. Merke: Die Parallelschaltung ergibt immer einen kleineren Gesamtwiderstand als der kleinste Einzelwiderstand.",
    example: "Drei Widerstände in Reihe/Parallel",
    category: "et-gesetze",
    subcategory: "widerstaende-schaltungen",
  },
  {
    id: "spannungs-stromteiler",
    title: "Spannungs- und Stromteiler",
    image: "/images/placeholder.png",
    description: "Spannungsteiler: U2 = U_ges × R2 / (R1 + R2) → Spannung teilt sich im Verhältnis der Widerstände. Stromteiler: I1 = I_ges × R2 / (R1 + R2) → Strom teilt sich umgekehrt proportional zu den Widerständen. Durch den kleineren Widerstand fließt mehr Strom. Wichtige Grundschaltungen für Spannungs- und Stromaufteilung.",
    example: "Potentiometer, Shunt-Widerstand",
    category: "et-gesetze",
    subcategory: "spannungs-stromteiler",
  },
];

export const entries: Entry[] = oldTerms.map(term => {
  const sectionId = subcategoryToSectionMap[term.subcategory || ''] || 'grundgesetze';
  
  return {
    id: term.id,
    sectionId,
    title: term.title,
    content: createContentBlocks(term.description, term.example),
    image: term.image !== "/images/placeholder.png" ? term.image : undefined,
  };
});
