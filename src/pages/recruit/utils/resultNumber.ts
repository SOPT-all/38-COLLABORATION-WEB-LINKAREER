import {
  BUSINESS_JOB,
  MARKETING_JOB,
  SALES_JOB,
} from '@pages/recruit/constants/filterOptions';
import { CONTENT_RESULT } from '@pages/recruit/constants/resultNumber';
import type { FilterValues } from '@pages/recruit/types/filter';

// 선택된 필터에 따른 결과 개수 계산
export const getResultCount = (selectedFilters: FilterValues): string => {
  const { jobCategories } = selectedFilters;

  if (jobCategories.length === 0)
    return CONTENT_RESULT.default.toLocaleString();

  const total = jobCategories.reduce((acc, cur) => {
    const count =
      cur === MARKETING_JOB
        ? CONTENT_RESULT.marketing
        : cur === SALES_JOB
          ? CONTENT_RESULT.sales
          : cur === BUSINESS_JOB
            ? CONTENT_RESULT.business
            : 0;

    return acc + count;
  }, 0);

  return total.toLocaleString();
};
