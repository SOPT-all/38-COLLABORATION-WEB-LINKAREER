export const HOME_NEW_NOTICE_CATEGORIES = [
  '콘텐츠 마케팅',
  '퍼포먼스 마케팅',
] as const;

export type HomeNewNoticeCategory = (typeof HOME_NEW_NOTICE_CATEGORIES)[number];
