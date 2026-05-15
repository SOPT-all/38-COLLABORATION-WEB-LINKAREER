import IcBookmarkFilled from '@assets/svg/IcBookmarkFilled';
import IcBookmarkGray400 from '@assets/svg/IcBookmarkGray400';
import * as styles from './HomeJobCard.css';

interface HomeJobCardProps {
  logoUrl: string;
  title: string;
  companyName: string;
  dDay: string;
  category: string;
  bookmarkCount: number;
  isBookmarked: boolean;
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
    <article className={styles.card}>
      <img
        src={logoUrl}
        className={styles.logoImage}
        alt={`${companyName} 로고`}
      />
      <button type="button" className={styles.textBox} onClick={onCardClick}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.companyName}>{companyName}</p>

        <div className={styles.bottomBox}>
          <span className={styles.dDay}>{dDay}</span>
          <span>·</span>
          <span className={styles.category}>{category}</span>
        </div>
      </button>

      <button
        type="button"
        className={styles.bookmarkBox}
        onClick={onBookmarkClick}
      >
        <BookmarkIcon className={styles.bookmarkIcon} />
        <span className={styles.bookmarkText}>{bookmarkCount}</span>
      </button>
    </article>
  );
};

export default HomeJobCard;
