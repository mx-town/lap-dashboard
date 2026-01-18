// ============================================================================
// ENTRIES - Kabel/Leitungen/Stecker (Category 5)
// ============================================================================

import type { Entry } from '../types';
import { createContentBlocks, subcategoryToSectionMap } from '../helpers';

const oldTerms = [
  {
    id: "leitungsbezeichnung",
    title: "Leitungsbezeichnung (NYM, NYY, H07V-U, etc.)",
    image: "/images/placeholder.png",
    description: "Beispiel NYM-J 3×1,5: N = Normenleitung, Y = PVC-Isolierung, M = Mantelleitung, J = mit Schutzleiter (grün-gelb), 3×1,5 = 3 Adern à 1,5 mm². Ohne J: Kein Schutzleiter (z.B. NYM-O). Wichtige Leitungstypen: NYM-J (PVC-Mantelleitung, Unterputz), NYY-J (PVC-Erdkabel, Erdverlegung), H07V-U (eindrähtige Aderleitung, Schaltschrank), H07V-K (feindrähtige Aderleitung, flexible Verbindungen), H07RN-F (Gummischlauchleitung, Baustelle), E30/E90 (Brandmeldekabel, Funktionserhalt 30/90 min bei Brand).",
    example: "NYM-J 3×1.5mm², H07V-K 3×2.5mm²",
    category: "kabel-leitungen",
    subcategory: "leitungsbezeichnung",
  },
  {
    id: "kabeltypen",
    title: "Kabeltypen",
    image: "/images/kabel.png",
    description: "Wichtige Kabeltypen in der Schweiz: TT (Installationskabel für feste Verlegung), Td (Flachkabel für Geräteanschluss), FE0 (halogenfrei für öffentliche Bauten), PUR (Polyurethan-Mantel für Schleppketten). Die Aderfarben sind: L1=Braun, L2=Schwarz, L3=Grau, N=Blau, PE=Grün-Gelb.",
    example: "TT 3×1.5mm², Td 3×0.75mm², H07RN-F (Gummikabel)",
    category: "kabel-leitungen",
    subcategory: "leitungsbezeichnung",
  },
  {
    id: "aderkennzeichnung",
    title: "Aderkennzeichnung",
    image: "/images/placeholder.png",
    description: "L (Außenleiter/Phase): Braun, Schwarz, Grau (L1, L2, L3). N (Neutralleiter): Blau. PE (Schutzleiter): Grün-Gelb (ausschließlich für Schutzleiter, nie für andere Zwecke!). PEN (kombiniert): Grün-Gelb mit blauer Markierung an den Enden. In Steuerungen auch nummeriert (z.B. 1-99 für Steuerkreise).",
    example: "Drehstromkabel mit Aderkennzeichnung",
    category: "kabel-leitungen",
    subcategory: "aderkennzeichnung",
  },
  {
    id: "steckverbinder-cee",
    title: "CEE-Stecker",
    image: "/images/cee-stecker.png",
    description: "CEE-Industriestecker sind nach Farben codiert: Blau = 230V einphasig, Rot = 400V dreiphasig, Gelb = 110V, Grün = >50V bei 100-300Hz. Die Polzahl gibt die Anzahl der Kontakte an (z.B. 3P+N+PE = 5-polig). Sie bieten hohe Schutzart und sichere Verriegelung.",
    example: "CEE 16A 3P (blau) für Camping, CEE 32A 5P (rot) für Baustelle",
    category: "kabel-leitungen",
    subcategory: "steckertypen",
  },
  {
    id: "steckverbinder-m12",
    title: "M12 Steckverbinder",
    image: "/images/m12.png",
    description: "M12 ist der Industrie-Standard für Sensor- und Aktoranschlüsse. Verschiedene Kodierungen verhindern Fehlstecken: A-kodiert für Sensoren/Aktoren, B-kodiert für PROFIBUS, D-kodiert für Industrial Ethernet (100Mbit), X-kodiert für 10Gbit Ethernet. Schutzart bis IP67.",
    example: "M12 A-kodiert 4-polig für Näherungsschalter",
    category: "kabel-leitungen",
    subcategory: "steckertypen",
  },
  {
    id: "steckertypen",
    title: "Steckertypen (Schuko, CEE blau/rot, Kaltgeräte)",
    image: "/images/placeholder.png",
    description: "Schuko (Typ F): 250 V, 16 A (3680 W), mit Schutzkontakt. Standard DE/AT. Kein Verpolungsschutz. Blauer CEE (230 V): 3-polig (L, N, PE), 16 A, IP44. Camping, Außen, Baustellen. Roter CEE (400 V): 5-polig (L1, L2, L3, N, PE), 16–125 A. Drehstrom, Industrie. Kaltgerätestecker C13/C14: 250 V, 10 A. Computer, Monitore, Messgeräte. Heißgerätestecker C15/C16: 250 V, 10 A, bis 120 °C. Wasserkocher, Server.",
    example: "Haushaltsstecker, Industriestecker, Kaltgerätestecker",
    category: "kabel-leitungen",
    subcategory: "steckertypen",
  },
  {
    id: "e30-e90-brandmeldekabel",
    title: "E30/E90 Brandmeldekabel",
    image: "/images/placeholder.png",
    description: "Brandmeldekabel sind spezielle Leitungen für Brandmeldeanlagen. E30 = 30 Minuten Feuerwiderstand, E90 = 90 Minuten. Halten Funktion im Brandfall aufrecht.",
    example: "Brandmeldekabel für Rauchmelder, Alarmzentrale",
    category: "kabel-leitungen",
    subcategory: "leitungsbezeichnung",
  },
];

export const entries: Entry[] = oldTerms.map(term => {
  const sectionId = subcategoryToSectionMap[term.subcategory || ''] || 'leitungsbezeichnung';
  
  return {
    id: term.id,
    sectionId,
    title: term.title,
    content: createContentBlocks(term.description, term.example),
    image: term.image !== "/images/placeholder.png" ? term.image : undefined,
  };
});
