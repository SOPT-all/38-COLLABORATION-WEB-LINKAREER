import IcChevronRightGray700 from '@assets/svg/IcChevronRightGray700';
import ReviewCard from '@pages/recruitDetail/components/reviewCard/ReviewCard';

import * as styles from './ReviewSection.css';

interface ReviewItem {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

interface ReviewSectionProps {
  sectionTitle: string;
  items: ReviewItem[];
}

const ReviewSection = ({ sectionTitle, items }: ReviewSectionProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <button type="button" className={styles.moreButton}>
          더보기
          <IcChevronRightGray700 width={16} height={16} />
        </button>
      </div>
      {items.map((item, index) => (
        <ReviewCard
          key={`${sectionTitle}-${item.id}`}
          title={item.title}
          body={item.body}
          tags={item.tags}
          isBorder={index !== items.length - 1}
        />
      ))}
    </section>
  );
};

export default ReviewSection;
