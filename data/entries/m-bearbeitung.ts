// ============================================================================
// ENTRIES - Mechanische Bearbeitung (Category 6)
// ============================================================================

import type { Entry } from '../types';
import { createContentBlocks, subcategoryToSectionMap } from '../helpers';

const oldTerms = [
  {
    id: "metallarten",
    title: "Metallarten",
    image: "/images/placeholder.png",
    description: "Stahl: Eisen mit max. 2,06 % Kohlenstoff. S235 (Baustahl), C45 (Vergütungsstahl). Aluminium: Leicht (2,7 g/cm³), korrosionsbeständig, gute Leitfähigkeit. Bohrerspitze 130°. Kupfer: Beste Leitfähigkeit nach Silber (58 MS/m). Für Leitungen, Wicklungen, Platinen. Messing: Kupfer-Zink-Legierung. Gut zerspanbar, korrosionsfest. Klemmen, Kontakte. Edelstahl: Mind. 10,5 % Chrom, korrosionsfest. Schwerer zu bearbeiten, langsamer bohren.",
    example: "Stahl, Edelstahl, Aluminium, Messing",
    category: "m-bearbeitung",
    subcategory: "metallarten",
  },
  {
    id: "drehen",
    title: "Drehen",
    image: "/images/drehen.png",
    description: "Drehen ist ein spanendes Fertigungsverfahren mit rotierendem Werkstück und festem Werkzeug. Verfahren: Längsdrehen (Durchmesser), Plandrehen (Stirnfläche), Einstechen (Nuten), Gewindeschneiden. Schnittgeschwindigkeit v = π × d × n / 1000 [m/min]. Der Vorschub f wird in mm/Umdrehung angegeben.",
    example: "Welle drehen, Gewinde M10 schneiden, Planfläche bearbeiten",
    category: "m-bearbeitung",
    subcategory: "bearbeitungsverfahren",
  },
  {
    id: "fraesen",
    title: "Fräsen",
    image: "/images/fraesen.png",
    description: "Fräsen ist ein spanendes Verfahren mit rotierendem Werkzeug. Verfahren: Stirnfräsen (Planflächen), Umfangsfräsen (seitlich), Nutfräsen, Profilfräsen. Gleichlauffräsen ergibt bessere Oberflächen, Gegenlauffräsen ist für ältere Maschinen geeignet. CNC-Fräsen ermöglicht komplexe 3D-Formen.",
    example: "Nut 10×5mm fräsen, Tasche ausfräsen, Kontur fräsen",
    category: "m-bearbeitung",
    subcategory: "bearbeitungsverfahren",
  },
  {
    id: "bohren",
    title: "Bohren / Spiralbohrer",
    image: "/images/bohren.png",
    description: "Spiralbohrer: Spitzenwinkel 118° (Stahl), 130° (Aluminium), 130–140° (Kunststoff). Vor dem Bohren: Ankörnen! Schafft Führung für den Bohrer. Drehzahlformel: n = (v × 1000) / (π × d). v = Schnittgeschwindigkeit [m/min], d = Bohrerdurchmesser [mm]. Richtwerte: Stahl v ≈ 25 m/min, Aluminium v ≈ 100 m/min. Beim Durchbohren: Vorschub reduzieren. Kühlschmiermittel verbessert Standzeit und Oberfläche.",
    example: "Kernloch M8 = 6.8mm, Durchgangsloch 10mm",
    category: "m-bearbeitung",
    subcategory: "bearbeitungsverfahren",
  },
  {
    id: "koerner-durchschlag",
    title: "Körner / Durchschlag",
    image: "/images/placeholder.png",
    description: "Der Körner (Körnerhahn) erzeugt eine kleine Vertiefung zum Ansetzen des Bohrers. Der Durchschlag erzeugt eine größere Vertiefung. Wichtig für präzises Bohren und Vermeiden von Verrutschen.",
    example: "Ankörnen vor dem Bohren",
    category: "m-bearbeitung",
    subcategory: "bearbeitungsverfahren",
  },
  {
    id: "senker",
    title: "Senker",
    image: "/images/placeholder.png",
    description: "Kegelsenker 90°: Für Senkschrauben, Entgraten von Bohrungen. Flachsenker: Plane Auflagefläche für Zylinderkopfschrauben. Zapfensenker: Mit Führungszapfen für tiefe Senkungen. Wird nach dem Bohren eingesetzt.",
    example: "Senken für Senkschrauben M8",
    category: "m-bearbeitung",
    subcategory: "bearbeitungsverfahren",
  },
  {
    id: "reibahle",
    title: "Reibahle",
    image: "/images/placeholder.png",
    description: "Die Reibahle (Reibahlen) erzeugt präzise, runde Löcher mit guter Oberflächengüte. Handreibahlen für manuelle Bearbeitung, Maschinenreibahlen für Dreh-/Fräsmaschinen. Vorarbeit: Vorbohren mit geringerem Durchmesser.",
    example: "Präzisionsloch H7 reiben",
    category: "m-bearbeitung",
    subcategory: "bearbeitungsverfahren",
  },
  {
    id: "gewindeschneiden",
    title: "Gewindeschneiden (innen/außen)",
    image: "/images/placeholder.png",
    description: "Kernlochformel: Kernloch-Ø = Gewinde-Ø − Steigung (NICHT '× 0,8'). Gewindebohrer-Satz: Vorschneider (1 Ring), Mittelschneider (2 Ringe), Fertigschneider (kein Ring oder 3 Ringe). Technik: ½ Umdrehung vor, ¼ zurück (Spanbrechen). Mit Schneidöl arbeiten! Innengewinde werden mit Gewindebohrern geschnitten. Außengewinde mit Schneideisen oder Gewindeschneidbacken.",
    example: "Innengewinde M8 schneiden, Außengewinde M10",
    category: "m-bearbeitung",
    subcategory: "gewinde",
  },
  {
    id: "gewindearten",
    title: "Gewindearten",
    image: "/images/placeholder.png",
    description: "Metrisch (M): 60° Flankenwinkel. M8 = 8 mm Außen-Ø. Standard. Metrisch Fein (MF): 60° Flankenwinkel, kleinere Steigung. M8×1 = 8 mm Ø, 1 mm Steigung. Rohrgewinde (G/R): 55° Flankenwinkel. G = zylindrisch, R = konisch. Trapezgewinde (Tr): 30° Flankenwinkel. Für Spindeln, Vorschubmuttern. Bezeichnung: Durchmesser × Steigung (z.B. M8×1.25). Rechts- und Linksgewinde möglich.",
    example: "M8, M10×1.5, Trapezgewinde Tr16×4",
    category: "m-bearbeitung",
    subcategory: "gewinde",
  },
  {
    id: "schrauben-muttern-scheiben",
    title: "Schrauben / Muttern / Scheiben",
    image: "/images/placeholder.png",
    description: "Schrauben verbinden Bauteile (Sechskant, Senk-, Zylinderkopf). Muttern als Gegenstück. Scheiben verteilen Kräfte (Unterlegscheibe, Federscheibe, Sicherungsscheibe). Materialien: Stahl, Edelstahl, Kunststoff. Festigkeitsklassen: Beispiel 8.8: 8 × 100 = 800 N/mm² Zugfestigkeit, 8 × 0,8 × 100 = 640 N/mm² Streckgrenze. Übersicht: 4.6 = weich, 8.8 = Standard, 10.9 = hochfest, 12.9 = höchstfest.",
    example: "Sechskantschraube M8, Mutter M8, Unterlegscheibe",
    category: "m-bearbeitung",
    subcategory: "verbindungselemente",
  },
];

export const entries: Entry[] = oldTerms.map(term => {
  const sectionId = subcategoryToSectionMap[term.subcategory || ''] || 'metallarten';
  
  return {
    id: term.id,
    sectionId,
    title: term.title,
    content: createContentBlocks(term.description, term.example),
    image: term.image !== "/images/placeholder.png" ? term.image : undefined,
  };
});
