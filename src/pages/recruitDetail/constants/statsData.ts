export const STATS_SCHOOL_DATA = [
  { rank: 1, label: '성균관대학교', percent: 4.1 },
  { rank: 2, label: '이화여자대학교', percent: 4.1 },
  { rank: 3, label: '중앙대학교', percent: 4.1 },
  { rank: 4, label: '한국외국어대학교', percent: 4.1 },
  { rank: 5, label: '가천대학교', percent: 3.3 },
] as const;

export const STATS_MAJOR_DATA = [
  { rank: 1, label: '언론·방송·', percent: 4.1 },
  { rank: 2, label: '경영학', percent: 10.9 },
  { rank: 3, label: '영미어·문학', percent: 5.5 },
  { rank: 4, label: '식품영양학', percent: 4.5 },
  { rank: 5, label: '광고·홍보학', percent: 2.7 },
] as const;

export const STATS_JOB_DATA = [
  { rank: 1, label: '기획/전략/경영', percent: 15.2 },
  { rank: 2, label: '마케팅/운영/홍보', percent: 12.5 },
  { rank: 3, label: '금융권', percent: 7.4 },
  { rank: 4, label: '상품기획/MD', percent: 7.4 },
  { rank: 5, label: '연구개발/설계', percent: 7 },
] as const;

export const STATS_AGE_DATA = [
  { label: '25세이하', percent: 86.5 },
  { label: '26~30세', percent: 13.5 },
  { label: '31~35세', percent: 0 },
  { label: '36~40세', percent: 0 },
  { label: '41~45세', percent: 0 },
  { label: '46세이상', percent: 0 },
] as const;

export const STATS_AGE_DATA_MAX = Math.max(
  ...STATS_AGE_DATA.map((d) => d.percent),
);
