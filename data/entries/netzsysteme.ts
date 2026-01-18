// ============================================================================
// ENTRIES - Netzsysteme (Category 10)
// ============================================================================

import type { Entry } from '../types';
import { createContentBlocks, subcategoryToSectionMap } from '../helpers';

const oldTerms = [
  {
    id: "netzsysteme-grundbegriffe",
    title: "Grundbegriffe (L, N, PE, PEN)",
    image: "/images/placeholder.png",
    description: "Außenleiter (L1, L2, L3): Führen Spannung, 120° phasenverschoben. Neutralleiter (N): Rückleiter, bei symmetrischer Last stromlos. Schutzleiter (PE): Protective Earth, verbindet Gehäuse mit Erde. Führt nur Fehlerstrom. PEN-Leiter: Kombinierter Schutz- und Neutralleiter (nur in TN-C). Wichtig für Verständnis der Netzstruktur.",
    example: "L1=Braun, L2=Schwarz, L3=Grau, N=Blau, PE=Grün-Gelb",
    category: "netzsysteme",
    subcategory: "netzsysteme-grundbegriffe",
  },
  {
    id: "netzspannungen",
    title: "Netzspannungen (230 V / 400 V)",
    image: "/images/placeholder.png",
    description: "Einphasig: 230 V zwischen L und N (Strangspannung). Dreiphasig: 400 V zwischen zwei Außenleitern (Leiterspannung). Zusammenhang: U_Leiter = U_Strang × √3 → 400 V = 230 V × 1,73. Frequenz: 50 Hz in Europa, 60 Hz in USA. Wichtig für Geräteauswahl und Sicherheit.",
    example: "Haushaltsgeräte 230V, Motoren 400V Drehstrom",
    category: "netzsysteme",
    subcategory: "netzspannungen",
  },
  {
    id: "stern-dreieckschaltung",
    title: "Stern- und Dreieckschaltung",
    image: "/images/placeholder.png",
    description: "Sternschaltung (Y): Wicklungsenden am Sternpunkt verbunden. U_Wicklung = 230 V, I_Leiter = I_Wicklung. Motor bei 400V/690V-Schild: Stern bei 690 V Netz. Dreieckschaltung (Δ): Wicklungen zwischen Außenleitern. U_Wicklung = 400 V, I_Leiter = I_Wicklung × √3. Motor bei 400V/690V-Schild: Dreieck bei 400 V Netz. Phasenausfall: Motor läuft mit reduzierter Leistung weiter, verbleibende Wicklungen werden überlastet und überhitzen. Motorschutzrelais sollte auslösen.",
    example: "Stern-Dreieck-Anlauf für Motoren, Leistungserhöhung",
    category: "netzsysteme",
    subcategory: "stern-dreieck",
  },
  {
    id: "tn-s-system",
    title: "TN-S-System",
    image: "/images/placeholder.png",
    description: "PE und N durchgehend getrennt. Fehlerstrom über PE, hoher Kurzschlussstrom → LS löst aus. Vorteile: EMV-freundlich, geringste Störungen. Standard für Neuanlagen. Sternpunkt der Quelle geerdet, Körper über PE geerdet.",
    example: "Moderne Hausinstallation, Industrieanlagen",
    category: "netzsysteme",
    subcategory: "netzsysteme-typen",
  },
  {
    id: "tn-c-system",
    title: "TN-C-System",
    image: "/images/placeholder.png",
    description: "PE und N als PEN kombiniert. Betriebsströme auf PEN können Gehäusespannungen verursachen. Nachteile: EMV-Probleme, kein FI möglich. Nur für Zuleitung, nicht in Gebäuden! Veraltet, nicht mehr zulässig in neuen Installationen.",
    example: "Alte Installationen (vor 1990er Jahren)",
    category: "netzsysteme",
    subcategory: "netzsysteme-typen",
  },
  {
    id: "tn-c-s-system",
    title: "TN-C-S-System",
    image: "/images/tn-system.png",
    description: "PEN in Zuleitung, Aufteilung in PE und N am Hausanschluss (HAK). Standard: In Wohngebäuden. Wirtschaftlich und sicher. Ab HAK gilt TN-S, daher RCD möglich. Übergang PEN → PE+N nur einmal erlaubt.",
    example: "Hausinstallation: TN-C-S ab Hausanschluss, ab HAK TN-S",
    category: "netzsysteme",
    subcategory: "netzsysteme-typen",
  },
  {
    id: "tt-system",
    title: "TT-System",
    image: "/images/tt-system.png",
    description: "Anlagenerdung über separaten Erder, nicht mit Trafo-Erde verbunden. FI zwingend erforderlich (geringer Fehlerstrom durch Erdungswiderstand). Wird verwendet, wenn kein durchgehender Schutzleiter vom Netz verfügbar ist.",
    example: "Landwirtschaftliche Betriebe, ältere Installationen",
    category: "netzsysteme",
    subcategory: "netzsysteme-typen",
  },
  {
    id: "it-system",
    title: "IT-System",
    image: "/images/it-system.png",
    description: "Keine direkte Erdverbindung (isoliert oder hochohmig). Erster Fehler → kein Ausfall! Isolationsüberwachung meldet. Vorteile: Höchste Verfügbarkeit. Kein Ausfall bei erstem Erdschluss. Anwendung: OP-Säle, Intensivstationen, Bergbau, kritische Industrie.",
    example: "OP-Saal mit Isolationsüberwachung, Chemieanlage",
    category: "netzsysteme",
    subcategory: "netzsysteme-typen",
  },
];

export const entries: Entry[] = oldTerms.map(term => {
  const sectionId = subcategoryToSectionMap[term.subcategory || ''] || 'netzsysteme-grundbegriffe';
  
  return {
    id: term.id,
    sectionId,
    title: term.title,
    content: createContentBlocks(term.description, term.example),
    image: term.image !== "/images/placeholder.png" ? term.image : undefined,
  };
});
