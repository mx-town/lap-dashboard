# 1. Schutzkonzepte

Schutzklassen, Schutzarten und Sicherheitskonzepte

## 1.1 Basisschutz und Fehlerschutz

### Basisschutz (Schutz gegen direktes Berühren)

**Definition:** Schutz von Personen vor dem Berühren aktiver (spannungsführender) Teile im Normalbetrieb.

**Maßnahmen:**
- Isolierung aktiver Teile (Kabelummantelung, Gehäuse)
- Abdeckungen und Gehäuse (IP-Schutzarten, mindestens IP2X oder IPXXB)
- Hindernisse und Abstände (im Industriebereich)
- Schutz durch Standort (nur Elektrofachkräfte haben Zugang)

### Fehlerschutz (Schutz bei indirektem Berühren)

**Definition:** Schutz von Personen vor gefährlichen Berührungsspannungen an leitfähigen Gehäusen, die durch einen Isolationsfehler unter Spannung stehen.

**Maßnahmen:**
- Schutzerdung – Gehäuse mit PE verbinden, Fehlerstrom löst Sicherung aus
- Fehlerstrom-Schutzeinrichtung (FI/RCD) – erkennt Differenzstrom
- Schutzisolierung (Schutzklasse II) – doppelte Isolierung
- Schutzkleinspannung (SELV/PELV) – ungefährliche Spannung
- Schutztrennung – galvanische Trennung vom Netz

### Zusatzschutz

Zusätzliche Schutzmaßnahme bei Versagen von Basis- und Fehlerschutz. In Österreich: FI mit I∆n ≤ 30 mA Pflicht für Steckdosen bis 32 A.

## 1.2 Schutzklassen

### Schutzklasse 0

**Aufbau:** Nur Basisisolierung zwischen spannungsführenden Teilen und Gehäuse. Kein Schutzleiter vorhanden.

**Funktionsweise:** Der einzige Schutz ist die Isolierung. Bei einem Isolationsfehler besteht kein weiterer Schutz.

**Anwendung:** In Deutschland und Österreich nicht zugelassen. EU-weit verboten für Neugeräte.

### Schutzklasse I

**Aufbau:** Basisisolierung plus Schutzleiteranschluss am Gehäuse. Symbol: ⏚

**Funktionsweise:** Bei Isolationsfehler fließt der Fehlerstrom über den Schutzleiter ab. Die Überstromschutzeinrichtung (Sicherung, LS) löst aus.

**Anwendung:** Waschmaschinen, Elektroherde, stationäre Geräte mit Metallgehäuse.

### Schutzklasse II

**Aufbau:** Doppelte oder verstärkte Isolierung. Kein Schutzleiter erforderlich. Symbol: Doppelquadrat (⧈)

**Funktionsweise:** Zwei unabhängige Isolationsschichten verhindern das Erreichen spannungsführender Teile.

**Anwendung:** Netzteile, Elektrowerkzeuge, mobile Geräte wie Bohrmaschinen.

### Schutzklasse III

**Aufbau:** Betrieb mit Schutzkleinspannung (SELV/PELV) unter 50 V AC oder 120 V DC. Symbol: III im Rhombus.

**SELV:** Safety Extra Low Voltage – keine Erdverbindung, höchste Sicherheitsstufe.

**PELV:** Protective Extra Low Voltage – mit Erdverbindung, für Funktionserdung.

**Anwendung:** Laptops, Spielzeug, Gartenbeleuchtung, medizinische Geräte.

## 1.3 Schutztrennung und galvanische Trennung

### Schutztrennung

**Aufbau:** Galvanische Trennung vom Netz durch Trenntransformator. Sekundärseite ist erdfrei.

**Funktionsweise:** Bei Berührung eines Außenleiters kann kein Strom über den Körper zur Erde fließen, da kein geschlossener Stromkreis entsteht.

**Anwendung:** Rasiersteckdosen in Badezimmern, Baustellentransformatoren, Werkstätten.

