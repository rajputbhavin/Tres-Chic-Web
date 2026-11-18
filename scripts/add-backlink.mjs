import fs from 'node:fs';

let content = fs.readFileSync('src/data/blogs.ts', 'utf8');
const target = "Miami's beautiful outdoor settings are a major attraction for destination weddings.\\n\\nHowever, South Florida's subtropical climate";
const replacement = "Miami's beautiful outdoor settings are a major attraction for destination weddings. Explore our detailed seasonal analysis on [the best time to get married in Miami](https://treschiceventplanning.com/blogs/best-time-to-get-married-in-miami) for month-by-month weather data and hurricane contingency planning.\\n\\nHowever, South Florida's subtropical climate";

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync('src/data/blogs.ts', content, 'utf8');
  console.log('Successfully added internal backlink in destination guide!');
} else {
  console.log('Target string not found');
}
