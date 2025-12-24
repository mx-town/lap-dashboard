export interface Term {
  id: string
  title: string
  image: string
  description: string
  example: string
  category: string
}

export interface Category {
  id: string
  title: string
  icon: string
  description: string
  author: string
}

export const categories: Record<string, Category> = {
  schutzkonzepte: {
    id: "schutzkonzepte",
    title: "Schutzkonzepte",
    icon: "🛡️",
    description: "Schutzklassen, Schutzarten und Sicherheitskonzepte",
    author: "Kilian",
  },
  "et-gesetze": {
    id: "et-gesetze",
    title: "ET Gesetze",
    icon: "📜",
    description: "Elektrotechnische Gesetze und Grundlagen",
    author: "Josh",
  },
  schaltkasten: {
    id: "schaltkasten",
    title: "Schaltkasten",
    icon: "🗄️",
    description: "Aufbau und Verdrahtung von Schaltschränken",
    author: "Noel",
  },
  halbleitertechnik: {
    id: "halbleitertechnik",
    title: "Halbleitertechnik",
    icon: "💡",
    description: "Dioden, Transistoren und Halbleiterbauelemente",
    author: "Niklas M",
  },
  "kabel-leitungen": {
    id: "kabel-leitungen",
    title: "Kabel/Leitungen/Stecker",
    icon: "🔌",
    description: "Kabeltypen, Leitungen und Steckverbinder",
    author: "Celine",
  },
  "m-bearbeitung": {
    id: "m-bearbeitung",
    title: "Mechanische Bearbeitung",
    icon: "🔩",
    description: "Fertigungsverfahren und Werkzeuge",
    author: "Wenger",
  },
  "m-messen": {
    id: "m-messen",
    title: "Mechanisches Messen/Prüfen",
    icon: "📏",
    description: "Messmittel und Prüfverfahren",
    author: "Wenger",
  },
  pneumatik: {
    id: "pneumatik",
    title: "Pneumatik",
    icon: "💨",
    description: "Pneumatische Antriebe und Steuerungen",
    author: "Lukas",
  },
  steuerungstechnik: {
    id: "steuerungstechnik",
    title: "Regelungs-/Steuerungstechnik/SPS",
    icon: "🖥️",
    description: "SPS-Programmierung und Steuerungskonzepte",
    author: "Andreas",
  },
  netzsysteme: {
    id: "netzsysteme",
    title: "Netzsysteme",
    icon: "🌐",
    description: "TN, TT, IT Netzsysteme",
    author: "Offen",
  },
}

