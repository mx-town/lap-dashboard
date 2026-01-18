// ============================================================================
// ENTRIES - Mechanisches Messen/Prüfen (Category 7)
// ============================================================================

import type { Entry } from '../types';
import { createContentBlocks, subcategoryToSectionMap } from '../helpers';

const oldTerms = [
  {
    id: "messschieber",
    title: "Messschieber",
    image: "/images/messschieber.png",
    description: "Aufbau: Hauptskala (mm), Nonius (1/10 oder 1/20 mm), Außen-/Innenmessschenkel, Tiefenmessstab. Ablesung: Ganzzahl auf Hauptskala + Nonius-Strich, der mit Hauptskala fluchtet. Genauigkeit: 0,1 mm (1/10-Nonius) oder 0,05 mm (1/20-Nonius). Die Messflächen müssen sauber und das Werkstück gratfrei sein. Vor der Messung Nullpunkt prüfen.",
    example: "Wellendurchmesser 25.00mm, Bohrung 10.05mm messen",
    category: "m-messen",
    subcategory: "messgeraete",
  },
  {
    id: "buegelmessschraube",
    title: "Bügelmessschraube (Mikrometer)",
    image: "/images/mikrometer.png",
    description: "Aufbau: Bügel, Amboss, Messspindel, Hülse (Hauptskala), Trommel (Teilung). Funktionsweise: Feingewinde: 1 Umdrehung = 0,5 mm Vorschub. Trommel hat 50 Teilungen → 1 Teilung = 0,01 mm. Genauigkeit: 0,01 mm. Ratsche verwenden für konstante Messkraft! Der Messbereich beträgt 25mm (z.B. 0-25mm, 25-50mm). Vor der Messung: Nullpunkt mit Einstellmass prüfen.",
    example: "Bolzendurchmesser 12.00mm auf 0.01mm genau messen",
    category: "m-messen",
    subcategory: "messgeraete",
  },
  {
    id: "messuhr",
    title: "Messuhr",
    image: "/images/messuhr.png",
    description: "Die Messuhr zeigt Längenänderungen mit 0.01mm Genauigkeit an. Messbereich meist 10mm. Anwendung: Rundlauf, Planlauf, Ebenheit, Vergleichsmessungen. Sie wird im Stativ oder Magnethalter befestigt. Vor der Messung auf Null stellen. Für dynamische Messungen Tastspitze und Federkraft beachten.",
    example: "Rundlauf einer Welle < 0.02mm prüfen",
    category: "m-messen",
    subcategory: "messgeraete",
  },
  {
    id: "stahllineal",
    title: "Stahllineal",
    image: "/images/placeholder.png",
    description: "Das Stahllineal ist ein präzises Längenmessgerät für gerade Kanten und Oberflächen. Genauigkeit 0.5mm. Verwendung zum Anreißen, Prüfen von Ebenheit und Geradheit.",
    example: "Ebenheit prüfen, Anreißen von Linien",
    category: "m-messen",
    subcategory: "messgeraete",
  },
  {
    id: "haarwinkel",
    title: "Haarwinkel",
    image: "/images/placeholder.png",
    description: "Aufbau: Gehärteter 90°-Stahlwinkel mit geschliffenen Kanten. Anwendung: Winkligkeitsprüfung. Kein Lichtspalt = 90° korrekt. Wichtig für Werkstückausrichtung und Winkelprüfung.",
    example: "Rechten Winkel prüfen, Anreißen",
    category: "m-messen",
    subcategory: "messgeraete",
  },
  {
    id: "radienlehre",
    title: "Radienlehre",
    image: "/images/placeholder.png",
    description: "Die Radienlehre ist ein Prüfmittel zum Messen von Innen- und Außenradien. Verfügbar in verschiedenen Radien (z.B. 1mm, 2mm, 5mm). Vergleichsmessung durch Anlegen an Werkstück. Kein Lichtspalt = Übereinstimmung.",
    example: "Radius einer Rundung prüfen",
    category: "m-messen",
    subcategory: "lehren",
  },
  {
    id: "grenzrachenlehre",
    title: "Grenzrachenlehre",
    image: "/images/placeholder.png",
    description: "Die Grenzrachenlehre hat zwei Prüfrachen: Gutseite (G) und Ausschussseite (A). Prüft, ob Maß innerhalb der Toleranz liegt. Schnelle Gut/Schlecht-Prüfung ohne genaue Maßangabe. Für Wellen.",
    example: "Toleranzprüfung von Fertigteilen",
    category: "m-messen",
    subcategory: "lehren",
  },
  {
    id: "gewindelehrdorn",
    title: "Gewindelehrdorn",
    image: "/images/placeholder.png",
    description: "Der Gewindelehrdorn (Gewindelehre) prüft Innengewinde auf Maßgenauigkeit. Verfügbar als Durchgangslehre (Gut) und Ausschusslehre (Schlecht). Gut-Seite einschraubbar, Ausschuss-Seite max. 2 Umdrehungen. Wichtig für Gewindetoleranzen.",
    example: "Gewinde M8 prüfen",
    category: "m-messen",
    subcategory: "lehren",
  },
];

export const entries: Entry[] = oldTerms.map(term => {
  const sectionId = subcategoryToSectionMap[term.subcategory || ''] || 'messgeraete';
  
  return {
    id: term.id,
    sectionId,
    title: term.title,
    content: createContentBlocks(term.description, term.example),
    image: term.image !== "/images/placeholder.png" ? term.image : undefined,
  };
});
