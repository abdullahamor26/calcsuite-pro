const fs = require('fs');
const path = require('path');

const calcDir = './calculators';
const files = fs.readdirSync(calcDir);

const premiumCalcHTML = `
<style>
#calculator-interface{background:linear-gradient(135deg,#f8f9fa 0%,#ffffff 100%);padding:2.5rem;border-radius:16px;box-shadow:0 8px 30px rgba(0,0,0,0.08);border:1px solid rgba(0,0,0,0.06)}
#calculator-interface h3{color:#0A2540;font-size:1.75rem;font-weight:800;margin-bottom:2rem;letter-spacing:-0.02em}
#calculator-interface label{display:block;color:#0A2540;font-weight:600;margin-bottom:0.5rem;font-size:0.95rem}
#calculator-interface input,#calculator-interface select{width:100%;padding:1rem;border:2px solid #e1e4e8;border-radius:12px;font-size:1rem;transition:all 0.3s;background:white;font-family:inherit}
#calculator-interface input:focus,#calculator-interface select:focus{outline:none;border-color:#635BFF;box-shadow:0 0 0 4px rgba(99,91,255,0.1)}
#calculator-interface button{width:100%;padding:1.25rem;background:linear-gradient(135deg,#635BFF,#00D4FF);color:white;border:none;border-radius:12px;font-weight:700;font-size:1.1rem;cursor:pointer;transition:all 0.3s;box-shadow:0 8px 20px rgba(99,91,255,0.3);margin-top:0.5rem}
#calculator-interface button:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(99,91,255,0.4)}
#res{margin-top:1.5rem;padding:2rem;background:linear-gradient(135deg,#635BFF,#00D4FF);border-radius:12px;color:white;box-shadow:0 8px 20px rgba(99,91,255,0.2)}
#res h4{font-size:1.5rem;margin-bottom:1rem;font-weight:700}
#res p{font-size:1.1rem;margin:0.75rem 0;font-weight:500}
</style>`;

let count = 0;
files.forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(calcDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add premium styles before </head>
    if (!content.includes('#calculator-interface{background:linear-gradient')) {
      content = content.replace('</head>', premiumCalcHTML + '</head>');
      fs.writeFileSync(filePath, content);
      count++;
    }
  }
});

console.log(`Upgraded ${count} calculator pages to premium design`);
