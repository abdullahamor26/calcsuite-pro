const fs = require('fs');
const path = require('path');

const calcDir = './calculators';
const files = fs.readdirSync(calcDir);

let count = 0;
files.forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(calcDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(
      '<a href="../index.html" class="logo">CalcSuite Pro</a>',
      '<a href="../index.html" class="logo" style="display:flex;align-items:center;"><img src="../logo.svg" alt="CalcSuite Pro" style="height:40px;"></a>'
    );
    
    fs.writeFileSync(filePath, content);
    count++;
  }
});

console.log(`Updated ${count} calculator files with new logo`);
