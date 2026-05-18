import { API_ENDPOINT } from '@constants/apiEndpoints';
import { QUERY_KEY } from '@constants/queryKey';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import type { RecruitmentResponse } from '@apis/__generated__/data-contracts';
import { HTTPMethod, request, type RequestConfig } from '@apis/config/request';
import type { FilterValues } from '@pages/recruit/types/filter';
import type { RecruitListItem } from '@shared/types/recruitCard';

const buildRecruitQuery = (
  filters?: FilterValues,
): RequestConfig['query'] | undefined => {
  if (!filters) return undefined;

  const query = {
    ...(filters.jobCategories.length > 0 && {
      jobCategories: filters.jobCategories,
    }),
    ...(filters.companyTypes.length > 0 && {
      companyTypes: filters.companyTypes,
    }),
    ...(filters.employmentTypes.length > 0 && {
      employmentTypes: filters.employmentTypes,
    }),
    ...(filters.regions.length > 0 && {
      regions: filters.regions,
    }),
  };

  return Object.keys(query).length > 0 ? query : undefined;
};

export const getRecruitData = (filters?: FilterValues) => {
  return request<RecruitmentResponse[]>({
    method: HTTPMethod.GET,
    url: API_ENDPOINT.RECRUIT.LIST,
    query: buildRecruitQuery(filters),
  });
};

export const useGetRecruitQuery = (
  filters?: FilterValues,
  enabled?: boolean,
  p0?: boolean,
) => {
  return useQuery<RecruitmentResponse[], Error, RecruitListItem[]>({
    queryKey: [...QUERY_KEY.RECRUIT, filters],
    queryFn: () => getRecruitData(filters),
    enabled,
    placeholderData: keepPreviousData,
    select: (data) =>
      data
        .filter(
          (recruit): recruit is typeof recruit & { id: number } =>
            recruit.id != null,
        )
        .map((recruit) => ({
          id: recruit.id,
          title: recruit.title ?? '',
          company: recruit.company ?? '',
          imageUrl: recruit.imageUrl ?? '',
          employmentType: recruit.employmentType ?? '',
          location: recruit.location ?? '',
          deadlineLabel: recruit.deadlineLabel ?? '',
        })),
  });
};
