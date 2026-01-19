# 4. Halbleitertechnik

Dioden, Transistoren und Halbleiterbauelemente

## 4.1 Kondensatoren

**Kaufkriterien:** Kapazität (F, µF, nF, pF), maximale Spannungsfestigkeit (V), Bauform, Temperaturbereich, bei Elkos: ESR und Lebensdauer.

### Elektrolytkondensator (Elko)

Hohe Kapazität, POLARITÄTSABHÄNGIG – Minus-Pol ist markiert (Streifen). Begrenzte Lebensdauer.

**Anwendung:** Siebung in Netzteilen.

### Tantalkondensator

Sehr kompakt, geringer ESR (Equivalent Series Resistance = ohmscher Innenwiderstand), aber empfindlich gegen Überspannung. POLARITÄTSABHÄNGIG – Plus-Pol ist markiert.

**Bei Verpolung:** Kurzschluss und Brandgefahr!

### Folienkondensator

Keine Polarität, geringe Verluste, hohe Spannungsfestigkeit, selbstheilend.

### Keramikkondensator

Keine Polarität.
- **Klasse 1 (NP0/C0G):** Stabil.
- **Klasse 2 (X7R, Y5V):** Hohe Kapazität, aber temperaturabhängig.

## 4.2 Widerstände

**Kaufkriterien:** Widerstandswert (Ω, kΩ, MΩ), maximale Belastbarkeit/Leistung (W), Toleranz (%), Bauform.

**Belastbarkeit:** Gibt an, wie viel Leistung der Widerstand in Wärme umsetzen kann. Typische Werte: 0,25 W, 0,5 W, 1 W, 2 W, 5 W.

### Temperaturabhängige Widerstände

**NTC (Heißleiter):** Widerstand SINKT bei steigender Temperatur.
- **Anwendung:** Temperaturmessung, Einschaltstrombegrenzung.

**PTC (Kaltleiter):** Widerstand STEIGT bei steigender Temperatur.
- **Anwendung:** Selbstrückstellende Sicherungen, Übertemperaturschutz.

**LDR (Fotowiderstand):** Widerstand SINKT bei steigender Beleuchtung.
- **Anwendung:** Dämmerungsschalter.

### Widerstandsfarbcode

| Farbe | Wert | Multiplikator | Toleranz |
|-------|------|---------------|----------|
| Schwarz | 0 | ×1 | – |
| Braun | 1 | ×10 | ±1% |
| Rot | 2 | ×100 | ±2% |
| Orange | 3 | ×1k | – |
| Gelb | 4 | ×10k | – |
| Grün | 5 | ×100k | ±0,5% |
| Blau | 6 | ×1M | ±0,25% |
| Violett | 7 | ×10M | ±0,1% |
| Grau | 8 | – | – |
| Weiß | 9 | – | – |
| Gold | – | ×0,1 | ±5% |
| Silber | – | ×0,01 | ±10% |

## 4.3 Dioden

**Aufbau:** pn-Übergang aus dotiertem Silizium. Anode (+) und Kathode (−), Markierung (Ring) am Kathodenende.

**Funktionsweise:**
- **Durchlassrichtung:** Strom fließt ab der Schwellenspannung.
- **Sperrrichtung:** Kein Stromfluss.

### Schwellenspannungen

- **Silizium-Diode (Si):** ca. 0,7 V
- **Germanium-Diode (Ge):** ca. 0,3 V
- **Schottky-Diode:** ca. 0,3–0,4 V
- **LED rot:** ca. 1,8–2,0 V
- **LED grün:** ca. 2,0–2,2 V
- **LED blau/weiß:** ca. 3,0–3,5 V

### Z-Diode

Wird in Sperrrichtung betrieben. Ab der Zenerspannung fließt Strom bei konstanter Spannung.

**Anwendung:** Spannungsstabilisierung.

### LED – Anode/Kathode erkennen

- Langes Beinchen = Anode (+)
- Im Gehäuse: Große Fläche (Reflektor) = Kathode (−)
- Abgeflachte Seite = Kathode

## 4.4 Transistoren

### Bipolartransistor (NPN/PNP)

**Aufbau:** Drei Schichten (NPN oder PNP) mit den Anschlüssen Emitter (E), Basis (B), Kollektor (C).

**Funktionsweise:** Ein kleiner Strom in die Basis (beim Transistor) steuert einen großen Strom zwischen Kollektor und Emitter. STROMGESTEUERT.

**Stromverstärkung β:** I_C = β × I_B. Typisch β = 100–300.

**NPN:** Schaltet positive Last gegen Masse (Low-Side). Basisstrom fließt hinein.

**PNP:** Schaltet Last gegen Plus (High-Side). Basisstrom fließt heraus.

### Feldeffekttransistor (FET/MOSFET)

**Aufbau:** Drei Anschlüsse: Gate (G), Drain (D), Source (S). Gate ist durch Oxidschicht isoliert (bei MOSFET).

**Funktionsweise:** Eine Spannung am Gate steuert den Stromfluss zwischen Drain und Source. SPANNUNGSGESTEUERT. Nahezu leistungslose Ansteuerung.

**Unterschied zum Bipolartransistor:** MOSFET ist spannungsgesteuert (Gate), Bipolar ist stromgesteuert (Basis). MOSFET hat höhere Eingangsimpedanz.

### Thyristor

**Aufbau:** Vierschicht-Halbleiter (PNPN) mit Anode (A), Kathode (K), Gate (G).

**Funktionsweise:** Sperrt ohne Ansteuerung. Zündimpuls am Gate schaltet dauerhaft leitend. Bleibt leitend bis Strom unter Haltestrom fällt.

**Anwendung:** Phasenanschnittsteuerung, Dimmer.

## 4.5 Gleichrichterschaltungen

### Einweggleichrichter

**Aufbau:** Eine einzelne Diode in Reihe mit der Last.

**Funktionsweise:** Nur positive Halbwellen werden durchgelassen. Brummfrequenz = Netzfrequenz (50 Hz).

**Nachteile:** Nur 50% Wirkungsgrad, hohe Brummspannung.

### Brückengleichrichter (Graetz-Schaltung)

**Aufbau:** Vier Dioden in Brückenschaltung (B2U).

**Funktionsweise:** Beide Halbwellen werden gleichgerichtet. Brummfrequenz = doppelte Netzfrequenz (100 Hz).

**Vorteile:** Höherer Wirkungsgrad, geringere Brummspannung.

### Brummspannung und Glättung

**Vor der Glättung:** Die gleichgerichtete Spannung pulsiert zwischen 0 V und dem Spitzenwert. Bei Einweg: 50 Hz, bei Brücke: 100 Hz.

**Nach der Glättung:** Der Siebkondensator lädt sich auf den Spitzenwert auf und entlädt sich zwischen den Spitzen. Es bleibt eine Restwelligkeit (Brummspannung) übrig.

**Reduzierung:** Größerer Siebkondensator, kleinerer Laststrom, Spannungsregler (z.B. 7805) für vollständig glatte Gleichspannung.

## 4.6 Operationsverstärker

**Beispiel 741:** DIP-8-Gehäuse.
- Pin 2: Invertierender Eingang (−)
- Pin 3: Nichtinvertierender Eingang (+)
- Pin 6: Ausgang

**Funktionsweise:** Verstärkt die Differenz zwischen den Eingängen mit sehr hohem Verstärkungsfaktor (> 100.000).

**Grundschaltungen:** Invertierender Verstärker, Nichtinvertierender Verstärker, Komparator, Schmitt-Trigger.
