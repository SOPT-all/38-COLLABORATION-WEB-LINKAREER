import { API_ENDPOINT } from '@constants/apiEndpoints';
import { QUERY_KEY } from '@constants/queryKey';
import { useQuery } from '@tanstack/react-query';

import type { PostResponse } from '@apis/__generated__/data-contracts';
import { HTTPMethod, request } from '@apis/config/request';
import type { Post } from '@pages/mento/types/post';

const toPost = (post: PostResponse): Post => ({
  id: post.id ?? 0,
  title: post.title ?? '',
  imageUrl: post.imageUrl ?? null,
  isNotice: post.isNotice ?? false,
  company: post.company ?? null,
  job: post.job ?? null,
  authorId: post.authorId ?? '',
  postDate: post.postDate ?? '',
  viewCount: post.viewCount ?? 0,
  likeCount: post.likeCount ?? 0,
  scrapCount: post.scrapCount ?? 0,
  commentCount: post.commentCount ?? 0,
});

export const getPostData = () => {
  return request<PostResponse[]>({
    method: HTTPMethod.GET,
    url: API_ENDPOINT.COMMUNITY.POSTS,
  });
};

export const useGetPostQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY.MENTO,
    queryFn: getPostData,
    select: (data) => data.map(toPost),
  });
};
