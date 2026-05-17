export const MENTO_COMPANY_CHIPS = [
  '삼성',
  'SK',
  '현대',
  'LG',
  '공기업',
] as const;

export type MentoCompanyChip = (typeof MENTO_COMPANY_CHIPS)[number];
