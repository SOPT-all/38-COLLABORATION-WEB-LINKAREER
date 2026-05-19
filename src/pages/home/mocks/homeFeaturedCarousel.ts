import imgHome1 from '@assets/images/image-home-1.webp';
import imgHome2 from '@assets/images/image-home-2.webp';
import imgHome3 from '@assets/images/image-home-3.webp';
import imgHome4 from '@assets/images/image-home-4.webp';
import type { HomeFeaturedCarouselItem } from '@pages/home/types/homeFeaturedCarousel';

export const HOME_FEATURED_CAROUSEL_ITEMS: HomeFeaturedCarouselItem[] = [
  {
    to: '/recruit/detail',
    companyName: '(주)메디쿼터스',
    companySize: '중소기업',
    daysLeft: 19,
    thumbnailUrl: imgHome1,
    thumbnailAlt: '기업 채용공고 이미지',
    companyLogoUrl: imgHome2,
    companyLogoAlt: '기업 로고',
    announcementTitle: '[메디쿼터스] [와이엠헬스케어] 마케터 (인턴)',
    announcementDeadline: '채용 시 마감',
    announcementCategory: '마케팅',
  },
  {
    // 두 번째 데이터는 to 없음 (명세상, 클릭해도 페이지 이동하지 않음)
    companyName: '기아',
    companySize: '대기업',
    daysLeft: 24,
    thumbnailUrl: imgHome3,
    thumbnailAlt: '기업 채용공고 이미지',
    companyLogoUrl: imgHome4,
    companyLogoAlt: '기업 로고',
    announcementTitle: '[기아] [계약직] 국내 채용 홍보 & 마케팅',
    announcementDeadline: '~05.29',
    announcementCategory: '마케팅',
  },
];
