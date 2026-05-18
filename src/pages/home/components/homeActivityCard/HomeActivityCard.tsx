import * as styles from './HomeActivityCard.css';

export interface HomeActivityCardProps {
  id: number;
  imageUrl: string;
  title: string;
  companyName: string;
  dDay: string;
  category: string;
}

const HomeActivityCard = ({
  imageUrl,
  title,
  companyName,
  dDay,
  category,
}: HomeActivityCardProps) => {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.logoContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
        <div className={styles.logoShadow} />
      </div>

      <div className={styles.textContainer}>
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
