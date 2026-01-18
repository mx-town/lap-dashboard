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
} from './helpers';
