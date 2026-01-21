---
id: schaltkasten
number: 3
title: Schaltkasten
subtitle: Aufbau und Verdrahtung von Schaltschränken
---

# 3. Schaltkasten

Aufbau und Verdrahtung von Schaltschränken

## 3.1 Fehlerstrom-Schutzeinrichtungen (FI / RCD)

### Aufbau und Funktionsprinzip

**Aufbau:** Summenstromwandler (Ringkern mit Wicklung), Auslöserelais, Schaltkontakte, Prüftaste. Der Ringkern besteht aus Weicheisen. Im Normalbetrieb heben sich die Magnetfelder von Hin- und Rückleiter auf. Bei Fehlerstrom fehlt ein Teil des Rückstroms – das Restfeld induziert eine Spannung, die das Relais auslöst.

**Der FI basiert auf dem Prinzip der elektromagnetischen Induktion:**

- Alle aktiven Leiter (L und N) führen durch einen gemeinsamen Ringkern (Summenstromwandler).
- Im Normalbetrieb fließt der gleiche Strom hin (L) und zurück (N). Die magnetischen Felder heben sich auf → keine Induktion.
- Bei einem Fehlerstrom (z.B. über den Körper zur Erde) ist der Hinstrom größer als der Rückstrom.
- Diese Differenz erzeugt ein magnetisches Wechselfeld im Ringkern.
- Das Wechselfeld induziert eine Spannung in der Sekundärwicklung auf dem Ringkern.
- Diese Spannung steuert ein empfindliches Relais (Auslöserelais), das die Schaltkontakte öffnet.

**Auslösung:** Bereits ab 15–30 mA Differenzstrom (bei 30 mA-FI) wird innerhalb von 30 ms ausgelöst.

### Auslöseströme

- **30 mA:** Personenschutz (Standard im Haushalt)
- **10 mA:** Erhöhter Personenschutz (Nassbereiche, Medizin)
- **300 mA:** Brandschutz (keine Personenschutzfunktion)
- **500 mA:** Brandschutz für größere Anlagen

### RCD-Typen

| Typ | Erkennt | Anwendung |
|-----|---------|-----------|
| AC | Nur sinusförmige Wechselfehlerströme | VERBOTEN in Neuanlagen |
| A | AC + pulsierende Gleichströme | Standard im Haushalt |
| F | A + Mischfrequenzen | Frequenzumrichter, Wärmepumpen |
| B | A + glatte Gleichströme | PV-Anlagen, E-Mobilität, USV |

### Selektivität beim FI

**Definition:** Selektivität bedeutet, dass bei einem Fehlerstrom nur der FI auslöst, der dem Fehler am nächsten ist.

**Selektiver FI (Typ S):** Gekennzeichnet mit "S" (selektiv). Hat eine Auslöseverzögerung von ca. 40–150 ms.

**Staffelung für Selektivität:**
- **Haupt-FI:** 300 mA, selektiv (S), Auslösezeit verzögert
- **Gruppen-FI:** 30 mA, unverzögert, löst bei Fehler zuerst aus

## 3.2 Klingeltrafo

**Funktion:** Wandelt 230V in Kleinspannung (8V, 12V, 24V) für Klingel- und Türöffneranlagen.

**Bauart:** Kurzschlussfest durch erhöhten Streufluss – Strom begrenzt sich bei Kurzschluss selbst.

**Sicherheit:** SELV (Safety Extra Low Voltage) – kein Schutzleiter erforderlich.

**Anschluss:** Primär über Sicherung (meist im Verteiler), Sekundär zu Klingel/Türöffner.

**Leistung:** Typisch 8VA bis 24VA.

## 3.3 Leitungsschutzschalter (LS)

**Aufbau:** Bimetall (thermisch), Magnetspule mit Schlaganker (elektromagnetisch), Schaltkontakte, Lichtbogenkammer.

**Moderne LS:** Aktuelle Leitungsschutzschalter arbeiten elektromagnetisch – sie kombinieren thermische und magnetische Auslösung.

**Thermische Auslösung:** Bimetall erwärmt sich bei Überlast, verbiegt sich und löst zeitverzögert aus. Schützt vor längerer Überlastung. Zwei Metalle mit unterschiedlicher Wärmeausdehnung sind verbunden. Bei Erwärmung verbiegt sich der Streifen und betätigt den Auslöser. Kleine Überlast = langsame Auslösung, große Überlast = schnelle Auslösung.

