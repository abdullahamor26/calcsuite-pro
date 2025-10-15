// High-CPC Keywords for $10K/month AdSense Revenue
// Prioritized by CPC ($5-50) and Search Volume

const highCPCKeywords = {
  // TIER 1: Financial Calculators (CPC: $20-50, RPM: $30-50)
  financial: [
    'mortgage', 'loan', 'auto-loan', 'personal-loan', 'student-loan', 'home-loan',
    'mortgage-refinance', 'mortgage-payment', 'mortgage-affordability', 'reverse-mortgage',
    'investment', 'retirement', 'retirement-savings', '401k', 'roth-ira', 'pension',
    'tax', 'income-tax', 'property-tax', 'sales-tax', 'capital-gains-tax',
    'salary', 'paycheck', 'hourly-wage', 'annual-salary', 'net-pay', 'take-home-pay',
    'debt', 'debt-payoff', 'credit-card-payoff', 'debt-consolidation',
    'savings', 'compound-interest', 'simple-interest', 'apr', 'apy',
    'car-payment', 'lease', 'car-lease', 'auto-financing',
    'business-loan', 'sba-loan', 'equipment-financing',
    'heloc', 'home-equity', 'cash-out-refinance',
    'amortization', 'loan-amortization', 'mortgage-amortization',
    'refinance', 'student-loan-refinance', 'auto-refinance',
    'down-payment', 'closing-costs', 'pmi', 'escrow'
  ],

  // TIER 2: Health & Fitness (CPC: $8-20, RPM: $15-25)
  health: [
    'bmi', 'bmr', 'tdee', 'calorie', 'macro', 'body-fat', 'ideal-weight',
    'pregnancy', 'due-date', 'ovulation', 'conception', 'fertility',
    'weight-loss', 'calorie-deficit', 'protein', 'carbs', 'fat-intake'
  ],

  // TIER 3: Real Estate (CPC: $15-40, RPM: $25-45)
  realEstate: [
    'rent-vs-buy', 'home-affordability', 'property-value', 'cap-rate',
    'rental-income', 'roi', 'investment-property', 'flip-calculator'
  ],

  // TIER 4: Business & Career (CPC: $10-30, RPM: $20-35)
  business: [
    'profit-margin', 'break-even', 'roi', 'revenue', 'markup',
    'commission', 'tip', 'sales-tax', 'discount', 'margin'
  ],

  // TIER 5: Insurance (CPC: $20-60, RPM: $35-55)
  insurance: [
    'life-insurance', 'health-insurance', 'car-insurance', 'home-insurance',
    'disability-insurance', 'term-life', 'whole-life'
  ],

  // TIER 6: Education (CPC: $12-25, RPM: $18-30)
  education: [
    'gpa', 'grade', 'student-loan', 'college-cost', 'scholarship',
    'tuition', 'financial-aid', 'student-budget'
  ]
};

// Top 25 US States (by population + search volume)
const topStates = [
  'california', 'texas', 'florida', 'new-york', 'pennsylvania',
  'illinois', 'ohio', 'georgia', 'north-carolina', 'michigan',
  'new-jersey', 'virginia', 'washington', 'arizona', 'massachusetts',
  'tennessee', 'indiana', 'missouri', 'maryland', 'wisconsin',
  'colorado', 'minnesota', 'south-carolina', 'alabama', 'louisiana'
];

// Years (current + next 2)
const years = ['2025', '2026', '2027'];

// Demographics
const demographics = ['for-men', 'for-women', 'for-seniors', 'for-adults', 'for-families', 'for-students'];

// Cities (top 20 by search volume)
const topCities = [
  'new-york', 'los-angeles', 'chicago', 'houston', 'phoenix',
  'philadelphia', 'san-antonio', 'san-diego', 'dallas', 'san-jose',
  'austin', 'jacksonville', 'fort-worth', 'columbus', 'charlotte',
  'san-francisco', 'indianapolis', 'seattle', 'denver', 'boston'
];

// Variations for each calculator type
const variations = {
  mortgage: ['payment', 'affordability', 'refinance', 'amortization', 'comparison', 'prequalification'],
  loan: ['payment', 'amortization', 'comparison', 'refinance', 'consolidation', 'payoff'],
  tax: ['estimator', 'refund', 'bracket', 'withholding', 'deduction', 'credit'],
  salary: ['hourly', 'annual', 'biweekly', 'monthly', 'after-tax', 'comparison'],
  retirement: ['savings', '401k', 'ira', 'pension', 'withdrawal', 'planning'],
  investment: ['return', 'compound', 'portfolio', 'dividend', 'growth', 'risk'],
  bmi: ['metric', 'imperial', 'for-men', 'for-women', 'for-children', 'chart'],
  calorie: ['deficit', 'surplus', 'maintenance', 'burn', 'intake', 'tracker'],
  pregnancy: ['due-date', 'week-by-week', 'trimester', 'weight-gain', 'conception', 'ovulation']
};

module.exports = { highCPCKeywords, topStates, years, demographics, topCities, variations };
