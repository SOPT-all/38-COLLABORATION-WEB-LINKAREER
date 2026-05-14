import { useState } from 'react';

import SvgIcBookmarkFilled from '@assets/svg/IcBookmarkFilled';
import SvgIcBookmarkGray400 from '@assets/svg/IcBookmarkGray400';
import Tag from '@components/tag/Tag';

import * as styles from './RecruitCard.css';

export interface RecruitCardProps {
  id: number;
  title?: string;
  company?: string;
  employmentType?: string;
  location?: string;
  imageUrl?: string;
  deadlineLabel?: string;
  onCardClick?: (id: number) => void;
}

const RecruitCard = ({
  id,
  title,
  company,
  employmentType,
  imageUrl,
  location,
  deadlineLabel,
  onCardClick,
}: RecruitCardProps) => {
  const [isBookmarked, setIsBookMarked] = useState(false);

  const handleCardClick = () => {
    onCardClick?.(id);
  };

  const handleCardKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookMarked((prev) => !prev);
  };

  return (
    <div
      className={styles.container}
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      <div className={styles.imgContainer}>
        {imageUrl && (
          <img src={imageUrl} alt={company ? `${company} 로고` : '회사 로고'} />
        )}
      </div>

      <div className={styles.contentContainer}>
        <header className={styles.topContainer}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.company}>{company}</p>
          </div>
          <button
            type="button"
            aria-pressed={isBookmarked}
            aria-label={isBookmarked ? '북마크 해제' : '북마크 저장'}
            className={styles.icContainer}
            onClick={handleBookmarkClick}
          >
            {isBookmarked ? (
              <SvgIcBookmarkFilled width={'1.6rem'} height={'1.6rem'} />
            ) : (
              <SvgIcBookmarkGray400 width={'1.6rem'} height={'1.6rem'} />
            )}
          </button>
        </header>

        <div className={styles.bottomContainer}>
          <div className={styles.tagContainer}>
            {employmentType && (
              <Tag text={employmentType} color="gray" size="small" />
            )}
            {location && <Tag text={location} color="blue" size="small" />}
          </div>
          <p className={styles.deadline}>{deadlineLabel}</p>
        </div>
      </div>
    </div>
  );
};

export default RecruitCard;