**Elektromagnetische Auslösung:** Bei Kurzschluss erzeugt der hohe Strom ein starkes Magnetfeld. Der Schlaganker wird angezogen und löst unverzögert (< 0,1 s) aus. Schützt vor Kurzschluss. Die Auslösung erfolgt in Millisekunden – viel schneller als das Bimetall.

### Charakteristiken

| Typ | Auslösebereich | Anwendung |
|-----|----------------|-----------|
| B | 3–5 × In | Haushalt, Licht, Steckdosen (ohmsche Lasten) |
| C | 5–10 × In | Motoren, Leuchtstofflampen (induktive Lasten) |
| D | 10–20 × In | Transformatoren, Schweißgeräte (hohe Einschaltströme) |
| K | 8–14 × In | Motoren mit engeren Toleranzen |
| Z | 2–3 × In | Empfindliche Elektronik, Halbleiter |

## 3.4 Schmelzsicherungen

### NEOZED-Sicherung (D0-System)

**Aufbau:** Schraubkappe, Passeinsatz, Sicherungseinsatz mit Schmelzleiter und Quarzsand.

**Kennfarben:**
- Rosa = 2A
- Braun = 4A
- Grün = 6A
- Rot = 10A
- Grau = 16A
- Blau = 20A
- Gelb = 25A
- Schwarz = 35A
- Weiß = 50A
- Kupfer = 63A

### DIAZED-Sicherung (D-System)

**Aufbau:** Ähnlich NEOZED, aber größere Bauform für höhere Ströme.

**Größen:**
- DII (bis 25A)
- DIII (bis 63A)
- DIV (bis 100A)

### NH-Sicherung (Niederspannungs-Hochleistungssicherung)

**Aufbau:** Messerförmige Kontakte, Keramikkörper mit Quarzsandfüllung, Schmelzleiter.

**Größen:**
- NH000 (bis 100A)
- NH00 (bis 160A)
- NH1 (bis 250A)
- NH2 (bis 400A)
- NH3 (bis 630A)
- NH4 (bis 1250A)

**Sicherheit:** Nur im spannungsfreien Zustand wechseln! Spezialzange und PSA erforderlich.

### Geräteschutzsicherungen

**Aufbau:** Kleine Glassicherungen (5×20 mm oder 6,3×32 mm) mit Schmelzdraht.

**Typen:**
- F (flink) – schnelles Ansprechen
- T (träge) – verzögertes Ansprechen
- M (mittelträge)

## 3.5 Überspannungsschutz

**Definition:** Schutz vor transienten Überspannungen durch Blitzeinschlag, Schaltvorgänge oder elektrostatische Entladungen.

### Schutzklassen (Zonen-Konzept)

- **Typ 1 (Blitzstromableiter):** Am Hausanschluss, leitet Blitzteilströme ab (bis 100 kA)
- **Typ 2 (Überspannungsableiter):** In der Unterverteilung
- **Typ 3 (Feinschutz):** Direkt am Endgerät

## 3.6 Motorschutz

### Motorschutzrelais (MSR)

**Aufbau:** Thermische Bimetall-Auslöser (einer pro Phase), Einstellrad für Nennstrom, Hilfskontakte (95-96 NC, 97-98 NO).

**Auslöseart:** Nur thermisch (zeitverzögert). KEIN Kurzschlussschutz!

**Wichtig:** Immer zusätzlich Sicherungen oder LS für Kurzschlussschutz vorschalten.

### Motorschutzschalter (MSS)

**Aufbau:** Thermischer UND magnetischer Auslöser, Hauptkontakte, Einstellrad.

**Vorteil:** Kombiniert Überlast- und Kurzschlussschutz. Keine zusätzlichen Sicherungen nötig.

## 3.7 Schaltgeräte

### Schütz

**Aufbau:** Magnetspule (A1/A2), Eisenkern, Hauptkontakte (1-2, 3-4, 5-6), Hilfskontakte NO (13-14) und NC (21-22).

**Funktionsweise:** Steuerspannung an A1-A2 erregt die Spule. Das Magnetfeld zieht den Kern an und schließt die Hauptkontakte.

**Kontaktbezeichnung:** Erste Ziffer = Kontaktnummer, zweite Ziffer: 1-2 = NC (Öffner), 3-4 = NO (Schließer).

**Selbsthaltung:** Ein Schließer-Hilfskontakt (13-14) wird parallel zum Taster geschaltet.

