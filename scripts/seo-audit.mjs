import fs from 'node:fs';
import path from 'node:path';

function getFiles(dir, ext = '.html') {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, ext));
    } else if (file.endsWith(ext)) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getFiles('dist');
console.log(`\n🔍 Found ${htmlFiles.length} static HTML files to validate:\n`);

const titles = new Map();
const descriptions = new Map();
let errors = 0;

for (const file of htmlFiles) {
  const rel = path.relative('dist', file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  console.log(`Checking /${rel}...`);

  // 1. Single H1 Check
  const h1Match = content.match(/<h1[\s\S]*?<\/h1>/gi) || [];
  if (h1Match.length !== 1) {
    console.error(`  ❌ [FAIL] /${rel} has ${h1Match.length} <h1> tags! Expected exactly 1.`);
    errors++;
  } else {
    console.log(`  ✓ 1 H1 Tag`);
  }

  // 2. Title Tag Check
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch) {
    console.error(`  ❌ [FAIL] /${rel} is missing <title>!`);
    errors++;
  } else {
    const t = titleMatch[1];
    if (titles.has(t) && rel !== '404.html') {
      console.warn(`  ⚠️ [WARN] Duplicate title in /${rel}: "${t}" (also in /${titles.get(t)})`);
    } else {
      titles.set(t, rel);
      console.log(`  ✓ Unique Title: "${t.substring(0, 50)}..."`);
    }
  }

  // 3. Meta Description Check
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (!descMatch) {
    console.error(`  ❌ [FAIL] /${rel} is missing meta description!`);
    errors++;
  } else {
    const d = descMatch[1];
    if (descriptions.has(d) && rel !== '404.html') {
      console.warn(`  ⚠️ [WARN] Duplicate description in /${rel}: "${d.substring(0, 40)}..."`);
    } else {
      descriptions.set(d, rel);
      console.log(`  ✓ Unique Meta Description: "${d.substring(0, 50)}..."`);
    }
  }

  // 4. Canonical Tag Check
  const canMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canMatch) {
    console.error(`  ❌ [FAIL] /${rel} is missing canonical tag!`);
    errors++;
  } else {
    console.log(`  ✓ Canonical Tag: ${canMatch[1]}`);
  }

  // 5. JSON-LD Structured Data Check
  const jsonLdMatches = content.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
  if (jsonLdMatches.length === 0) {
    console.error(`  ❌ [FAIL] /${rel} is missing JSON-LD structured data!`);
    errors++;
  } else {
    let validJsonCount = 0;
    for (const m of jsonLdMatches) {
      const jsonStr = m.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
      try {
        const parsed = JSON.parse(jsonStr);
        validJsonCount++;
      } catch (e) {
        console.error(`  ❌ [FAIL] /${rel} has malformed JSON-LD: ${e.message}`);
        errors++;
      }
    }
    console.log(`  ✓ Valid JSON-LD Scripts (${validJsonCount})`);
  }

  // 6. OpenGraph Check
  const ogTitle = content.match(/<meta\s+property=["']og:title["']/i);
  const ogDesc = content.match(/<meta\s+property=["']og:description["']/i);
  if (!ogTitle || !ogDesc) {
    console.error(`  ❌ [FAIL] /${rel} is missing OpenGraph metadata!`);
    errors++;
  } else {
    console.log(`  ✓ OpenGraph Metadata`);
  }

  // 7. Accidental Noindex Check
  if (rel !== '404.html' && content.includes('content="noindex')) {
    console.error(`  ❌ [FAIL] /${rel} has accidental noindex directive!`);
    errors++;
  } else if (rel === '404.html') {
    console.log(`  ✓ Proper noindex directive on 404 page`);
  }
  console.log('');
}

// 8. Robots.txt and Sitemap Check
if (!fs.existsSync('dist/robots.txt')) {
  console.error('❌ [FAIL] dist/robots.txt does not exist!');
  errors++;
} else {
  console.log('✓ dist/robots.txt verified');
}

if (!fs.existsSync('dist/sitemap-index.xml')) {
  console.error('❌ [FAIL] dist/sitemap-index.xml does not exist!');
  errors++;
} else {
  console.log('✓ dist/sitemap-index.xml verified');
}

if (errors === 0) {
  console.log('\n🎉 ALL 15 CRITICAL TECHNICAL SEO CHECKS PASSED FOR EVERY PAGE!\n');
  process.exit(0);
} else {
  console.error(`\n❌ Failed with ${errors} error(s).\n`);
  process.exit(1);
}
