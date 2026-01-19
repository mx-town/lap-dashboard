---
id: regelungs-steuerungstechnik-sps
number: 9
title: Regelungs-/Steuerungstechnik/SPS
subtitle: SPS-Programmierung und Steuerungskonzepte
---

# 9. Regelungs-/Steuerungstechnik/SPS

SPS-Programmierung und Steuerungskonzepte

## 9.1 Steuern und Regeln

**Steuern:** Offene Wirkungskette. Eingabe → Verarbeitung → Ausgabe. Keine Rückmeldung.

**Beispiel:** Zeitschaltuhr schaltet Licht ein – egal ob es schon hell ist.

**Regeln:** Geschlossener Regelkreis mit Rückmeldung. Soll-Ist-Vergleich, Störungen werden ausgeregelt.

**Beispiel:** Thermostat misst Temperatur und regelt Heizung nach.

### Regelkreis

- **Führungsgröße w:** Sollwert
- **Regelgröße x:** Istwert
- **Regeldifferenz e:** e = w − x
- **Stellgröße y:** Ausgangssignal des Reglers
- **Störgröße z:** Unerwünschte Einflüsse

### Reglerarten

**P-Regler:** Proportional. Schnell, aber bleibende Regeldifferenz.

**I-Regler:** Integral. Langsam, aber keine bleibende Abweichung.

**PI-Regler:** Häufigste Kombination. Guter Kompromiss.

**PID-Regler:** Beste Regelgüte.

## 9.2 Sensoren und Aktoren

### Was ist ein Sensor?

**Definition:** Ein Sensor erfasst physikalische Größen und wandelt sie in elektrische Signale um (Eingang des Systems).

### Was ist ein Aktor?

**Definition:** Ein Aktor wandelt elektrische Signale in physikalische Aktionen um (Ausgang des Systems).

**Beispiele:** Motoren, Ventile, Heizungen, Lampen, Zylinder.

### Sensorarten

| Sensortyp | Erfasst | Anwendung |
|-----------|---------|-----------|
| Induktiver Sensor | Metall (berührungslos) | Endlagen, Zählung von Metallteilen |
| Kapazitiver Sensor | Alle Materialien | Füllstand, nichtmetallische Objekte |
| Optischer Sensor | Licht/Schatten | Objekterkennung, Zählung |
| Magnetischer Sensor (Reed) | Magnetfeld | Zylinderendlagen, Türkontakte |
| Ultraschallsensor | Abstand (Schall) | Distanzmessung, Füllstand |

## 9.3 Signalarten

### Digitalsignal

**Definition:** Nur zwei Zustände: 0 (LOW, 0 V) oder 1 (HIGH, 24 V bei SPS).

**Beispiele:** Taster, Endschalter, Lichtschranke.

### Analogsignal

**Definition:** Stufenlose Werte (z.B. 0–10 V oder 4–20 mA).

**4–20 mA:** Industriestandard. 4 mA = Messbereichsanfang, 20 mA = Messbereichsende.

**Drahtbruchsicher:** Bei 0 mA erkennt die SPS einen Fehler (Kabelbruch). Bei 0–20 mA wäre 0 mA nicht unterscheidbar.

### Binär, Bits, Bytes

**Binär:** Zahlensystem zur Basis 2. Nur 0 und 1.

- **Bit:** Kleinste Einheit (0 oder 1)
- **Byte:** 8 Bit (Wertebereich: 0–255)
- **Word:** 16 Bit (Wertebereich: 0–65535)
- **Doppelwort (DWord):** 32 Bit

## 9.4 SPS-Grundlagen

### Aufbau

**Komponenten:** CPU, Eingangskarte (DI/AI), Ausgangskarte (DO/AO), Netzteil, Kommunikationsschnittstelle.

### EVA-Prinzip

**E – Eingabe:** Alle Eingänge werden gelesen und ins Prozessabbild der Eingänge (PAE) übertragen.

**V – Verarbeitung:** Das Programm wird von Anfang bis Ende abgearbeitet.

**A – Ausgabe:** Das Prozessabbild der Ausgänge (PAA) wird auf die physischen Ausgänge geschrieben.

### Was ist ein SPS-Zyklus?

**Definition:** Ein Zyklus ist ein vollständiger Durchlauf: Eingänge lesen → Programm abarbeiten → Ausgänge setzen.

**Zykluszeit:** Die Zeit für einen kompletten Zyklus. Typisch 1–100 ms.

**Bedeutung:** Die Zykluszeit bestimmt, wie schnell die SPS auf Änderungen reagieren kann.