**Wichtig:** Nur EIN Verbraucher pro Sekundärwicklung. Keine Erdung der Sekundärseite.

### Galvanische Trennung

**Definition:** Zwei Stromkreise ohne leitende (galvanische) Verbindung. Es besteht keine direkte elektrische Verbindung zwischen den Kreisen.

**Primärseite:** Die Eingangsseite, die mit der Energiequelle (z.B. Netz 230 V) verbunden ist. Hier wird Energie eingespeist.

**Sekundärseite:** Die Ausgangsseite, die den Verbraucher versorgt. Sie ist von der Primärseite galvanisch getrennt.

**Wichtig:** Zwischen Primär- und Sekundärseite besteht KEINE leitende Verbindung. Die Energieübertragung erfolgt durch magnetische, optische oder mechanische Kopplung.

**Realisierung der galvanischen Trennung:**
- Transformator – Energie wird über magnetische Kopplung übertragen
- Optokoppler – Signal wird über Licht übertragen (LED → Fototransistor)
- Relais – Signal wird mechanisch übertragen. Spule und Kontakte sind elektrisch getrennt.

## 1.4 IP-Schutzarten

**Aufbau:** Kennzeichnung IP XY. Erste Ziffer = Fremdkörperschutz, zweite Ziffer = Wasserschutz.

### Erste Ziffer – Fremdkörper- und Berührungsschutz

| Ziffer | Schutz gegen |
|--------|--------------|
| 0 | Kein Schutz |
| 1 | Feste Fremdkörper ≥ 50 mm (Handrücken) |
| 2 | Feste Fremdkörper ≥ 12,5 mm (Finger) |
| 3 | Feste Fremdkörper ≥ 2,5 mm (Werkzeug) |
| 4 | Feste Fremdkörper ≥ 1 mm (Draht) |
| 5 | Staubgeschützt (Staub kann eindringen, beeinträchtigt Funktion nicht) |
| 6 | Staubdicht (kein Staubeintritt) |

### Zweite Ziffer – Wasserschutz

| Ziffer | Schutz gegen |
|--------|--------------|
| 0 | Kein Schutz |
| 1 | Senkrechtes Tropfwasser |
| 2 | Tropfwasser bei 15° Neigung |
| 3 | Sprühwasser bis 60° |
| 4 | Spritzwasser allseitig |
| 5 | Strahlwasser (Düse 6,3 mm) |
| 6 | Starkes Strahlwasser (Düse 12,5 mm) |
| 7 | Zeitweiliges Untertauchen (bis 1 m, 30 min) |
| 8 | Dauerhaftes Untertauchen (Tiefe nach Herstellerangabe) |
| 9K | Hochdruck-/Dampfstrahlreinigung (nach ISO 20653) |

### Praxisbeispiele

- IP20 = Schaltschrank innen
- IP44 = Außensteckdose
- IP54 = Industriegehäuse
- IP65 = Außenleuchte
- IP67 = Sensor im Nassbereich
- IP69K = Lebensmittelindustrie

## 1.5 Die 5 Sicherheitsregeln

Vor Arbeiten an elektrischen Anlagen müssen die 5 Sicherheitsregeln in dieser Reihenfolge eingehalten werden:

### 1. Freischalten

Anlage allpolig vom Netz trennen (Hauptschalter, LS, Sicherungen).

**Praxisbeispiel:** Du willst eine Steckdose austauschen und schaltest dafür im Sicherungskasten die entsprechende Sicherung aus.

### 2. Gegen Wiedereinschalten sichern

Schloss anbringen, Warnschilder aufhängen, Schlüssel abziehen.

**Praxisbeispiel:** Du klebst ein Warnschild an den Sicherungsautomaten oder schließt ihn mit einer Sperre ab, damit niemand ihn versehentlich wieder einschaltet.

### 3. Spannungsfreiheit feststellen

Mit zweipoligem Spannungsprüfer (Duspol) an allen Polen prüfen. Vor und nach der Messung an bekannter Spannungsquelle testen.

