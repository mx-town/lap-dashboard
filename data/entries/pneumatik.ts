// ============================================================================
// ENTRIES - Pneumatik (Category 8)
// ============================================================================

import type { Entry } from '../types';
import { createContentBlocks, subcategoryToSectionMap } from '../helpers';

const oldTerms = [
  {
    id: "pneumatik-grundlagen",
    title: "Pneumatik Grundlagen",
    image: "/images/pneumatik.png",
    description: "Pneumatik nutzt Druckluft (6-8 bar) zur Kraftübertragung. Eigenschaften: komprimierbar (federnd), sauber, schnell. Druckluftaufbereitung: Kompressor → Kühler → Filter → Wasserabscheider → Druckregler → Öler. Die Wartungseinheit (FRL) fasst Filter, Regler und Öler zusammen.",
    example: "Arbeitsdruck 6 bar, Volumenstrom in Nl/min",
    category: "pneumatik",
    subcategory: "pneumatik-grundlagen",
  },
  {
    id: "ewz",
    title: "Einfachwirkender Zylinder (EWZ)",
    image: "/images/placeholder.png",
    description: "Aufbau: Ein Druckluftanschluss, Rückstellung durch Feder. Ansteuerung: 3/2-Ventil. Eigenschaft: Kraft nur in eine Richtung. Geeignet für einfache Bewegungen ohne große Kräfte.",
    example: "Einfachwirkender Zylinder mit Federrückstellung",
    category: "pneumatik",
    subcategory: "zylinder",
  },
  {
    id: "dwz",
    title: "Doppeltwirkender Zylinder (DWZ)",
    image: "/images/placeholder.png",
    description: "Aufbau: Zwei Druckluftanschlüsse, aktive Bewegung in beide Richtungen. Ansteuerung: 5/2- oder 5/3-Ventil. Eigenschaft: Größere Kraft, bessere Kontrolle. Höhere Kraft als EWZ.",
    example: "Doppeltwirkender Zylinder für Hub- und Senkbewegung",
    category: "pneumatik",
    subcategory: "zylinder",
  },
  {
    id: "pneumatik-zylinder",
    title: "Pneumatikzylinder",
    image: "/images/zylinder.png",
    description: "Einfachwirkende Zylinder: Druckluft nur auf einer Seite, Rückstellung durch Feder. Doppeltwirkende Zylinder: Druckluft beidseitig, Kraft in beide Richtungen. Kolbenkraft F = p × A = p × (π × d² / 4). Beispiel: d = 50 mm, p = 6 bar → F = 6 × 10⁵ Pa × (π × 0,05² / 4) = 1178 N. Bei Rückhub: Ringfläche berechnen (Kolbenstange abziehen).",
    example: "Zylinder Ø63mm bei 6 bar: F = 0.6 × 3117mm² = 1870N",
    category: "pneumatik",
    subcategory: "zylinder",
  },
  {
    id: "pneumatik-ventile",
    title: "Wegeventile (3/2, 5/2, 5/3)",
    image: "/images/ventile.png",
    description: "Schema: Anschlüsse / Schaltstellungen (z.B. 5/2 = 5 Anschlüsse, 2 Stellungen). Anschlussbezeichnung (nach ISO 5599): 1 = Druckversorgung (P), 2 und 4 = Arbeitsanschlüsse (A, B), 3 und 5 = Entlüftung (R, S), 12 und 14 = Steueranschlüsse. Wichtige Ventiltypen: 3/2-Wegeventil (für einfachwirkende Zylinder), 5/2-Wegeventil (für doppeltwirkende Zylinder), 5/3-Wegeventil (mit Mittelstellung: gesperrt, entlüftet oder druckbeaufschlagt). Betätigung: manuell, mechanisch, elektrisch (Magnetventil), pneumatisch.",
    example: "5/2-Wegeventil bistabil mit Magnetbetätigung",
    category: "pneumatik",
    subcategory: "ventile",
  },
  {
    id: "wartungseinheit",
    title: "Wartungseinheit",
    image: "/images/placeholder.png",
    description: "Die Wartungseinheit (FRL = Filter-Regler-Luftöler) bereitet Druckluft auf: Filter entfernt Partikel und Wasser (regelmäßig entleeren!), Regler stellt konstanten Arbeitsdruck ein (unabhängig vom Netzdruck), Öler fügt Schmiernebel zu (bei modernen Ventilen oft nicht mehr nötig). Wichtig für Lebensdauer der Komponenten.",
    example: "FRL-Einheit 1/4\", Druckregler 6 bar",
    category: "pneumatik",
    subcategory: "pneumatik-komponenten",
  },
  {
    id: "manometer",
    title: "Manometer",
    image: "/images/placeholder.png",
    description: "Das Manometer (Druckmesser) zeigt den aktuellen Druck in bar an. Wichtig zur Überwachung des Systemdrucks. Anschluss meist über T-Stück oder direkt am Regler.",
    example: "Manometer 0-10 bar für Drucküberwachung",
    category: "pneumatik",
    subcategory: "pneumatik-komponenten",
  },
  {
    id: "drosselrueckschlagventil",
    title: "Drosselrückschlagventil",
    image: "/images/placeholder.png",
    description: "Das Drosselrückschlagventil begrenzt die Geschwindigkeit in eine Richtung (drosselt) und lässt die andere Richtung frei. Abluftdrosselung: Drossel am Abluftanschluss. Bessere Kontrolle, Standard in der Industrie. Zuluftdrosselung: Drossel am Zuluftanschluss. Ruckelige Bewegung, selten verwendet.",
    example: "Geschwindigkeitsregelung für Aus- und Einfahrbewegung",
    category: "pneumatik",
    subcategory: "pneumatik-komponenten",
  },
  {
    id: "elektropneumatik-magnetventil",
    title: "Elektropneumatik / Magnetventil",
    image: "/images/placeholder.png",
    description: "Aufbau: Elektrische Steuerung (Sensoren, SPS, Taster) + pneumatische Aktoren. Magnetventile als Schnittstelle. Magnetventil: Elektrisch betätigtes Wegeventil. Spule zieht Anker an und schaltet Ventilstellung um. Vorteile: Automatisierung, SPS-Anbindung, Sensorintegration, komplexe Ablaufsteuerungen möglich. Magnetventile werden elektrisch angesteuert (24V DC, 230V AC) und schalten die Druckluft.",
    example: "5/2-Wegeventil mit Magnetspule, SPS-Steuerung",
    category: "pneumatik",
    subcategory: "elektropneumatik",
  },
  {
    id: "sensoren-pneumatik",
    title: "Sensoren (induktiv, kapazitiv, Reed)",
    image: "/images/placeholder.png",
    description: "Induktive Sensoren erkennen Metall durch Änderung des Magnetfelds. Kapazitive Sensoren reagieren auf alle Materialien. Reed-Schalter sind magnetisch betätigte Kontakte. Wichtig für Endlagenabfrage bei Zylindern.",
    example: "Induktiver Näherungsschalter M18, Reed-Schalter für Magnetzylinder",
    category: "pneumatik",
    subcategory: "elektropneumatik",
  },
];

export const entries: Entry[] = oldTerms.map(term => {
  const sectionId = subcategoryToSectionMap[term.subcategory || ''] || 'pneumatik-grundlagen';
  
  return {
    id: term.id,
    sectionId,
    title: term.title,
    content: createContentBlocks(term.description, term.example),
    image: term.image !== "/images/placeholder.png" ? term.image : undefined,
  };
});
