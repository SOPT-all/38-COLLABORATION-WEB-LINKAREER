export interface Post {
  id: number;
  title: string;
  imageUrl: string | null;
  isNotice: boolean;
  company: string | null;
  job: string | null;
  authorId: string;
  postDate: string;
  viewCount: number;
  likeCount: number;
  scrapCount: number;
  commentCount: number;
}
