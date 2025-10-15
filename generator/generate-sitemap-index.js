const fs = require('fs');
const path = require('path');

const calculatorsDir = path.join(__dirname, '..', 'calculators');
const files = fs.readdirSync(calculatorsDir).filter(f => f.endsWith('.html'));

console.log(`📊 Total calculators: ${files.length}`);
console.log(`📝 Generating sitemap index...\n`);

const baseUrl = 'https://calcsuite-pro.vercel.app';
const today = new Date().toISOString().split('T')[0];
const filesPerSitemap = 5000; // Google limit is 50K, we use 5K for safety
const sitemapCount = Math.ceil(files.length / filesPerSitemap);

console.log(`✅ Will create ${sitemapCount} sitemap files\n`);

// Generate individual sitemaps
for (let i = 0; i < sitemapCount; i++) {
  const start = i * filesPerSitemap;
  const end = Math.min(start + filesPerSitemap, files.length);
  const sitemapFiles = files.slice(start, end);
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

  sitemapFiles.forEach(file => {
    sitemap += `  <url>
    <loc>${baseUrl}/calculators/${file}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;
  
  fs.writeFileSync(path.join(__dirname, '..', `sitemap-${i + 1}.xml`), sitemap);
  console.log(`✅ Generated sitemap-${i + 1}.xml (${sitemapFiles.length} URLs)`);
}

// Generate sitemap index
let sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (let i = 0; i < sitemapCount; i++) {
  sitemapIndex += `  <sitemap>
    <loc>${baseUrl}/sitemap-${i + 1}.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
`;
}

sitemapIndex += `</sitemapindex>`;

fs.writeFileSync(path.join(__dirname, '..', 'sitemap.xml'), sitemapIndex);

console.log(`\n✅ Generated sitemap.xml (index file)`);
console.log(`\n📊 Summary:`);
console.log(`   - Total URLs: ${files.length + 1}`);
console.log(`   - Sitemap files: ${sitemapCount}`);
console.log(`   - Index file: sitemap.xml`);
console.log(`\n🎯 Submit to Google Search Console: ${baseUrl}/sitemap.xml`);
