// ============================================================================
// MAIN DATA EXPORT - Mechatronik Lexikon
// ============================================================================

// Types
export type { ContentBlock, Category, Section, Entry } from './types';

// Categories
export { categories } from './categories';

// Sections
export { sections } from './sections';

// Entries
export { entries } from './entries';

// Helper functions
export {
  createContentBlocks,
  subcategoryToSectionMap,
  sectionsByCategory,
  getCategoryById,
  getSectionById,
  getSectionsByCategory,
  getEntriesBySection,
  getEntryById,
} from './helpers';

// Helper lookups for entries
import type { Entry } from './types';
import { entries } from './entries';

export const entriesBySection: Record<string, Entry[]> = {};
entries.forEach(entry => {
  if (!entriesBySection[entry.sectionId]) {
    entriesBySection[entry.sectionId] = [];
  }
  entriesBySection[entry.sectionId].push(entry);
});
