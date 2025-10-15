const fs = require('fs');
const path = require('path');
const baseKeywords = require('./keywords-database');

// Expand to 100K+ keywords with geographic, temporal, and demographic variations
const states = ['alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new hampshire','new jersey','new mexico','new york','north carolina','north dakota','ohio','oklahoma','oregon','pennsylvania','rhode island','south carolina','south dakota','tennessee','texas','utah','vermont','virginia','washington','west virginia','wisconsin','wyoming'];

const cities = ['new york','los angeles','chicago','houston','phoenix','philadelphia','san antonio','san diego','dallas','san jose','austin','jacksonville','fort worth','columbus','charlotte','san francisco','indianapolis','seattle','denver','washington dc','boston','el paso','nashville','detroit','oklahoma city','portland','las vegas','memphis','louisville','baltimore','milwaukee','albuquerque','tucson','fresno','mesa','sacramento','atlanta','kansas city','colorado springs','omaha','raleigh','miami','oakland','minneapolis','tulsa','wichita','new orleans','arlington','cleveland','bakersfield','tampa','aurora','honolulu','anaheim','santa ana','corpus christi','riverside','lexington','stockton','henderson','saint paul','cincinnati','st louis','pittsburgh','greensboro','lincoln','anchorage','plano','orlando','irvine','newark','toledo','durham','chula vista','fort wayne','jersey city','st petersburg','laredo','madison','chandler','buffalo','lubbock','scottsdale','reno','glendale','gilbert','winston salem','north las vegas','norfolk','chesapeake','garland','irving','hialeah','fremont','boise','richmond','baton rouge'];

const years = ['2025','2026','2027','2028','2029','2030'];

const demographics = ['senior','first time','young adult','millennial','gen z','baby boomer','retiree','student','professional','self employed','small business','entrepreneur','freelancer','remote worker','veteran','military','teacher','nurse','doctor','engineer'];

const features = ['free','online','simple','easy','quick','accurate','advanced','professional','detailed','comprehensive','instant','fast','mobile','app','tool','estimator','planner','tracker','analyzer','comparison'];

function expandKeywords() {
  const expanded = {};
  let totalCount = 0;
  
  for (const [category, keywords] of Object.entries(baseKeywords)) {
    expanded[category] = [...keywords];
    
    keywords.forEach(baseKeyword => {
      // State variations
      states.forEach(state => {
        expanded[category].push(`${state} ${baseKeyword}`);
        totalCount++;
      });
      
      // City variations (top 50 cities)
      cities.slice(0, 50).forEach(city => {
        expanded[category].push(`${city} ${baseKeyword}`);
        totalCount++;
      });
      
      // Year variations
      years.forEach(year => {
        expanded[category].push(`${baseKeyword} ${year}`);
        totalCount++;
      });
      
      // Demographic variations
      demographics.forEach(demo => {
        expanded[category].push(`${demo} ${baseKeyword}`);
        totalCount++;
      });
      
      // Feature variations
      features.forEach(feature => {
        expanded[category].push(`${feature} ${baseKeyword}`);
        totalCount++;
      });
    });
  }
  
  // Save expanded database
  const output = `// Expanded to ${totalCount}+ keywords\nmodule.exports = ${JSON.stringify(expanded, null, 2)};`;
  fs.writeFileSync(path.join(__dirname, 'keywords-database-expanded.js'), output);
  
  console.log(`✓ Expanded to ${totalCount}+ total keywords`);
  console.log(`✓ Ready to generate ${totalCount}+ calculator pages`);
  console.log('\nTo generate all pages, run: node generate-calculators-expanded.js');
  
  return totalCount;
}

expandKeywords();
