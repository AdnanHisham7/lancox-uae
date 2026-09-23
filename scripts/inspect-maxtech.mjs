import fs from 'fs';

const content = fs.readFileSync('C:/Users/Adnan Hisham/.gemini/antigravity-ide/brain/ea4e6b7d-b32b-447a-a6be-697a69d45a69/.system_generated/steps/486/content.md', 'utf8');

// Find headings and paragraphs
const h1s = [...content.matchAll(/<h1[^>]*>(.*?)<\/h1>/gis)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
const h2s = [...content.matchAll(/<h2[^>]*>(.*?)<\/h2>/gis)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
const h3s = [...content.matchAll(/<h3[^>]*>(.*?)<\/h3>/gis)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

console.log('--- H1 ---', h1s);
console.log('--- H2 ---', h2s);
console.log('--- H3 ---', h3s);

// Look for slider text
const sliderMatches = [...content.matchAll(/class="[^"]*swiper-slide[^"]*"[^>]*>([\s\S]*?)<\/div>/gis)];
console.log('--- Slider elements ---', sliderMatches.length);
for (const sm of sliderMatches.slice(0, 5)) {
  console.log('Slide snippet:', sm[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 150));
}

// Search for nectar-slider
const nectarSlides = [...content.matchAll(/<div class="[^"]*swiper-slide[^"]*"[^>]*data-bg-alignment="[^"]*"[^>]*>([\s\S]*?)<\/div>/gis)];
console.log('--- Nectar slides ---', nectarSlides.length);

// Extract all text in the main body (excluding scripts/styles)
const cleanText = content
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

console.log('--- First 1500 chars of body text ---');
console.log(cleanText.substring(0, 1500));
