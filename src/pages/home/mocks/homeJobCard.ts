import imgHome16 from '@assets/images/image-home-16.webp';
import imgHome17 from '@assets/images/image-home-17.webp';
import imgHome18 from '@assets/images/image-home-18.webp';
import type { HomeJobCardData } from '@pages/home/types/homeJobCard';

export const HOME_JOB_CARDS: HomeJobCardData[] = [
  {
    id: 1,
    logoUrl: imgHome16,
    title: '[메디쿼터스] [와이엠헬스케어] 마케터 (인턴)',
    companyName: '(주)메디쿼터스',
    dDay: 'D-19',
    category: '마케팅',
    bookmarkCount: 539,
    isBookmarked: false,
  },
  {
    id: 2,
    logoUrl: imgHome17,
    title: '[기아] [계약직] 국내 채용 홍보 & 마케팅',
    companyName: '기아',
    dDay: 'D-24',
    category: '마케팅',
    bookmarkCount: 1309,
    isBookmarked: true,
  },
  {
    id: 3,
    logoUrl: imgHome18,
    title: '[이노션] 데이터 엔지니어 (Google Analytics)',
    companyName: '(주)이노션',
    dDay: 'D-27',
    category: '마케팅',
    bookmarkCount: 328,
    isBookmarked: true,
  },
];
