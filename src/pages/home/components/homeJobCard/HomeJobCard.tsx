import IcBookmarkFilled from '@assets/svg/IcBookmarkFilled';
import IcBookmarkGray400 from '@assets/svg/IcBookmarkGray400';
import type { HomeJobCardData } from '@pages/home/types/homeJobCard';

import * as styles from './HomeJobCard.css';

interface HomeJobCardProps extends HomeJobCardData {
  onCardClick: () => void;
  onBookmarkClick: () => void;
}

const HomeJobCard = ({
  logoUrl,
  title,
  companyName,
  dDay,
  category,
  bookmarkCount,
  isBookmarked,
  onCardClick,
  onBookmarkClick,
}: HomeJobCardProps) => {
  const BookmarkIcon = isBookmarked ? IcBookmarkFilled : IcBookmarkGray400;

  return (
    <article className={styles.cardContainer} onClick={onCardClick}>
      <img
        src={logoUrl}
        className={styles.logoImage}
        alt={`${companyName} 로고`}
      />

      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.companyName}>{companyName}</p>

        <div className={styles.bottomContainer}>
          <span className={styles.dDay}>{dDay}</span>
          <span className={styles.dot}>·</span>
          <span className={styles.category}>{category}</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.bookmarkContainer}
        aria-label={isBookmarked ? '북마크 해제' : '북마크 추가'}
        aria-pressed={isBookmarked}
        onClick={(e) => {
          e.stopPropagation();
          onBookmarkClick();
        }}
      >
        <BookmarkIcon width="1.6rem" height="1.6rem" />
        <span className={styles.bookmarkText}>{bookmarkCount}</span>
      </button>
    </article>
  );
};

export default HomeJobCard;
