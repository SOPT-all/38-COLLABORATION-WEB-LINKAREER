import type { Post } from '@pages/mento/types/post';

import * as styles from './MentoListItem.css';

interface MentoListItemProps {
  post: Post;
}

const MentoListItem = ({ post }: MentoListItemProps) => {
  return (
    <li className={styles.container({ isNotice: post.isNotice })}>
      {post.isNotice && post.company && post.job && (
        <div className={styles.filterRow}>
          <span>{post.company}</span>
          <span className={styles.divider} aria-hidden="true" />
          <span>{post.job}</span>
        </div>
      )}
      <div className={styles.mainContainer}>
        <div className={styles.leftInfo}>
          <span className={styles.title}>{post.title}</span>
          <div className={styles.infoRow}>
            <span className={styles.strongText}>{post.authorId}</span>
            <span>{post.postDate}</span>
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
