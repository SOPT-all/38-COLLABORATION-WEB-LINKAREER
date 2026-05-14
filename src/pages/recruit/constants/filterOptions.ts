export const FILTER_OPTIONS = {
  jobCategories: [
    '마케팅/광고/홍보',
    '영업/고객상담',
    '경영/사무',
    '생산/제조',
    '연구개발/설계',
    'IT/인터넷',
    '서비스',
    '무역/유통',
    '의료',
    '건설',
    '교육',
    '디자인',
    '전문/특수직',
    '미디어',
    '기타',
  ] as const,

  companyTypes: [
    '대기업',
    '중소기업',
    '공공기관/공기업',
    '외국계기업',
    '중견기업',
    '비영리단체/협회/재단',
    '스타트업',
    '금융권',
    '병원',
    '기타',
  ] as const,

  employmentTypes: ['신입', '경력직', '인턴', '계약직'] as const,

  regions: [
    '서울',
    '부산',
    '대구',
    '인천',
    '광주',
    '대전',
    '울산',
    '경기',
    '강원',
    '충청',
    '전라',
    '경상',
    '제주',
    '세종',
    '해외',
  ] as const,
} as const;

export type JobCategory = (typeof FILTER_OPTIONS.jobCategories)[number];
export type CompanyType = (typeof FILTER_OPTIONS.companyTypes)[number];
export type EmploymentType = (typeof FILTER_OPTIONS.employmentTypes)[number];
export type Region = (typeof FILTER_OPTIONS.regions)[number];

export type FilterTab = keyof typeof FILTER_OPTIONS;

export const FILTER_TABS: { key: FilterTab; label: string }[] = [
  { key: 'jobCategories', label: '직무' },
  { key: 'regions', label: '지역' },
  { key: 'companyTypes', label: '기업형태' },
  { key: 'employmentTypes', label: '채용형태' },
];
