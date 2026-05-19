import { API_ENDPOINT } from '@constants/apiEndpoints';
import { QUERY_KEY } from '@constants/queryKey';
import { useQuery } from '@tanstack/react-query';

import type { PassCoverLetterResponse } from '@apis/__generated__/data-contracts';
import { HTTPMethod, request } from '@apis/config/request';

export const getPassCoverLetters = () => {
  return request<PassCoverLetterResponse[]>({
    method: HTTPMethod.GET,
    url: API_ENDPOINT.RECRUIT.PASS_COVER_LETTERS,
  });
};

export const usePassCoverLettersQuery = () => {
  return useQuery({
    queryKey: [...QUERY_KEY.RECRUIT_DETAIL, 'pass-cover-letters'],
    queryFn: getPassCoverLetters,
  });
};

export const getPassReviews = () => {
  return request<PassCoverLetterResponse[]>({
    method: HTTPMethod.GET,
    url: API_ENDPOINT.RECRUIT.PASS_REVIEWS,
  });
};

export const usePassReviewsQuery = () => {
  return useQuery({
    queryKey: [...QUERY_KEY.RECRUIT_DETAIL, 'pass-review'],
    queryFn: getPassReviews,
  });
};
