---
id: netzsysteme
number: 10
title: Netzsysteme
subtitle: TN, TT, IT-Systeme und Netzformen
---

# 10. Netzsysteme

TN, TT, IT-Systeme und Netzformen

## 10.1 Grundbegriffe

**Außenleiter (L1, L2, L3):** Führen Spannung, 120° phasenverschoben.

**Neutralleiter (N):** Rückleiter, bei symmetrischer Last stromlos.

**Schutzleiter (PE):** Protective Earth, verbindet Gehäuse mit Erde. Führt nur Fehlerstrom.

**PEN-Leiter:** Kombinierter Schutz- und Neutralleiter (nur in TN-C).

## 10.2 Buchstabenbedeutung

Die Buchstaben in der Systembezeichnung haben folgende Bedeutung:

### Erster Buchstabe – Verhältnis der Stromquelle zur Erde

- **T** = Terra – Direkter Anschluss eines Punktes an Erde (z.B. Sternpunkt des Trafos)
- **I** = Isoliert – Kein Punkt ist direkt geerdet (oder nur hochohmig)

### Zweiter Buchstabe – Verhältnis der Körper zur Erde

- **T** = Terra – Körper sind über eigenen Erder mit Erde verbunden
- **N** = Neutralleiter – Körper sind mit dem geerdeten Punkt der Stromquelle verbunden

### Weitere Buchstaben (bei TN-Systemen)

- **S** = Separated – PE und N sind getrennt geführt (zwei separate Leiter)
- **C** = Combined – PE und N sind kombiniert als PEN (ein gemeinsamer Leiter)

## 10.3 Netzspannungen

**Einphasig:** 230 V zwischen L und N (Strangspannung).

**Dreiphasig:** 400 V zwischen zwei Außenleitern (Leiterspannung).

**Zusammenhang:** U_Leiter = U_Strang × √3 → 400 V = 230 V × 1,73

**Frequenz:** 50 Hz in Europa, 60 Hz in USA.

## 10.4 TN-S-System

**Aufbau:** PE und N sind durchgehend getrennt (S = Separated). Vom Trafo bis zur Steckdose zwei separate Leiter.

**Funktionsweise:** Bei Körperschluss fließt Fehlerstrom über PE zurück zur Quelle. Hoher Kurzschlussstrom → LS löst schnell aus.

**Vorteile:** EMV-freundlich (keine Betriebsströme auf PE), geringste Störungen, FI funktioniert einwandfrei.

**Anwendung:** Standard für Neuanlagen, EDV-Räume, empfindliche Elektronik.

## 10.5 TN-C-System

**Aufbau:** PE und N sind als PEN kombiniert (C = Combined). Nur ein Leiter für Schutz- und Neutralleiterfunktion.

**Funktionsweise:** Betriebsströme fließen über den PEN. Bei Körperschluss ebenfalls Auslösung durch hohen Strom.

**Nachteile:** Betriebsströme auf PEN können Gehäusespannungen verursachen. EMV-Probleme. Kein FI möglich!

**Anwendung:** Nur für Zuleitungen erlaubt, NICHT in Gebäuden für Endstromkreise!

## 10.6 TN-C-S-System

**Aufbau:** PEN in der Zuleitung vom Trafo bis zum Hausanschlusskasten (HAK). Dort Aufteilung in PE und N (C wird zu S).

**Funktionsweise:** Kombination aus TN-C (Zuleitung) und TN-S (Gebäudeinstallation).

**Vorteile:** Wirtschaftlich (weniger Leitungen in der Zuleitung), trotzdem FI-Schutz im Gebäude möglich.

**Anwendung:** Standard in Wohngebäuden in Österreich und Deutschland.

**Wichtig:** Nach der Auftrennung dürfen PE und N NIE wieder verbunden werden!

## 10.7 TT-System

**Aufbau:** Die Anlage hat einen eigenen Erder, der NICHT mit der Trafo-Erde verbunden ist. T = Terra beim Trafo, T = Terra bei der Anlage (zwei getrennte Erder).

**Funktionsweise:** Bei Körperschluss fließt der Fehlerstrom über den Anlagenerder zur Erde und zurück über den Trafo-Erder. Der Erdungswiderstand begrenzt den Strom.

**Wichtig:** FI zwingend erforderlich! Der Fehlerstrom ist oft zu gering für LS-Auslösung.

**Anwendung:** Ländliche Gebiete ohne durchgehenden PE, Baustellen, mobile Anlagen, Campingplätze.

## 10.8 IT-System

**Aufbau:** Keine direkte Erdverbindung der Stromquelle (I = Isoliert). Optional hochohmige Erdung oder Isolationsüberwachung.

**Funktionsweise:** Erster Erdschluss → kein geschlossener Stromkreis → kein Ausfall! Isolationsüberwachung (IMD) meldet den Fehler, Anlage läuft weiter.

**Zweiter Fehler:** Erst bei einem zweiten Fehler entsteht ein Kurzschluss → Abschaltung.

**Vorteile:** Höchste Verfügbarkeit, kein Ausfall bei erstem Fehler.

**Anwendung:** OP-Säle, Intensivstationen (Patientensicherheit), Bergbau, kritische Industrieanlagen.

## 10.9 Übersichtstabelle

| System | PE und N | Erdung Quelle | Erdung Anlage | Schutz | Anwendung |
|--------|----------|---------------|---------------|--------|-----------|
| TN-S | Getrennt (S) | Geerdet (T) | Über PE | LS/FI | Neuanlagen |
| TN-C | Kombiniert (C) | Geerdet (T) | Über PEN | Nur LS | Zuleitung |
| TN-C-S | C→S am HAK | Geerdet (T) | Über PE | LS/FI | Wohnbau |
| TT | Getrennt | Geerdet (T) | Eigener Erder (T) | FI Pflicht! | Baustelle |
| IT | Getrennt | Isoliert (I) | Eigener Erder | Iso-Wächter | Krankenhaus |

## 10.10 Stern- und Dreieckschaltung

**Sternschaltung (Y):** Wicklungsenden am Sternpunkt verbunden. U_Wicklung = 230 V, I_Leiter = I_Wicklung.

**Dreieckschaltung (Δ):** Wicklungen zwischen Außenleitern. U_Wicklung = 400 V, I_Leiter = I_Wicklung × √3.

**Motor 400V/690V:** Bei 400 V Netz → Dreieck, bei 690 V Netz → Stern.

**Phasenausfall:** Motor läuft mit reduzierter Leistung weiter, verbleibende Wicklungen überhitzen. Motorschutzrelais sollte auslösen.
