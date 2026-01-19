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

## 8.2 Wegeventile

**Schema:** Anschlüsse / Schaltstellungen (z.B. 5/2 = 5 Anschlüsse, 2 Stellungen)

### Anschlussbezeichnung nach ISO 5599

- **1** = Druckversorgung (P)
- **2 und 4** = Arbeitsanschlüsse (A, B)
- **3 und 5** = Entlüftung (R, S)

### Ventiltypen

**3/2-Wegeventil:** Für einfachwirkende Zylinder.

**5/2-Wegeventil:** Für doppeltwirkende Zylinder.

**5/3-Wegeventil:** Mit Mittelstellung.

## 8.3 Zylinder

**Einfachwirkender Zylinder (EWZ):** Ein Druckluftanschluss, Rückstellung durch Feder. Ansteuerung: 3/2-Ventil.

**Doppeltwirkender Zylinder (DWZ):** Zwei Druckluftanschlüsse, aktive Bewegung in beide Richtungen. Ansteuerung: 5/2-Ventil.

**Kolbenkraft:** F = p × A = p × (π × d² / 4)

## 8.4 Wartungseinheit

**Aufbau:** Filter (entfernt Wasser, Öl, Partikel) + Druckregler (stellt Arbeitsdruck ein) + Manometer + optional Öler.

**Filter:** Kondensat regelmäßig ablassen!

**Druckregler:** Stellt konstanten Arbeitsdruck ein (z.B. 6 bar).

## 8.5 Geschwindigkeitssteuerung

**Drosselrückschlagventil:** Drosselt in eine Richtung, freier Durchfluss in Gegenrichtung.

**Abluftdrosselung:** Drossel am Abluftanschluss. Bessere Kontrolle, Standard in der Industrie.

**Zuluftdrosselung:** Drossel am Zuluftanschluss. Ruckelige Bewegung, selten verwendet.

## 8.6 Elektropneumatik

**Aufbau:** Elektrische Steuerung (Sensoren, SPS, Taster) + pneumatische Aktoren. Magnetventile als Schnittstelle.

**Magnetventil:** Elektrisch betätigtes Wegeventil. Spule zieht Anker an und schaltet Ventilstellung um.

**Vorteile:** Automatisierung, SPS-Anbindung, komplexe Ablaufsteuerungen möglich.
