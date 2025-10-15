const fs = require('fs');
const path = require('path');

const calculatorsDir = path.join(__dirname, '..', 'calculators');
const files = fs.readdirSync(calculatorsDir).filter(f => f.endsWith('.html'));

const baseUrl = 'https://abdullahamor26.github.io/calcsuite-pro';
const today = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/browse.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/search.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`;

files.forEach(file => {
  sitemap += `  <url>
    <loc>${baseUrl}/calculators/${file}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

sitemap += `</urlset>`;

fs.writeFileSync(path.join(__dirname, '..', 'sitemap.xml'), sitemap);
console.log(`✅ Sitemap generated with ${files.length + 3} URLs`);
