import fs from 'node:fs';

const pages = [
  { file: 'src/routes/full-planning.tsx', expectedCanonical: 'https://treschiceventplanning.com/full-planning' },
  { file: 'src/routes/partial-planning.tsx', expectedCanonical: 'https://treschiceventplanning.com/partial-planning' },
  { file: 'src/routes/wedding-coordination.tsx', expectedCanonical: 'https://treschiceventplanning.com/wedding-coordination' },
  { file: 'src/routes/multicultural-weddings.tsx', expectedCanonical: 'https://treschiceventplanning.com/multicultural-weddings' },
];

console.log('=== SEO VERIFICATION AUDIT ===\n');

for (const p of pages) {
  const code = fs.readFileSync(p.file, 'utf8');
  const hasCanonical = code.includes(p.expectedCanonical);
  const hasServiceSchema = code.includes('"@type": ["Service", "WeddingService"]') || code.includes('"@type": "Service"');
  const hasFaqSchema = code.includes('"@type": "FAQPage"');
  const hasBreadcrumb = code.includes('"@type": "BreadcrumbList"');
  const hasOffer = code.includes('"@type": "Offer"') || code.includes('"@type": "AggregateOffer"');
  const hasSeoH1 = code.includes('seoH1=');

  console.log(`File: ${p.file}`);
  console.log(`  Canonical match: ${hasCanonical ? 'PASS' : 'FAIL'} (${p.expectedCanonical})`);
  console.log(`  Service Schema: ${hasServiceSchema ? 'PASS' : 'FAIL'}`);
  console.log(`  Offer/Price Schema: ${hasOffer ? 'PASS' : 'FAIL'}`);
  console.log(`  FAQPage Schema: ${hasFaqSchema ? 'PASS' : 'FAIL'}`);
  console.log(`  Breadcrumb Schema: ${hasBreadcrumb ? 'PASS' : 'FAIL'}`);
  console.log(`  SEO H1 tag: ${hasSeoH1 ? 'PASS' : 'FAIL'}`);
  console.log('');
}

