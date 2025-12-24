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
    id: "ip-schutzarten",
    title: "IP-Schutzarten",
    image: "/images/ip-code.png",
    description:
      "Der IP-Code (International Protection) nach DIN EN 60529 gibt den Schutzgrad eines Gehäuses an. Die erste Ziffer (0-6) bezeichnet den Schutz gegen Fremdkörper und Berührung, die zweite Ziffer (0-8) den Schutz gegen Wasser. Beispiel: IP65 bedeutet staubdicht und geschützt gegen Strahlwasser.",
    example: "IP20 (Innenbereich), IP44 (Bad), IP65 (Aussen), IP67 (Untertauchen)",
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
    id: "sicherungsautomat",
    title: "Leitungsschutzschalter (LS)",
    image: "/images/ls-schalter.png",
    description:
      "Der Leitungsschutzschalter schützt Leitungen vor Überlast und Kurzschluss. Er hat einen thermischen Auslöser (Bimetall) für Überlast und einen magnetischen Auslöser für Kurzschluss. Charakteristiken: B (3-5× In), C (5-10× In), D (10-20× In). Die Auswahl richtet sich nach dem Anlaufstrom der Last.",
    example: "B16A für Steckdosen, C16A für Motoren",
    category: "schaltkasten",
  },

  // ========== HALBLEITERTECHNIK ==========
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
    title: "MOSFET",
    image: "/images/mosfet.png",
    description:
      "Der MOSFET (Metal-Oxide-Semiconductor FET) ist ein spannungsgesteuerter Transistor mit sehr hohem Eingangswiderstand. Anschlüsse: Gate (G), Drain (D), Source (S). Er schaltet praktisch verlustfrei und wird für Leistungselektronik und Digitalschaltungen verwendet. Typen: N-Kanal und P-Kanal.",
    example: "IRFZ44N für Motorsteuerung, IRF540 für Schaltnetzteile",
    category: "halbleitertechnik",
  },

  // ========== KABEL/LEITUNGEN/STECKER ==========
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

  // ========== MECHANISCHE BEARBEITUNG ==========
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
    title: "Bohren",
    image: "/images/bohren.png",
    description:
      "Bohren erzeugt zylindrische Löcher mit rotierendem Werkzeug. Vor dem Bohren: Ankörnen und Zentrieren. Spiralbohrer haben meist 118° Spitzenwinkel. Die Drehzahl richtet sich nach Material und Durchmesser. Beim Durchbohren: Vorschub reduzieren. Kühlschmiermittel verbessert Standzeit und Oberfläche.",
    example: "Kernloch M8 = 6.8mm, Durchgangsloch 10mm",
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
    id: "pneumatik-ventile",
    title: "Pneumatikventile",
    image: "/images/ventile.png",
    description:
      "Wegeventile: X/Y-Wegeventil (X=Anschlüsse, Y=Stellungen). 3/2-Ventil für einfachwirkende, 5/2-Ventil für doppeltwirkende Zylinder. Anschlüsse: 1(P)=Druck, 2,4(A,B)=Arbeit, 3,5(R,S)=Entlüftung, 12,14(Z,Y)=Steuerung. Betätigung: manuell, mechanisch, elektrisch (Magnetventil), pneumatisch.",
    example: "5/2-Wegeventil bistabil mit Magnetbetätigung",
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

  // ========== NETZSYSTEME ==========
  {
    id: "tn-system",
    title: "TN-System",
    image: "/images/tn-system.png",
    description:
      "TN-System: Sternpunkt der Quelle geerdet, Körper über PE mit Sternpunkt verbunden. TN-C: PEN kombiniert (veraltet). TN-S: PE und N getrennt (Standard). TN-C-S: Kombination, in CH häufig - ab HAK wird TN-S verwendet. Abschaltung durch Überstromschutz bei Körperschluss.",
    example: "Hausinstallation: TN-C-S ab Hausanschluss",
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