**Ablauf eines Zyklus:**
1. Prozessabbild der Eingänge aktualisieren
2. Programm abarbeiten (vom ersten bis zum letzten Befehl)
3. Prozessabbild der Ausgänge übertragen
4. Zyklus beginnt von vorne

**Watchdog:** Überwacht die Zykluszeit. Bei Überschreitung → sicherer Zustand (Ausgänge aus).

**Wichtig:** Eingänge werden nur einmal pro Zyklus gelesen. Änderungen während der Abarbeitung werden erst im nächsten Zyklus erkannt.

## 9.5 Adressierung (Siemens S7)

**Eingänge:** E0.0 bis E0.7 (erstes Byte), E1.0 bis E1.7 (zweites Byte)

**Ausgänge:** A0.0 bis A0.7, A1.0 bis A1.7

**Merker:** M0.0 bis M0.7 (interne Hilfsvariablen)

### Unterschied Eingang, Ausgang, Merker

**Eingang (E):** Physischer Anschluss für Sensoren. Liest Signale von außen.

**Ausgang (A):** Physischer Anschluss für Aktoren. Gibt Signale nach außen.

**Merker (M):** Interner Speicher. Nur im Programm sichtbar, keine physische Verbindung.

### Sensoren – Schaltausgänge

**PNP (Plus-schaltend):** Schaltet +24 V auf den Ausgang. Standard in Europa!

**NPN (Minus-schaltend):** Schaltet 0 V auf den Ausgang. Standard in Asien.

**Anschluss:** Braun = +24 V, Blau = 0 V, Schwarz = Schaltausgang.

## 9.6 Logische Verknüpfungen

| Gatter | Funktion | Beschreibung |
|--------|----------|--------------|
| UND | Q = A ∧ B | Q = 1 wenn ALLE Eingänge = 1 |
| ODER | Q = A ∨ B | Q = 1 wenn MINDESTENS ein Eingang = 1 |
| NICHT | Q = ¬A | Q ist invertiert |
| NAND | Q = ¬(A ∧ B) | Invertiertes UND |
| NOR | Q = ¬(A ∨ B) | Invertiertes ODER |
| XOR | Q = A ⊕ B | Q = 1 wenn GENAU ein Eingang = 1 |

### Speicher und Timer

**RS-Speicher:** Rücksetzen (R) hat Vorrang. Sicher für Not-Aus!

**SR-Speicher:** Setzen (S) hat Vorrang.

**TON:** Einschaltverzögerung.

**TOF:** Ausschaltverzögerung.

**TP:** Impuls/Wischer.

## 9.7 Auswahlkriterien einer SPS

- Anzahl der Ein- und Ausgänge (digital und analog)
- Zykluszeit und Verarbeitungsgeschwindigkeit
- Kommunikationsschnittstellen (Profibus, Profinet, Ethernet)
- Speicherkapazität für Programm und Daten
- Erweiterbarkeit (modularer Aufbau)
- Programmiersprachen (KOP, FUP, AWL, SCL, GRAPH)
- Umgebungsbedingungen (Temperatur, Schutzart)

## 9.8 Speichertypen

| Typ | Beschreibung | Eigenschaften |
|-----|--------------|---------------|
| RAM | Random Access Memory | Flüchtig, schnell, Arbeitsspeicher |
| ROM | Read Only Memory | Nicht flüchtig, nur lesbar, Firmware |
| PROM | Programmable ROM | Einmal programmierbar |
| EPROM | Erasable PROM | Mit UV-Licht löschbar |
| EEPROM | Electrically Erasable PROM | Elektrisch löschbar |
| Flash | Flash-Speicher | Schnell, oft beschreibbar, USB-Sticks, SSDs |

## 9.9 Interface

**Definition:** Schnittstelle zwischen zwei Systemen, die den Datenaustausch ermöglicht.

**Hardware-Interface:** Physische Verbindung (z.B. RS232, USB, Ethernet, Profibus, Profinet).

**Software-Interface:** Protokoll oder API für Datenaustausch zwischen Programmen.

**Mensch-Maschine-Interface (HMI):** Bedienoberfläche zur Interaktion mit der Maschine (Touchpanel, Bildschirm).

## 9.10 Vorbeugende Wartung

**Definition:** Planmäßige Instandhaltung VOR dem Auftreten eines Ausfalls.

**Typische Maßnahmen:**
- Regelmäßige Sichtprüfung auf Beschädigungen
- Reinigung von Filtern und Lüftern
- Schmierung beweglicher Teile
- Prüfung elektrischer Verbindungen (Anzugsmoment)
- Messung von Isolationswiderständen
- Austausch von Verschleißteilen nach Intervall
