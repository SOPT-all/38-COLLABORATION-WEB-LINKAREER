import Tag from '@components/tag/Tag';

import * as styles from './ReviewCard.css';

interface ReviewCardProps {
  title: string;
  body: string;
  tags: string[];
  isBorder?: boolean;
}

const ReviewCard = ({
  title,
  body,
  tags,
  isBorder = false,
}: ReviewCardProps) => {
  return (
    <article className={styles.container({ isBorder })}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
      <div className={styles.tagRow}>
        {tags.map((tag) => (
          <Tag key={tag} text={tag} size="small" color="gray" />
        ))}
      </div>
    </article>
  );
};

export default ReviewCard;
