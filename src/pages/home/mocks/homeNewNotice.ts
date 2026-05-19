import imgHome5 from '@assets/images/image-home-5.webp';
import imgHome6 from '@assets/images/image-home-6.webp';
import imgHome7 from '@assets/images/image-home-7.webp';
import imgHome8 from '@assets/images/image-home-8.webp';
import imgHome9 from '@assets/images/image-home-9.webp';
import imgHome10 from '@assets/images/image-home-10.webp';
import type { HomeNewNoticeItem } from '@pages/home/types/homeNewNoticeCard';

export const HOME_NEW_NOTICE_ITEMS: HomeNewNoticeItem[] = [
  {
    id: 1,
    category: '콘텐츠 마케팅',
    tagText: '공모전',
    titleText: ['[배스킨라빈스]', '2026 그래이맛 콘테스트'],
    daysLeft: 2,
    imageUrl: imgHome5,
    imageAlt: '공고 이미지',
  },
  {
    id: 2,
    category: '콘텐츠 마케팅',
    tagText: '대외활동',
    titleText: ['2026 대학혁신지원사업', '총괄협의회 서포터즈 모집'],
    daysLeft: 13,
    imageUrl: imgHome6,
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
    imageUrl: imgHome7,
    imageAlt: '공고 이미지',
  },
  {
    id: 4,
    category: '퍼포먼스 마케팅',
    tagText: '대외활동',
    titleText: ['2026 NEW 월간베네통', '2기 서포터즈 모집'],
    daysLeft: 9,
    imageUrl: imgHome8,
    imageAlt: '공고 이미지',
  },
  {
    id: 5,
    category: '퍼포먼스 마케팅',
    tagText: '공모전',
    titleText: ['[STK 2026] 제1회', 'GenAI 활용 STK 광고영상 공모전'],
    daysLeft: 34,
    imageUrl: imgHome9,
    imageAlt: '공고 이미지',
  },
  {
    id: 6,
    category: '퍼포먼스 마케팅',
    tagText: '대외활동',
    titleText: ['마케팅 인턴 전 필수 경험 |', 'SNS 실무 프로젝트 10주 완성'],
    daysLeft: 8,
    imageUrl: imgHome10,
    imageAlt: '공고 이미지',
  },
];
