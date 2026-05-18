import { Link } from 'react-router';

import * as styles from './HomeSectionHeader.css';

interface HomeSectionHeaderProps {
  title: string;
  description?: string;
  to?: string;
  showViewMore?: boolean;
}

const HomeSectionHeader = ({
  title,
  description,
  to,
  showViewMore = Boolean(to),
}: HomeSectionHeaderProps) => {
  return (
    <div className={styles.topTextContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.mainTitle}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      {showViewMore &&
        (to ? (
          <Link to={to} className={styles.viewMoreButton}>
            더보기
          </Link>
        ) : (
          <span className={styles.viewMoreButton}>더보기</span>
        ))}
    </div>
  );
};

export default HomeSectionHeader;
