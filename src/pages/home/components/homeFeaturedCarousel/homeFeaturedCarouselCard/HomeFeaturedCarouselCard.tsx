import { Link } from 'react-router';

import Tag from '@components/tag/Tag';
import DdayTag from '@pages/home/components/ddayTag/DdayTag';
import type { HomeFeaturedCarouselItem } from '@pages/home/types/homeFeaturedCarousel';

import * as styles from './HomeFeaturedCarouselCard.css';

interface HomeFeaturedCarouselCardProps {
  homeFeaturedCarouselItem: HomeFeaturedCarouselItem;
  totalCardCount: number;
  currentCardNumber: number;
}

const HomeFeaturedCarouselCard = ({
  homeFeaturedCarouselItem,
  totalCardCount,
  currentCardNumber,
}: HomeFeaturedCarouselCardProps) => {
  const {
    to,
    companyName,
    companySize,
    daysLeft,
    thumbnailUrl,
    thumbnailAlt,
    companyLogoUrl,
    companyLogoAlt,
    announcementTitle,
    announcementDeadline,
    announcementCategory,
  } = homeFeaturedCarouselItem;

  return (
    <article className={styles.container}>
      <Link className={styles.card} to={to} aria-label={announcementTitle}>
        <img
          className={styles.thumbnail}
          src={thumbnailUrl}
          alt={thumbnailAlt}
        />
        <div className={styles.fractionalIndicator}>
          <Tag
            size="medium"
            color="black"
            text={`${currentCardNumber}/${totalCardCount}`}
          />
        </div>
        <div className={styles.ddayIndicator}>
          <DdayTag size="medium" daysLeft={daysLeft} />
        </div>
        <div className={styles.overlay}>
          <div className={styles.companyInfoContainer}>
            <img
              className={styles.companyLogo}
              src={companyLogoUrl}
              alt={companyLogoAlt}
            />
            <div className={styles.companyInfoText}>
              <h2 className={styles.companyName}>{companyName}</h2>
              <p className={styles.companySize}>{companySize}</p>
            </div>
          </div>
        </div>
      </Link>
      <Link className={styles.announcementInfo} to={to}>
        <h2 className={styles.announcementTitle}>{announcementTitle}</h2>
        <p className={styles.announcementMeta}>
          {announcementDeadline} · {announcementCategory}
        </p>
      </Link>
    </article>
  );
};

export default HomeFeaturedCarouselCard;
