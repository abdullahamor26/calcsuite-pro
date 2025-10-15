const fs = require('fs');
const path = require('path');
const { highCPCKeywords, topStates, years, demographics, topCities, variations } = require('./adsense-keywords');

const outputDir = path.join(__dirname, '..', 'calculators-adsense');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const allKeywords = Object.values(highCPCKeywords).flat();
const calculators = [];

// Generate calculator combinations (targeting 1000 calculators)
allKeywords.forEach(keyword => {
  // Base calculator
  calculators.push({ keyword, variation: '' });
  
  // State variations (top 10 states only for high-value keywords)
  if (['mortgage', 'loan', 'tax', 'salary', 'retirement', 'insurance'].includes(keyword)) {
    topStates.slice(0, 10).forEach(state => {
      calculators.push({ keyword, variation: state });
    });
  }
  
  // Year variations (financial only)
  if (['mortgage', 'loan', 'tax', 'retirement', '401k', 'salary'].includes(keyword)) {
    years.forEach(year => {
      calculators.push({ keyword, variation: year });
    });
  }
  
  // City variations (top financial keywords only)
  if (['mortgage', 'salary', 'rent-vs-buy', 'home-affordability'].includes(keyword)) {
    topCities.slice(0, 5).forEach(city => {
      calculators.push({ keyword, variation: city });
    });
  }
  
  // Specific variations
  if (variations[keyword]) {
    variations[keyword].forEach(v => {
      calculators.push({ keyword, variation: v });
    });
  }
});

// Limit to 1000 calculators
const selectedCalculators = calculators.slice(0, 1000);

console.log(`Generating ${selectedCalculators.length} AdSense-optimized calculators...`);

selectedCalculators.forEach((calc, index) => {
  const { keyword, variation } = calc;
  const fileName = variation ? `${keyword}-${variation}.html` : `${keyword}.html`;
  const title = variation 
    ? `${keyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} ${variation.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Calculator`
    : `${keyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Calculator`;
  
  const description = `Free ${title} - Calculate ${keyword.replace(/-/g, ' ')} ${variation ? 'for ' + variation.replace(/-/g, ' ') : ''} instantly. Accurate, fast, and easy to use.`;
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | CalcSuite Professional</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keyword}, ${keyword} calculator, ${variation}, online calculator, free calculator">
    <link rel="canonical" href="https://abdullahamor26.github.io/calcsuite-pro/calculators/${fileName}">
    
    <!-- AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID" crossorigin="anonymous"></script>
    
    <!-- Schema.org Markup -->
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
      }
    }
    </script>
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .header {
            background: rgba(255,255,255,0.95);
            padding: 20px;
            border-radius: 15px;
            margin-bottom: 20px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        .header h1 {
            color: #1a202c;
            font-size: 2em;
            margin-bottom: 10px;
        }
        .breadcrumb {
            color: #718096;
            font-size: 0.9em;
        }
        .breadcrumb a {
            color: #667eea;
            text-decoration: none;
        }
        .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 20px;
        }
        .main-content {
            background: rgba(255,255,255,0.95);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        .calculator-box {
            background: #f7fafc;
            padding: 25px;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        .input-group {
            margin-bottom: 20px;
        }
        .input-group label {
            display: block;
            color: #2d3748;
            font-weight: 600;
            margin-bottom: 8px;
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
            padding: 15px 30px;
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
            box-shadow: 0 10px 25px rgba(102,126,234,0.3);
        }
        .result {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 25px;
            border-radius: 10px;
            margin-top: 20px;
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
            font-size: 1.5em;
            margin-bottom: 10px;
        }
        .result-value {
            font-size: 2.5em;
            font-weight: bold;
            margin: 15px 0;
        }
        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .ad-unit {
            background: rgba(255,255,255,0.95);
            border-radius: 10px;
            padding: 10px;
            min-height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .related-calcs {
            background: rgba(255,255,255,0.95);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .related-calcs h3 {
            color: #1a202c;
            margin-bottom: 15px;
        }
        .related-calcs a {
            display: block;
            color: #667eea;
            text-decoration: none;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 8px;
            transition: background 0.2s;
        }
        .related-calcs a:hover {
            background: #f7fafc;
        }
        .disclaimer {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin-top: 20px;
            border-radius: 5px;
            font-size: 0.9em;
            color: #856404;
        }
        @media (max-width: 768px) {
            .content-wrapper {
                grid-template-columns: 1fr;
            }
            .header h1 {
                font-size: 1.5em;
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

        <!-- Top Ad Unit (AdSense) -->
        <div class="ad-unit">
            <!-- AdSense Ad Unit 1 (Horizontal Banner) -->
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
                        <input type="number" id="input1" placeholder="Enter first value">
                    </div>
                    <div class="input-group">
                        <label for="input2">Enter Value 2:</label>
                        <input type="number" id="input2" placeholder="Enter second value">
                    </div>
                    <button class="btn" onclick="calculate()">Calculate</button>
                </div>

                <div class="result" id="result">
                    <h3>Result:</h3>
                    <div class="result-value" id="resultValue">$0.00</div>
                    <p id="resultDetails">Calculation details will appear here</p>
                </div>

                <!-- Middle Ad Unit (AdSense) -->
                <div class="ad-unit" style="margin: 20px 0;">
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
                <!-- Sidebar Ad Unit (AdSense) -->
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
                    ${getRelatedCalculators(keyword, selectedCalculators).map(c => 
                        `<a href="${c.fileName}">${c.title}</a>`
                    ).join('')}
                </div>

                <!-- Bottom Sidebar Ad Unit (AdSense) -->
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
            
            // Simple calculation logic (customize per calculator type)
            const result = input1 + input2;
            
            document.getElementById('resultValue').textContent = '$' + result.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            document.getElementById('resultDetails').textContent = \`Based on your inputs: \${input1.toLocaleString()} + \${input2.toLocaleString()}\`;
            document.getElementById('result').classList.add('show');
        }

        // Auto-calculate on input change (increases engagement)
        document.getElementById('input1').addEventListener('input', calculate);
        document.getElementById('input2').addEventListener('input', calculate);
    </script>
</body>
</html>`;

  fs.writeFileSync(path.join(outputDir, fileName), html);
  
  if ((index + 1) % 100 === 0) {
    console.log(`Generated ${index + 1}/${selectedCalculators.length} calculators...`);
  }
});

console.log(`✅ Successfully generated ${selectedCalculators.length} AdSense-optimized calculators!`);

// Helper function to get related calculators
function getRelatedCalculators(keyword, allCalcs) {
  const related = allCalcs
    .filter(c => c.keyword.includes(keyword.split('-')[0]) && c.keyword !== keyword)
    .slice(0, 5)
    .map(c => ({
      fileName: c.variation ? `${c.keyword}-${c.variation}.html` : `${c.keyword}.html`,
      title: c.variation 
        ? `${c.keyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} ${c.variation.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`
        : `${c.keyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`
    }));
  
  return related.length > 0 ? related : allCalcs.slice(0, 5).map(c => ({
    fileName: c.variation ? `${c.keyword}-${c.variation}.html` : `${c.keyword}.html`,
    title: c.variation 
      ? `${c.keyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} ${c.variation.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`
      : `${c.keyword.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`
  }));
}
