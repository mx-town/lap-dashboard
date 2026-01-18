// ============================================================================
// TYPE DEFINITIONS - Mechatronik Lexikon
// ============================================================================

// Rich content blocks for flexible rendering
export type ContentBlock =
  | { type: 'definition'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; title?: string; items: string[] }
  | { type: 'formula'; latex: string; description?: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'example'; title?: string; text: string }
  | { type: 'warning'; text: string }
  | { type: 'note'; text: string };

// Category - Top level (10 total)
export interface Category {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: string;
}

// Section - Second level (~70 total)
export interface Section {
  id: string;
  categoryId: string;
  number: string; // e.g., "1.1", "2.3"
  title: string;
}

// Entry - Individual concepts within sections
export interface Entry {
  id: string;
  sectionId: string;
  title: string;
  content: ContentBlock[];
  image?: string;
}
