---
id: pneumatik
number: 8
title: Pneumatik
subtitle: Pneumatische Antriebe und Steuerungen
---

# 8. Pneumatik

Pneumatische Antriebe und Steuerungen

## 8.1 Pneumatik vs. Hydraulik

| Eigenschaft | Pneumatik | Hydraulik |
|-------------|-----------|-----------|
| Medium | Luft (kompressibel) | Öl (inkompressibel) |
| Druck | 6–10 bar | bis 700 bar |
| Kraft | Gering bis mittel | Sehr hoch |
| Geschwindigkeit | Hoch | Langsamer, genauer regelbar |
| Genauigkeit | Geringer (Luft federt) | Hoch |
| Leckage | Unkritisch (Luft) | Kritisch (Umwelt, Brandgefahr) |
| Anwendung | Handling, Spannen, Blasen | Pressen, Heben, Bagger |

**Vakuumerzeugung:** Ejektor (Venturi-Düse) erzeugt Unterdruck durch Druckluft. Für Sauggreifer und Handhabungstechnik.

## 8.2 Kompressor (Drucklufterzeugung)

**Kolbenkompressor:** Für kleinere Anlagen, pulsierender Luftstrom, wartungsintensiver.

**Schraubenkompressor:** Für größere Anlagen, gleichmäßiger Luftstrom, weniger Verschleiß.

**Druckbehälter:** Speichert Druckluft, gleicht Schwankungen aus. Sicherheitsventil vorgeschrieben.

**Wartung:** Kondensat TÄGLICH ablassen (Wasser verursacht Korrosion und Ventilschäden).

## 8.3 Pneumatische Verschraubungen

**G-Gewinde (BSPP):** Zylindrisch, dichtet mit O-Ring oder Dichtring. Standard in Europa.

**R-Gewinde (BSPT):** Konisch, dichtet im Gewinde selbst. Nicht mit G mischen!

**NPT-Gewinde:** Amerikanisch konisch, inkompatibel mit G/R.

**Steckverbindungen:** Schnellkupplung durch Einstecken, lösen durch Drücken des Rings.

## 8.4 Pneumatik-Schaltzeichen (ISO 1219)

**Wegeventile:** Kästchen = Schaltstellungen, Pfeile = Durchflussrichtung, T = gesperrt

**Ventiltypen:**
- **2/2-Ventil:** 2 Anschlüsse, 2 Stellungen (Auf/Zu)
- **3/2-Ventil:** 3 Anschlüsse, 2 Stellungen (einfachwirkende Zylinder)
- **5/2-Ventil:** 5 Anschlüsse, 2 Stellungen (doppeltwirkende Zylinder)
- **5/3-Ventil:** 5 Anschlüsse, 3 Stellungen (mit Mittelstellung)

**Anschlüsse nach ISO 5599:**
- 1 = Druck (P)
- 2 = Arbeit A
- 4 = Arbeit B
- 3 = Entlüftung A
- 5 = Entlüftung B

**Betätigungen:** Druckknopf, Rolle, Feder, Elektromagnet, Pneumatisch

## 8.5 Wegeventile

**Schema:** Anschlüsse / Schaltstellungen (z.B. 5/2 = 5 Anschlüsse, 2 Stellungen)

### Anschlussbezeichnung nach ISO 5599

- **1** = Druckversorgung (P)
- **2 und 4** = Arbeitsanschlüsse (A, B)
- **3 und 5** = Entlüftung (R, S)

### Ventiltypen

**3/2-Wegeventil:** Für einfachwirkende Zylinder.

**5/2-Wegeventil:** Für doppeltwirkende Zylinder.

**5/3-Wegeventil:** Mit Mittelstellung.

## 8.6 Zylinder

**Einfachwirkender Zylinder (EWZ):** Ein Druckluftanschluss, Rückstellung durch Feder. Ansteuerung: 3/2-Ventil.

**Doppeltwirkender Zylinder (DWZ):** Zwei Druckluftanschlüsse, aktive Bewegung in beide Richtungen. Ansteuerung: 5/2-Ventil.

**Kolbenkraft:** F = p × A = p × (π × d² / 4)

## 8.7 Wartungseinheit

**Aufbau:** Filter (entfernt Wasser, Öl, Partikel) + Druckregler (stellt Arbeitsdruck ein) + Manometer + optional Öler.

**Filter:** Kondensat regelmäßig ablassen!

**Druckregler:** Stellt konstanten Arbeitsdruck ein (z.B. 6 bar).

## 8.8 Geschwindigkeitssteuerung

**Drosselrückschlagventil:** Drosselt in eine Richtung, freier Durchfluss in Gegenrichtung.

**Abluftdrosselung:** Drossel am Abluftanschluss. Bessere Kontrolle, Standard in der Industrie.

**Zuluftdrosselung:** Drossel am Zuluftanschluss. Ruckelige Bewegung, selten verwendet.

## 8.9 Elektropneumatik

**Aufbau:** Elektrische Steuerung (Sensoren, SPS, Taster) + pneumatische Aktoren. Magnetventile als Schnittstelle.

**Magnetventil:** Elektrisch betätigtes Wegeventil. Spule zieht Anker an und schaltet Ventilstellung um.

**Vorteile:** Automatisierung, SPS-Anbindung, komplexe Ablaufsteuerungen möglich.