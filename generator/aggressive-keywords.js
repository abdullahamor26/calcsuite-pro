// Aggressive 1000-calculator strategy for $1K-3K in 3 months
// Focus: Long-tail keywords (easier to rank fast) + High CPC

const aggressiveKeywords = {
  // Financial (High CPC: $20-50)
  financial: [
    'mortgage', 'loan', 'auto-loan', 'personal-loan', 'student-loan', 'home-loan',
    'mortgage-refinance', 'mortgage-payment', 'mortgage-affordability', 'reverse-mortgage',
    'fha-loan', 'va-loan', 'jumbo-loan', 'construction-loan', 'bridge-loan',
    'investment', 'retirement', 'retirement-savings', '401k', 'roth-ira', 'pension',
    'traditional-ira', 'sep-ira', 'simple-ira', '403b', '457-plan',
    'tax', 'income-tax', 'property-tax', 'sales-tax', 'capital-gains-tax',
    'estate-tax', 'gift-tax', 'payroll-tax', 'self-employment-tax', 'tax-refund',
    'salary', 'paycheck', 'hourly-wage', 'annual-salary', 'net-pay', 'take-home-pay',
    'overtime-pay', 'bonus-calculator', 'commission-calculator',
    'debt', 'debt-payoff', 'credit-card-payoff', 'debt-consolidation', 'debt-snowball',
    'savings', 'compound-interest', 'simple-interest', 'apr', 'apy', 'cd-calculator',
    'car-payment', 'lease', 'car-lease', 'auto-financing', 'trade-in-value',
    'business-loan', 'sba-loan', 'equipment-financing', 'working-capital',
    'heloc', 'home-equity', 'cash-out-refinance', 'second-mortgage',
    'amortization', 'loan-amortization', 'mortgage-amortization',
    'refinance', 'student-loan-refinance', 'auto-refinance',
    'down-payment', 'closing-costs', 'pmi', 'escrow', 'hoa-fees'
  ],

  // Insurance (High CPC: $30-60)
  insurance: [
    'life-insurance', 'term-life', 'whole-life', 'universal-life', 'variable-life',
    'health-insurance', 'health-insurance-premium', 'health-insurance-subsidy',
    'car-insurance', 'auto-insurance', 'car-insurance-premium',
    'home-insurance', 'homeowners-insurance', 'renters-insurance',
    'disability-insurance', 'long-term-disability', 'short-term-disability',
    'pet-insurance', 'travel-insurance', 'business-insurance'
  ],

  // Real Estate (High CPC: $20-40)
  realEstate: [
    'rent-vs-buy', 'home-affordability', 'property-value', 'home-value',
    'cap-rate', 'rental-income', 'rental-yield', 'cash-flow',
    'roi', 'investment-property', 'flip-calculator', 'rehab-cost',
    'property-tax', 'home-appreciation', 'equity-calculator'
  ],

  // Health (Medium CPC: $10-20)
  health: [
    'bmi', 'bmr', 'tdee', 'calorie', 'macro', 'body-fat', 'ideal-weight',
    'pregnancy', 'due-date', 'ovulation', 'conception', 'fertility',
    'weight-loss', 'calorie-deficit', 'protein', 'carbs', 'fat-intake',
    'water-intake', 'body-age', 'metabolic-age', 'lean-body-mass'
  ],

  // Business (Medium CPC: $15-30)
  business: [
    'profit-margin', 'gross-margin', 'net-margin', 'break-even', 'roi',
    'revenue', 'markup', 'margin', 'commission', 'tip', 'sales-tax',
    'discount', 'price-calculator', 'cost-calculator', 'budget-calculator'
  ],

  // Education (Medium CPC: $10-25)
  education: [
    'gpa', 'grade', 'student-loan', 'college-cost', 'scholarship',
    'tuition', 'financial-aid', 'student-budget', 'loan-forgiveness'
  ]
};

// 50 US States (complete list for maximum coverage)
const allStates = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california',
  'colorado', 'connecticut', 'delaware', 'florida', 'georgia',
  'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
  'kansas', 'kentucky', 'louisiana', 'maine', 'maryland',
  'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri',
  'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey',
  'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
  'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina',
  'south-dakota', 'tennessee', 'texas', 'utah', 'vermont',
  'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming'
];

// Top 50 US Cities (for location-specific searches)
const topCities = [
  'new-york', 'los-angeles', 'chicago', 'houston', 'phoenix',
  'philadelphia', 'san-antonio', 'san-diego', 'dallas', 'san-jose',
  'austin', 'jacksonville', 'fort-worth', 'columbus', 'charlotte',
  'san-francisco', 'indianapolis', 'seattle', 'denver', 'boston',
  'nashville', 'detroit', 'portland', 'las-vegas', 'memphis',
  'louisville', 'baltimore', 'milwaukee', 'albuquerque', 'tucson',
  'fresno', 'sacramento', 'kansas-city', 'atlanta', 'miami',
  'oakland', 'tulsa', 'cleveland', 'new-orleans', 'tampa',
  'minneapolis', 'honolulu', 'colorado-springs', 'arlington', 'raleigh',
  'omaha', 'long-beach', 'virginia-beach', 'orlando', 'pittsburgh'
];

// Years (2025-2027 for timely searches)
const years = ['2025', '2026', '2027'];

// Demographics
const demographics = ['for-men', 'for-women', 'for-seniors', 'for-millennials', 'for-families', 'for-students', 'for-retirees'];

// Income brackets (for financial calculators)
const incomeBrackets = ['50k', '75k', '100k', '150k', '200k'];

// Age groups (for health/financial calculators)
const ageGroups = ['20s', '30s', '40s', '50s', '60s'];

module.exports = { 
  aggressiveKeywords, 
  allStates, 
  topCities, 
  years, 
  demographics,
  incomeBrackets,
  ageGroups
};
