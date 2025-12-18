// Mechatronik Lexikon - Datenstruktur
// Hier werden alle Kategorien, Unterkategorien und Inhalte definiert

const lexikonData = {
    categories: [
        {
            id: "schutzkonzepte",
            name: "Schutzkonzepte",
            icon: "🛡️",
            author: "Kilian",
            description: "Schutzklassen, Schutzarten und Sicherheitskonzepte",
            subcategories: [
                {
                    id: "schutzklassen",
                    name: "Schutzklassen",
                    icon: "⚡",
                    description: "Schutzklassen 0 bis III für elektrische Betriebsmittel",
                    content: `
                        <h2>Schutzklassen</h2>
                        <p>Die Schutzklassen definieren die Art des Schutzes gegen elektrischen Schlag bei elektrischen Betriebsmitteln. Sie sind in der Norm EN 61140 festgelegt.</p>

                        <h3>Schutzklasse 0</h3>
                        <div class="warning-box">
                            <strong>⚠️ Achtung:</strong> Schutzklasse 0 ist in vielen Ländern (inkl. Schweiz) nicht mehr zulässig!
                        </div>
                        <ul>
                            <li>Nur Basisisolierung vorhanden</li>
                            <li>Kein Schutzleiteranschluss</li>
                            <li>Schutz nur durch die Umgebung (z.B. isolierter Standort)</li>
                        </ul>

                        <h3>Schutzklasse I</h3>
                        <div class="image-container">
                            <img src="images/schutzklasse1.png" alt="Schutzklasse I Symbol">
                            <p class="image-caption">Symbol für Schutzklasse I (Schutzleiter)</p>
                        </div>
                        <ul>
                            <li>Basisisolierung vorhanden</li>
                            <li><strong>Schutzleiter (PE) angeschlossen</strong></li>
                            <li>Berührbare leitfähige Teile sind mit dem Schutzleiter verbunden</li>
                            <li>Bei Isolationsfehler löst die Schutzeinrichtung (RCD/Sicherung) aus</li>
                        </ul>
                        <div class="info-box">
                            <strong>Beispiele:</strong> Waschmaschine, Elektroherd, Bohrmaschine mit Metallgehäuse
                        </div>

                        <h3>Schutzklasse II</h3>
                        <div class="image-container">
                            <img src="images/schutzklasse2.png" alt="Schutzklasse II Symbol">
                            <p class="image-caption">Symbol für Schutzklasse II (Doppeltes Quadrat)</p>
                        </div>
                        <ul>
                            <li><strong>Schutzisolierung (doppelte oder verstärkte Isolierung)</strong></li>
                            <li>Kein Schutzleiteranschluss erforderlich</li>
                            <li>Meist Kunststoffgehäuse</li>
                            <li>Symbol: Doppeltes Quadrat</li>
                        </ul>
                        <div class="info-box">
                            <strong>Beispiele:</strong> Handy-Ladegerät, Haarföhn, viele Elektrowerkzeuge
                        </div>

                        <h3>Schutzklasse III</h3>
                        <div class="image-container">
                            <img src="images/schutzklasse3.png" alt="Schutzklasse III Symbol">
                            <p class="image-caption">Symbol für Schutzklasse III (SELV/PELV)</p>
                        </div>
                        <ul>
                            <li><strong>Schutzkleinspannung (SELV/PELV)</strong></li>
                            <li>Betrieb mit Kleinspannung ≤ 50V AC oder ≤ 120V DC</li>
                            <li>Speisung über Sicherheitstransformator</li>
                            <li>Symbol: Drei ineinander liegende Quadrate</li>
                        </ul>
                        <div class="info-box">
                            <strong>Beispiele:</strong> LED-Lampen 12V, Spielzeug, Klingeltransformatoren
                        </div>

                        <h3>Übersichtstabelle</h3>
                        <table>
                            <tr>
                                <th>Klasse</th>
                                <th>Schutzart</th>
                                <th>Schutzleiter</th>
                                <th>Symbol</th>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>Basisisolierung</td>
                                <td>Nein</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>I</td>
                                <td>Basisisolierung + PE</td>
                                <td>Ja</td>
                                <td>⏚</td>
                            </tr>
                            <tr>
                                <td>II</td>
                                <td>Doppelte Isolierung</td>
                                <td>Nein</td>
                                <td>◻️◻️</td>
                            </tr>
                            <tr>
                                <td>III</td>
                                <td>Schutzkleinspannung</td>
                                <td>Nein</td>
                                <td>III</td>
                            </tr>
                        </table>
                    `,
                    images: ["schutzklasse1.png", "schutzklasse2.png", "schutzklasse3.png"]
                },
                {
                    id: "schutzarten-ip",
                    name: "IP-Schutzarten",
                    icon: "💧",
                    description: "IP-Code für Schutz gegen Fremdkörper und Wasser",
                    content: `
                        <h2>IP-Schutzarten (International Protection)</h2>
                        <p>Der IP-Code nach DIN EN 60529 gibt den Schutzgrad eines Gehäuses gegen das Eindringen von Fremdkörpern und Wasser an.</p>

                        <h3>Aufbau des IP-Codes</h3>
                        <div class="info-box">
                            <strong>Format:</strong> IP [1. Ziffer][2. Ziffer]<br>
                            <strong>Beispiel:</strong> IP65 = Staubdicht + Schutz gegen Strahlwasser
                        </div>

                        <h3>Erste Ziffer: Schutz gegen Fremdkörper</h3>
                        <table>
                            <tr>
                                <th>Ziffer</th>
                                <th>Schutz gegen</th>
                                <th>Bedeutung</th>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>Kein Schutz</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Grosse Fremdkörper</td>
                                <td>≥ 50mm (Handrücken)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mittlere Fremdkörper</td>
                                <td>≥ 12.5mm (Finger)</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Kleine Fremdkörper</td>
                                <td>≥ 2.5mm (Werkzeug)</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Kornförmige Fremdkörper</td>
                                <td>≥ 1mm (Draht)</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Staubgeschützt</td>
                                <td>Staub kann eindringen, aber nicht schädlich</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Staubdicht</td>
                                <td>Kein Staubeintritt</td>
                            </tr>
                        </table>

                        <h3>Zweite Ziffer: Schutz gegen Wasser</h3>
                        <table>
                            <tr>
                                <th>Ziffer</th>
                                <th>Schutz gegen</th>
                                <th>Prüfung</th>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>Kein Schutz</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Tropfwasser</td>
                                <td>Senkrecht fallende Tropfen</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Tropfwasser 15°</td>
                                <td>Bei 15° Neigung</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Sprühwasser</td>
                                <td>Bis 60° zur Senkrechten</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Spritzwasser</td>
                                <td>Aus allen Richtungen</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Strahlwasser</td>
                                <td>Wasserstrahl (Düse)</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Starkes Strahlwasser</td>
                                <td>Starker Wasserstrahl</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Zeitweiliges Untertauchen</td>
                                <td>30 Min, 1m Tiefe</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Dauerndes Untertauchen</td>
                                <td>Nach Herstellerangabe</td>
                            </tr>
                        </table>

                        <h3>Häufige IP-Schutzarten</h3>
                        <div class="info-box">
                            <strong>IP20:</strong> Fingerschutz, kein Wasserschutz (Innenbereich)<br>
                            <strong>IP44:</strong> Spritzwasserschutz (Badezimmer)<br>
                            <strong>IP65:</strong> Staubdicht, Strahlwasser (Aussenbereich)<br>
                            <strong>IP67:</strong> Staubdicht, untertauchbar (Industrie)<br>
                            <strong>IP68:</strong> Staubdicht, dauerhaft wasserdicht (Tauchen)
                        </div>
                    `,
                    images: []
                },
                {
                    id: "rcd",
                    name: "RCD / FI-Schutzschalter",
                    icon: "🔌",
                    description: "Fehlerstrom-Schutzeinrichtungen",
                    content: `
                        <h2>RCD (Residual Current Device) / FI-Schutzschalter</h2>
                        <p>Der RCD (Fehlerstromschutzschalter) schützt Personen vor gefährlichen Körperströmen durch Abschaltung bei Fehlerströmen.</p>

                        <h3>Funktionsprinzip</h3>
                        <ul>
                            <li>Vergleicht hingehenden und rückkommenden Strom</li>
                            <li>Bei Differenz (Fehlerstrom) → Abschaltung</li>
                            <li>Summenstromwandler erkennt die Differenz</li>
                        </ul>

                        <div class="image-container">
                            <img src="images/rcd-prinzip.png" alt="RCD Funktionsprinzip">
                            <p class="image-caption">Funktionsprinzip eines RCD</p>
                        </div>

                        <h3>Typen von RCDs</h3>
                        <table>
                            <tr>
                                <th>Typ</th>
                                <th>Erfasste Fehlerströme</th>
                                <th>Anwendung</th>
                            </tr>
                            <tr>
                                <td>Typ AC</td>
                                <td>Nur sinusförmige Wechselströme</td>
                                <td>Kaum noch verwendet</td>
                            </tr>
                            <tr>
                                <td>Typ A</td>
                                <td>+ pulsierende Gleichströme</td>
                                <td>Haushaltsgeräte</td>
                            </tr>
                            <tr>
                                <td>Typ F</td>
                                <td>+ Mischfrequenzen</td>
                                <td>Frequenzumrichter</td>
                            </tr>
                            <tr>
                                <td>Typ B</td>
                                <td>+ glatte Gleichströme</td>
                                <td>Industrie, E-Mobilität</td>
                            </tr>
                        </table>

                        <h3>Bemessungsfehlerströme</h3>
                        <ul>
                            <li><strong>10mA:</strong> Für besondere Anwendungen (medizinisch)</li>
                            <li><strong>30mA:</strong> Personenschutz (Standard)</li>
                            <li><strong>100-300mA:</strong> Brandschutz</li>
                            <li><strong>500mA-1A:</strong> Anlagenschutz</li>
                        </ul>

                        <div class="warning-box">
                            <strong>⚠️ Prüfung:</strong> RCDs müssen regelmässig geprüft werden (Prüftaste monatlich, Fachmann alle 1-4 Jahre)
                        </div>
                    `,
                    images: ["rcd-prinzip.png"]
                }
            ]
        },
        {
            id: "et-gesetze",
            name: "ET Gesetze",
            icon: "📜",
            author: "Josh",
            description: "Elektrotechnische Gesetze und Grundlagen",
            subcategories: [
                {
                    id: "ohmsches-gesetz",
                    name: "Ohmsches Gesetz",
                    icon: "Ω",
                    description: "U = R × I - Grundlegende Beziehung",
                    content: `
                        <h2>Ohmsches Gesetz</h2>
                        <p>Das Ohmsche Gesetz beschreibt den Zusammenhang zwischen Spannung, Strom und Widerstand.</p>

                        <h3>Formel</h3>
                        <div class="info-box">
                            <strong>U = R × I</strong><br><br>
                            U = Spannung in Volt [V]<br>
                            R = Widerstand in Ohm [Ω]<br>
                            I = Strom in Ampere [A]
                        </div>

                        <h3>Umgestellt</h3>
                        <table>
                            <tr>
                                <th>Gesucht</th>
                                <th>Formel</th>
                            </tr>
                            <tr>
                                <td>Spannung U</td>
                                <td>U = R × I</td>
                            </tr>
                            <tr>
                                <td>Strom I</td>
                                <td>I = U / R</td>
                            </tr>
                            <tr>
                                <td>Widerstand R</td>
                                <td>R = U / I</td>
                            </tr>
                        </table>
                    `,
                    images: []
                },
                {
                    id: "leistungsgesetz",
                    name: "Elektrische Leistung",
                    icon: "⚡",
                    description: "P = U × I - Leistungsberechnung",
                    content: `
                        <h2>Elektrische Leistung</h2>
                        <p>Die elektrische Leistung gibt an, wie viel elektrische Energie pro Zeiteinheit umgewandelt wird.</p>

                        <h3>Grundformel</h3>
                        <div class="info-box">
                            <strong>P = U × I</strong><br><br>
                            P = Leistung in Watt [W]<br>
                            U = Spannung in Volt [V]<br>
                            I = Strom in Ampere [A]
                        </div>

                        <h3>Weitere Formeln</h3>
                        <table>
                            <tr>
                                <th>Formel</th>
                                <th>Anwendung</th>
                            </tr>
                            <tr>
                                <td>P = U × I</td>
                                <td>Wenn U und I bekannt</td>
                            </tr>
                            <tr>
                                <td>P = I² × R</td>
                                <td>Wenn I und R bekannt</td>
                            </tr>
                            <tr>
                                <td>P = U² / R</td>
                                <td>Wenn U und R bekannt</td>
                            </tr>
                        </table>

                        <h3>Energie</h3>
                        <div class="info-box">
                            <strong>W = P × t</strong><br><br>
                            W = Energie in Wattstunden [Wh] oder Joule [J]<br>
                            P = Leistung in Watt [W]<br>
                            t = Zeit in Stunden [h] oder Sekunden [s]
                        </div>
                    `,
                    images: []
                }
            ]
        },
        {
            id: "schaltkasten",
            name: "Schaltkasten",
            icon: "🗄️",
            author: "Noel",
            description: "Aufbau und Verdrahtung von Schaltschränken",
            subcategories: [
                {
                    id: "aufbau",
                    name: "Aufbau Schaltschrank",
                    icon: "🔧",
                    description: "Komponenten und Anordnung",
                    content: `
                        <h2>Aufbau eines Schaltschranks</h2>
                        <p>Ein Schaltschrank enthält alle elektrischen Komponenten einer Anlage übersichtlich und sicher untergebracht.</p>

                        <h3>Hauptkomponenten</h3>
                        <ul>
                            <li><strong>Hauptschalter:</strong> Zum sicheren Trennen der Anlage</li>
                            <li><strong>Sicherungen/LS-Schalter:</strong> Überstromschutz</li>
                            <li><strong>RCD:</strong> Fehlerstromschutz</li>
                            <li><strong>Schütze:</strong> Schalten von Verbrauchern</li>
                            <li><strong>SPS:</strong> Programmierbare Steuerung</li>
                            <li><strong>Klemmen:</strong> Verdrahtungspunkte</li>
                            <li><strong>Kabelkanal:</strong> Ordentliche Kabelführung</li>
                        </ul>

                        <h3>Anordnung</h3>
                        <div class="info-box">
                            <strong>Von oben nach unten:</strong><br>
                            1. Einspeisung, Hauptschalter<br>
                            2. Sicherungen, RCD<br>
                            3. Steuerungsebene (SPS, Relais)<br>
                            4. Leistungsebene (Schütze, FU)<br>
                            5. Klemmenleisten
                        </div>
                    `,
                    images: []
                }
            ]
        },
        {
            id: "halbleitertechnik",
            name: "Halbleitertechnik",
            icon: "💡",
            author: "Niklas M",
            description: "Dioden, Transistoren und mehr",
            subcategories: [
                {
                    id: "dioden",
                    name: "Dioden",
                    icon: "➡️",
                    description: "Aufbau, Funktion und Arten",
                    content: `
                        <h2>Dioden</h2>
                        <p>Eine Diode ist ein Halbleiterbauelement, das Strom nur in eine Richtung durchlässt.</p>

                        <h3>Aufbau</h3>
                        <ul>
                            <li>PN-Übergang zwischen p- und n-dotiertem Halbleiter</li>
                            <li><strong>Anode (A):</strong> p-Seite (Plus)</li>
                            <li><strong>Kathode (K):</strong> n-Seite (Minus, markiert mit Ring)</li>
                        </ul>

                        <h3>Kennlinie</h3>
                        <ul>
                            <li><strong>Durchlassrichtung:</strong> Ab ca. 0.7V (Si) fliesst Strom</li>
                            <li><strong>Sperrrichtung:</strong> Kein Strom (bis zur Durchbruchspannung)</li>
                        </ul>

                        <h3>Diodenarten</h3>
                        <table>
                            <tr>
                                <th>Art</th>
                                <th>Funktion</th>
                            </tr>
                            <tr>
                                <td>Gleichrichterdiode</td>
                                <td>AC → DC Wandlung</td>
                            </tr>
                            <tr>
                                <td>Zenerdiode</td>
                                <td>Spannungsstabilisierung</td>
                            </tr>
                            <tr>
                                <td>LED</td>
                                <td>Lichterzeugung</td>
                            </tr>
                            <tr>
                                <td>Fotodiode</td>
                                <td>Lichtdetektion</td>
                            </tr>
                            <tr>
                                <td>Schottky-Diode</td>
                                <td>Schnelles Schalten</td>
                            </tr>
                        </table>
                    `,
                    images: []
                },
                {
                    id: "transistoren",
                    name: "Transistoren",
                    icon: "🔀",
                    description: "Bipolare und Feldeffekt-Transistoren",
                    content: `
                        <h2>Transistoren</h2>
                        <p>Transistoren sind Halbleiterbauelemente zum Schalten und Verstärken von elektrischen Signalen.</p>

                        <h3>Bipolare Transistoren (BJT)</h3>
                        <ul>
                            <li><strong>NPN:</strong> Strom fliesst von C nach E wenn B positiv</li>
                            <li><strong>PNP:</strong> Strom fliesst von E nach C wenn B negativ</li>
                            <li>Anschlüsse: Basis (B), Kollektor (C), Emitter (E)</li>
                            <li>Stromgesteuert</li>
                        </ul>

                        <h3>Feldeffekt-Transistoren (FET)</h3>
                        <ul>
                            <li><strong>MOSFET:</strong> Häufigster FET-Typ</li>
                            <li>Anschlüsse: Gate (G), Drain (D), Source (S)</li>
                            <li>Spannungsgesteuert</li>
                            <li>Sehr hoher Eingangswiderstand</li>
                        </ul>

                        <h3>Betriebsarten</h3>
                        <table>
                            <tr>
                                <th>Betriebsart</th>
                                <th>Anwendung</th>
                            </tr>
                            <tr>
                                <td>Schalterbetrieb</td>
                                <td>Digitale Schaltungen, Relais ansteuern</td>
                            </tr>
                            <tr>
                                <td>Verstärkerbetrieb</td>
                                <td>Audioverstärker, Sensorsignale</td>
                            </tr>
                        </table>
                    `,
                    images: []
                }
            ]
        },
        {
            id: "kabel-leitungen",
            name: "Kabel/Leitungen/Stecker",
            icon: "🔌",
            author: "Celine",
            description: "Kabeltypen, Leitungen und Steckverbinder",
            subcategories: [
                {
                    id: "kabeltypen",
                    name: "Kabeltypen",
                    icon: "〰️",
                    description: "Verschiedene Kabel und ihre Verwendung",
                    content: `
                        <h2>Kabeltypen</h2>

                        <h3>Wichtige Bezeichnungen (CH)</h3>
                        <table>
                            <tr>
                                <th>Typ</th>
                                <th>Beschreibung</th>
                                <th>Anwendung</th>
                            </tr>
                            <tr>
                                <td>TT</td>
                                <td>Installationskabel</td>
                                <td>Feste Verlegung</td>
                            </tr>
                            <tr>
                                <td>Td</td>
                                <td>Flachkabel</td>
                                <td>Geräteanschluss</td>
                            </tr>
                            <tr>
                                <td>FE0</td>
                                <td>Halogenfrei</td>
                                <td>Öffentliche Bauten</td>
                            </tr>
                            <tr>
                                <td>PUR</td>
                                <td>Polyurethan-Mantel</td>
                                <td>Schleppketten</td>
                            </tr>
                        </table>

                        <h3>Aderfarben</h3>
                        <ul>
                            <li><strong>L1:</strong> Braun</li>
                            <li><strong>L2:</strong> Schwarz</li>
                            <li><strong>L3:</strong> Grau</li>
                            <li><strong>N:</strong> Blau</li>
                            <li><strong>PE:</strong> Grün-Gelb</li>
                        </ul>
                    `,
                    images: []
                },
                {
                    id: "steckverbinder",
                    name: "Steckverbinder",
                    icon: "🔗",
                    description: "Industrie-Steckverbinder und Stecker",
                    content: `
                        <h2>Steckverbinder</h2>

                        <h3>CEE-Stecker (Industriestecker)</h3>
                        <table>
                            <tr>
                                <th>Farbe</th>
                                <th>Spannung</th>
                                <th>Frequenz</th>
                            </tr>
                            <tr>
                                <td>Blau</td>
                                <td>230V 1-phasig</td>
                                <td>50/60 Hz</td>
                            </tr>
                            <tr>
                                <td>Rot</td>
                                <td>400V 3-phasig</td>
                                <td>50/60 Hz</td>
                            </tr>
                            <tr>
                                <td>Gelb</td>
                                <td>110V</td>
                                <td>50/60 Hz</td>
                            </tr>
                            <tr>
                                <td>Grün</td>
                                <td>>50V</td>
                                <td>100-300 Hz</td>
                            </tr>
                        </table>

                        <h3>M12 Steckverbinder</h3>
                        <ul>
                            <li>Industrie-Standard für Sensoren/Aktoren</li>
                            <li>A-kodiert: Sensoren, Aktoren</li>
                            <li>B-kodiert: PROFIBUS</li>
                            <li>D-kodiert: Industrial Ethernet</li>
                        </ul>
                    `,
                    images: []
                }
            ]
        },
        {
            id: "m-bearbeitung",
            name: "Mechanische Bearbeitung",
            icon: "🔩",
            author: "Wenger",
            description: "Fertigungsverfahren und Werkzeuge",
            subcategories: [
                {
                    id: "drehen",
                    name: "Drehen",
                    icon: "🔄",
                    description: "Drehverfahren und Drehmaschine",
                    content: `
                        <h2>Drehen</h2>
                        <p>Drehen ist ein spanendes Fertigungsverfahren mit rotierendem Werkstück und festem Werkzeug.</p>

                        <h3>Drehverfahren</h3>
                        <ul>
                            <li><strong>Längsdrehen:</strong> Durchmesserreduzierung</li>
                            <li><strong>Plandrehen:</strong> Stirnflächenbearbeitung</li>
                            <li><strong>Einstechen:</strong> Nuten, Einstiche</li>
                            <li><strong>Gewindeschneiden:</strong> Aussen-/Innengewinde</li>
                            <li><strong>Bohren:</strong> Zentrierbohrung, Durchgangsbohrung</li>
                        </ul>

                        <h3>Schnittparameter</h3>
                        <table>
                            <tr>
                                <th>Parameter</th>
                                <th>Formel</th>
                                <th>Einheit</th>
                            </tr>
                            <tr>
                                <td>Schnittgeschwindigkeit</td>
                                <td>v = π × d × n / 1000</td>
                                <td>m/min</td>
                            </tr>
                            <tr>
                                <td>Drehzahl</td>
                                <td>n = v × 1000 / (π × d)</td>
                                <td>1/min</td>
                            </tr>
                            <tr>
                                <td>Vorschub</td>
                                <td>f</td>
                                <td>mm/U</td>
                            </tr>
                        </table>
                    `,
                    images: []
                },
                {
                    id: "fraesen",
                    name: "Fräsen",
                    icon: "⚙️",
                    description: "Fräsverfahren und Fräsmaschine",
                    content: `
                        <h2>Fräsen</h2>
                        <p>Fräsen ist ein spanendes Fertigungsverfahren mit rotierendem Werkzeug und festem/bewegtem Werkstück.</p>

                        <h3>Fräsverfahren</h3>
                        <ul>
                            <li><strong>Stirnfräsen:</strong> Plane Flächen</li>
                            <li><strong>Umfangsfräsen:</strong> Seitliche Bearbeitung</li>
                            <li><strong>Nutfräsen:</strong> Nuten und Taschen</li>
                            <li><strong>Profilfräsen:</strong> Konturen und Formen</li>
                        </ul>

                        <h3>Gleichlauf vs. Gegenlauf</h3>
                        <table>
                            <tr>
                                <th>Art</th>
                                <th>Vorteile</th>
                                <th>Nachteile</th>
                            </tr>
                            <tr>
                                <td>Gleichlauf</td>
                                <td>Bessere Oberfläche, weniger Verschleiss</td>
                                <td>Spielfreie Führung nötig</td>
                            </tr>
                            <tr>
                                <td>Gegenlauf</td>
                                <td>Für ältere Maschinen geeignet</td>
                                <td>Rauere Oberfläche</td>
                            </tr>
                        </table>
                    `,
                    images: []
                }
            ]
        },
        {
            id: "m-messen",
            name: "Mechanisches Messen/Prüfen",
            icon: "📏",
            author: "Wenger",
            description: "Messmittel und Prüfverfahren",
            subcategories: [
                {
                    id: "messmittel",
                    name: "Messmittel",
                    icon: "📐",
                    description: "Messchieber, Mikrometer, Messuhren",
                    content: `
                        <h2>Messmittel</h2>

                        <h3>Messchieber</h3>
                        <ul>
                            <li>Messbereich: 0-150mm (Standard)</li>
                            <li>Ablesegenauigkeit: 0.02mm (Nonius) / 0.01mm (digital)</li>
                            <li>Aussen-, Innen- und Tiefenmessung</li>
                        </ul>

                        <h3>Bügelmessschraube (Mikrometer)</h3>
                        <ul>
                            <li>Messbereich: 0-25mm, 25-50mm, etc.</li>
                            <li>Ablesegenauigkeit: 0.01mm</li>
                            <li>Für präzise Aussenmessungen</li>
                        </ul>

                        <h3>Messuhr</h3>
                        <ul>
                            <li>Messbereich: meist 10mm</li>
                            <li>Ablesegenauigkeit: 0.01mm</li>
                            <li>Für Rundlauf, Planlauf, Vergleichsmessungen</li>
                        </ul>

                        <h3>Messgenauigkeit</h3>
                        <div class="info-box">
                            <strong>Regel:</strong> Das Messmittel sollte mindestens 10x genauer sein als die geforderte Toleranz!
                        </div>
                    `,
                    images: []
                }
            ]
        },
        {
            id: "pneumatik",
            name: "Pneumatik",
            icon: "💨",
            author: "Lukas",
            description: "Pneumatische Antriebe und Steuerungen",
            subcategories: [
                {
                    id: "grundlagen",
                    name: "Grundlagen",
                    icon: "📖",
                    description: "Physikalische Grundlagen der Pneumatik",
                    content: `
                        <h2>Pneumatik Grundlagen</h2>
                        <p>Pneumatik nutzt Druckluft zur Kraftübertragung und Steuerung.</p>

                        <h3>Eigenschaften von Druckluft</h3>
                        <ul>
                            <li>Komprimierbar (im Gegensatz zu Hydraulik)</li>
                            <li>Arbeitsdruck meist 6-8 bar</li>
                            <li>Elastisch → federnde Bewegungen</li>
                            <li>Sauber, umweltfreundlich</li>
                        </ul>

                        <h3>Druckluftaufbereitung</h3>
                        <ol>
                            <li><strong>Kompressor:</strong> Erzeugt Druckluft</li>
                            <li><strong>Kühler:</strong> Kühlt die Luft ab</li>
                            <li><strong>Filter:</strong> Entfernt Partikel</li>
                            <li><strong>Wasserabscheider:</strong> Entfernt Kondensat</li>
                            <li><strong>Druckregler:</strong> Konstanter Arbeitsdruck</li>
                            <li><strong>Öler:</strong> Schmiert bewegte Teile (optional)</li>
                        </ol>

                        <div class="info-box">
                            <strong>Wartungseinheit:</strong> Filter + Regler + Öler = FRL-Einheit
                        </div>
                    `,
                    images: []
                },
                {
                    id: "zylinder",
                    name: "Pneumatikzylinder",
                    icon: "↔️",
                    description: "Einfach- und doppeltwirkende Zylinder",
                    content: `
                        <h2>Pneumatikzylinder</h2>

                        <h3>Einfachwirkender Zylinder</h3>
                        <ul>
                            <li>Druckluft nur auf einer Seite</li>
                            <li>Rückstellung durch Feder</li>
                            <li>Einfacher Aufbau</li>
                            <li>Symbol: Rechteck mit einer Druckluftseite</li>
                        </ul>

                        <h3>Doppeltwirkender Zylinder</h3>
                        <ul>
                            <li>Druckluft auf beiden Seiten möglich</li>
                            <li>Kraft in beide Richtungen</li>
                            <li>Häufigste Bauart</li>
                        </ul>

                        <h3>Kolbenkraft berechnen</h3>
                        <div class="info-box">
                            <strong>F = p × A</strong><br><br>
                            F = Kraft in Newton [N]<br>
                            p = Druck in N/mm² (1 bar = 0.1 N/mm²)<br>
                            A = Kolbenfläche in mm²<br><br>
                            <strong>Kolbenfläche:</strong> A = π × d² / 4
                        </div>

                        <h3>Wichtig</h3>
                        <div class="warning-box">
                            <strong>Ringfläche:</strong> Beim Rückhub ist die Kolbenstangenfläche abzuziehen!<br>
                            A_ring = π × (D² - d²) / 4
                        </div>
                    `,
                    images: []
                },
                {
                    id: "ventile",
                    name: "Pneumatikventile",
                    icon: "🎛️",
                    description: "Wegeventile und ihre Bezeichnungen",
                    content: `
                        <h2>Pneumatikventile</h2>

                        <h3>Bezeichnung</h3>
                        <div class="info-box">
                            <strong>X/Y-Wegeventil</strong><br>
                            X = Anzahl Anschlüsse<br>
                            Y = Anzahl Schaltstellungen<br><br>
                            <strong>Beispiel:</strong> 5/2-Wegeventil = 5 Anschlüsse, 2 Stellungen
                        </div>

                        <h3>Häufige Ventiltypen</h3>
                        <table>
                            <tr>
                                <th>Typ</th>
                                <th>Anwendung</th>
                            </tr>
                            <tr>
                                <td>3/2-Wegeventil</td>
                                <td>Einfachwirkende Zylinder</td>
                            </tr>
                            <tr>
                                <td>5/2-Wegeventil</td>
                                <td>Doppeltwirkende Zylinder</td>
                            </tr>
                            <tr>
                                <td>5/3-Wegeventil</td>
                                <td>Mit Mittelstellung</td>
                            </tr>
                        </table>

                        <h3>Anschlussbeschriftung</h3>
                        <ul>
                            <li><strong>1 (P):</strong> Druckluftversorgung</li>
                            <li><strong>2, 4 (A, B):</strong> Arbeitsanschlüsse</li>
                            <li><strong>3, 5 (R, S):</strong> Entlüftung</li>
                            <li><strong>12, 14 (Z, Y):</strong> Steueranschlüsse</li>
                        </ul>
                    `,
                    images: []
                }
            ]
        },
        {
            id: "steuerungstechnik",
            name: "Regelungs-/Steuerungstechnik/SPS",
            icon: "🖥️",
            author: "Andreas",
            description: "SPS-Programmierung und Steuerungskonzepte",
            subcategories: [
                {
                    id: "steuern-regeln",
                    name: "Steuern vs. Regeln",
                    icon: "🔄",
                    description: "Unterschied zwischen Steuerung und Regelung",
                    content: `
                        <h2>Steuern vs. Regeln</h2>

                        <h3>Steuern</h3>
                        <ul>
                            <li><strong>Offener Wirkungsweg</strong></li>
                            <li>Keine Rückmeldung über das Ergebnis</li>
                            <li>Einfacher aufgebaut</li>
                            <li>Störungen werden nicht ausgeglichen</li>
                        </ul>
                        <div class="info-box">
                            <strong>Beispiel:</strong> Zeitschaltuhr für Licht - schaltet nach Zeit, unabhängig davon ob es dunkel ist.
                        </div>

                        <h3>Regeln</h3>
                        <ul>
                            <li><strong>Geschlossener Wirkungskreis</strong></li>
                            <li>Kontinuierlicher Soll-Ist-Vergleich</li>
                            <li>Automatische Korrektur bei Abweichungen</li>
                            <li>Komplexer, aber genauer</li>
                        </ul>
                        <div class="info-box">
                            <strong>Beispiel:</strong> Thermostat - misst Temperatur und regelt Heizung entsprechend nach.
                        </div>

                        <h3>Regelkreis</h3>
                        <table>
                            <tr>
                                <th>Komponente</th>
                                <th>Funktion</th>
                            </tr>
                            <tr>
                                <td>Sollwertgeber</td>
                                <td>Gibt Zielwert vor</td>
                            </tr>
                            <tr>
                                <td>Regler</td>
                                <td>Vergleicht Soll/Ist, gibt Stellgrösse aus</td>
                            </tr>
                            <tr>
                                <td>Stellglied</td>
                                <td>Beeinflusst den Prozess</td>
                            </tr>
                            <tr>
                                <td>Regelstrecke</td>
                                <td>Der zu regelnde Prozess</td>
                            </tr>
                            <tr>
                                <td>Messglied</td>
                                <td>Erfasst Istwert</td>
                            </tr>
                        </table>
                    `,
                    images: []
                },
                {
                    id: "sps-grundlagen",
                    name: "SPS Grundlagen",
                    icon: "📟",
                    description: "Aufbau und Funktion einer SPS",
                    content: `
                        <h2>SPS - Speicherprogrammierbare Steuerung</h2>

                        <h3>Aufbau einer SPS</h3>
                        <ul>
                            <li><strong>CPU:</strong> Verarbeitung des Programms</li>
                            <li><strong>Speicher:</strong> Programm und Daten</li>
                            <li><strong>Eingänge (DI/AI):</strong> Sensoren, Taster</li>
                            <li><strong>Ausgänge (DO/AO):</strong> Aktoren, Lampen</li>
                            <li><strong>Netzteil:</strong> Stromversorgung</li>
                            <li><strong>Kommunikation:</strong> Feldbus, Ethernet</li>
                        </ul>

                        <h3>Programmzyklus</h3>
                        <ol>
                            <li>Eingänge lesen (Prozessabbild der Eingänge)</li>
                            <li>Programm abarbeiten</li>
                            <li>Ausgänge schreiben (Prozessabbild der Ausgänge)</li>
                        </ol>

                        <h3>Programmiersprachen (IEC 61131-3)</h3>
                        <table>
                            <tr>
                                <th>Sprache</th>
                                <th>Art</th>
                                <th>Verwendung</th>
                            </tr>
                            <tr>
                                <td>KOP (LD)</td>
                                <td>Grafisch</td>
                                <td>Kontaktplan, für Elektriker</td>
                            </tr>
                            <tr>
                                <td>FUP (FBD)</td>
                                <td>Grafisch</td>
                                <td>Funktionsbausteine</td>
                            </tr>
                            <tr>
                                <td>AWL (IL)</td>
                                <td>Textuell</td>
                                <td>Assembler-ähnlich</td>
                            </tr>
                            <tr>
                                <td>ST (SCL)</td>
                                <td>Textuell</td>
                                <td>Hochsprache</td>
                            </tr>
                            <tr>
                                <td>AS (SFC)</td>
                                <td>Grafisch</td>
                                <td>Ablaufsteuerung</td>
                            </tr>
                        </table>
                    `,
                    images: []
                }
            ]
        },
        {
            id: "netzsysteme",
            name: "Netzsysteme",
            icon: "🔌",
            author: "Offen",
            description: "TN, TT, IT Netzsysteme",
            subcategories: [
                {
                    id: "netzformen",
                    name: "Netzformen",
                    icon: "🌐",
                    description: "TN-C, TN-S, TN-C-S, TT, IT Systeme",
                    content: `
                        <h2>Netzformen</h2>
                        <p>Die Netzform beschreibt die Art der Erdverbindung und Schutzleiterführung.</p>

                        <h3>Bezeichnung</h3>
                        <div class="info-box">
                            <strong>1. Buchstabe:</strong> Verhältnis Stromquelle zur Erde<br>
                            T = direkt geerdet | I = isoliert<br><br>
                            <strong>2. Buchstabe:</strong> Verhältnis Körper zur Erde<br>
                            T = direkt geerdet | N = mit Betriebserder verbunden
                        </div>

                        <h3>TN-System</h3>
                        <p>Sternpunkt geerdet, Körper über PE mit Sternpunkt verbunden</p>
                        <ul>
                            <li><strong>TN-C:</strong> PEN kombiniert (veraltet)</li>
                            <li><strong>TN-S:</strong> PE und N getrennt (Standard)</li>
                            <li><strong>TN-C-S:</strong> Kombination (häufig in CH)</li>
                        </ul>

                        <h3>TT-System</h3>
                        <ul>
                            <li>Sternpunkt geerdet</li>
                            <li>Körper separat geerdet (Erder beim Verbraucher)</li>
                            <li>RCD zwingend erforderlich</li>
                        </ul>

                        <h3>IT-System</h3>
                        <ul>
                            <li>Sternpunkt isoliert oder hochohmig geerdet</li>
                            <li>Körper geerdet</li>
                            <li>Erster Fehler: kein Abschalten, nur Meldung</li>
                            <li>Anwendung: Spitäler, Industrie mit hoher Verfügbarkeit</li>
                        </ul>

                        <div class="warning-box">
                            <strong>In der Schweiz:</strong> TN-C-S ist die häufigste Netzform. Ab HAK (Hausanschlusskasten) wird TN-S verwendet.
                        </div>
                    `,
                    images: []
                }
            ]
        }
    ]
};

