import Tag from '@components/tag/Tag';
import DdayTag from '@pages/home/components/ddayTag/DdayTag';

import * as styles from './HomeNewNoticeCard.css';

interface HomeNewNoticeCardProps {
  tagText: string;
  titleText: string[];
  daysLeft: number;
  imageUrl: string;
  imageAlt: string;
}

const HomeNewNoticeCard = ({
  tagText,
  titleText,
  daysLeft,
  imageUrl,
  imageAlt,
}: HomeNewNoticeCardProps) => {
  const formattedCardTitle = titleText.join('\n');

  return (
    <article className={styles.container}>
      <img className={styles.thumbnail} src={imageUrl} alt={imageAlt} />
      <div className={styles.ddayLayer}>
        <DdayTag daysLeft={daysLeft} />
      </div>
      <div className={styles.overlay}>
        <Tag size="medium" color="blue" text={tagText} />
        <h2 className={styles.title}>{formattedCardTitle}</h2>
      </div>
    </article>
  );
};
export default HomeNewNoticeCard;
