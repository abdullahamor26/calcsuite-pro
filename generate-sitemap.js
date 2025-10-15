const fs = require('fs');
const path = require('path');

const baseUrl = 'https://abdullahamor26.github.io/calcsuite-pro';
const calcDir = './calculators';
const files = fs.readdirSync(calcDir).filter(f => f.endsWith('.html'));

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Add homepage
sitemap += `<url><loc>${baseUrl}/</loc><priority>1.0</priority></url>\n`;

// Add all calculators
files.forEach(file => {
  sitemap += `<url><loc>${baseUrl}/calculators/${file}</loc><priority>0.8</priority></url>\n`;
});

sitemap += '</urlset>';

fs.writeFileSync('sitemap.xml', sitemap);
console.log(`Generated sitemap with ${files.length + 1} URLs`);
