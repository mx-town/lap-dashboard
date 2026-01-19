// ============================================================================
// HELPER FUNCTIONS - Mechatronik Lexikon
// ============================================================================

import type { Category, Section, Entry } from './types';
import { categories } from './categories';
import { sections } from './sections';

// Internal lookup for getSectionsByCategory
const sectionsByCategory: Record<string, Section[]> = {};
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
