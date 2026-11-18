import fs from 'node:fs';

const raw = fs.readFileSync('The Best Time to Get Married in Miami (and the Plan B Behind Every Great Date).md', 'utf8');

// Strip out publishing sheet
const parts = raw.split('## Publishing sheet');
let articleBody = parts[0].trim().replace(/---\s*$/, '').trim();

// Strip out redundant byline
articleBody = articleBody.replace(/# The Best Time to Get Married in Miami \(and the Plan B Behind Every Great Date\)\s*\n\s*By Mariane Fahmy[^\n]+\n\n/, '# The Best Time to Get Married in Miami (and the Plan B Behind Every Great Date)\n\n');

let blogsTs = fs.readFileSync('src/data/blogs.ts', 'utf8');

// Add import blogImg6 if not present
if (!blogsTs.includes('blogImg6')) {
  blogsTs = blogsTs.replace(
    "import blogImg5 from '@/assets/blog/5.webp';",
    "import blogImg5 from '@/assets/blog/5.webp';\nimport blogImg6 from '@/assets/gallery/tented-waterfront-reception.jpg';"
  );
}

// Make sure previous post 5 is featured: false
blogsTs = blogsTs.replace('id: "5",\n    slug: "luxury-private-celebrations-miami",\n    title: "Beyond Weddings: Luxury Private Celebrations and Milestone Events in Miami",\n    excerpt: "Planning a milestone birthday, anniversary, shower or private celebration in Miami? Discover how thoughtful event planning and design make every occasion unforgettable.",\n    category: "Private Celebrations",\n    readTime: "7 min read",\n    date: "November 5, 2026",\n    isoDate: "2026-11-05",\n    image: blogImg5,\n    imageAlt: "Luxury private celebration and milestone gala in Miami",\n    featured: true,', 
'id: "5",\n    slug: "luxury-private-celebrations-miami",\n    title: "Beyond Weddings: Luxury Private Celebrations and Milestone Events in Miami",\n    excerpt: "Planning a milestone birthday, anniversary, shower or private celebration in Miami? Discover how thoughtful event planning and design make every occasion unforgettable.",\n    category: "Private Celebrations",\n    readTime: "7 min read",\n    date: "November 5, 2026",\n    isoDate: "2026-11-05",\n    image: blogImg5,\n    imageAlt: "Luxury private celebration and milestone gala in Miami",\n    featured: false,');

const newPostObject = `  {
    id: "6",
    slug: "best-time-to-get-married-in-miami",
    title: "The Best Time to Get Married in Miami (and the Plan B Behind Every Great Date)",
    excerpt: "When is the best time to get married in Miami? A luxury planner breaks down the seasons, hurricane season, Art Basel and the Plan B every date needs.",
    category: "Planning Guidance",
    readTime: "8 min read",
    date: "November 12, 2026",
    isoDate: "2026-11-12",
    image: blogImg6,
    imageAlt: "Luxury tented waterfront wedding reception in Miami with weather-ready design by Très CHIC",
    featured: true,
    author: { name: "Mariane Fahmy", role: "Founder & Lead Luxury Designer" },
    tags: ["Miami Wedding Planning", "Best Time to Marry Miami", "Wedding Weather Miami", "Miami Wedding Planner"],
    content: ${JSON.stringify(articleBody)},
  },
`;

blogsTs = blogsTs.replace('export const blogPosts: BlogPost[] = [\n', 'export const blogPosts: BlogPost[] = [\n' + newPostObject);

fs.writeFileSync('src/data/blogs.ts', blogsTs, 'utf8');
console.log('Successfully updated src/data/blogs.ts with new post!');
