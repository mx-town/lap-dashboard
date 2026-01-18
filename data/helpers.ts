// ============================================================================
// HELPER FUNCTIONS - Mechatronik Lexikon
// ============================================================================

import type { ContentBlock, Category, Section, Entry } from './types';
import { categories } from './categories';
import { sections } from './sections';

// Helper function to convert old description/example to content blocks
export function createContentBlocks(description: string, example: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  
  // Split description into paragraphs
  const paragraphs = description.split(/\n\n+/).filter(p => p.trim());
  
  paragraphs.forEach((para) => {
    // Check for formulas - look for "Formel:" prefix or patterns like "Q = I × t"
    if (para.startsWith('Formel:')) {
      const formulaText = para.replace('Formel:', '').trim();
      // Extract formula and description
      const formulaMatch = formulaText.match(/^([^\.]+)/);
      const descMatch = formulaText.match(/\.\s*(.+)$/);
      if (formulaMatch) {
        const latex = formulaMatch[1]
          .replace(/×/g, '\\times')
          .replace(/²/g, '^2')
          .replace(/³/g, '^3')
          .replace(/√/g, '\\sqrt')
          .replace(/π/g, '\\pi')
          .replace(/φ/g, '\\varphi')
          .replace(/Σ/g, '\\sum')
          .replace(/_([a-zA-Z0-9]+)/g, '_{$1}');
        blocks.push({ 
          type: 'formula', 
          latex: latex.trim(),
          description: descMatch ? descMatch[1].trim() : undefined
        });
      } else {
        blocks.push({ type: 'paragraph', text: para });
      }
    } else if (para.match(/^[A-Z][a-z]+\s*[:=]\s*[A-Za-z0-9\s×\+\-\/\(\)²³√πφΣ_=]+$/)) {
      // Pattern like "Grundformel: P = U × I"
      const colonMatch = para.match(/^([^:]+):\s*(.+)$/);
      if (colonMatch) {
        const [, label, formula] = colonMatch;
        const latex = formula
          .replace(/×/g, '\\times')
          .replace(/²/g, '^2')
          .replace(/³/g, '^3')
          .replace(/√/g, '\\sqrt')
          .replace(/π/g, '\\pi')
          .replace(/φ/g, '\\varphi')
          .replace(/Σ/g, '\\sum')
          .replace(/_([a-zA-Z0-9]+)/g, '_{$1}');
        blocks.push({ type: 'formula', latex: latex.trim(), description: label.trim() });
      } else {
        blocks.push({ type: 'paragraph', text: para });
      }
    } else if (para.includes('•') || para.match(/^\d+\.\s/)) {
      // List detection - bullet points or numbered
      const items = para.split(/[•\n]/).map(i => i.trim()).filter(i => i && !i.match(/^\d+\.$/));
      if (items.length > 1) {
        blocks.push({ type: 'list', items });
      } else {
        blocks.push({ type: 'paragraph', text: para });
      }
    } else if (para.match(/^Aufbau:/) || para.match(/^Funktionsweise:/) || para.match(/^Anwendung:/)) {
      // Definition-like blocks
      blocks.push({ type: 'definition', text: para });
    } else {
      blocks.push({ type: 'paragraph', text: para });
    }
  });
  
  // Add example if present and meaningful
  if (example && example.trim() && !example.includes("Historische Geräte")) {
    blocks.push({ type: 'example', text: example });
  }
  
  return blocks;
}

// Map old subcategory IDs to new section IDs
export const subcategoryToSectionMap: Record<string, string> = {
  "basisschutz-fehlerschutz": "basisschutz-fehlerschutz",
  "schutzklassen": "schutzklassen",
  "ip-schutzarten": "ip-schutzarten",
  "sicherheitskonzepte": "sicherheitskonzepte",
  "grundgesetze": "grundgesetze",
  "leistung-arbeit": "leistung-arbeit",
  "widerstaende-schaltungen": "widerstaende-schaltungen",
  "spannungs-stromteiler": "spannungs-stromteiler",
  "schaltschrank-aufbau": "schaltschrank-aufbau",
  "schutzschalter": "schutzschalter",
  "schaltgeraete": "schaltgeraete",
  "komponenten": "komponenten",
  "passive-bauelemente": "passive-bauelemente",
  "dioden": "dioden",
  "transistoren": "transistoren",
  "spezialbauelemente": "spezialbauelemente",
  "leitungsbezeichnung": "leitungsbezeichnung",
  "aderkennzeichnung": "aderkennzeichnung",
  "steckertypen": "steckertypen",
  "metallarten": "metallarten",
  "bearbeitungsverfahren": "bearbeitungsverfahren",
  "gewinde": "gewinde",
  "verbindungselemente": "verbindungselemente",
  "messgeraete": "messgeraete",
  "lehren": "lehren",
  "pneumatik-grundlagen": "pneumatik-grundlagen",
  "pneumatik-komponenten": "pneumatik-komponenten",
  "zylinder": "zylinder",
  "ventile": "ventile",
  "elektropneumatik": "elektropneumatik",
  "grundlagen": "grundlagen-steuerung",
  "sps-grundlagen": "sps-grundlagen",
  "signalarten-sensoren": "signalarten-sensoren",
  "programmierung": "programmierung",
  "netzsysteme-grundbegriffe": "netzsysteme-grundbegriffe",
  "netzspannungen": "netzspannungen",
  "stern-dreieck": "stern-dreieck",
  "netzsysteme-typen": "netzsysteme-typen",
};

// Helper lookups
export const sectionsByCategory: Record<string, Section[]> = {};
sections.forEach(section => {
  if (!sectionsByCategory[section.categoryId]) {
    sectionsByCategory[section.categoryId] = [];
  }
  sectionsByCategory[section.categoryId].push(section);
});

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

export function getSectionById(id: string): Section | undefined {
  return sections.find(s => s.id === id);
}

export function getSectionsByCategory(categoryId: string): Section[] {
  return sectionsByCategory[categoryId] || [];
}

export function getEntriesBySection(entries: Entry[], sectionId: string): Entry[] {
  return entries.filter(e => e.sectionId === sectionId);
}