// Hilfsfunktion zum Finden einer Kategorie
function findCategory(categoryId) {
    return lexikonData.categories.find(cat => cat.id === categoryId);
}

// Hilfsfunktion zum Finden einer Unterkategorie
function findSubcategory(categoryId, subcategoryId) {
    const category = findCategory(categoryId);
    if (category) {
        return category.subcategories.find(sub => sub.id === subcategoryId);
    }
    return null;
}

// Suchfunktion
function searchLexikon(query) {
    const results = [];
    const searchTerm = query.toLowerCase();

    lexikonData.categories.forEach(category => {
        // Suche in Kategorienamen
        if (category.name.toLowerCase().includes(searchTerm)) {
            results.push({
                type: 'category',
                categoryId: category.id,
                title: category.name,
                preview: category.description,
                icon: category.icon
            });
        }

        // Suche in Unterkategorien
        category.subcategories.forEach(sub => {
            if (sub.name.toLowerCase().includes(searchTerm) ||
                sub.description.toLowerCase().includes(searchTerm) ||
                sub.content.toLowerCase().includes(searchTerm)) {
                results.push({
                    type: 'subcategory',
                    categoryId: category.id,
                    subcategoryId: sub.id,
                    title: sub.name,
                    preview: sub.description,
                    categoryName: category.name,
                    icon: sub.icon
                });
            }
        });
    });

    return results;
}
