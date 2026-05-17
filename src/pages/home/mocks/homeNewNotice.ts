import notice_1_thumbnail from '@assets/images/img_home5.webp';
import notice_2_thumbnail from '@assets/images/img_home6.webp';
import notice_3_thumbnail from '@assets/images/img_home7.webp';
import notice_4_thumbnail from '@assets/images/img_home8.webp';
import notice_5_thumbnail from '@assets/images/img_home9.webp';
import notice_6_thumbnail from '@assets/images/img_home10.webp';
import type { HomeNewNoticeItem } from '@pages/home/types/homeNewNoticeCard';

export const HOME_NEW_NOTICE_ITEMS: HomeNewNoticeItem[] = [
  {
    id: 1,
    category: '콘텐츠 마케팅',
    tagText: '공모전',
    titleText: ['[배스킨라빈스]', '2026 그래이맛 콘테스트'],
    daysLeft: 2,
    imageUrl: notice_1_thumbnail,
    imageAlt: '공고 이미지',
  },
  {
    id: 2,
    category: '콘텐츠 마케팅',
    tagText: '대외활동',
    titleText: ['2026 대학혁신지원사업', '총괄협의회 서포터즈 모집'],
    daysLeft: 13,
    imageUrl: notice_2_thumbnail,
    imageAlt: '공고 이미지',
  },
  {
    id: 3,
    category: '콘텐츠 마케팅',
    tagText: '교육',
    titleText: [
      '[오픈놀][AI 기반 프로그램',
      '기획 과제]프로그램 기획, A to Z 미니인턴으로 직접 제안해보세요!(~5/5)',
    ],
    daysLeft: 15,
    imageUrl: notice_3_thumbnail,
    imageAlt: '공고 이미지',
  },
  {
    id: 4,
    category: '퍼포먼스 마케팅',
    tagText: '대외활동',
    titleText: ['2026 NEW 월간베네통', '2기 서포터즈 모집'],
    daysLeft: 9,
    imageUrl: notice_4_thumbnail,
    imageAlt: '공고 이미지',
  },
  {
    id: 5,
    category: '퍼포먼스 마케팅',
    tagText: '공모전',
    titleText: ['[STK 2026] 제1회', 'GenAI 활용 STK 광고영상 공모전'],
    daysLeft: 34,
    imageUrl: notice_5_thumbnail,
    imageAlt: '공고 이미지',
  },
  {
    id: 6,
    category: '퍼포먼스 마케팅',
    tagText: '대외활동',
    titleText: ['마케팅 인턴 전 필수 경험 |', 'SNS 실무 프로젝트 10주 완성'],
    daysLeft: 8,
    imageUrl: notice_6_thumbnail,
    imageAlt: '공고 이미지',
  },
];
