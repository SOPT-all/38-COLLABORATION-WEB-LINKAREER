import type { HomeActivityCardData } from '@pages/home/types/homeActivityCard';

import * as styles from './HomeActivityCard.css';

const HomeActivityCard = ({
  imageUrl,
  title,
  companyName,
  dDay,
  category,
}: HomeActivityCardData) => {
  return (
    <article className={styles.card}>
      <div className={styles.logoBox}>
        <img src={imageUrl} alt="" className={styles.image} />
        <div className={styles.logoShadow} />
      </div>

      <div className={styles.textBox}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.companyName}>{companyName}</p>

        <div className={styles.bottomBox}>
          <span className={styles.dDay}>{dDay}</span>
          <span className={styles.dot}>·</span>
          <span className={styles.category}>{category}</span>
        </div>
      </div>
    </article>
  );
};

export default HomeActivityCard;
