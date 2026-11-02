export interface DoNotUseRule {
  pattern: RegExp;
  flagged: string;
  reason: string;
  correction: string;
}

export const DO_NOT_USE_ABBREVIATIONS: DoNotUseRule[] = [
  {
    pattern: /\b[Uu]\b/g,
    flagged: 'U / u',
    reason: 'Mistaken for "0" (zero), "4" (four) or "cc"',
    correction: 'Write "unit"'
  },
  {
    pattern: /\b[Ii][Uu]\b/g,
    flagged: 'IU',
    reason: 'Mistaken for IV (intravenous) or the number 10',
    correction: 'Write "International Unit"'
  },
  {
    pattern: /\b(?:q\.?d\.?|Q\.?D\.?)\b/g,
    flagged: 'Q.D. / QD',
    reason: 'Mistaken for Q.O.D. or each other; period looks like "I"',
    correction: 'Write "daily"'
  },
  {
    pattern: /\b(?:q\.?o\.?d\.?|Q\.?O\.?D\.?)\b/g,
    flagged: 'Q.O.D. / QOD',
    reason: 'Mistaken for "Q.D." resulting in medication administered daily instead of every other day',
    correction: 'Write "every other day"'
  },
  {
    pattern: /\b\d+\.0\s*(?:mg|mcg|mL|g|units)\b/gi,
    flagged: 'Trailing zero (X.0 mg)',
    reason: 'Decimal point can be missed, leading to 10-fold dose overdose',
    correction: 'Do not use trailing zeros; write "X mg"'
  },
  {
    pattern: /(?:^|\s)\.\d+\s*(?:mg|mcg|mL|g|units)\b/gi,
    flagged: 'Lack of leading zero (.X mg)',
    reason: 'Decimal point can be missed, leading to 10-fold overdose',
    correction: 'Always use leading zero; write "0.X mg"'
  },
  {
    pattern: /\b(?:MS|MSO4)\b/g,
    flagged: 'MS / MSO4',
    reason: 'Can mean morphine sulfate or magnesium sulfate; high risk of fatal error',
    correction: 'Write "morphine sulfate"'
  },
  {
    pattern: /\b(?:MgSO4)\b/g,
    flagged: 'MgSO4',
    reason: 'Confused with morphine sulfate',
    correction: 'Write "magnesium sulfate"'
  }
];

export interface ApprovedAcronym {
  abbr: string;
  meaning: string;
  category: string;
}

export const COMMON_CLINICAL_ACRONYMS: ApprovedAcronym[] = [
  { abbr: 'WNL', meaning: 'Within Normal Limits', category: 'General' },
  { abbr: 'WDL', meaning: 'Within Defined Limits', category: 'General' },
  { abbr: 'A&O x 4', meaning: 'Alert and Oriented to Person, Place, Time, and Situation', category: 'Neuro' },
  { abbr: 'GCS', meaning: 'Glasgow Coma Scale', category: 'Neuro' },
  { abbr: 'PERRLA', meaning: 'Pupils Equal, Round, Reactive to Light and Accommodation', category: 'Neuro' },
  { abbr: 'CTA', meaning: 'Clear To Auscultation bilaterally', category: 'Respiratory' },
  { abbr: 'WOB', meaning: 'Work of Breathing', category: 'Respiratory' },
  { abbr: 'NC', meaning: 'Nasal Cannula', category: 'Respiratory' },
  { abbr: 'RRR', meaning: 'Regular Rate and Rhythm (S1/S2 heard)', category: 'Cardiac' },
  { abbr: 'NPO', meaning: 'Nil Per Os (Nothing by mouth)', category: 'GI' },
  { abbr: 'BS', meaning: 'Bowel Sounds (or Blood Sugar)', category: 'GI' },
  { abbr: 'PVR', meaning: 'Post-Void Residual', category: 'GU' },
  { abbr: 'PIV', meaning: 'Peripheral Intravenous Line', category: 'Vascular' },
  { abbr: 'CVC / PICC', meaning: 'Central Venous Catheter / Peripherally Inserted Central Catheter', category: 'Vascular' },
  { abbr: 'PRN', meaning: 'Pro Re Nata (As Needed)', category: 'Orders' },
  { abbr: 'SBAR', meaning: 'Situation, Background, Assessment, Recommendation', category: 'Communication' },
  { abbr: 'FDAR', meaning: 'Focus, Data, Action, Response', category: 'Documentation' },
  { abbr: 'SOAP', meaning: 'Subjective, Objective, Assessment, Plan', category: 'Documentation' }
];
