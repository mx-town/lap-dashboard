// ============================================================================
// SECTIONS - Mechatronik Lexikon
// ============================================================================

import type { Section } from './types';

export const sections: Section[] = [
  // 1. Schutzkonzepte
  { id: "basisschutz-fehlerschutz", categoryId: "schutzkonzepte", number: "1.1", title: "Basisschutz und Fehlerschutz" },
  { id: "schutzklassen", categoryId: "schutzkonzepte", number: "1.2", title: "Schutzklassen" },
  { id: "ip-schutzarten", categoryId: "schutzkonzepte", number: "1.3", title: "IP-Schutzarten" },
  { id: "sicherheitskonzepte", categoryId: "schutzkonzepte", number: "1.4", title: "Sicherheitskonzepte" },
  
  // 2. ET Gesetze
  { id: "grundgesetze", categoryId: "et-gesetze", number: "2.1", title: "Grundgesetze" },
  { id: "leistung-arbeit", categoryId: "et-gesetze", number: "2.2", title: "Leistung und Arbeit" },
  { id: "widerstaende-schaltungen", categoryId: "et-gesetze", number: "2.3", title: "Widerstände und Schaltungen" },
  { id: "spannungs-stromteiler", categoryId: "et-gesetze", number: "2.4", title: "Spannungs- und Stromteiler" },
  
  // 3. Schaltkasten
  { id: "schaltschrank-aufbau", categoryId: "schaltkasten", number: "3.1", title: "Aufbau Schaltschrank" },
  { id: "schutzschalter", categoryId: "schaltkasten", number: "3.2", title: "Schutzschalter" },
  { id: "schaltgeraete", categoryId: "schaltkasten", number: "3.3", title: "Schaltgeräte" },
  { id: "komponenten", categoryId: "schaltkasten", number: "3.4", title: "Komponenten" },
  
  // 4. Halbleitertechnik
  { id: "passive-bauelemente", categoryId: "halbleitertechnik", number: "4.1", title: "Passive Bauelemente" },
  { id: "dioden", categoryId: "halbleitertechnik", number: "4.2", title: "Dioden" },
  { id: "transistoren", categoryId: "halbleitertechnik", number: "4.3", title: "Transistoren" },
  { id: "spezialbauelemente", categoryId: "halbleitertechnik", number: "4.4", title: "Spezialbauelemente" },
  
  // 5. Kabel/Leitungen
  { id: "leitungsbezeichnung", categoryId: "kabel-leitungen", number: "5.1", title: "Leitungsbezeichnung" },
  { id: "aderkennzeichnung", categoryId: "kabel-leitungen", number: "5.2", title: "Aderkennzeichnung" },
  { id: "steckertypen", categoryId: "kabel-leitungen", number: "5.3", title: "Steckertypen" },
  
  // 6. Mechanische Bearbeitung
  { id: "metallarten", categoryId: "m-bearbeitung", number: "6.1", title: "Metallarten" },
  { id: "bearbeitungsverfahren", categoryId: "m-bearbeitung", number: "6.2", title: "Bearbeitungsverfahren" },
  { id: "gewinde", categoryId: "m-bearbeitung", number: "6.3", title: "Gewindeschneiden und Gewindearten" },
  { id: "verbindungselemente", categoryId: "m-bearbeitung", number: "6.4", title: "Schrauben und Verbindungselemente" },
  
  // 7. Mechanisches Messen
  { id: "messgeraete", categoryId: "m-messen", number: "7.1", title: "Messgeräte" },
  { id: "lehren", categoryId: "m-messen", number: "7.2", title: "Lehren" },
  
  // 8. Pneumatik
  { id: "pneumatik-grundlagen", categoryId: "pneumatik", number: "8.1", title: "Pneumatik Grundlagen" },
  { id: "zylinder", categoryId: "pneumatik", number: "8.2", title: "Zylinder" },
  { id: "ventile", categoryId: "pneumatik", number: "8.3", title: "Wegeventile" },
  { id: "pneumatik-komponenten", categoryId: "pneumatik", number: "8.4", title: "Komponenten" },
  { id: "elektropneumatik", categoryId: "pneumatik", number: "8.5", title: "Elektropneumatik" },
  
  // 9. Steuerungstechnik/SPS
  { id: "grundlagen-steuerung", categoryId: "steuerungstechnik", number: "9.1", title: "Grundlagen" },
  { id: "sps-grundlagen", categoryId: "steuerungstechnik", number: "9.2", title: "SPS-Grundlagen" },
  { id: "signalarten-sensoren", categoryId: "steuerungstechnik", number: "9.3", title: "Signalarten und Sensoren" },
  { id: "programmierung", categoryId: "steuerungstechnik", number: "9.4", title: "Programmierung" },
  
  // 10. Netzsysteme
  { id: "netzsysteme-grundbegriffe", categoryId: "netzsysteme", number: "10.1", title: "Grundbegriffe" },
  { id: "netzspannungen", categoryId: "netzsysteme", number: "10.2", title: "Netzspannungen" },
  { id: "stern-dreieck", categoryId: "netzsysteme", number: "10.3", title: "Stern- und Dreieckschaltung" },
  { id: "netzsysteme-typen", categoryId: "netzsysteme", number: "10.4", title: "Netzsysteme" },
];
