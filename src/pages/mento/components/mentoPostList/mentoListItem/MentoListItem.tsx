import type { Post } from '@pages/mento/types/post';
import { formatDotDate } from '@pages/mento/utils/formatDate';

import * as styles from './MentoListItem.css';

interface MentoListItemProps {
  post: Post;
}

const MentoListItem = ({ post }: MentoListItemProps) => {
  return (
    <li className={styles.container({ isNotice: post.isNotice })}>
      {post.isNotice || (
        <div className={styles.filterRow}>
          <span>{post.company ?? '모든 기업'}</span>
          <span className={styles.divider} aria-hidden="true" />
          <span>{post.job ?? '모든 직무'}</span>
        </div>
      )}
      <div className={styles.mainContainer}>
        <div className={styles.leftInfo}>
          <h3 className={styles.title}>{post.title}</h3>
          <div className={styles.infoRow}>
            <span className={styles.strongText}>{post.authorId}</span>
            <span>{formatDotDate(post.postDate)}</span>
          </div>
          <div className={styles.infoRow}>
            <span>조회수 {post.viewCount}</span>
            <span>추천수 {post.likeCount}</span>
            <span>스크랩수 {post.scrapCount}</span>
          </div>
        </div>
        <div className={styles.rightInfo}>
          {post.imageUrl && (
            <img
              className={styles.thumbnail}
              src={post.imageUrl}
              alt={`${post.title} 썸네일`}
            />
          )}
          <div className={styles.commentBox}>
            <span className={styles.strongText}>{post.commentCount}</span>
            <span className={styles.commentLabel}>댓글</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MentoListItem;
