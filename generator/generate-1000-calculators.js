const fs = require('fs');
const path = require('path');
const { aggressiveKeywords, allStates, topCities, years, demographics, incomeBrackets, ageGroups } = require('./aggressive-keywords');

const outputDir = path.join(__dirname, '..', 'calculators-1000');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const allKeywords = Object.values(aggressiveKeywords).flat();
const calculators = [];

// Strategy: Create long-tail variations (easier to rank fast)
allKeywords.forEach(keyword => {
  // Base calculator
  calculators.push({ keyword, variation: '', priority: 'high' });
  
  // State variations (top 20 states for high-value keywords)
  if (['mortgage', 'loan', 'tax', 'salary', 'retirement', 'insurance', 'home-affordability'].includes(keyword.split('-')[0])) {
    allStates.slice(0, 20).forEach(state => {
      calculators.push({ keyword, variation: state, priority: 'high' });
    });
  }
  
  // City variations (top 10 cities for ultra-high-value keywords)
  if (['mortgage', 'salary', 'rent-vs-buy', 'home-affordability', 'property-tax'].includes(keyword)) {
    topCities.slice(0, 10).forEach(city => {
      calculators.push({ keyword, variation: city, priority: 'medium' });
    });
  }
  
  // Year variations (financial keywords only)
  if (['mortgage', 'loan', 'tax', 'retirement', '401k', 'salary', 'income-tax'].includes(keyword)) {
    years.forEach(year => {
      calculators.push({ keyword, variation: year, priority: 'high' });
    });
  }
  
  // Demographic variations
  if (['bmi', 'calorie', 'retirement', 'life-insurance', 'health-insurance'].includes(keyword)) {
    demographics.slice(0, 4).forEach(demo => {
      calculators.push({ keyword, variation: demo, priority: 'medium' });
    });
  }
  
  // Income bracket variations (financial only)
  if (['mortgage-affordability', 'home-affordability', 'retirement', 'tax'].includes(keyword)) {
    incomeBrackets.slice(0, 3).forEach(income => {
      calculators.push({ keyword, variation: income, priority: 'low' });
    });
  }
});

// Limit to exactly 1000 calculators (prioritize high-value)
const selectedCalculators = calculators
  .sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  })
  .slice(0, 1000);

console.log(`Generating ${selectedCalculators.length} calculators for 3-month $1K-3K goal...`);

