import * as styles from './HomeSectionHeader.css';
import { Link } from 'react-router';

interface HomeSectionHeaderProps {
  title: string;
  to: string;
}

const HomeSectionHeader = ({ title, to }: HomeSectionHeaderProps) => {
  return (
    <div className={styles.topTextContainer}>
      <h2 className={styles.mainTitle}>{title}</h2>
      <Link to={to} className={styles.viewMoreButton}>
        더보기
      </Link>
    </div>
  );
};
export default HomeSectionHeader;
