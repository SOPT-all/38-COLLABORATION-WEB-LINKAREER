import * as styles from './MentoListItem.css';

interface MentoListItemProps {
  listType?: 'announce' | 'question';
  hasthumbnail?: boolean;
}

const MentoListItem = ({
  listType = 'question',
  hasthumbnail = false,
}: MentoListItemProps) => {
  return (
    <li className={styles.container({ listType })}>
      {listType === 'announce' && (
        <div className={styles.filterRow}>
          <span>모든 기업</span>
          <span className={styles.divider} aria-hidden="true" />
          <span>모든 직무</span>
        </div>
      )}
      <div className={styles.mainContainer}>
        <div className={styles.leftInfo}>
          <span className={styles.title}>📌링커리어 멘토 게시판 이용가능</span>
          <div className={styles.infoRow}>
            <span className={styles.strongText}>링커리어</span>
            <span>2024.01.03</span>
          </div>
          <div className={styles.infoRow}>
            <span>조회수 373</span>
            <span>추천수 0</span>
            <span>스크랩수 1</span>
          </div>
        </div>
        <div className={styles.rightInfo}>
          {hasthumbnail && <div className={styles.thumbnail}>사진</div>}
          <div className={styles.commentBox}>
            <span className={styles.strongText}>0</span>
            <span className={styles.commentLabel}>댓글</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MentoListItem;
