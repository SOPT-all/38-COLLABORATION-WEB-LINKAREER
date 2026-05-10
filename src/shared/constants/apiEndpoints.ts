export const API_ENDPOINT = {
  HOME: {
    JOB_POSTINGS: "/api/v1/home/job-postings", // 맞춤 공고 조회, 지금 지원 가능한 공고 조회
  },
  RECRUIT: {
    LIST: "/api/v1/job-postings", // 필터링 조회
    DETAIL: (jobPostingId: number) =>
      `/api/v1/job-postings/${jobPostingId}/reviews`, // 공고 상세
    PASS_LETTERS: (jobPostingId: number) =>
      `/api/v1/job-postings/${jobPostingId}/pass-letters`, // 합격 자소서
    PASS_REVIEWS: (jobPostingId: number) =>
      `/api/v1/job-postings/${jobPostingId}/pass-reviews`, // 합격 후기
  },
  COMMUNITY: {
    POSTS: "/api/v1/posts", // 게시글 조회
  },
} as const;

// 헬퍼 타입: 중첩된 객체의 모든 리프(leaf) 값들을 추출
export type DeepValues<T> = T extends object
  ? { [K in keyof T]: DeepValues<T[K]> }[keyof T]
  : T;

// 자동으로 모든 엔드포인트 문자열 추출
export type ApiEndpoint = DeepValues<typeof API_ENDPOINT>;
