import type { HomeNewNoticeCategory } from '@pages/home/constants/homeNewNotice';

export interface HomeNewNoticeCardProps {
  tagText: string;
  titleText: string[];
  daysLeft: number;
  imageUrl: string;
  imageAlt: string;
}

export interface HomeNewNoticeItem extends HomeNewNoticeCardProps {
  id: number;
  category: HomeNewNoticeCategory;
}
