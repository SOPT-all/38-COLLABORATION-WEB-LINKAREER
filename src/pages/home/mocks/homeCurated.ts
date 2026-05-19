import type { HomeCuratedItem } from '@pages/home/types/homeCuratedCard';

export const HOME_CURATED_ITEMS: HomeCuratedItem[] = [
  {
    id: 1,
    eyebrowText: '오늘의 추천',
    cardTitle: ['김솝트님을 위한', '따끈따끈한 공고'],
    to: '/recruit',
    imageType: 'clipboard',
  },
  {
    id: 2,
    eyebrowText: '마감임박!',
    cardTitle: ['지금 확인해야 하는', '신입/인턴 공고'],
    to: '/recruit',
    imageType: 'clock',
  },
];
