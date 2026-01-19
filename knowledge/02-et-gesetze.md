---
id: et-gesetze
number: 2
title: ET Gesetze
subtitle: Elektrotechnische Gesetze und Grundlagen
---

# 2. ET Gesetze

Elektrotechnische Gesetze und Grundlagen

## 2.1 Ladungsgesetz

**Formel:** Q = I × t

**Bedeutung:** Die elektrische Ladung ist das Produkt aus Stromstärke und Zeit.

**Einheit:** Coulomb (C). 1 C = 1 A × 1 s

**Umstellungen:**
- I = Q / t
- t = Q / I

**Merkhilfe:** 1 Ah (Ampere-Stunde) = 3600 C – relevant für Akkukapazitäten.

## 2.2 Ohmsches Gesetz

**Formel:** U = R × I

**Bedeutung:** Die Spannung ist proportional zum Strom. Der Widerstand ist der Proportionalitätsfaktor.

**Umstellungen:**
- R = U / I
- I = U / R

**Eselsbrücke:** "URI" – Spannung = Widerstand × Strom

## 2.3 Kirchhoffsche Gesetze

### 1. Knotenregel

Die Summe aller Ströme an einem Knotenpunkt ist null.

ΣI = 0 bzw. ΣI_zufließend = ΣI_abfließend

**Anwendung:** Berechnung von Strömen in Parallelschaltungen und verzweigten Netzen.

### 2. Maschenregel

Die Summe aller Spannungen in einer geschlossenen Masche ist null.

ΣU = 0 bzw. U_Quelle = ΣU_Verbraucher

**Anwendung:** Berechnung von Spannungen in Reihenschaltungen und Maschen.

## 2.4 Elektrische Leistung

**Grundformel:** P = U × I

**Abgeleitete Formeln:**
- P = I² × R (bei bekanntem Strom)
- P = U² / R (bei bekannter Spannung)

**Einheit:** Watt (W). 1 kW = 1000 W

### Wechselstrom – Leistungsarten

**Wirkleistung P:** Tatsächlich umgesetzte Leistung in Watt (W).
- P = U × I × cos φ

**Blindleistung Q:** Pendelt zwischen Quelle und Verbraucher in Var (var).
- Q = U × I × sin φ

**Scheinleistung S:** S = U × I in Voltampere (VA).
- Es gilt: S² = P² + Q²

**Leistungsfaktor:** cos φ = P / S (Verhältnis Wirk- zu Scheinleistung)

## 2.5 Elektrische Arbeit

**Formel:** W = P × t

**Einheit:** Wattsekunde (Ws) oder Joule (J), Kilowattstunde (kWh)

**Umrechnung:** 1 kWh = 3.600.000 Ws = 3,6 MJ

**Praxis:** Stromzähler messen in kWh – Grundlage für die Stromrechnung.

## 2.6 Widerstandsgesetz

**Formel:** R = ρ × l / A

- **ρ (Rho):** Spezifischer Widerstand in Ω·mm²/m
- **l:** Leiterlänge in m
- **A:** Leiterquerschnitt in mm²

**Wichtige ρ-Werte bei 20°C:**
- Kupfer = 0,0178 Ω·mm²/m
- Aluminium = 0,028 Ω·mm²/m

## 2.7 Reihen- und Parallelschaltung

### Reihenschaltung

R_ges = R1 + R2 + R3 + ...

→ Strom überall gleich, Spannung teilt sich auf.

### Parallelschaltung

1/R_ges = 1/R1 + 1/R2 + 1/R3 + ...

**Zwei parallel:** R_ges = (R1 × R2) / (R1 + R2)

→ Spannung überall gleich, Strom teilt sich auf.

**Merke:** Die Parallelschaltung ergibt immer einen kleineren Gesamtwiderstand als der kleinste Einzelwiderstand.

## 2.8 Spannungs- und Stromteiler

### Spannungsteiler

U2 = U_ges × R2 / (R1 + R2)

→ Spannung teilt sich im Verhältnis der Widerstände.

### Stromteiler

I1 = I_ges × R2 / (R1 + R2)

→ Strom teilt sich umgekehrt proportional zu den Widerständen. Durch den kleineren Widerstand fließt mehr Strom.