### Unterschied Schütz und Relais

**Schütz:** Für hohe Schaltleistungen (Hauptstromkreise). Robuste Kontakte für Motorströme.

**Relais:** Für kleine Schaltleistungen (Steuerstromkreise). Kompakte Bauform. Oft steckbar.

**Gemeinsamkeit:** Beide sind elektromagnetisch betätigte Schalter mit galvanischer Trennung.

### Softstarter

**Aufbau:** Antiparallele Thyristoren (pro Phase), Steuerelektronik, Kühlkörper.

**Vorteile:** Reduzierter Anlaufstrom (3–4× statt 6–8× In), weniger mechanische Belastung.

### Zeitrelais

**Funktionen:**
- **Einschaltverzögerung:** Ausgang schaltet verzögert EIN, sofort AUS
- **Ausschaltverzögerung:** Ausgang schaltet sofort EIN, verzögert AUS
- **Impuls (Wischer):** Ausgang gibt Impuls definierter Länge

## 3.8 Transformator

**Aufbau:** Primärwicklung, Sekundärwicklung, Eisenkern (geschichtet zur Reduzierung von Wirbelstromverlusten).

**Funktionsweise:** Wechselspannung an der Primärwicklung erzeugt magnetischen Wechselfluss im Kern. Dieser induziert Spannung in der Sekundärwicklung.

**Übersetzungsverhältnis:** U1/U2 = N1/N2 = I2/I1

### Eisenkernbauformen

- **Kerntrafo (EI-Kern):** Einfache Fertigung, Standardanwendungen
- **Manteltrafo (M-Kern):** Bessere magnetische Abschirmung
- **Ringkerntrafo:** Höchster Wirkungsgrad, geringste Streuung

**Gleichspannung transformieren:** NEIN! Gleichstrom erzeugt konstanten Magnetfluss → keine Induktion.

## 3.9 Schaltschrankverdrahtung nach ÖVE/ÖNORM E 8101

**Grundregeln für die fachgerechte Verdrahtung:**

- **Übersichtliche Leitungsführung** – Leitungen im rechten Winkel verlegen, Kabelkanäle verwenden
- **Ausreichende Biegeradien** – mindestens 4× Leitungsdurchmesser
- **Zugentlastung** – Leitungen an Einführungen entlasten
- **Aderbeschriftung** – alle Adern an beiden Enden beschriften
- **Klemmenbezeichnung** – Klemmen nach Stromlaufplan beschriften
- **Farbkennzeichnung einhalten** – PE: grün-gelb, N: blau, L: braun/schwarz/grau
- **Leitungslängen** – PE immer etwas länger (reißt zuletzt bei Zugbelastung)
- **Aderendhülsen** – bei feindrähtigen Leitern an Schraubklemmen Pflicht
- **Drehmoment beachten** – Klemmen mit vorgeschriebenem Anzugsmoment festziehen
- **Prüfung** – Sichtprüfung, Durchgangsprüfung, Isolationsmessung vor Inbetriebnahme

## 3.10 Hutschiene und Reihenklemmen

**Hutschiene:** Genormte Tragschiene (35 mm nach DIN EN 60715) aus verzinktem Stahl. Bauteile werden aufgerastet.

**Reihenklemmen:** Schraubanschluss oder Federklemme (Push-In). Beschriftungsträger für Kennzeichnung.

**Farbcodierung:**
- Grau = allgemein
- Blau = Neutralleiter
- Grün-Gelb = Schutzleiter

## 3.11 Netzteil

**Aufbau:** Transformator oder Schaltregler, Gleichrichter, Siebkondensator, Spannungsregler.

**Funktionsweise:** 230 V AC → Transformation → Gleichrichtung → Glättung → Stabilisierung → z.B. 24 V DC.

**Typische Ausgangsspannung:** 24 V DC für SPS und Sensorik (Industriestandard).

## 3.12 Elektrische Maschinen

### Drehstrom-Asynchronmotor (DAM)

**Aufbau:** Stator mit Drehfeldwicklung (3 Phasen, 120° versetzt), Rotor als Kurzschlussläufer (Käfigläufer) oder Schleifringläufer.

**Funktionsweise:** Das Drehfeld im Stator induziert Spannung im Rotor. Der resultierende Rotorstrom erzeugt ein Magnetfeld, das dem Drehfeld folgt.

