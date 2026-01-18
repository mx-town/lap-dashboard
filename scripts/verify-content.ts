// Verification script to check all sections have content
import { entries, sections } from '../data/index';

const emptySections: typeof sections = [];
const sectionsWithContent: typeof sections = [];

sections.forEach(section => {
  const sectionEntries = entries.filter(e => e.sectionId === section.id);
  if (sectionEntries.length === 0) {
    emptySections.push(section);
  } else {
    sectionsWithContent.push(section);
  }
});

console.log('\n=== Content Verification ===\n');
console.log(`Total sections: ${sections.length}`);
console.log(`Sections with content: ${sectionsWithContent.length}`);
console.log(`Empty sections: ${emptySections.length}\n`);

if (emptySections.length > 0) {
  console.log('⚠️  Empty sections found:\n');
  emptySections.forEach(section => {
    console.log(`  - ${section.number} ${section.title} (${section.id})`);
  });
  console.log('\n');
} else {
  console.log('✅ All sections have content!\n');
}

// Group by category
const byCategory: Record<string, { total: number; empty: number; sections: typeof sections }> = {};

sections.forEach(section => {
  if (!byCategory[section.categoryId]) {
    byCategory[section.categoryId] = { total: 0, empty: 0, sections: [] };
  }
  byCategory[section.categoryId].total++;
  byCategory[section.categoryId].sections.push(section);
  
  const sectionEntries = entries.filter(e => e.sectionId === section.id);
  if (sectionEntries.length === 0) {
    byCategory[section.categoryId].empty++;
  }
});

console.log('\n=== By Category ===\n');
Object.entries(byCategory).forEach(([categoryId, stats]) => {
  const status = stats.empty === 0 ? '✅' : '⚠️';
  console.log(`${status} ${categoryId}: ${stats.total - stats.empty}/${stats.total} sections have content`);
  if (stats.empty > 0) {
    stats.sections.forEach(section => {
      const sectionEntries = entries.filter(e => e.sectionId === section.id);
      if (sectionEntries.length === 0) {
        console.log(`     - ${section.number} ${section.title}`);
      }
    });
  }
});
