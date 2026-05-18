import type { HomeChatCardProps } from '@pages/home/components/homeChatCard/HomeChatCard';

import imgHome19 from '@assets/images/image-home-19.webp';
import imgHome20 from '@assets/images/image-home-20.webp';
import imgHome21 from '@assets/images/image-home-21.webp';
import imgHome22 from '@assets/images/image-home-22.webp';

export const HOME_CHAT_CARDS: HomeChatCardProps[] = [
  {
    logoUrl: imgHome19,
    companyName: '현대자동차',
    participantCount: 91052,
  },
  {
    logoUrl: imgHome20,
    companyName: '삼성 GSAT 시험논의',
    participantCount: 123099,
  },
  {
    logoUrl: imgHome21,
    companyName: '메가스터디(주)',
    participantCount: 1252,
  },
  {
    logoUrl: imgHome22,
    companyName: 'PTKOREA',
    participantCount: 16624,
  },
];