**Drehzahl:** n_synchron = f × 60 / p
- Bei 50 Hz und 2 Polen (p=1): n_s = 3000 min⁻¹
- Bei 4 Polen (p=2): n_s = 1500 min⁻¹

**Schlupf:** s = (n_s − n) / n_s × 100%
- Rotor läuft immer langsamer als Drehfeld (daher "asynchron"). Typisch 2–5%.
- Der Schlupf ist notwendig: Ohne Relativbewegung zwischen Rotor und Drehfeld keine Induktion, kein Rotorstrom, kein Drehmoment.
- Bei Überlast steigt der Schlupf bis zum Kippmoment.

**Anlaufstrom:** 6–8 × Nennstrom. Daher Stern-Dreieck-Anlauf oder Softstarter.

### Gleichstrommotor (GSM)

**Aufbau:** Stator mit Permanentmagneten oder Erregerwicklung, Rotor (Anker) mit Wicklung, Kommutator mit Bürsten.

**Funktionsweise:** Strom durch Ankerwicklung erzeugt Magnetfeld. Wechselwirkung mit Statorfeld erzeugt Drehmoment. Kommutator kehrt Stromrichtung um.

**Drehzahlregelung:** Einfach über Ankerspannung: n ~ U_Anker. Daher ideal für Regelantriebe.

**Nachteile:** Bürstenverschleiß, Funkenbildung, Wartung nötig.

**Anwendung:** Kleinantriebe, Elektrowerkzeuge, KFZ (Scheibenwischer, Fensterheber).

### Servomotor

**Definition:** Hochdynamischer Motor mit integriertem Geber (Encoder) für präzise Positions- und Drehzahlregelung.

**Aufbau:** Synchron- oder Asynchronmotor + Encoder + Servoregler.

**Eigenschaften:** Hohes Drehmoment auch bei niedrigen Drehzahlen, schnelle Reaktion, exakte Positionierung.

**Anwendung:** CNC-Maschinen, Roboter, Verpackungsmaschinen, Positionierantriebe.

### Schrittmotor

**Funktionsweise:** Dreht sich in definierten Schritten (z.B. 1,8° = 200 Schritte/Umdrehung). Jeder Impuls = ein Schritt.

**Vorteile:** Keine Rückmeldung (Encoder) nötig für Positionierung, einfache Ansteuerung, präzise im offenen Regelkreis.

**Nachteile:** Kann Schritte verlieren bei Überlast, Resonanzen bei bestimmten Drehzahlen.

**Anwendung:** 3D-Drucker, CNC-Fräsen (Hobby), Dosieranlagen.

### Frequenzumrichter (FU)

**Funktion:** Wandelt feste Netzfrequenz (50 Hz) in variable Frequenz und Spannung um → stufenlose Drehzahlregelung von Drehstrommotoren.

**Aufbau:** Gleichrichter → Zwischenkreis (Kondensator) → Wechselrichter (IGBT).

**U/f-Kennlinie:** Spannung und Frequenz werden proportional geändert, damit das Drehmoment konstant bleibt. Der Fluss Φ ist proportional zu U/f. Bei 25Hz nur 200V ausgeben hält den Fluss konstant. Über 50Hz (Feldschwächbereich) kann U nicht mehr steigen – Drehmoment sinkt.

**Vorteile:** Energieeinsparung, sanfter Anlauf, Drehzahlregelung, Bremsenergie-Rückspeisung möglich.

**Anwendung:** Pumpen, Lüfter, Förderbänder, überall wo variable Drehzahl gebraucht wird.

### Stern-Dreieck-Anlauf

**Zweck:** Reduzierung des Anlaufstroms auf ca. 1/3 des Direktanlaufstroms. In Stern liegt an jeder Wicklung nur 230V statt 400V. Da P~U², sinkt die Leistung auf (230/400)²≈1/3.

**Klemmbrett:** Brücken waagerecht = Stern, senkrecht = Dreieck.

**Ablauf:**
1. Motor startet in Sternschaltung (Y) → U_Wicklung = 230 V, reduzierter Strom.
2. Nach Hochlauf Umschaltung auf Dreieck (Δ) → U_Wicklung = 400 V, volle Leistung.

**Voraussetzung:** Motor muss für 400 V Dreieck ausgelegt sein (Typenschild: 400V Δ / 690V Y).

**Nachteil:** Drehmoment in Stern ebenfalls auf 1/3 reduziert → nicht für schweren Anlauf geeignet.