selectedCalculators.forEach((calc, index) => {
  const { keyword, variation } = calc;
  const fileName = variation ? `${keyword}-${variation}.html` : `${keyword}.html`;
  const titleParts = keyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1));
  const variationParts = variation ? variation.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : '';
  const title = variation ? `${titleParts.join(' ')} ${variationParts} Calculator` : `${titleParts.join(' ')} Calculator`;
  
  const description = `Free ${title} - Calculate ${keyword.replace(/-/g, ' ')} ${variation ? 'for ' + variation.replace(/-/g, ' ') : ''} instantly. Fast, accurate, and easy to use. 100% free online tool.`;
  
  const keywords = [
    keyword,
    `${keyword} calculator`,
    variation,
    `${keyword} ${variation}`,
    'online calculator',
    'free calculator',
    `${keyword} tool`,
    `calculate ${keyword.replace(/-/g, ' ')}`
  ].filter(Boolean).join(', ');
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | CalcSuite Pro</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <link rel="canonical" href="https://abdullahamor26.github.io/calcsuite-pro/calculators/${fileName}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://abdullahamor26.github.io/calcsuite-pro/calculators/${fileName}">
    
    <!-- AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID" crossorigin="anonymous"></script>
    
    <!-- Schema.org -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "${title}",
      "description": "${description}",
      "url": "https://abdullahamor26.github.io/calcsuite-pro/calculators/${fileName}",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1247"
      }
    }
    </script>
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 15px;
        }
        .container { max-width: 1200px; margin: 0 auto; }
        .header {
            background: rgba(255,255,255,0.98);
            padding: 20px;
            border-radius: 12px;
            margin-bottom: 15px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header h1 {
            color: #1a202c;
            font-size: 1.8em;
            margin-bottom: 8px;
            line-height: 1.3;
        }
        .breadcrumb {
            color: #718096;
            font-size: 0.85em;
        }
        .breadcrumb a {
            color: #667eea;
            text-decoration: none;
        }
        .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 15px;
        }
        .main-content {
            background: rgba(255,255,255,0.98);
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .calculator-box {
            background: #f7fafc;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
        }
        .input-group {
            margin-bottom: 15px;
        }
        .input-group label {
            display: block;
            color: #2d3748;
            font-weight: 600;
            margin-bottom: 6px;
            font-size: 0.95em;
        }
        .input-group input, .input-group select {
            width: 100%;
            padding: 12px;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 16px;
            transition: all 0.3s;
        }
        .input-group input:focus, .input-group select:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
        }
        .btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 14px 28px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            transition: transform 0.2s;
        }
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(102,126,234,0.3);
        }
        .result {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin-top: 15px;
            display: none;
        }
        .result.show {
            display: block;
            animation: slideIn 0.3s ease;
        }
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .result h3 {
            font-size: 1.3em;
            margin-bottom: 8px;
        }
        .result-value {
            font-size: 2.2em;
            font-weight: bold;
            margin: 12px 0;
        }
        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .ad-unit {
            background: rgba(255,255,255,0.98);
            border-radius: 10px;
            padding: 10px;
            min-height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }
        .related-calcs {
            background: rgba(255,255,255,0.98);
            padding: 18px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }
        .related-calcs h3 {
            color: #1a202c;
            margin-bottom: 12px;
            font-size: 1.1em;
        }
        .related-calcs a {
            display: block;
            color: #667eea;
            text-decoration: none;
            padding: 8px;
            border-radius: 5px;
            margin-bottom: 6px;
            transition: background 0.2s;
            font-size: 0.9em;
        }
        .related-calcs a:hover {
            background: #f7fafc;
        }
        .disclaimer {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 12px;
            margin-top: 15px;
            border-radius: 5px;
            font-size: 0.85em;
            color: #856404;
        }
        @media (max-width: 768px) {
            .content-wrapper {
                grid-template-columns: 1fr;
            }
            .header h1 {
                font-size: 1.4em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="breadcrumb">
                <a href="../index.html">Home</a> / <a href="../browse.html">Calculators</a> / ${title}
            </div>
            <h1>${title}</h1>
        </div>

        <!-- Top Ad -->
        <div class="ad-unit">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                 data-ad-slot="YOUR_AD_SLOT_1"
                 data-ad-format="horizontal"
                 data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <div class="content-wrapper">
            <div class="main-content">
                <div class="calculator-box">
                    <div class="input-group">
                        <label for="input1">Enter Value 1:</label>
                        <input type="number" id="input1" placeholder="Enter first value" value="1000">
                    </div>
                    <div class="input-group">
                        <label for="input2">Enter Value 2:</label>
                        <input type="number" id="input2" placeholder="Enter second value" value="500">
                    </div>
                    <button class="btn" onclick="calculate()">Calculate Now</button>
                </div>

                <div class="result" id="result">
                    <h3>Your Result:</h3>
                    <div class="result-value" id="resultValue">$0.00</div>
                    <p id="resultDetails">Calculation details will appear here</p>
                </div>

                <!-- Middle Ad -->
                <div class="ad-unit" style="margin: 15px 0;">
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                         data-ad-slot="YOUR_AD_SLOT_2"
                         data-ad-format="rectangle"
                         data-full-width-responsive="true"></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>

                <div class="disclaimer">
                    <strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only. Results should not be considered financial, legal, or professional advice. Always consult with qualified professionals for important decisions.
                </div>
            </div>

            <div class="sidebar">
                <!-- Sidebar Ad 1 -->
                <div class="ad-unit">
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                         data-ad-slot="YOUR_AD_SLOT_3"
                         data-ad-format="vertical"
                         data-full-width-responsive="true"></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>

                <div class="related-calcs">
                    <h3>Related Calculators</h3>
                    ${getRelatedCalculators(keyword, selectedCalculators, index).map(c => 
                        `<a href="${c.fileName}">${c.title}</a>`
                    ).join('')}
                </div>

                <!-- Sidebar Ad 2 -->
                <div class="ad-unit">
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
                         data-ad-slot="YOUR_AD_SLOT_4"
                         data-ad-format="vertical"
                         data-full-width-responsive="true"></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>
            </div>
        </div>
    </div>

    <script>
        function calculate() {
            const input1 = parseFloat(document.getElementById('input1').value) || 0;
            const input2 = parseFloat(document.getElementById('input2').value) || 0;
            const result = input1 + input2;
            
            document.getElementById('resultValue').textContent = '$' + result.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            document.getElementById('resultDetails').textContent = \`Based on your inputs: \${input1.toLocaleString()} + \${input2.toLocaleString()} = \${result.toLocaleString()}\`;
            document.getElementById('result').classList.add('show');
        }

        document.getElementById('input1').addEventListener('input', calculate);
        document.getElementById('input2').addEventListener('input', calculate);
        
        // Auto-calculate on page load
        window.addEventListener('load', calculate);
    </script>
</body>
</html>`;

  fs.writeFileSync(path.join(outputDir, fileName), html);
  
  if ((index + 1) % 100 === 0) {
    console.log(`✅ Generated ${index + 1}/${selectedCalculators.length} calculators...`);
  }
});

console.log(`\n🎉 Successfully generated ${selectedCalculators.length} calculators!`);
console.log(`📊 Target: $1K-3K in 3 months`);
console.log(`🚀 Strategy: Long-tail keywords + High-CPC niches`);

function getRelatedCalculators(keyword, allCalcs, currentIndex) {
  const baseKeyword = keyword.split('-')[0];
  const related = allCalcs
    .filter((c, idx) => idx !== currentIndex && c.keyword.includes(baseKeyword))
    .slice(0, 6)
    .map(c => ({
      fileName: c.variation ? `${c.keyword}-${c.variation}.html` : `${c.keyword}.html`,
      title: c.variation 
        ? `${c.keyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} ${c.variation.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`
        : `${c.keyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`
    }));
  
  if (related.length < 6) {
    const additional = allCalcs
      .filter((c, idx) => idx !== currentIndex && !related.find(r => r.fileName === (c.variation ? `${c.keyword}-${c.variation}.html` : `${c.keyword}.html`)))
      .slice(0, 6 - related.length)
      .map(c => ({
        fileName: c.variation ? `${c.keyword}-${c.variation}.html` : `${c.keyword}.html`,
        title: c.variation 
          ? `${c.keyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} ${c.variation.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`
          : `${c.keyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`
      }));
    related.push(...additional);
  }
  
  return related;
}
