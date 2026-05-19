import {
  BUSINESS_JOB,
  MARKETING_JOB,
  SALES_JOB,
} from '@pages/recruit/constants/filterOptions';
import { CONTENT_RESULT } from '@pages/recruit/constants/resultNumber';
import type { FilterValues } from '@pages/recruit/types/filter';

// 직무 제외 카테고리에서 하나라도 선택된 경우
const hasAndFilters = (selectedFilters: FilterValues) => {
  return (
    selectedFilters.companyTypes.length > 0 ||
    selectedFilters.employmentTypes.length > 0 ||
    selectedFilters.regions.length > 0
  );
};

// 선택된 필터에 따른 결과 개수 계산
export const getResultCount = (
  selectedFilters: FilterValues,
  dataCount?: number, // 실제 데이터 개수
): string => {
  const { jobCategories } = selectedFilters;

  if (hasAndFilters(selectedFilters) && dataCount != null) {
    // 직무 외 필터가 하나라도 선택된 경우 실제 데이터 개수 반환
    return dataCount.toLocaleString();
  }

  if (jobCategories.length === 0)
    return CONTENT_RESULT.default.toLocaleString();

  const count = jobCategories.reduce((acc, job) => {
    switch (job) {
      case MARKETING_JOB:
        return acc + CONTENT_RESULT.marketing;
      case SALES_JOB:
        return acc + CONTENT_RESULT.sales;
      case BUSINESS_JOB:
        return acc + CONTENT_RESULT.business;
      default:
        return acc;
    }
  }, 0);

  return count.toLocaleString();
};
