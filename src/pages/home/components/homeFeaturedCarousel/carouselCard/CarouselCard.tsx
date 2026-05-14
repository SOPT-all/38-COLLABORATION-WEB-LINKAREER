import Tag from '@components/tag/Tag';
import DdayTag from '@pages/home/components/ddayTag/DdayTag';

import * as styles from './CarouselCard.css';

interface CarouselCardProps {
  numOfCards: number;
  currCardOrder: number;
  companyNameText: string;
  companySizeText: string;
  daysLeft: number;
  backgroundUrl: string;
  backgroundAlt: string;
  iconUrl: string;
  iconAlt: string;
}

const CarouselCard = ({
  numOfCards,
  currCardOrder,
  companyNameText,
  companySizeText,
  daysLeft,
  backgroundUrl,
  backgroundAlt,
  iconUrl,
  iconAlt,
}: CarouselCardProps) => {
  return (
    <article className={styles.container}>
      <img
        className={styles.thumbnail}
        src={backgroundUrl}
        alt={backgroundAlt}
      />
      <div className={styles.fractionalIndicator}>
        <Tag
          size="medium"
          color="black"
          text={`${currCardOrder}/${numOfCards}`}
        />
      </div>
      <div className={styles.ddayIndicator}>
        <DdayTag size="medium" daysLeft={daysLeft} />
      </div>
      <div className={styles.overlay}>
        <div className={styles.companyInfoContainer}>
          <img className={styles.companyIcon} src={iconUrl} alt={iconAlt} />
          <div className={styles.companyInfoText}>
            <h2 className={styles.companyName}>{companyNameText}</h2>
            <p className={styles.companySize}>{companySizeText}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CarouselCard;