**Praxisbeispiel:** Bevor du die Steckdose anfasst, prüfst du mit einem Spannungsprüfer, ob wirklich keine Spannung mehr anliegt.

### 4. Erden und Kurzschließen

Bei Hochspannung (> 1 kV) und Freileitungen Pflicht. Leiter werden mit der Erde verbunden.

**Praxisbeispiel:** Bei Arbeiten an einer Mittelspannungsanlage verbindest du die Leiter mit Erde, damit keine gefährliche Rest- oder Rückspannung auftreten kann.

### 5. Benachbarte unter Spannung stehende Teile abdecken oder abschranken

Isolierende Abdeckungen oder Absperrungen verwenden.

**Praxisbeispiel:** Neben der Arbeitsstelle liegen noch spannungsführende Teile – diese deckst du mit isolierenden Abdeckungen ab, damit du sie nicht versehentlich berührst.

## 1.6 Schleifenimpedanz

**Was ist das?** Die Schleifenimpedanz Zs ist der Gesamtwiderstand des Stromweges bei einem Körperschluss – also der Weg, den der Fehlerstrom vom Außenleiter (L) über den Fehler und den Schutzleiter (PE) zurück zur Quelle nimmt.

**Warum ist sie wichtig?** Je kleiner die Schleifenimpedanz, desto größer der Fehlerstrom. Ein hoher Fehlerstrom sorgt dafür, dass die Sicherung oder der LS schnell auslöst und die Gefahr beseitigt wird.

**Einfach erklärt:** Stell dir vor, du hast einen Kurzschluss zwischen L und PE. Der Strom fließt jetzt im Kreis: von der Quelle über L zum Fehler, dann über PE zurück zur Quelle. Der Widerstand dieses gesamten Kreises ist die Schleifenimpedanz.

**Berechnung:** Zs = U₀ / Ia
- U₀ = Nennspannung (230 V)
- Ia = Abschaltstrom der Schutzeinrichtung

**Messung:** Mit Schleifenimpedanz-Messgerät zwischen L und PE messen.

**Grenzwert:** Für LS B16 bei 0,4 s Abschaltzeit: Zs_max = 230 V / 80 A = 2,88 Ω

## 1.7 ESD – Elektrostatische Entladung

**Definition:** ESD (Electrostatic Discharge) ist die plötzliche Entladung statischer Elektrizität zwischen zwei Objekten.

**Gefahr:** Elektronische Bauteile (CMOS, MOSFETs, ICs) können durch Spannungen ab 100 V zerstört werden. Menschen spüren erst ab ca. 3000 V.

**Schutzmaßnahmen:**
- ESD-Armband tragen und erden
- ESD-Arbeitsplatz mit ableitfähiger Matte
- ESD-gerechte Verpackung (antistatische Beutel)
- Luftfeuchtigkeit > 50 % halten
- Bauteile nur am Gehäuserand anfassen

## 1.8 Erste Hilfe bei Stromunfall

**Reihenfolge der Maßnahmen:**

1. **Eigenschutz beachten** – Nicht den Verunfallten berühren, solange Spannung anliegt!
2. **Stromkreis unterbrechen** – Hauptschalter, FI, Sicherung, Stecker ziehen
3. **Notruf absetzen** – 144 (Rettung) bzw. 112 (EU-Notruf)
4. **Bewusstsein prüfen** – Ansprechen, Anfassen, sanftes Schütteln
5. **Atmung prüfen** – Sehen, Hören, Fühlen (max. 10 Sekunden)
6. **Bei Bewusstlosigkeit mit Atmung:** Stabile Seitenlage
7. **Bei Atem-Kreislauf-Stillstand:** Herzdruckmassage (30:2) bis Rettungsdienst eintrifft

**Wichtig:** Auch bei scheinbar glimpflichem Ausgang: Arzt aufsuchen! Herzrhythmusstörungen können verzögert auftreten.
