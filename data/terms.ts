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
    title: "Schaltschrankkomponenten",
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
    title: "Kabel und Leitungen",
    icon: "🔌",
    description: "Kabeltypen, Leitungen und Steckverbinder",
    author: "Celine",
  },
  "m-bearbeitung": {
    id: "m-bearbeitung",
    title: "Metallbearbeitung",
    icon: "🔩",
    description: "Fertigungsverfahren und Werkzeuge",
    author: "Wenger",
  },
  "m-messen": {
    id: "m-messen",
    title: "Metall messen und prüfen",
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
    title: "SPS und Steuerungstechnik",
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
  // ========== 1. SCHUTZKONZEPTE ==========
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
    image: "/images/selv-pelv.png",
    description:
      "[PLATZHALTER] SELV (Safety Extra Low Voltage) und PELV (Protective Extra Low Voltage) sind Schutzkleinspannungssysteme. SELV: Sichere Trennung vom Netz, keine Erdverbindung. PELV: Wie SELV, aber mit Erdverbindung erlaubt. Grenzwerte: AC 50V / DC 120V.",
    example: "[PLATZHALTER] SELV: Spielzeug, Gartenleuchten | PELV: Maschinensteuerungen 24V",
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
    image: "/images/nullung.png",
    description:
      "[PLATZHALTER] Bei der Nullung werden alle Körper elektrischer Betriebsmittel mit dem geerdeten Neutralleiter (PEN) verbunden. Im Fehlerfall entsteht ein Kurzschluss, der die Sicherung auslöst. Veraltet und durch TN-S-System ersetzt.",
    example: "[PLATZHALTER] Alte Installationen mit klassischer Nullung (heute TN-S bevorzugt)",
    category: "schutzkonzepte",
  },
  {
    id: "galvanische-trennung",
    title: "Galvanische Trennung",
    image: "/images/galvanische-trennung.png",
    description:
      "[PLATZHALTER] Galvanische Trennung bedeutet, dass zwei Stromkreise keine direkte elektrische Verbindung haben. Die Energieübertragung erfolgt über Transformatoren, Optokoppler oder kapazitiv. Dient dem Schutz und der Störunterdrückung.",
    example: "[PLATZHALTER] Trenntransformator, Optokoppler in SPS, Schutztrennung im Bad",
    category: "schutzkonzepte",
  },

  // ========== 2. ELEKTROTECHNISCHE GESETZE ==========
  {
    id: "coulombsches-gesetz",
    title: "Coulombsches Gesetz",
    image: "/images/coulomb.png",
    description:
      "[PLATZHALTER] Das Coulombsche Gesetz beschreibt die Kraft zwischen zwei elektrischen Ladungen. F = k × (Q1 × Q2) / r². Gleichnamige Ladungen stossen sich ab, ungleichnamige ziehen sich an. Grundlage der Elektrostatik.",
    example: "[PLATZHALTER] Zwei Ladungen von je 1C im Abstand von 1m: F ≈ 9×10⁹ N",
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
    id: "leistungsgesetz",
    title: "Elektrische Leistung (Wirk-, Blind-, Scheinleistung)",
    image: "/images/leistung.png",
    description:
      "Die elektrische Leistung P gibt an, wie viel Energie pro Zeit umgewandelt wird. Wirkleistung P = U × I × cos(φ) [W]. Blindleistung Q = U × I × sin(φ) [var]. Scheinleistung S = U × I [VA]. Leistungsfaktor cos(φ) gibt das Verhältnis P/S an.",
    example: "S = 1000VA, cos(φ) = 0.8 → P = 800W, Q = 600var",
    category: "et-gesetze",
  },
  {
    id: "elektrische-arbeit",
    title: "Elektrische Arbeit",
    image: "/images/arbeit.png",
    description:
      "[PLATZHALTER] Die elektrische Arbeit W ist das Produkt aus Leistung und Zeit: W = P × t. Einheit: Wattstunde (Wh) oder Kilowattstunde (kWh). 1 kWh = 3.6 MJ. Die Stromrechnung basiert auf der verbrauchten elektrischen Arbeit.",
    example: "[PLATZHALTER] 2000W Heizung, 3 Stunden: W = 2kW × 3h = 6 kWh",
    category: "et-gesetze",
  },
  {
    id: "widerstandsgesetz",
    title: "Widerstandsgesetz",
    image: "/images/widerstandsgesetz.png",
    description:
      "[PLATZHALTER] Der Widerstand eines Leiters hängt von Material, Länge und Querschnitt ab: R = ρ × l / A. ρ = spezifischer Widerstand [Ω·mm²/m], l = Länge [m], A = Querschnitt [mm²]. Kupfer: ρ ≈ 0.0178 Ω·mm²/m.",
    example: "[PLATZHALTER] Kupferdraht 100m, 1.5mm²: R = 0.0178 × 100 / 1.5 ≈ 1.19Ω",
    category: "et-gesetze",
  },
  {
    id: "reihen-parallelschaltung",
    title: "Reihen- und Parallelschaltung",
    image: "/images/reihen-parallel.png",
    description:
      "[PLATZHALTER] Reihenschaltung: Rges = R1 + R2 + R3, gleicher Strom, Spannung teilt sich auf. Parallelschaltung: 1/Rges = 1/R1 + 1/R2 + 1/R3, gleiche Spannung, Strom teilt sich auf. Kombination: Gemischte Schaltung.",
    example: "[PLATZHALTER] Reihe: 3×10Ω = 30Ω | Parallel: 3×10Ω = 3.33Ω",
    category: "et-gesetze",
  },
  {
    id: "spannungs-stromteiler",
    title: "Spannungs- und Stromteiler",
    image: "/images/teiler.png",
    description:
      "[PLATZHALTER] Spannungsteiler (Reihenschaltung): U1 = Uges × R1/(R1+R2). Stromteiler (Parallelschaltung): I1 = Iges × R2/(R1+R2). Wichtig für Messschaltungen und Signalaufbereitung.",
    example: "[PLATZHALTER] 12V, R1=1kΩ, R2=2kΩ: U1 = 12V × 1/3 = 4V",
    category: "et-gesetze",
  },

  // ========== 3. SCHALTSCHRANKKOMPONENTEN ==========
  {
    id: "rcd",
    title: "Fehlerstromschutzschalter (FI/RCD)",
    image: "/images/rcd.png",
    description:
      "Der RCD (Residual Current Device) oder FI-Schutzschalter schützt Personen vor elektrischem Schlag. Er vergleicht den hingehenden und rückkommenden Strom. Bei einer Differenz (Fehlerstrom) schaltet er innerhalb von Millisekunden ab. Standard-Bemessungsfehlerstrom für Personenschutz: 30mA.",
    example: "Typ A für Haushaltsgeräte, Typ B für Frequenzumrichter, Typ AC veraltet",
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
    id: "motorschutzrelais",
    title: "Motorschutzrelais (MSR)",
    image: "/images/msr.png",
    description:
      "[PLATZHALTER] Das Motorschutzrelais schützt Motoren vor Überlast durch thermische Auslösung (Bimetall). Es wird in Reihe mit dem Schütz geschaltet. Einstellbar auf Motornennstrom. Bei Überlast öffnet ein Hilfskontakt und unterbricht den Steuerstromkreis.",
    example: "[PLATZHALTER] MSR eingestellt auf 4.5A für Motor 1.5kW",
    category: "schaltkasten",
  },
  {
    id: "motorschutzschalter",
    title: "Motorschutzschalter (MSS)",
    image: "/images/mss.png",
    description:
      "[PLATZHALTER] Der Motorschutzschalter kombiniert Kurzschluss- und Überlastschutz in einem Gerät. Er kann manuell ein-/ausgeschaltet werden und ersetzt Sicherung + Motorschutzrelais. Kompakte Lösung für kleinere Motoren.",
    example: "[PLATZHALTER] Siemens 3RV, Eaton PKZM für Motoren bis 15kW",
    category: "schaltkasten",
  },
  {
    id: "schuetz",
    title: "Schütz / Selbsthaltung",
    image: "/images/schuetz.png",
    description:
      "Ein Schütz ist ein elektromagnetisch betätigter Schalter zum Schalten von Lastströmen. Die Spule wird mit Steuerspannung (meist 24V DC oder 230V AC) angesteuert und zieht die Kontakte an. Selbsthaltung: Ein Hilfskontakt hält das Schütz nach Loslassen des Tasters angezogen.",
    example: "Motorschütz für Drehstrommotoren, Wendeschützschaltung",
    category: "schaltkasten",
  },
  {
    id: "softstarter",
    title: "Softstarter",
    image: "/images/softstarter.png",
    description:
      "[PLATZHALTER] Der Softstarter begrenzt den Anlaufstrom von Motoren durch Phasenanschnittsteuerung. Die Spannung wird langsam hochgefahren (Rampe). Vorteile: Geringere Netzbelastung, mechanisch schonender Anlauf. Alternative zum Frequenzumrichter für einfache Anwendungen.",
    example: "[PLATZHALTER] Siemens 3RW, ABB PSR für Pumpen und Lüfter",
    category: "schaltkasten",
  },
  {
    id: "zeitrelais",
    title: "Zeitrelais",
    image: "/images/zeitrelais.png",
    description:
      "[PLATZHALTER] Zeitrelais schalten verzögert. Typen: Anzugsverzögert (Einschaltverzögerung), Abfallverzögert (Ausschaltverzögerung), Impulsformend (Wischrelais). Einstellbereich von Millisekunden bis Stunden. Digital oder analog einstellbar.",
    example: "[PLATZHALTER] Treppenhausautomat mit 3 Minuten Nachlaufzeit",
    category: "schaltkasten",
  },
  {
    id: "taster-schalter",
    title: "Taster / Schalter",
    image: "/images/taster-schalter.png",
    description:
      "[PLATZHALTER] Taster: Federt in Ruhestellung zurück (Schliesser/Öffner). Schalter: Bleibt in geschalteter Position (rastend). NOT-AUS: Pilztaster mit Zwangsöffnung, rot auf gelb. Kontaktarten: NO (Schliesser), NC (Öffner), Wechsler.",
    example: "[PLATZHALTER] Start-Taster (NO), Stop-Taster (NC), NOT-AUS",
    category: "schaltkasten",
  },
  {
    id: "hutschiene-klemmen",
    title: "Hutschiene / Blockklemmen",
    image: "/images/hutschiene.png",
    description:
      "[PLATZHALTER] Die Hutschiene (35mm DIN-Schiene) ist der Standard-Montageträger im Schaltschrank. Reihenklemmen werden aufgeschnappt und verbinden Leitungen. Typen: Durchgangsklemmen, Trennklemmen, PE/N-Klemmen, Sicherungsklemmen. Farbcodierung beachten.",
    example: "[PLATZHALTER] Phoenix Contact, Wago, Weidmüller Klemmen",
    category: "schaltkasten",
  },
  {
    id: "sicherungstrenner",
    title: "Sicherungstrenner",
    image: "/images/sicherungstrenner.png",
    description:
      "[PLATZHALTER] Der Sicherungstrenner kombiniert NH-Sicherung mit Lasttrennschalter. Ermöglicht sicheres Wechseln der Sicherungen unter Last. Verriegelung verhindert Zugriff bei eingeschaltetem Zustand. Für Hauptverteilungen und grössere Lasten.",
    example: "[PLATZHALTER] NH-Sicherungstrenner Grösse 00/1/2/3 bis 630A",
    category: "schaltkasten",
  },
  {
    id: "netzteil",
    title: "Netzteil",
    image: "/images/netzteil.png",
    description:
      "[PLATZHALTER] Das Hutschienen-Netzteil wandelt 230V AC in Gleichspannung (meist 24V DC) für Steuerungen. Wichtige Kennwerte: Ausgangsspannung, Nennstrom, Wirkungsgrad. SELV-konform für sichere Kleinspannung. Oft mit Überlast- und Kurzschlussschutz.",
    example: "[PLATZHALTER] Mean Well, Phoenix Contact QUINT, Siemens SITOP 24V/5A",
    category: "schaltkasten",
  },
  {
    id: "schaltschrank-aufbau",
    title: "Aufbau Schaltschrank",
    image: "/images/schaltschrank.png",
    description:
      "Ein Schaltschrank enthält alle elektrischen Komponenten übersichtlich und sicher. Aufbau von oben nach unten: Einspeisung/Hauptschalter, Sicherungen/RCD, Steuerungsebene (SPS, Relais), Leistungsebene (Schütze, FU), Klemmenleisten. Wichtig sind Kabelkanäle für ordentliche Verdrahtung.",
    example: "Rittal-Schrank, Eaton-Komponenten, Siemens SPS",
    category: "schaltkasten",
  },

  // ========== 4. HALBLEITERTECHNIK ==========
  {
    id: "kondensatoren",
    title: "Kondensatoren (Elko, Folie, Keramik)",
    image: "/images/kondensatoren.png",
    description:
      "[PLATZHALTER] Kondensatoren speichern elektrische Energie im Feld. Elko: Hohe Kapazität, gepolt, für Glättung. Folienkondensator: Präzise, ungepolt, für Filter. Keramik: Klein, HF-tauglich, für Abblocken. Kapazität in Farad (F), meist µF, nF, pF.",
    example: "[PLATZHALTER] Elko 1000µF/25V, Folie 100nF, Keramik 100pF",
    category: "halbleitertechnik",
  },
  {
    id: "ntc-ptc-ldr",
    title: "NTC / PTC / LDR",
    image: "/images/ntc-ptc-ldr.png",
    description:
      "[PLATZHALTER] NTC (Heissleiter): Widerstand sinkt bei Temperaturerhöhung - für Temperaturmessung. PTC (Kaltleiter): Widerstand steigt bei Erwärmung - für Übertemperaturschutz. LDR (Fotowiderstand): Widerstand sinkt bei Licht - für Helligkeitsmessung.",
    example: "[PLATZHALTER] NTC 10kΩ@25°C für Temperaturmessung, PTC für Motorschutz",
    category: "halbleitertechnik",
  },
  {
    id: "widerstandsfarbcode",
    title: "Widerstandsfarbcode",
    image: "/images/farbcode.png",
    description:
      "[PLATZHALTER] Der Farbcode gibt den Wert von Widerständen an. 4-Ring: 1. Ziffer, 2. Ziffer, Multiplikator, Toleranz. 5-Ring: 3 Ziffern + Multiplikator + Toleranz. Farben: Schwarz=0, Braun=1, Rot=2, Orange=3, Gelb=4, Grün=5, Blau=6, Violett=7, Grau=8, Weiss=9.",
    example: "[PLATZHALTER] Braun-Schwarz-Rot-Gold = 1000Ω ±5% = 1kΩ",
    category: "halbleitertechnik",
  },
  {
    id: "diode",
    title: "Diode / Z-Diode / LED",
    image: "/images/diode.png",
    description:
      "Diode: Halbleiterbauelement, lässt Strom nur in einer Richtung durch. Flussspannung Si ~0.7V. Z-Diode: In Sperrrichtung betrieben für Spannungsstabilisierung. LED: Emittiert Licht bei Stromfluss. Kathode = Ring-Markierung.",
    example: "1N4007 (Gleichrichter), BZX79 (Z-Diode), LED mit Vorwiderstand",
    category: "halbleitertechnik",
  },
  {
    id: "transistor-bipolar",
    title: "Transistoren (NPN, PNP)",
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
      "Der MOSFET (Metal-Oxide-Semiconductor FET) ist ein spannungsgesteuerter Transistor mit sehr hohem Eingangswiderstand. Anschlüsse: Gate (G), Drain (D), Source (S). N-Kanal: Schaltet bei positiver Gate-Spannung. P-Kanal: Schaltet bei negativer Gate-Spannung. Für Leistungselektronik.",
    example: "IRFZ44N (N-Kanal) für Motorsteuerung, IRF540 für Schaltnetzteile",
    category: "halbleitertechnik",
  },
  {
    id: "thyristor",
    title: "Thyristor",
    image: "/images/thyristor.png",
    description:
      "[PLATZHALTER] Der Thyristor ist ein steuerbares Halbleiterventil. Er wird durch einen Gate-Impuls gezündet und bleibt leitend bis der Strom unter den Haltestrom sinkt. Anwendung in Phasenanschnittsteuerungen und Gleichrichtern. Anschlüsse: Anode, Kathode, Gate.",
    example: "[PLATZHALTER] Dimmer, Sanftanlauf, gesteuerte Gleichrichter",
    category: "halbleitertechnik",
  },
  {
    id: "operationsverstaerker",
    title: "Operationsverstärker",
    image: "/images/opamp.png",
    description:
      "[PLATZHALTER] Der Operationsverstärker (OpAmp) ist ein universeller Verstärker-IC. Eingänge: Invertierend (-) und Nicht-invertierend (+). Sehr hohe Verstärkung (>100'000). Grundschaltungen: Invertierer, Nicht-Invertierer, Komparator, Summierer, Integrierer.",
    example: "[PLATZHALTER] LM741, TL072, Verstärkung festgelegt durch Beschaltung",
    category: "halbleitertechnik",
  },
  {
    id: "ic-sockel",
    title: "IC / IC-Sockel",
    image: "/images/ic.png",
    description:
      "[PLATZHALTER] Integrierte Schaltungen (IC) enthalten komplette Schaltungen auf einem Chip. Gehäuseformen: DIP, SO, QFP, BGA. IC-Sockel ermöglichen den einfachen Austausch. Pin 1 ist durch Kerbe oder Punkt markiert. ESD-Schutz beim Handling beachten.",
    example: "[PLATZHALTER] NE555 Timer, 74HC-Logik, ATmega Mikrocontroller",
    category: "halbleitertechnik",
  },
  {
    id: "spule-transformator",
    title: "Spule / Transformator",
    image: "/images/trafo.png",
    description:
      "[PLATZHALTER] Spulen speichern Energie im Magnetfeld. Induktivität L in Henry (H). Transformator: Zwei gekoppelte Spulen zur Spannungsumwandlung. Übersetzungsverhältnis ü = N1/N2 = U1/U2. Trenntransformator für galvanische Trennung.",
    example: "[PLATZHALTER] Netztransformator 230V/24V, Speicherdrossel für Schaltregler",
    category: "halbleitertechnik",
  },

  // ========== 5. KABEL UND LEITUNGEN ==========
  {
    id: "leitungsbezeichnung",
    title: "Leitungsbezeichnung (NYM, NYY, H07V-U, etc.)",
    image: "/images/kabel.png",
    description:
      "Kabelbezeichnungen nach Harmonisierung: H07V-U = Harmonisiert, 450/750V, PVC, eindrähtig. NYM = Mantelleitung für feste Verlegung. NYY = Erdkabel. Schweiz: TT (Installationskabel), Td (Gerätekabel), FE0 (halogenfrei).",
    example: "NYM-J 3×1.5mm², H07V-K 1×2.5mm², TT 3×1.5mm²",
    category: "kabel-leitungen",
  },
  {
    id: "aderkennzeichnung",
    title: "Aderkennzeichnung",
    image: "/images/aderkennzeichnung.png",
    description:
      "[PLATZHALTER] Standardfarben nach NIN/VDE: L1=Braun, L2=Schwarz, L3=Grau, N=Blau, PE=Grün-Gelb. Steuerungsadern oft Rot, Orange, Weiss. Steuerstromkreise: Schwarz für Hin-, Blau für Rückleiter. Nummerierung bei vielen Adern.",
    example: "[PLATZHALTER] PE immer Grün-Gelb, N immer Blau, L variiert nach System",
    category: "kabel-leitungen",
  },
  {
    id: "steckertypen",
    title: "Steckertypen (Schuko, CEE, Kaltgeräte)",
    image: "/images/stecker.png",
    description:
      "[PLATZHALTER] Schuko (Typ F): 230V/16A mit Schutzkontakt, Deutschland/Schweiz-Adapter nötig. Schweiz Typ J: 3-polig. CEE: Industriestecker, blau=230V, rot=400V. Kaltgerätestecker (IEC C13/C14): Für IT-Geräte bis 10A.",
    example: "[PLATZHALTER] Schuko für Haushaltsgeräte, CEE 16A rot für Baustrom",
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
    id: "e30-e90-kabel",
    title: "E30/E90 Brandmeldekabel",
    image: "/images/e30-e90.png",
    description:
      "[PLATZHALTER] Funktionserhalt-Kabel für Sicherheitsanlagen. E30: 30 Minuten Funktionserhalt im Brandfall. E90: 90 Minuten. Für Brandmelde-, Sprinkler-, Notbeleuchtungs- und Rauchabzugsanlagen. Spezielle Verlegung und Befestigung erforderlich.",
    example: "[PLATZHALTER] JE-H(St)H E30 für Brandmeldeanlage, NHXH E90",
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

  // ========== 6. METALLBEARBEITUNG ==========
  {
    id: "metallarten",
    title: "Metallarten",
    image: "/images/metallarten.png",
    description:
      "[PLATZHALTER] Eisen und Stahl: Baustahl (S235), Edelstahl (V2A/V4A), Werkzeugstahl. Nichteisenmetalle: Aluminium (leicht, korrosionsbeständig), Kupfer (gute Leitfähigkeit), Messing (Cu-Zn Legierung). Unterscheidung nach Dichte, Härte, Leitfähigkeit.",
    example: "[PLATZHALTER] Stahl für Maschinenbau, Alu für Gehäuse, Kupfer für Stromschienen",
    category: "m-bearbeitung",
  },
  {
    id: "bohren",
    title: "Bohren / Spiralbohrer",
    image: "/images/bohren.png",
    description:
      "Bohren erzeugt zylindrische Löcher mit rotierendem Werkzeug. Spiralbohrer: 118° Spitzenwinkel für Stahl, 130° für Alu. HSS für normale Stähle, HSS-Co für Edelstahl. Vor dem Bohren ankörnen. Drehzahl: n = vc × 1000 / (π × d).",
    example: "Kernloch M8 = 6.8mm, Durchgangsloch 10mm",
    category: "m-bearbeitung",
  },
  {
    id: "koerner-durchschlag",
    title: "Körner / Durchschlag",
    image: "/images/koerner.png",
    description:
      "[PLATZHALTER] Körner: Markiert Bohrstellen mit einer Vertiefung (Zentrierhilfe). Spitzenwinkel 60° oder 90°. Durchschlag: Treibt Stifte aus Bohrungen. Zylindrisch mit flacher Spitze. Beide werden mit dem Hammer geschlagen.",
    example: "[PLATZHALTER] Ankörnen vor dem Bohren, Passstifte mit Durchschlag entfernen",
    category: "m-bearbeitung",
  },
  {
    id: "senker",
    title: "Senker",
    image: "/images/senker.png",
    description:
      "[PLATZHALTER] Senker erweitern Bohrungen oder erzeugen Formen. Kegelsenker (90°): Für Senkschrauben. Flachsenker: Für Zylinderkopfschrauben. Zapfensenker: Kombiniert Bohren und Senken. Entgrater: Entfernt Grate an Bohrlochkanten.",
    example: "[PLATZHALTER] 90° Kegelsenker für M6 Senkkopfschraube",
    category: "m-bearbeitung",
  },
  {
    id: "reibahle",
    title: "Reibahle",
    image: "/images/reibahle.png",
    description:
      "[PLATZHALTER] Die Reibahle erzeugt passgenaue Bohrungen mit hoher Oberflächengüte. Aufmass zum Vorbohren: ca. 0.2mm. Handreibahle: Vierkant für Windeisen. Maschinenreibahle: Zylindrischer Schaft. Toleranzen bis H7 erreichbar.",
    example: "[PLATZHALTER] Bohrung 10mm reiben: Vorbohren 9.8mm, Reiben auf 10H7",
    category: "m-bearbeitung",
  },
  {
    id: "gewindeschneiden",
    title: "Gewindeschneiden (innen/außen)",
    image: "/images/gewinde.png",
    description:
      "[PLATZHALTER] Innengewinde: Mit Gewindebohrer in Kernloch schneiden. Satz aus Vor-, Mittel-, Fertigschneider. Aussengewinde: Mit Schneideisen auf Rundmaterial. Kernloch = Nenndurchmesser × 0.8 (Faustregel). Schneidöl verwenden.",
    example: "[PLATZHALTER] M8 Innengewinde: Kernloch 6.8mm, dann Gewindebohrer",
    category: "m-bearbeitung",
  },
  {
    id: "gewindearten",
    title: "Gewindearten",
    image: "/images/gewindearten.png",
    description:
      "[PLATZHALTER] Metrisches Gewinde (M): Standard in Europa, 60° Flankenwinkel. Metrisch fein (MF): Kleinere Steigung. Whitworth (BSW/BSP): Zollgewinde, 55° Flanken. UNC/UNF: Amerikanisches Zollgewinde, 60° Flanken. Trapezgewinde für Bewegungen.",
    example: "[PLATZHALTER] M8×1.25 (Regelgewinde), M8×1 (Feingewinde), G1/2 (Rohrgewinde)",
    category: "m-bearbeitung",
  },
  {
    id: "schrauben-muttern",
    title: "Schrauben / Muttern / Scheiben",
    image: "/images/schrauben.png",
    description:
      "[PLATZHALTER] Schrauben: Zylinderkopf (Inbus), Sechskant, Senkkopf. Festigkeitsklassen: 8.8, 10.9, 12.9. Muttern: Sechskant, selbstsichernd (Nylon), Flügelmutter. Scheiben: Unterlegscheibe, Federring, Zahnscheibe. Material: Stahl verzinkt, Edelstahl A2/A4.",
    example: "[PLATZHALTER] Zylinderschraube M8×30 DIN 912, 8.8 verzinkt",
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

  // ========== 7. METALL MESSEN UND PRÜFEN ==========
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
    id: "stahllineal",
    title: "Stahllineal",
    image: "/images/stahllineal.png",
    description:
      "[PLATZHALTER] Das Stahllineal ist ein Längenmessgerät aus gehärtetem Stahl mit mm-Teilung. Genauigkeit ca. 0.5mm. Auch als Anschlag und Richtlineal verwendbar. Längen: 150mm bis 1000mm. Massverkörperung, nicht für Präzisionsmessungen.",
    example: "[PLATZHALTER] Länge eines Werkstücks grob messen, Linien anreissen",
    category: "m-messen",
  },
  {
    id: "haarwinkel",
    title: "Haarwinkel",
    image: "/images/haarwinkel.png",
    description:
      "[PLATZHALTER] Der Haarwinkel (Anschlagwinkel) prüft rechte Winkel (90°). Sehr dünn geschliffene Anschlagkante. Lichtspaltmethode: Winkel gegen Licht halten - Spalt zeigt Abweichung an. Auch zum Anreissen von rechten Winkeln verwendbar.",
    example: "[PLATZHALTER] Rechtwinkligkeit einer Fläche zur Bezugskante prüfen",
    category: "m-messen",
  },
  {
    id: "radienlehre",
    title: "Radienlehre",
    image: "/images/radienlehre.png",
    description:
      "[PLATZHALTER] Die Radienlehre ist ein Satz von Schablonen mit verschiedenen Radien (konkav und konvex). Zum Prüfen von Innen- und Aussenradien durch Anlegen. Abweichung durch Lichtspalt erkennbar. Üblicher Bereich: R1-R7mm, R7.5-R15mm.",
    example: "[PLATZHALTER] Kantenradius R3 an einem Frästeil prüfen",
    category: "m-messen",
  },
  {
    id: "grenzrachenlehre",
    title: "Grenzrachenlehre",
    image: "/images/rachenlehre.png",
    description:
      "[PLATZHALTER] Die Grenzrachenlehre prüft Aussendurchmesser auf Einhaltung der Toleranz. Gut-Seite (GO): Muss passen. Ausschuss-Seite (NO GO): Darf nicht passen. Keine Messwerte, nur Gut/Schlecht-Prüfung. Für Serienprüfung von Wellen.",
    example: "[PLATZHALTER] Welle Ø20h7: GO passt, NO GO passt nicht = i.O.",
    category: "m-messen",
  },
  {
    id: "gewindelehrdorn",
    title: "Gewindelehrdorn",
    image: "/images/gewindelehrdorn.png",
    description:
      "[PLATZHALTER] Der Gewindelehrdorn prüft Innengewinde auf Masshaltigkeit. Gut-Seite: Muss durchgehen. Ausschuss-Seite: Maximal 2 Umdrehungen. Prüft Flanken- und Kerndurchmesser. Für jede Gewindegrösse separater Lehrdorn.",
    example: "[PLATZHALTER] M8-Gewinde prüfen: GO dreht durch, NO GO stoppt",
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

  // ========== 8. PNEUMATIK ==========
  {
    id: "pneumatik-ventile",
    title: "Wegeventile (3/2, 5/2, 5/3)",
    image: "/images/ventile.png",
    description:
      "Wegeventile steuern Luftstrom. Bezeichnung X/Y: X=Anschlüsse, Y=Schaltstellungen. 3/2: Für einfachwirkende Zylinder. 5/2: Für doppeltwirkende Zylinder. 5/3: Mit Mittelstellung (drucklos, gesperrt, etc.). Anschlüsse: 1(P), 2(A), 3(R), 4(B), 5(S).",
    example: "5/2-Wegeventil bistabil mit Magnetbetätigung",
    category: "pneumatik",
  },
  {
    id: "ewz",
    title: "Einfachwirkender Zylinder (EWZ)",
    image: "/images/ewz.png",
    description:
      "[PLATZHALTER] Der einfachwirkende Zylinder hat nur einen Druckluftanschluss. Ausfahren durch Druckluft, Einfahren durch Feder (oder umgekehrt). Einfacher Aufbau, günstiger. Begrenzte Hublänge wegen Federraum. Symbol: Ein Pfeil + Feder.",
    example: "[PLATZHALTER] Spannen, Stempeln, Auswerfen mit Federrückstellung",
    category: "pneumatik",
  },
  {
    id: "dwz",
    title: "Doppeltwirkender Zylinder (DWZ)",
    image: "/images/dwz.png",
    description:
      "[PLATZHALTER] Der doppeltwirkende Zylinder hat zwei Druckluftanschlüsse. Kraft in beide Richtungen, aber Rückhubkraft kleiner (Kolbenstange). Grössere Hublängen möglich. Benötigt 5/2- oder 5/3-Wegeventil zur Ansteuerung.",
    example: "[PLATZHALTER] Linearantriebe, Pressen, Schieber mit Krafthub",
    category: "pneumatik",
  },
  {
    id: "wartungseinheit",
    title: "Wartungseinheit",
    image: "/images/wartungseinheit.png",
    description:
      "[PLATZHALTER] Die Wartungseinheit (FRL) bereitet Druckluft auf. Filter: Entfernt Partikel und Kondensat. Regler: Stellt Arbeitsdruck ein (Manometer). Öler: Fügt Schmiermittel hinzu (optional). Vor jeder Pneumatikanlage installieren.",
    example: "[PLATZHALTER] Festo, SMC Wartungseinheit für 6 bar Arbeitsdruck",
    category: "pneumatik",
  },
  {
    id: "manometer",
    title: "Manometer",
    image: "/images/manometer.png",
    description:
      "[PLATZHALTER] Das Manometer zeigt den Druck an. Rohrfedermanometer (Bourdon): Mechanisch, robust. Digitalmanometer: Genauer, mit Schaltausgängen. Einheit: bar oder Pa (1 bar = 100'000 Pa). Messbereich passend zum Arbeitsdruck wählen.",
    example: "[PLATZHALTER] Anzeige Arbeitsdruck 6 bar an der Wartungseinheit",
    category: "pneumatik",
  },
  {
    id: "drosselrueckschlagventil",
    title: "Drosselrückschlagventil",
    image: "/images/drossel.png",
    description:
      "[PLATZHALTER] Das Drosselrückschlagventil regelt die Geschwindigkeit von Zylindern. In eine Richtung gedrosselt (einstellbar), in die andere frei (Rückschlag). Abluftdrosselung: Am Zylinderanschluss montieren. Symbol: Drossel + Rückschlagventil.",
    example: "[PLATZHALTER] Langsames Ausfahren, schnelles Einfahren eines Zylinders",
    category: "pneumatik",
  },
  {
    id: "elektropneumatik",
    title: "Elektropneumatik / Magnetventil",
    image: "/images/magnetventil.png",
    description:
      "[PLATZHALTER] Magnetventile werden elektrisch angesteuert (24V DC oder 230V AC). Die Spule zieht den Ventilkolben. Monostabil: Federrückstellung. Bistabil: Zwei Spulen, bleibt in Endlage. Ermöglicht SPS-Steuerung von Pneumatik.",
    example: "[PLATZHALTER] Festo VUVG, SMC SY-Ventile für SPS-Ansteuerung",
    category: "pneumatik",
  },
  {
    id: "sensoren-induktiv-kapazitiv",
    title: "Sensoren (induktiv, kapazitiv, Reed)",
    image: "/images/sensoren.png",
    description:
      "[PLATZHALTER] Induktiv: Erkennt Metall, berührungslos. Kapazitiv: Erkennt alle Materialien (auch Füllstand). Reed-Kontakt: Magnetisch betätigt, für Zylinderabfrage. Anschluss: 3-Draht (BN=+, BU=-, BK=Signal) oder 2-Draht. PNP/NPN beachten.",
    example: "[PLATZHALTER] Induktiv für Metallteile, Reed am Zylinder für Endlage",
    category: "pneumatik",
  },
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

  // ========== 9. SPS UND STEUERUNGSTECHNIK ==========
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
    image: "/images/regelkreis.png",
    description:
      "[PLATZHALTER] P-Regler: Proportional, schnell, bleibende Regelabweichung. I-Regler: Integrierend, keine Regelabweichung, langsam. D-Regler: Differenzierend, reagiert auf Änderung. PI: Kombination für Praxis. PID: Optimal für viele Anwendungen. Einstellung nach Ziegler-Nichols.",
    example: "[PLATZHALTER] Temperaturregelung mit PID, Drehzahlregelung mit PI",
    category: "steuerungstechnik",
  },
  {
    id: "sps-aufbau",
    title: "SPS-Aufbau",
    image: "/images/sps.png",
    description:
      "Die SPS (Speicherprogrammierbare Steuerung) besteht aus: CPU (Programmverarbeitung), Speicher (Programm/Daten), Eingänge DI/AI (Sensoren), Ausgänge DO/AO (Aktoren), Netzteil, Kommunikation. Programmzyklus: Eingänge lesen → Programm abarbeiten → Ausgänge schreiben.",
    example: "Siemens S7-1200, Beckhoff, Allen-Bradley",
    category: "steuerungstechnik",
  },
  {
    id: "sps-adressierung",
    title: "Adressierung (E, A, M)",
    image: "/images/adressierung.png",
    description:
      "[PLATZHALTER] Siemens-Notation: E = Eingang (I), A = Ausgang (Q), M = Merker. Adressformat: Bereich + Byte.Bit (z.B. E0.0 = Eingang Byte 0, Bit 0). Wortadressierung: EW0 = Eingangswort ab Byte 0. Datenbaustein: DB1.DBX0.0.",
    example: "[PLATZHALTER] E0.0 (Taster), A0.0 (Lampe), M0.0 (Merker), MW10 (Merkerwort)",
    category: "steuerungstechnik",
  },
  {
    id: "sps-datentypen",
    title: "Datentypen (BOOL, BYTE, WORD, INT)",
    image: "/images/datentypen.png",
    description:
      "[PLATZHALTER] BOOL: 1 Bit (TRUE/FALSE). BYTE: 8 Bit (0-255). WORD: 16 Bit (0-65535). DWORD: 32 Bit. INT: 16 Bit mit Vorzeichen (-32768 bis +32767). DINT: 32 Bit mit Vorzeichen. REAL: Gleitkommazahl. STRING: Zeichenkette.",
    example: "[PLATZHALTER] Taster = BOOL, Analogwert = INT, Temperatur = REAL",
    category: "steuerungstechnik",
  },
  {
    id: "signalarten",
    title: "Signalarten (digital, analog 4–20 mA)",
    image: "/images/signale.png",
    description:
      "[PLATZHALTER] Digital: Ein/Aus (0V/24V DC). Analog Spannung: 0-10V oder ±10V. Analog Strom: 4-20mA (industriestandard, drahtbruchsicher da 0mA = Fehler). Sensoren liefern Signale, Aktoren empfangen Signale. Auflösung: 12 Bit = 4096 Stufen.",
    example: "[PLATZHALTER] Drucksensor 4-20mA für 0-10 bar, Ventil 0-10V",
    category: "steuerungstechnik",
  },
  {
    id: "grundverknuepfungen",
    title: "Grundverknüpfungen (UND, ODER, NICHT, XOR)",
    image: "/images/logik.png",
    description:
      "[PLATZHALTER] UND (&): Ausgang 1 wenn alle Eingänge 1. ODER (≥1): Ausgang 1 wenn mindestens ein Eingang 1. NICHT: Invertiert das Signal. XOR (=1): Ausgang 1 wenn genau ein Eingang 1. NAND, NOR: Negierte Verknüpfungen.",
    example: "[PLATZHALTER] Start UND Freigabe = Motor Ein, NOT-AUS = NICHT-Verknüpfung",
    category: "steuerungstechnik",
  },
  {
    id: "speicherfunktionen",
    title: "Speicherfunktionen (RS, SR)",
    image: "/images/flipflop.png",
    description:
      "[PLATZHALTER] RS-Flipflop (Rücksetzdominant): Reset hat Vorrang bei gleichzeitigem S und R. SR-Flipflop (Setzdominant): Set hat Vorrang. Speichert Zustand bis zum Rücksetzen. In SPS: Set-Coil (S), Reset-Coil (R) oder SR/RS-Baustein.",
    example: "[PLATZHALTER] Selbsthaltung mit RS: Start setzt, Stop rücksetzt",
    category: "steuerungstechnik",
  },
  {
    id: "zeitfunktionen",
    title: "Zeitfunktionen (TON, TOF, TP)",
    image: "/images/timer.png",
    description:
      "[PLATZHALTER] TON (Einschaltverzögerung): Ausgang verzögert Ein. TOF (Ausschaltverzögerung): Ausgang verzögert Aus. TP (Impuls): Ausgang für definierte Zeit. Zeitbasis: ms oder s. In TIA Portal: TON, TOF, TP Bausteine mit PT (Preset Time).",
    example: "[PLATZHALTER] TON 3s für Stern-Dreieck, TOF 5min für Nachlauf Lüfter",
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

  // ========== 10. NETZSYSTEME ==========
  {
    id: "grundbegriffe-netz",
    title: "Grundbegriffe (L, N, PE, PEN)",
    image: "/images/grundbegriffe.png",
    description:
      "[PLATZHALTER] L (Line/Aussenleiter): Stromführender Leiter, L1/L2/L3 bei Drehstrom. N (Neutral): Rückleiter zum Sternpunkt. PE (Protective Earth): Schutzleiter, grün-gelb. PEN: Kombinierter Schutz- und Neutralleiter (TN-C). Farben: L=braun/schwarz/grau, N=blau, PE=grün-gelb.",
    example: "[PLATZHALTER] 230V zwischen L und N, 400V zwischen L1 und L2",
    category: "netzsysteme",
  },
  {
    id: "netzspannungen",
    title: "Netzspannungen (230 V / 400 V)",
    image: "/images/netzspannung.png",
    description:
      "[PLATZHALTER] 230V: Spannung L-N (Strangspannung bei Stern). 400V: Spannung L-L (Verkettete Spannung). Verhältnis: 400V = 230V × √3. Frequenz: 50Hz (Europa), 60Hz (USA). Nennspannung mit Toleranz ±10%.",
    example: "[PLATZHALTER] Steckdose 230V einphasig, CEE-Stecker 400V dreiphasig",
    category: "netzsysteme",
  },
  {
    id: "stern-dreieck",
    title: "Stern- und Dreieckschaltung",
    image: "/images/stern-dreieck.png",
    description:
      "[PLATZHALTER] Sternschaltung (Y): Stränge an Sternpunkt verbunden. UStrang = UNetz/√3, IStrang = INetz. Dreieckschaltung (Δ): Stränge zwischen Aussenleitern. UStrang = UNetz, IStrang = INetz/√3. Stern-Dreieck-Anlauf reduziert Anlaufstrom auf 1/3.",
    example: "[PLATZHALTER] Motor 400V/690V: 400V-Netz = Dreieck, 690V-Netz = Stern",
    category: "netzsysteme",
  },
  {
    id: "tn-s-system",
    title: "TN-S-System",
    image: "/images/tn-s.png",
    description:
      "[PLATZHALTER] TN-S: Schutzleiter (PE) und Neutralleiter (N) sind im gesamten Netz getrennt. Sicherste TN-Variante, keine vagabundierenden Ströme auf PE. Standard für Neuinstallationen. 5-Leiter-System (L1, L2, L3, N, PE).",
    example: "[PLATZHALTER] Moderne Gebäudeinstallation, IT-Bereiche",
    category: "netzsysteme",
  },
  {
    id: "tn-c-system",
    title: "TN-C-System",
    image: "/images/tn-c.png",
    description:
      "[PLATZHALTER] TN-C: PE und N sind als PEN kombiniert. Nur in festen Installationen >10mm² Cu erlaubt. Älteres System, heute nur noch im Versorgungsnetz. 4-Leiter-System (L1, L2, L3, PEN). Potentialausgleich kritisch.",
    example: "[PLATZHALTER] Ältere Industrieanlagen, Versorgungsnetz vor HAK",
    category: "netzsysteme",
  },
  {
    id: "tn-c-s-system",
    title: "TN-C-S-System",
    image: "/images/tn-c-s.png",
    description:
      "[PLATZHALTER] TN-C-S: Kombination aus TN-C (Versorgung) und TN-S (Verbraucher). Am Hausanschlusskasten wird PEN in PE und N aufgeteilt. Ab dort nur noch TN-S. Häufigste Installation in Wohngebäuden. Aufteilungspunkt kritisch.",
    example: "[PLATZHALTER] Hausanschluss: PEN kommt an, PE und N gehen weiter",
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
