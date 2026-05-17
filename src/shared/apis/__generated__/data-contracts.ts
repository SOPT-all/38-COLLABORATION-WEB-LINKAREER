/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** 채용공고 응답 */
export interface RecruitmentResponse {
  /**
   * 채용공고 ID
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 회사명
   * @example "카카오"
   */
  company?: string;
  /**
   * 공고 제목
   * @example "2026 카카오 신입 공채"
   */
  title?: string;
  /**
   * 기업형태
   * @example "대기업"
   */
  companyType?: string;
  /**
   * 채용형태
   * @example "신입, 경력직"
   */
  employmentType?: string;
  /**
   * 직무
   * @example "IT/인터넷"
   */
  jobCategory?: string;
  /**
   * 지역
   * @example "서울 강남구"
   */
  location?: string;
  /**
   * 기업 로고 URL
   * @example "https://..."
   */
  imageUrl?: string;
  /**
   * 모집 시작일
   * @format date-time
   */
  recruitmentStartDate?: string;
  /**
   * 모집 마감일
   * @format date-time
   */
  recruitmentEndDate?: string;
  /**
   * 마감 라벨 — 채용 시 마감이면 '채용 시 마감', 날짜 마감이면 '~MM.dd'
   * @example "~05.31"
   */
  deadlineLabel?: string;
}

export interface BaseResponseRecruitmentDetailResponse {
  /**
   * HTTP 상태 코드
   * @format int32
   * @example 200
   */
  status?: number;
  /** 응답 상태 코드 */
  code?: string;
  /** 응답 메시지 */
  message?: string;
  /** 응답 결과 (실패 시 null) */
  data?: RecruitmentDetailResponse;
}

/** 응답 결과 (실패 시 null) */
export interface RecruitmentDetailResponse {
  /**
   * 공고 ID
   * @format int64
   */
  id?: number;
  /** 회사명 */
  company?: string;
  /** 공고 제목 */
  title?: string;
  /**
   * 기업 형태
   * @example "중소기업"
   */
  companyType?: string;
  /**
   * 채용 형태
   * @example "체험형 인턴"
   */
  employmentType?: string;
  /**
   * 직무 카테고리
   * @example "마케팅·광고·홍보 전체"
   */
  jobCategory?: string;
  /**
   * 근무 지역
   * @example "서울 강남구"
   */
  location?: string;
  /**
   * 모집 시작일
   * @format date-time
   */
  recruitmentStartDate?: string;
  /**
   * 모집 마감일
   * @format date-time
   */
  recruitmentEndDate?: string;
  /** 마감일 표시값 - FIXED_DATE면 날짜(MM.dd), UNTIL_FILLED면 '채용 시 마감' */
  deadlineLabel?: string;
  /** 마감 유형 */
  recruitmentDeadlineType?: "FIXED_DATE" | "UNTIL_FILLED";
  /**
   * 모집 기간 표시값
   * @example "04.23 ~ 05.31 / 04.23 ~ 채용 시 마감"
   */
  recruitmentPeriod?: string;
  /** 담당업무 */
  responsibilities?: string[];
  /** 자격요건 */
  qualifications?: string[];
  /** 우대사항 */
  preferences?: string[];
}

export interface BaseResponseListPostResponse {
  /**
   * HTTP 상태 코드
   * @format int32
   * @example 200
   */
  status?: number;
  /** 응답 상태 코드 */
  code?: string;
  /** 응답 메시지 */
  message?: string;
  /** 응답 결과 (실패 시 null) */
  data?: PostResponse[];
}

/** 응답 결과 (실패 시 null) */
export interface PostResponse {
  /**
   * 게시글 ID
   * @format int64
   */
  id?: number;
  /** 게시글 제목 */
  title?: string;
  /** 게시글 이미지 URL */
  imageUrl?: string;
  /** 공지 게시글 여부 */
  isNotice?: boolean;
  /** 기업 - null 가능 */
  company?: string;
  /** 직무 - null 가능 */
  job?: string;
  /** 게시자 아이디 */
  authorId?: string;
  /**
   * 게시 날짜
   * @format date
   */
  postDate?: string;
  /**
   * 조회수
   * @format int32
   */
  viewCount?: number;
  /**
   * 추천수
   * @format int32
   */
  likeCount?: number;
  /**
   * 스크랩수
   * @format int32
   */
  scrapCount?: number;
  /**
   * 댓글수
   * @format int32
   */
  commentCount?: number;
}

export interface BaseResponseListPassReviewResponse {
  /**
   * HTTP 상태 코드
   * @format int32
   * @example 200
   */
  status?: number;
  /** 응답 상태 코드 */
  code?: string;
  /** 응답 메시지 */
  message?: string;
  /** 응답 결과 (실패 시 null) */
  data?: PassReviewResponse[];
}

/** 응답 결과 (실패 시 null) */
export interface PassReviewResponse {
  /**
   * 후기 ID
   * @format int64
   */
  id?: number;
  /** 후기 제목 */
  title?: string;
  /** 후기 내용 */
  content?: string;
  /**
   * 작성일
   * @format date-time
   */
  createdAt?: string;
}

export interface BaseResponseListPassCoverLetterResponse {
  /**
   * HTTP 상태 코드
   * @format int32
   * @example 200
   */
  status?: number;
  /** 응답 상태 코드 */
  code?: string;
  /** 응답 메시지 */
  message?: string;
  /** 응답 결과 (실패 시 null) */
  data?: PassCoverLetterResponse[];
}

/** 합격 자기소개서 응답 */
export interface PassCoverLetterResponse {
  /**
   * 합격 자기소개서 ID
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 회사 이름
   * @example "카카오"
   */
  companyName?: string;
  /**
   * 자기소개서 내용
   * @example "저는 항상 능동적으로..."
   */
  content?: string;
}

/** 홈 화면 추천 채용공고 응답 */
export interface FeaturedRecruitmentResponse {
  /**
   * 채용공고 ID
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * 기업 로고 URL
   * @example "https://..."
   */
  imageUrl?: string;
  /**
   * 기업명
   * @example "카카오"
   */
  company?: string;
  /**
   * 기업형태
   * @example "대기업"
   */
  companyType?: string;
  /**
   * 공고 제목
   * @example "2026 카카오 신입 공채"
   */
  title?: string;
  /**
   * 마감 D-day (상시채용이면 '상시채용', 아니면 'D-19')
   * @example "D-19"
   */
  dDay?: string;
  /**
   * 모집 마감일
   * @format date-time
   */
  recruitmentEndDate?: string;
  /**
   * 모집 시작일
   * @format date-time
   */
  recruitmentStartDate?: string;
  /**
   * 직무
   * @example "IT/인터넷"
   */
  jobCategory?: string;
}

export type GetRecruitmentsData = RecruitmentResponse;

export type GetRecruitmentDetailData = BaseResponseRecruitmentDetailResponse;

export type GetPostsData = BaseResponseListPostResponse;

export type GetReviewsData = BaseResponseListPassReviewResponse;

export type GetAllData = BaseResponseListPassCoverLetterResponse;

export type GetFeaturedRecruitmentsData = FeaturedRecruitmentResponse;
