import { Link } from 'react-router';

import Tag from '@components/tag/Tag';
import DdayTag from '@pages/home/components/ddayTag/DdayTag';
import type { HomeFeaturedCarouselItem } from '@pages/home/types/homeFeaturedCarousel';

import * as styles from './HomeFeaturedCarouselCard.css';

interface HomeFeaturedCarouselCardProps {
  carouselItem: HomeFeaturedCarouselItem;
  totalCardCount: number;
  currentCardNumber: number;
}

const HomeFeaturedCarouselCard = ({
  carouselItem,
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
  } = carouselItem;

  const cardContent = (
    <>
      <img className={styles.thumbnail} src={thumbnailUrl} alt={thumbnailAlt} />
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
    </>
  );

  const announcementContent = (
    <>
      <h2 className={styles.announcementTitle}>{announcementTitle}</h2>
      <p className={styles.announcementMeta}>
        {announcementDeadline} · {announcementCategory}
      </p>
    </>
  );

  return (
    <article className={styles.container}>
      {to ? (
        <Link className={styles.card} to={to} aria-label={announcementTitle}>
          {cardContent}
        </Link>
      ) : (
        <div className={styles.card}>{cardContent}</div>
      )}
      {to ? (
        <Link className={styles.announcementInfo} to={to}>
          {announcementContent}
        </Link>
      ) : (
        <div className={styles.announcementInfo}>{announcementContent}</div>
      )}
    </article>
  );
};

export default HomeFeaturedCarouselCard;