export const terms: Term[] = [
  // ========== SCHUTZKONZEPTE ==========
  {
    id: "schutzklasse-0",
    title: "Schutzklasse 0",
    image: "/images/schutzklasse0.png",
    description:
      "Schutzklasse 0 bietet nur Basisisolierung ohne Schutzleiteranschluss. Der Schutz erfolgt ausschliesslich durch die Umgebung (z.B. isolierter Standort). Diese Schutzklasse ist in der Schweiz und vielen anderen Ländern nicht mehr zulässig, da sie keinen ausreichenden Schutz gegen elektrischen Schlag bietet.",
    example: "Historische Geräte ohne Schutzleiter (heute nicht mehr erlaubt)",
    category: "schutzkonzepte",
  },
  {
    id: "schutzklasse-1",
    title: "Schutzklasse I",
    image: "/images/schutzklasse1.png",
    description:
      "Schutzklasse I verfügt über Basisisolierung und einen Schutzleiteranschluss (PE). Alle berührbaren leitfähigen Teile sind mit dem Schutzleiter verbunden. Bei einem Isolationsfehler löst die Schutzeinrichtung (RCD/Sicherung) aus und verhindert so gefährliche Berührungsspannungen. Symbol: Erdungszeichen.",
    example: "Waschmaschine, Elektroherd, Bohrmaschine mit Metallgehäuse",
    category: "schutzkonzepte",
  },
  {
    id: "schutzklasse-2",
    title: "Schutzklasse II",
    image: "/images/schutzklasse2.png",
    description:
      "Schutzklasse II bietet Schutzisolierung durch doppelte oder verstärkte Isolierung. Ein Schutzleiteranschluss ist nicht erforderlich. Das Gerät hat meist ein Kunststoffgehäuse. Das Symbol ist ein doppeltes Quadrat. Diese Bauweise bietet hohe Sicherheit auch ohne Erdung.",
    example: "Handy-Ladegerät, Haarföhn, Akkuschrauber, viele Elektrowerkzeuge",
    category: "schutzkonzepte",
  },
  {
    id: "schutzklasse-3",
    title: "Schutzklasse III",
    image: "/images/schutzklasse3.png",
    description:
      "Schutzklasse III arbeitet mit Schutzkleinspannung (SELV/PELV). Die Betriebsspannung beträgt maximal 50V AC oder 120V DC. Die Speisung erfolgt über einen Sicherheitstransformator. Durch die niedrige Spannung besteht keine Gefahr eines elektrischen Schlags. Symbol: Drei ineinander liegende Quadrate oder 'III'.",
    example: "LED-Lampen 12V, Spielzeug, Klingeltransformatoren, Gartenbeleuchtung",
    category: "schutzkonzepte",
  },
  {
    id: "selv-pelv",
    title: "SELV / PELV",
    image: "/images/placeholder.png",
    description: "Platzhalter: SELV (Safety Extra Low Voltage) und PELV (Protective Extra Low Voltage) sind Schutzkleinspannungssysteme. SELV hat vollständig isolierte Stromquellen, PELV erlaubt einen geerdeten Pol.",
    example: "Platzhalter: Beleuchtung 12V, Spielzeug",
    category: "schutzkonzepte",
  },
  {
    id: "ip-schutzarten",
    title: "IP-Schutzarten",
    image: "/images/ip-code.png",
    description:
      "Der IP-Code (International Protection) nach DIN EN 60529 gibt den Schutzgrad eines Gehäuses an. Die erste Ziffer (0-6) bezeichnet den Schutz gegen Fremdkörper und Berührung, die zweite Ziffer (0-8) den Schutz gegen Wasser. Beispiel: IP65 bedeutet staubdicht und geschützt gegen Strahlwasser.",
    example: "IP20 (Innenbereich), IP44 (Bad), IP65 (Aussen), IP67 (Untertauchen)",
    category: "schutzkonzepte",
  },
  {
    id: "nullung",
    title: "Nullung (Schutzerdung)",
    image: "/images/placeholder.png",
    description: "Platzhalter: Nullung ist eine Schutzmaßnahme, bei der alle berührbaren leitfähigen Teile mit dem Neutralleiter (PEN) oder Schutzleiter (PE) verbunden werden.",
    example: "Platzhalter: Schutzleiterverbindung",
    category: "schutzkonzepte",
  },
  {
    id: "galvanische-trennung",
    title: "Galvanische Trennung",
    image: "/images/placeholder.png",
    description: "Platzhalter: Galvanische Trennung bedeutet die elektrische Isolation zwischen zwei Stromkreisen ohne leitende Verbindung. Übertragung erfolgt durch Transformator, Optokoppler oder Relais.",
    example: "Platzhalter: Netzteil, Transformator",
    category: "schutzkonzepte",
  },
  {
    id: "rcd",
    title: "RCD / FI-Schutzschalter",
    image: "/images/rcd.png",
    description:
      "Der RCD (Residual Current Device) oder FI-Schutzschalter schützt Personen vor elektrischem Schlag. Er vergleicht den hingehenden und rückkommenden Strom. Bei einer Differenz (Fehlerstrom) schaltet er innerhalb von Millisekunden ab. Standard-Bemessungsfehlerstrom für Personenschutz: 30mA.",
    example: "Typ A für Haushaltsgeräte, Typ B für Frequenzumrichter, Typ AC veraltet",
    category: "schutzkonzepte",
  },

  // ========== ET GESETZE ==========
  {
    id: "coulombsches-gesetz",
    title: "Coulombsches Gesetz",
    image: "/images/placeholder.png",
    description: "Platzhalter: Das Coulombsche Gesetz beschreibt die Kraft zwischen zwei elektrischen Ladungen. F = k × (q1 × q2) / r². Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an.",
    example: "Platzhalter: Kraftberechnung zwischen zwei Punktladungen",
    category: "et-gesetze",
  },
  {
    id: "ohmsches-gesetz",
    title: "Ohmsches Gesetz",
    image: "/images/ohm.png",
    description:
      "Das Ohmsche Gesetz beschreibt den Zusammenhang zwischen Spannung (U), Strom (I) und Widerstand (R). Die Formel lautet U = R × I. Der Strom ist proportional zur angelegten Spannung und umgekehrt proportional zum Widerstand. Es ist das fundamentale Gesetz der Elektrotechnik.",
    example: "U = 12V, R = 4Ω → I = 12V / 4Ω = 3A",
    category: "et-gesetze",
  },
  {
    id: "leistungsgesetz",
    title: "Elektrische Leistung",
    image: "/images/leistung.png",
    description:
      "Die elektrische Leistung P gibt an, wie viel Energie pro Zeit umgewandelt wird. Grundformel: P = U × I (Watt). Weitere Formeln: P = I² × R oder P = U² / R. Die Energie berechnet sich aus W = P × t und wird in Wattstunden (Wh) oder Kilowattstunden (kWh) angegeben.",
    example: "230V × 10A = 2300W = 2.3kW",
    category: "et-gesetze",
  },
  {
    id: "kirchhoff-strom",
    title: "Kirchhoffsches Stromgesetz",
    image: "/images/kirchhoff-strom.png",
    description:
      "Die Knotenregel besagt: Die Summe aller Ströme in einem Knotenpunkt ist null. Anders formuliert: Die Summe der zufliessenden Ströme ist gleich der Summe der abfliessenden Ströme. Dies folgt aus der Ladungserhaltung.",
    example: "I1 + I2 = I3 + I4 (bei 4 Leitern an einem Knoten)",
    category: "et-gesetze",
  },
  {
    id: "kirchhoff-spannung",
    title: "Kirchhoffsches Spannungsgesetz",
    image: "/images/kirchhoff-spannung.png",
    description:
      "Die Maschenregel besagt: Die Summe aller Spannungen in einer geschlossenen Masche ist null. Die Quellenspannungen sind gleich der Summe aller Spannungsabfälle an den Verbrauchern. Grundlage für die Berechnung von Schaltungen.",
    example: "Uq = U1 + U2 + U3 (Reihenschaltung)",
    category: "et-gesetze",
  },
  {
    id: "elektrische-arbeit",
    title: "Elektrische Arbeit",
    image: "/images/placeholder.png",
    description: "Platzhalter: Die elektrische Arbeit W ist die über die Zeit umgesetzte Energie. Formel: W = P × t = U × I × t. Einheit: Wattstunde (Wh) oder Joule (J). 1 Wh = 3600 J.",
    example: "Platzhalter: Verbrauch berechnen: 100W × 5h = 500Wh",
    category: "et-gesetze",
  },
  {
    id: "widerstandsgesetz",
    title: "Widerstandsgesetz",
    image: "/images/placeholder.png",
    description: "Platzhalter: Das Widerstandsgesetz R = ρ × l / A beschreibt den elektrischen Widerstand eines Leiters. Abhängig von Material (spezifischer Widerstand ρ), Länge l und Querschnitt A.",
    example: "Platzhalter: Widerstand eines Kupferdrahts berechnen",
    category: "et-gesetze",
  },
  {
    id: "reihen-parallelschaltung",
    title: "Reihen- und Parallelschaltung",
    image: "/images/placeholder.png",
    description: "Platzhalter: Bei Reihenschaltung addieren sich die Widerstände (Rges = R1 + R2 + ...). Bei Parallelschaltung addieren sich die Leitwerte (1/Rges = 1/R1 + 1/R2 + ...).",
    example: "Platzhalter: Drei Widerstände in Reihe/Parallel",
    category: "et-gesetze",
  },
  {
    id: "spannungs-stromteiler",
    title: "Spannungs- und Stromteiler",
    image: "/images/placeholder.png",
    description: "Platzhalter: Spannungsteiler: U1 = Uges × R1 / (R1 + R2). Stromteiler: I1 = Iges × R2 / (R1 + R2). Wichtige Grundschaltungen für Spannungs- und Stromaufteilung.",
    example: "Platzhalter: Potentiometer, Shunt-Widerstand",
    category: "et-gesetze",
  },

  // ========== SCHALTKASTEN ==========
  {
    id: "schaltschrank-aufbau",
    title: "Aufbau Schaltschrank",
    image: "/images/schaltschrank.png",
    description:
      "Ein Schaltschrank enthält alle elektrischen Komponenten übersichtlich und sicher. Aufbau von oben nach unten: Einspeisung/Hauptschalter, Sicherungen/RCD, Steuerungsebene (SPS, Relais), Leistungsebene (Schütze, FU), Klemmenleisten. Wichtig sind Kabelkanäle für ordentliche Verdrahtung.",
    example: "Rittal-Schrank, Eaton-Komponenten, Siemens SPS",
    category: "schaltkasten",
  },
  {
    id: "schuetz",
    title: "Schütz",
    image: "/images/schuetz.png",
    description:
      "Ein Schütz ist ein elektromagnetisch betätigter Schalter zum Schalten von Lastströmen. Die Spule wird mit Steuerspannung (meist 24V DC oder 230V AC) angesteuert und zieht die Kontakte an. Hauptkontakte schalten den Laststrom, Hilfskontakte dienen zur Steuerung und Rückmeldung.",
    example: "Motorschütz für Drehstrommotoren, Wendeschützschaltung",
    category: "schaltkasten",
  },
  {
    id: "selbsthaltung",
    title: "Selbsthaltung",
    image: "/images/placeholder.png",
    description: "Platzhalter: Die Selbsthaltung hält einen Schaltzustand auch nach dem Loslassen des Tasters aufrecht. Realisierung durch paralleles Rückschalten eines Hilfskontakts. Start-Taster schaltet ein, Stop-Taster schaltet aus. Wichtig für Schütz-Schaltungen und SPS-Programmierung.",
    example: "Platzhalter: Start-Stop-Schaltung mit Selbsthaltung",
    category: "schaltkasten",
  },
  {
    id: "sicherungsautomat",
    title: "Leitungsschutzschalter (LS)",
    image: "/images/ls-schalter.png",
    description:
      "Der Leitungsschutzschalter schützt Leitungen vor Überlast und Kurzschluss. Er hat einen thermischen Auslöser (Bimetall) für Überlast und einen magnetischen Auslöser für Kurzschluss. Charakteristiken: B (3-5× In), C (5-10× In), D (10-20× In). Die Auswahl richtet sich nach dem Anlaufstrom der Last.",
    example: "B16A für Steckdosen, C16A für Motoren",
    category: "schaltkasten",
  },
  {
    id: "msr",
    title: "Motorschutzrelais (MSR)",
    image: "/images/placeholder.png",
    description: "Platzhalter: Das Motorschutzrelais schützt Motoren vor Überlast, Phasenausfall und ungleicher Phasenbelastung. Bimetallauslöser reagiert auf thermische Überlast.",
    example: "Platzhalter: MSR für 3-phasigen Motor",
    category: "schaltkasten",
  },
  {
    id: "mss",
    title: "Motorschutzschalter (MSS)",
    image: "/images/placeholder.png",
    description: "Platzhalter: Der Motorschutzschalter kombiniert Leitungsschutz und Motorschutz in einem Gerät. Schutz vor Überlast, Kurzschluss und Phasenausfall.",
    example: "Platzhalter: MSS für Motorschutz mit integriertem LS",
    category: "schaltkasten",
  },
  {
    id: "softstarter",
    title: "Softstarter",
    image: "/images/placeholder.png",
    description: "Platzhalter: Ein Softstarter ermöglicht sanftes Anlaufen von Motoren durch schrittweise Spannungserhöhung. Reduziert Anlaufstrom und mechanische Belastung.",
    example: "Platzhalter: Softstarter für Pumpen, Lüfter",
    category: "schaltkasten",
  },
  {
    id: "zeitrelais",
    title: "Zeitrelais",
    image: "/images/placeholder.png",
    description: "Platzhalter: Zeitrelais schalten verzögert ein oder aus. Funktionen: Einschaltverzögerung, Ausschaltverzögerung, Wippe (Impuls), Blinken. Einstellbereich meist 0.05s bis 300h.",
    example: "Platzhalter: Treppenhauslicht, Staranlaufsteuerung",
    category: "schaltkasten",
  },
  {
    id: "taster-schalter",
    title: "Taster / Schalter",
    image: "/images/placeholder.png",
    description: "Platzhalter: Taster sind Schaltgeräte mit Rückstellung (Taste loslassen = Rückstellung). Schalter bleiben in der gewählten Stellung. Beide verfügbar als Druck-, Zug-, Wipp- oder Drehtaster.",
    example: "Platzhalter: Not-Aus-Taster, Ein/Aus-Schalter",
    category: "schaltkasten",
  },
  {
    id: "hutschiene-blockklemmen",
    title: "Hutschiene / Blockklemmen",
    image: "/images/placeholder.png",
    description: "Platzhalter: Die Hutschiene (Tragschiene) ist die Standardbefestigung für Schaltschrankkomponenten (35mm Breite). Blockklemmen ermöglichen sichere und übersichtliche Verbindungen von Leitungen.",
    example: "Platzhalter: DIN-Schiene, Klemmenleiste 10mm",
    category: "schaltkasten",
  },
  {
    id: "sicherungstrenner",
    title: "Sicherungstrenner",
    image: "/images/placeholder.png",
    description: "Platzhalter: Der Sicherungstrenner kombiniert Trenner und Sicherung in einem Gerät. Ermöglicht sicheres Trennen unter Last und Schutz vor Überstrom.",
    example: "Platzhalter: Haupttrenner im Schaltschrank",
    category: "schaltkasten",
  },
  {
    id: "netzteil",
    title: "Netzteil",
    image: "/images/placeholder.png",
    description: "Platzhalter: Netzteile wandeln die Netzspannung in die benötigte Betriebsspannung um (z.B. 230V AC → 24V DC). Wichtig für SPS, Sensoren und Aktoren.",
    example: "Platzhalter: 24V DC Netzteil 2.5A für SPS",
    category: "schaltkasten",
  },

  // ========== HALBLEITERTECHNIK ==========
  {
    id: "kondensatoren",
    title: "Kondensatoren (Elko, Folie, Keramik)",
    image: "/images/placeholder.png",
    description: "Platzhalter: Kondensatoren speichern elektrische Energie. Elko (Elektrolytkondensator) für große Kapazitäten, Folienkondensator für präzise Werte, Keramikkondensator für kleine Werte. Einheit: Farad (F).",
    example: "Platzhalter: 100µF Elko, 100nF Folie, 10pF Keramik",
    category: "halbleitertechnik",
  },
  {
    id: "ntc-ptc-ldr",
    title: "NTC / PTC / LDR",
    image: "/images/placeholder.png",
    description: "Platzhalter: NTC (Negative Temperature Coefficient) - Widerstand sinkt bei Temperaturanstieg. PTC (Positive Temperature Coefficient) - Widerstand steigt. LDR (Light Dependent Resistor) - Widerstand abhängig von Licht.",
    example: "Platzhalter: Temperatursensor, Überstromschutz, Dämmerungsschalter",
    category: "halbleitertechnik",
  },
  {
    id: "widerstandsfarbcode",
    title: "Widerstandsfarbcode",
    image: "/images/placeholder.png",
    description: "Platzhalter: Farbringe auf Widerständen codieren den Widerstandswert. 4-Ring: Wert + Toleranz. 5-Ring: genauere Werte. Farben: Schwarz=0, Braun=1, Rot=2, Orange=3, Gelb=4, Grün=5, Blau=6, Violett=7, Grau=8, Weiß=9.",
    example: "Platzhalter: Braun-Schwarz-Rot = 1kΩ, Rot-Rot-Rot-Gold = 2.2kΩ ±5%",
    category: "halbleitertechnik",
  },
  {
    id: "diode",
    title: "Diode",
    image: "/images/diode.png",
    description:
      "Eine Diode ist ein Halbleiterbauelement mit PN-Übergang, das Strom nur in eine Richtung durchlässt. In Durchlassrichtung (Anode positiver als Kathode) fliesst Strom ab ca. 0.7V (Silizium). In Sperrrichtung sperrt sie bis zur Durchbruchspannung. Die Kathode ist meist mit einem Ring markiert.",
    example: "Gleichrichterdiode 1N4007, Zenerdiode, LED, Schottky-Diode",
    category: "halbleitertechnik",
  },
  {
    id: "z-diode",
    title: "Z-Diode",
    image: "/images/placeholder.png",
    description: "Platzhalter: Die Zener-Diode nutzt den Durchbruch in Sperrrichtung zur Spannungsstabilisierung. Wird in Durchbruchrichtung betrieben, hält sie eine konstante Spannung (Zener-Spannung).",
    example: "Platzhalter: Zener 5.1V für Spannungsreferenz",
    category: "halbleitertechnik",
  },
  {
    id: "transistor-bipolar",
    title: "Bipolarer Transistor",
    image: "/images/transistor-bjt.png",
    description:
      "Der bipolare Transistor (BJT) hat drei Anschlüsse: Basis (B), Kollektor (C) und Emitter (E). Er ist stromgesteuert - ein kleiner Basisstrom steuert einen grossen Kollektorstrom. NPN: Strom fliesst von C nach E bei positiver Basis. PNP: umgekehrte Polarität. Verstärkungsfaktor β = IC/IB.",
    example: "BC547 (NPN), BC557 (PNP), als Schalter oder Verstärker",
    category: "halbleitertechnik",
  },
  {
    id: "transistor-mosfet",
    title: "MOSFET (N-Kanal, P-Kanal)",
    image: "/images/mosfet.png",
    description:
      "Der MOSFET (Metal-Oxide-Semiconductor FET) ist ein spannungsgesteuerter Transistor mit sehr hohem Eingangswiderstand. Anschlüsse: Gate (G), Drain (D), Source (S). Er schaltet praktisch verlustfrei und wird für Leistungselektronik und Digitalschaltungen verwendet. Typen: N-Kanal und P-Kanal.",
    example: "IRFZ44N für Motorsteuerung, IRF540 für Schaltnetzteile",
    category: "halbleitertechnik",
  },
  {
    id: "thyristor",
    title: "Thyristor",
    image: "/images/placeholder.png",
    description: "Platzhalter: Der Thyristor (SCR) ist ein Halbleiterbauelement mit vier Schichten (PNPN). Wird durch einen Gate-Impuls eingeschaltet und bleibt leitend bis der Strom unter den Haltestrom fällt. Verwendung für Gleichrichter und Phasenanschnittsteuerung.",
    example: "Platzhalter: Dimmer, Motorsteuerung, Wechselrichter",
    category: "halbleitertechnik",
  },
  {
    id: "ic-ic-sockel",
    title: "IC / IC-Sockel",
    image: "/images/placeholder.png",
    description: "Platzhalter: Integrierte Schaltungen (IC) enthalten komplexe Schaltungen auf einem Chip. IC-Sockel ermöglichen einfachen Austausch ohne Löten. Wichtige Typen: DIP (Dual Inline Package), SMD (Surface Mount Device).",
    example: "Platzhalter: Mikrocontroller, Logik-ICs, Speicher",
    category: "halbleitertechnik",
  },
  {
    id: "spule-transformator",
    title: "Spule / Transformator",
    image: "/images/placeholder.png",
    description: "Platzhalter: Eine Spule (Induktivität) speichert Energie im Magnetfeld. Ein Transformator überträgt Wechselspannung durch magnetische Kopplung zwischen Primär- und Sekundärwicklung. Verhältnis: U1/U2 = N1/N2.",
    example: "Platzhalter: Netztransformator, Drossel, Schaltnetzteil",
    category: "halbleitertechnik",
  },

  // ========== KABEL/LEITUNGEN/STECKER ==========
  {
    id: "leitungsbezeichnung",
    title: "Leitungsbezeichnung (NYM, NYY, H07V-U, etc.)",
    image: "/images/placeholder.png",
    description: "Platzhalter: Kabeltypen werden durch Buchstabenkombinationen bezeichnet. NYM = Mantelleitung, NYY = Erdkabel, H07V-U = Installationsleitung, H07RN-F = Gummikabel. Erste Buchstaben = Material, Zahlen = Nennspannung.",
    example: "Platzhalter: NYM-J 3×1.5mm², H07V-K 3×2.5mm²",
    category: "kabel-leitungen",
  },
  {
    id: "kabeltypen",
    title: "Kabeltypen",
    image: "/images/kabel.png",
    description:
      "Wichtige Kabeltypen in der Schweiz: TT (Installationskabel für feste Verlegung), Td (Flachkabel für Geräteanschluss), FE0 (halogenfrei für öffentliche Bauten), PUR (Polyurethan-Mantel für Schleppketten). Die Aderfarben sind: L1=Braun, L2=Schwarz, L3=Grau, N=Blau, PE=Grün-Gelb.",
    example: "TT 3×1.5mm², Td 3×0.75mm², H07RN-F (Gummikabel)",
    category: "kabel-leitungen",
  },
  {
    id: "aderkennzeichnung",
    title: "Aderkennzeichnung",
    image: "/images/placeholder.png",
    description: "Platzhalter: Adern werden durch Farben und/oder Nummern gekennzeichnet. Standard: L1=Braun, L2=Schwarz, L3=Grau, N=Blau, PE=Grün-Gelb. In Steuerungen auch nummeriert (z.B. 1-99 für Steuerkreise).",
    example: "Platzhalter: Drehstromkabel mit Aderkennzeichnung",
    category: "kabel-leitungen",
  },
  {
    id: "steckverbinder-cee",
    title: "CEE-Stecker",
    image: "/images/cee-stecker.png",
    description:
      "CEE-Industriestecker sind nach Farben codiert: Blau = 230V einphasig, Rot = 400V dreiphasig, Gelb = 110V, Grün = >50V bei 100-300Hz. Die Polzahl gibt die Anzahl der Kontakte an (z.B. 3P+N+PE = 5-polig). Sie bieten hohe Schutzart und sichere Verriegelung.",
    example: "CEE 16A 3P (blau) für Camping, CEE 32A 5P (rot) für Baustelle",
    category: "kabel-leitungen",
  },
  {
    id: "steckverbinder-m12",
    title: "M12 Steckverbinder",
    image: "/images/m12.png",
    description:
      "M12 ist der Industrie-Standard für Sensor- und Aktoranschlüsse. Verschiedene Kodierungen verhindern Fehlstecken: A-kodiert für Sensoren/Aktoren, B-kodiert für PROFIBUS, D-kodiert für Industrial Ethernet (100Mbit), X-kodiert für 10Gbit Ethernet. Schutzart bis IP67.",
    example: "M12 A-kodiert 4-polig für Näherungsschalter",
    category: "kabel-leitungen",
  },
  {
    id: "steckertypen",
    title: "Steckertypen (Schuko, CEE blau/rot, Kaltgeräte)",
    image: "/images/placeholder.png",
    description: "Platzhalter: Schuko = Schutzkontakt-Stecker (230V). CEE blau = 230V einphasig, CEE rot = 400V dreiphasig. Kaltgerätekabel = Niederspannungskabel für Geräte (z.B. PC, Monitor).",
    example: "Platzhalter: Haushaltsstecker, Industriestecker, Kaltgerätestecker",
    category: "kabel-leitungen",
  },
  {
    id: "e30-e90-brandmeldekabel",
    title: "E30/E90 Brandmeldekabel",
    image: "/images/placeholder.png",
    description: "Platzhalter: Brandmeldekabel sind spezielle Leitungen für Brandmeldeanlagen. E30 = 30 Minuten Feuerwiderstand, E90 = 90 Minuten. Halten Funktion im Brandfall aufrecht.",
    example: "Platzhalter: Brandmeldekabel für Rauchmelder, Alarmzentrale",
    category: "kabel-leitungen",
  },

  // ========== MECHANISCHE BEARBEITUNG ==========
  {
    id: "metallarten",
    title: "Metallarten",
    image: "/images/placeholder.png",
    description: "Platzhalter: Metalle werden in Eisenmetalle (Stahl, Gusseisen) und Nichteisenmetalle (Aluminium, Kupfer, Messing) eingeteilt. Wichtige Eigenschaften: Härte, Festigkeit, Korrosionsbeständigkeit, Bearbeitbarkeit.",
    example: "Platzhalter: Stahl, Edelstahl, Aluminium, Messing",
    category: "m-bearbeitung",
  },
  {
    id: "drehen",
    title: "Drehen",
    image: "/images/drehen.png",
    description:
      "Drehen ist ein spanendes Fertigungsverfahren mit rotierendem Werkstück und festem Werkzeug. Verfahren: Längsdrehen (Durchmesser), Plandrehen (Stirnfläche), Einstechen (Nuten), Gewindeschneiden. Schnittgeschwindigkeit v = π × d × n / 1000 [m/min]. Der Vorschub f wird in mm/Umdrehung angegeben.",
    example: "Welle drehen, Gewinde M10 schneiden, Planfläche bearbeiten",
    category: "m-bearbeitung",
  },
  {
    id: "fraesen",
    title: "Fräsen",
    image: "/images/fraesen.png",
    description:
      "Fräsen ist ein spanendes Verfahren mit rotierendem Werkzeug. Verfahren: Stirnfräsen (Planflächen), Umfangsfräsen (seitlich), Nutfräsen, Profilfräsen. Gleichlauffräsen ergibt bessere Oberflächen, Gegenlauffräsen ist für ältere Maschinen geeignet. CNC-Fräsen ermöglicht komplexe 3D-Formen.",
    example: "Nut 10×5mm fräsen, Tasche ausfräsen, Kontur fräsen",
    category: "m-bearbeitung",
  },
  {
    id: "bohren",
    title: "Bohren / Spiralbohrer",
    image: "/images/bohren.png",
    description:
      "Bohren erzeugt zylindrische Löcher mit rotierendem Werkzeug. Vor dem Bohren: Ankörnen und Zentrieren. Spiralbohrer haben meist 118° Spitzenwinkel. Die Drehzahl richtet sich nach Material und Durchmesser. Beim Durchbohren: Vorschub reduzieren. Kühlschmiermittel verbessert Standzeit und Oberfläche.",
    example: "Kernloch M8 = 6.8mm, Durchgangsloch 10mm",
    category: "m-bearbeitung",
  },
  {
    id: "koerner-durchschlag",
    title: "Körner / Durchschlag",
    image: "/images/placeholder.png",
    description: "Platzhalter: Der Körner (Körnerhahn) erzeugt eine kleine Vertiefung zum Ansetzen des Bohrers. Der Durchschlag erzeugt eine größere Vertiefung. Wichtig für präzises Bohren und Vermeiden von Verrutschen.",
    example: "Platzhalter: Ankörnen vor dem Bohren",
    category: "m-bearbeitung",
  },
  {
    id: "senker",
    title: "Senker",
    image: "/images/placeholder.png",
    description: "Platzhalter: Senker versenken Schraubenköpfe oder erzeugen planebene Flächen. Spitzsenker für Schraubenkopf, Plansenker für ebene Flächen. Wird nach dem Bohren eingesetzt.",
    example: "Platzhalter: Senken für Senkschrauben M8",
    category: "m-bearbeitung",
  },
  {
    id: "reibahle",
    title: "Reibahle",
    image: "/images/placeholder.png",
    description: "Platzhalter: Die Reibahle (Reibahlen) erzeugt präzise, runde Löcher mit guter Oberflächengüte. Handreibahlen für manuelle Bearbeitung, Maschinenreibahlen für Dreh-/Fräsmaschinen. Vorarbeit: Vorbohren mit geringerem Durchmesser.",
    example: "Platzhalter: Präzisionsloch H7 reiben",
    category: "m-bearbeitung",
  },
  {
    id: "gewindeschneiden",
    title: "Gewindeschneiden (innen/außen)",
    image: "/images/placeholder.png",
    description: "Platzhalter: Innengewinde werden mit Gewindebohrern (Bohrer + Schneider) geschnitten. Außengewinde mit Schneideisen oder Gewindeschneidbacken. Wichtig: Kernlochdurchmesser beachten, Schneidöl verwenden, richtige Drehzahl.",
    example: "Platzhalter: Innengewinde M8 schneiden, Außengewinde M10",
    category: "m-bearbeitung",
  },
  {
    id: "gewindearten",
    title: "Gewindearten",
    image: "/images/placeholder.png",
    description: "Platzhalter: Metrisches ISO-Gewinde (z.B. M8), Whitworth-Gewinde (z.B. 1/4\"), Trapezgewinde (Tr für Spindeln), Rundgewinde. Bezeichnung: Durchmesser × Steigung (z.B. M8×1.25). Rechts- und Linksgewinde möglich.",
    example: "Platzhalter: M8, M10×1.5, Trapezgewinde Tr16×4",
    category: "m-bearbeitung",
  },
  {
    id: "schrauben-muttern-scheiben",
    title: "Schrauben / Muttern / Scheiben",
    image: "/images/placeholder.png",
    description: "Platzhalter: Schrauben verbinden Bauteile (Sechskant, Senk-, Zylinderkopf). Muttern als Gegenstück. Scheiben verteilen Kräfte (Unterlegscheibe, Federscheibe, Sicherungsscheibe). Materialien: Stahl, Edelstahl, Kunststoff.",
    example: "Platzhalter: Sechskantschraube M8, Mutter M8, Unterlegscheibe",
    category: "m-bearbeitung",
  },

  // ========== MECHANISCHES MESSEN ==========
  {
    id: "messschieber",
    title: "Messschieber",
    image: "/images/messschieber.png",
    description:
      "Der Messschieber ist ein universelles Längenmessgerät für Aussen-, Innen- und Tiefenmessung. Messbereich meist 0-150mm. Ablesegenauigkeit: Nonius 0.02mm, digital 0.01mm. Die Messflächen müssen sauber und das Werkstück gratfrei sein. Vor der Messung Nullpunkt prüfen.",
    example: "Wellendurchmesser 25.00mm, Bohrung 10.05mm messen",
    category: "m-messen",
  },
  {
    id: "buegelmessschraube",
    title: "Bügelmessschraube",
    image: "/images/mikrometer.png",
    description:
      "Die Bügelmessschraube (Mikrometer) misst mit 0.01mm Genauigkeit. Der Messbereich beträgt 25mm (z.B. 0-25mm, 25-50mm). Die Messkraft wird durch eine Ratsche begrenzt. Vor der Messung: Nullpunkt mit Einstellmass prüfen. Für präzise Aussenmessungen unerlässlich.",
    example: "Bolzendurchmesser 12.00mm auf 0.01mm genau messen",
    category: "m-messen",
  },
  {
    id: "messuhr",
    title: "Messuhr",
    image: "/images/messuhr.png",
    description:
      "Die Messuhr zeigt Längenänderungen mit 0.01mm Genauigkeit an. Messbereich meist 10mm. Anwendung: Rundlauf, Planlauf, Ebenheit, Vergleichsmessungen. Sie wird im Stativ oder Magnethalter befestigt. Vor der Messung auf Null stellen. Für dynamische Messungen Tastspitze und Federkraft beachten.",
    example: "Rundlauf einer Welle < 0.02mm prüfen",
    category: "m-messen",
  },
  {
    id: "stahllineal",
    title: "Stahllineal",
    image: "/images/placeholder.png",
    description: "Platzhalter: Das Stahllineal ist ein präzises Längenmessgerät für gerade Kanten und Oberflächen. Genauigkeit 0.5mm. Verwendung zum Anreißen, Prüfen von Ebenheit und Geradheit.",
    example: "Platzhalter: Ebenheit prüfen, Anreißen von Linien",
    category: "m-messen",
  },
  {
    id: "haarwinkel",
    title: "Haarwinkel",
    image: "/images/placeholder.png",
    description: "Platzhalter: Der Haarwinkel (Prüfwinkel) dient zum Prüfen und Anreißen von rechten Winkeln (90°). Genauigkeit je nach Qualität. Wichtig für Werkstückausrichtung und Winkelprüfung.",
    example: "Platzhalter: Rechten Winkel prüfen, Anreißen",
    category: "m-messen",
  },
  {
    id: "radienlehre",
    title: "Radienlehre",
    image: "/images/placeholder.png",
    description: "Platzhalter: Die Radienlehre ist ein Prüfmittel zum Messen von Innen- und Außenradien. Verfügbar in verschiedenen Radien (z.B. 1mm, 2mm, 5mm). Vergleichsmessung durch Anlegen an Werkstück.",
    example: "Platzhalter: Radius einer Rundung prüfen",
    category: "m-messen",
  },
  {
    id: "grenzrachenlehre",
    title: "Grenzrachenlehre",
    image: "/images/placeholder.png",
    description: "Platzhalter: Die Grenzrachenlehre hat zwei Prüfrachen: Gutseite (G) und Ausschussseite (A). Prüft, ob Maß innerhalb der Toleranz liegt. Schnelle Gut/Schlecht-Prüfung ohne genaue Maßangabe.",
    example: "Platzhalter: Toleranzprüfung von Fertigteilen",
    category: "m-messen",
  },
  {
    id: "gewindelehrdorn",
    title: "Gewindelehrdorn",
    image: "/images/placeholder.png",
    description: "Platzhalter: Der Gewindelehrdorn (Gewindelehre) prüft Innengewinde auf Maßgenauigkeit. Verfügbar als Durchgangslehre (Gut) und Ausschusslehre (Schlecht). Wichtig für Gewindetoleranzen.",
    example: "Platzhalter: Gewinde M8 prüfen",
    category: "m-messen",
  },

  // ========== PNEUMATIK ==========
  {
    id: "pneumatik-grundlagen",
    title: "Pneumatik Grundlagen",
    image: "/images/pneumatik.png",
    description:
      "Pneumatik nutzt Druckluft (6-8 bar) zur Kraftübertragung. Eigenschaften: komprimierbar (federnd), sauber, schnell. Druckluftaufbereitung: Kompressor → Kühler → Filter → Wasserabscheider → Druckregler → Öler. Die Wartungseinheit (FRL) fasst Filter, Regler und Öler zusammen.",
    example: "Arbeitsdruck 6 bar, Volumenstrom in Nl/min",
    category: "pneumatik",
  },
  {
    id: "pneumatik-zylinder",
    title: "Pneumatikzylinder",
    image: "/images/zylinder.png",
    description:
      "Einfachwirkende Zylinder: Druckluft nur auf einer Seite, Rückstellung durch Feder. Doppeltwirkende Zylinder: Druckluft beidseitig, Kraft in beide Richtungen. Kolbenkraft F = p × A (p in N/mm², A = π×d²/4). Bei Rückhub: Ringfläche berechnen (Kolbenstange abziehen).",
    example: "Zylinder Ø63mm bei 6 bar: F = 0.6 × 3117mm² = 1870N",
    category: "pneumatik",
  },
  {
    id: "ewz",
    title: "Einfachwirkender Zylinder (EWZ)",
    image: "/images/placeholder.png",
    description: "Platzhalter: Der einfachwirkende Zylinder (EWZ) hat Druckluft nur auf einer Seite des Kolbens. Rückstellung erfolgt durch Feder. Kolbenkraft nur in eine Richtung. Geeignet für einfache Bewegungen ohne große Kräfte.",
    example: "Platzhalter: Einfachwirkender Zylinder mit Federrückstellung",
    category: "pneumatik",
  },
  {
    id: "dwz",
    title: "Doppeltwirkender Zylinder (DWZ)",
    image: "/images/placeholder.png",
    description: "Platzhalter: Der doppeltwirkende Zylinder (DWZ) hat Druckluft auf beiden Seiten des Kolbens. Kraftübertragung in beide Richtungen möglich. Höhere Kraft als EWZ. Wird mit 5/2- oder 5/3-Wegeventil gesteuert.",
    example: "Platzhalter: Doppeltwirkender Zylinder für Hub- und Senkbewegung",
    category: "pneumatik",
  },
  {
    id: "pneumatik-ventile",
    title: "Wegeventile (3/2, 5/2, 5/3)",
    image: "/images/ventile.png",
    description:
      "Wegeventile: X/Y-Wegeventil (X=Anschlüsse, Y=Stellungen). 3/2-Ventil für einfachwirkende, 5/2-Ventil für doppeltwirkende Zylinder, 5/3-Ventil mit Mittelstellung. Anschlüsse: 1(P)=Druck, 2,4(A,B)=Arbeit, 3,5(R,S)=Entlüftung, 12,14(Z,Y)=Steuerung. Betätigung: manuell, mechanisch, elektrisch (Magnetventil), pneumatisch.",
    example: "5/2-Wegeventil bistabil mit Magnetbetätigung",
    category: "pneumatik",
  },
  {
    id: "wartungseinheit",
    title: "Wartungseinheit",
    image: "/images/placeholder.png",
    description: "Platzhalter: Die Wartungseinheit (FRL = Filter-Regler-Luftöler) bereitet Druckluft auf: Filter entfernt Partikel und Wasser, Regler stellt Arbeitsdruck ein, Öler fügt Schmieröl zu. Wichtig für Lebensdauer der Komponenten.",
    example: "Platzhalter: FRL-Einheit 1/4\", Druckregler 6 bar",
    category: "pneumatik",
  },
  {
    id: "manometer",
    title: "Manometer",
    image: "/images/placeholder.png",
    description: "Platzhalter: Das Manometer (Druckmesser) zeigt den aktuellen Druck in bar an. Wichtig zur Überwachung des Systemdrucks. Anschluss meist über T-Stück oder direkt am Regler.",
    example: "Platzhalter: Manometer 0-10 bar für Drucküberwachung",
    category: "pneumatik",
  },
  {
    id: "drosselrueckschlagventil",
    title: "Drosselrückschlagventil",
    image: "/images/placeholder.png",
    description: "Platzhalter: Das Drosselrückschlagventil begrenzt die Geschwindigkeit in eine Richtung (drosselt) und lässt die andere Richtung frei. Wird zur Geschwindigkeitssteuerung von Zylindern verwendet.",
    example: "Platzhalter: Geschwindigkeitsregelung für Aus- und Einfahrbewegung",
    category: "pneumatik",
  },
  {
    id: "elektropneumatik-magnetventil",
    title: "Elektropneumatik / Magnetventil",
    image: "/images/placeholder.png",
    description: "Platzhalter: Elektropneumatik kombiniert elektrische Steuerung mit pneumatischer Kraftübertragung. Magnetventile werden elektrisch angesteuert (24V DC, 230V AC) und schalten die Druckluft. Verbindung zwischen SPS und Pneumatik.",
    example: "Platzhalter: 5/2-Wegeventil mit Magnetspule, SPS-Steuerung",
    category: "pneumatik",
  },
  {
    id: "sensoren-pneumatik",
    title: "Sensoren (induktiv, kapazitiv, Reed)",
    image: "/images/placeholder.png",
    description: "Platzhalter: Induktive Sensoren erkennen Metall durch Änderung des Magnetfelds. Kapazitive Sensoren reagieren auf alle Materialien. Reed-Schalter sind magnetisch betätigte Kontakte. Wichtig für Endlagenabfrage bei Zylindern.",
    example: "Platzhalter: Induktiver Näherungsschalter M18, Reed-Schalter für Magnetzylinder",
    category: "pneumatik",
  },

  // ========== STEUERUNGSTECHNIK/SPS ==========
  {
    id: "steuern-regeln",
    title: "Steuern vs. Regeln",
    image: "/images/steuern-regeln.png",
    description:
      "Steuern: Offener Wirkungsweg ohne Rückmeldung. Einfach aber keine Korrektur von Störungen. Regeln: Geschlossener Wirkungskreis mit Soll-Ist-Vergleich. Automatische Korrektur bei Abweichungen. Komponenten: Sollwertgeber, Regler, Stellglied, Regelstrecke, Messglied.",
    example: "Steuern: Zeitschaltuhr | Regeln: Thermostat mit Temperaturfühler",
    category: "steuerungstechnik",
  },
  {
    id: "regelkreis-reglerarten",
    title: "Regelkreis / Reglerarten (P, I, D, PI, PID)",
    image: "/images/placeholder.png",
    description: "Platzhalter: P-Regler (proportional): schnell aber bleibende Regelabweichung. I-Regler (integral): beseitigt Regelabweichung, langsam. D-Regler (differential): verbessert Dynamik. PI kombiniert P und I, PID alle drei Anteile. Wichtig für Temperatur-, Druck-, Durchflussregelung.",
    example: "Platzhalter: PID-Regler für Temperaturregelung",
    category: "steuerungstechnik",
  },
  {
    id: "sps-aufbau",
    title: "SPS Aufbau",
    image: "/images/sps.png",
    description:
      "Die SPS (Speicherprogrammierbare Steuerung) besteht aus: CPU (Programmverarbeitung), Speicher (Programm/Daten), Eingänge DI/AI (Sensoren), Ausgänge DO/AO (Aktoren), Netzteil, Kommunikation. Programmzyklus: Eingänge lesen → Programm abarbeiten → Ausgänge schreiben.",
    example: "Siemens S7-1200, Beckhoff, Allen-Bradley",
    category: "steuerungstechnik",
  },
  {
    id: "sps-programmierung",
    title: "SPS Programmiersprachen",
    image: "/images/sps-sprachen.png",
    description:
      "IEC 61131-3 definiert 5 Sprachen: KOP (Kontaktplan) - grafisch für Elektriker, FUP (Funktionsplan) - logische Bausteine, AWL (Anweisungsliste) - textbasiert assemblerartig, ST (Strukturierter Text) - Hochsprache, AS (Ablaufsprache) - für Sequenzen. TIA Portal nutzt KOP, FUP, SCL.",
    example: "KOP: Schütz-Selbsthaltung, SCL: Berechnungen",
    category: "steuerungstechnik",
  },
  {
    id: "sps-adressierung",
    title: "Adressierung (E, A, M)",
    image: "/images/placeholder.png",
    description: "Platzhalter: E = Eingang (Input), A = Ausgang (Output), M = Merker (Memory/Marker). Adressierung z.B. E0.0 (Eingang Byte 0 Bit 0), A1.5 (Ausgang Byte 1 Bit 5), M2.0 (Merker Byte 2 Bit 0). Wichtig für Variablendeklaration und Programmierung.",
    example: "Platzhalter: E1.0 = Taster, A2.0 = Schütz, M10.0 = Flag",
    category: "steuerungstechnik",
  },
  {
    id: "sps-datentypen",
    title: "Datentypen (BOOL, BYTE, WORD, INT)",
    image: "/images/placeholder.png",
    description: "Platzhalter: BOOL = Boolean (1 Bit, 0/1), BYTE = 8 Bit (0-255), WORD = 16 Bit (0-65535), INT = Integer 16 Bit (-32768 bis 32767), DINT = Double Integer 32 Bit, REAL = Fließkommazahl. Wichtig für Variablendefinition und Datenverarbeitung.",
    example: "Platzhalter: BOOL für Schalter, INT für Zähler, REAL für Temperatur",
    category: "steuerungstechnik",
  },
  {
    id: "sps-signalarten",
    title: "Signalarten (digital, analog 4–20 mA)",
    image: "/images/placeholder.png",
    description: "Platzhalter: Digitale Signale: 0/1, HIGH/LOW (24V/0V). Analoge Signale: kontinuierliche Werte, z.B. 4-20mA (Standard für Sensoren), 0-10V, 0-20mA. Digital für Schalter/Schütze, Analog für Temperatur, Druck, Durchfluss.",
    example: "Platzhalter: Digital: Taster, Schütz | Analog: Temperatursensor 4-20mA",
    category: "steuerungstechnik",
  },
  {
    id: "sps-grundverknuepfungen",
    title: "Grundverknüpfungen (UND, ODER, NICHT, XOR)",
    image: "/images/placeholder.png",
    description: "Platzhalter: UND (AND): beide Eingänge 1 → Ausgang 1. ODER (OR): mind. ein Eingang 1 → Ausgang 1. NICHT (NOT): Invertierung. XOR (Exklusiv-ODER): genau ein Eingang 1 → Ausgang 1. Grundlage der Booleschen Algebra und SPS-Programmierung.",
    example: "Platzhalter: UND für Sicherheitsschalter, ODER für zwei Taster",
    category: "steuerungstechnik",
  },
  {
    id: "sps-speicherfunktionen",
    title: "Speicherfunktionen (RS, SR)",
    image: "/images/placeholder.png",
    description: "Platzhalter: RS-Flipflop: Reset hat Priorität, SR-Flipflop: Set hat Priorität. Set-Eingang setzt Ausgang auf 1, Reset-Eingang setzt auf 0. Wichtig für Selbsthaltung, Flag-Speicher, Zustandsspeicherung. In KOP als Baustein verfügbar.",
    example: "Platzhalter: RS für Alarm-Speicher, SR für Start-Stop-Schaltung",
    category: "steuerungstechnik",
  },
  {
    id: "sps-zeitfunktionen",
    title: "Zeitfunktionen (TON, TOF, TP)",
    image: "/images/placeholder.png",
    description: "Platzhalter: TON (Timer ON Delay): Einschaltverzögerung, TOF (Timer OFF Delay): Ausschaltverzögerung, TP (Timer Pulse): Impulsgeber mit fester Zeit. Wichtig für Zeitsteuerungen, Verzögerungen, Blinkfunktionen. Zeitwert in ms oder s einstellbar.",
    example: "Platzhalter: TON für Treppenhauslicht, TOF für Nachlauf, TP für Impuls",
    category: "steuerungstechnik",
  },

  // ========== NETZSYSTEME ==========
  {
    id: "netzsysteme-grundbegriffe",
    title: "Grundbegriffe (L, N, PE, PEN)",
    image: "/images/placeholder.png",
    description: "Platzhalter: L = Leiter (Phase), N = Neutralleiter (Nullleiter), PE = Schutzleiter (Protective Earth), PEN = kombinierter Schutz- und Neutralleiter. L1, L2, L3 = Außenleiter im Drehstromnetz. Wichtig für Verständnis der Netzstruktur.",
    example: "Platzhalter: L1=Braun, L2=Schwarz, L3=Grau, N=Blau, PE=Grün-Gelb",
    category: "netzsysteme",
  },
  {
    id: "netzspannungen",
    title: "Netzspannungen (230 V / 400 V)",
    image: "/images/placeholder.png",
    description: "Platzhalter: 230V = Nennspannung zwischen Außenleiter und Neutralleiter (Wechselspannung). 400V = Nennspannung zwischen zwei Außenleitern (Drehstrom). In Europa Standard: 230V/50Hz. Wichtig für Geräteauswahl und Sicherheit.",
    example: "Platzhalter: Haushaltsgeräte 230V, Motoren 400V Drehstrom",
    category: "netzsysteme",
  },
  {
    id: "stern-dreieckschaltung",
    title: "Stern- und Dreieckschaltung",
    image: "/images/placeholder.png",
    description: "Platzhalter: Sternschaltung (Y): Wicklungsanfang verbunden am Sternpunkt, Wicklungsende an L1/L2/L3. Spannung pro Wicklung = 230V. Dreieckschaltung (Δ): Wicklungen zwischen L1-L2-L3 geschaltet. Spannung pro Wicklung = 400V. Wichtig für Motorschaltungen.",
    example: "Platzhalter: Stern-Dreieck-Anlauf für Motoren, Leistungserhöhung",
    category: "netzsysteme",
  },
  {
    id: "tn-s-system",
    title: "TN-S-System",
    image: "/images/placeholder.png",
    description: "Platzhalter: TN-S-System: PE (Schutzleiter) und N (Neutralleiter) sind durchgehend getrennt. Standard in neuen Installationen. Sternpunkt der Quelle geerdet, Körper über PE geerdet. Abschaltung durch Überstromschutz bei Körperschluss.",
    example: "Platzhalter: Moderne Hausinstallation, Industrieanlagen",
    category: "netzsysteme",
  },
  {
    id: "tn-c-system",
    title: "TN-C-System",
    image: "/images/placeholder.png",
    description: "Platzhalter: TN-C-System: PEN kombiniert Schutz- und Neutralleiter. Veraltet, nicht mehr zulässig in neuen Installationen. Problem: RCD kann nicht eingesetzt werden. In CH nur noch in Altinstallationen vorhanden.",
    example: "Platzhalter: Alte Installationen (vor 1990er Jahren)",
    category: "netzsysteme",
  },
  {
    id: "tn-c-s-system",
    title: "TN-C-S-System",
    image: "/images/tn-system.png",
    description:
      "TN-C-S-System: Kombination von TN-C und TN-S. Vom Netz bis Hausanschlusskasten (HAK) PEN, ab HAK getrennt in PE und N. In der Schweiz häufig verwendet. Ab HAK gilt TN-S, daher RCD möglich. Übergang PEN → PE+N nur einmal erlaubt.",
    example: "Hausinstallation: TN-C-S ab Hausanschluss, ab HAK TN-S",
    category: "netzsysteme",
  },
  {
    id: "tt-system",
    title: "TT-System",
    image: "/images/tt-system.png",
    description:
      "TT-System: Sternpunkt der Quelle geerdet, Körper über separaten Erder geerdet (beim Verbraucher). Hoher Fehlerschleifenwiderstand, daher RCD zwingend erforderlich für Personenschutz. Wird verwendet, wenn kein durchgehender Schutzleiter vom Netz verfügbar ist.",
    example: "Landwirtschaftliche Betriebe, ältere Installationen",
    category: "netzsysteme",
  },
  {
    id: "it-system",
    title: "IT-System",
    image: "/images/it-system.png",
    description:
      "IT-System: Sternpunkt isoliert oder hochohmig geerdet, Körper geerdet. Erster Fehler führt nicht zur Abschaltung, nur Meldung durch Isolationsüberwachung. Zweiter Fehler: Abschaltung. Vorteil: Hohe Verfügbarkeit. Anwendung in Spitälern (OP), Industrie, Bergbau.",
    example: "OP-Saal mit Isolationsüberwachung, Chemieanlage",
    category: "netzsysteme",
  },
]
