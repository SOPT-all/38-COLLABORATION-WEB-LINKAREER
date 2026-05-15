export type CompanySize = '대기업' | '중견기업' | '중소기업';

export interface CarouselItem {
  to: string;
  companyName: string;
  companySize: CompanySize;
  daysLeft: number;
  thumbnailUrl: string;
  thumbnailAlt: string;
  companyLogoUrl: string;
  companyLogoAlt: string;
  announcementTitle: string;
  announcementDeadline: string;
  announcementCategory: string;
}
