import { API_ENDPOINT } from '@constants/apiEndpoints';
import { QUERY_KEY } from '@constants/queryKey';
import { useQuery } from '@tanstack/react-query';

import type { RecruitmentDetailResponse } from '@apis/__generated__/data-contracts';
import { HTTPMethod, request } from '@apis/config/request';

const RECRUIT_DETAIL_ID = 18;

export const getRecruitDetailData = () => {
  return request<RecruitmentDetailResponse>({
    method: HTTPMethod.GET,
    url: API_ENDPOINT.RECRUIT.DETAIL(RECRUIT_DETAIL_ID),
  });
};

export const useGetRecruitDetailQuery = () => {
  return useQuery<RecruitmentDetailResponse>({
    queryKey: [...QUERY_KEY.RECRUIT_DETAIL, RECRUIT_DETAIL_ID],
    queryFn: getRecruitDetailData,
  });
};
