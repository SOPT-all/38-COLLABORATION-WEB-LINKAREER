import IcChevronUp from '@shared/assets/svg/IcChevronUp';

import * as styles from './TopBtn.css';

interface TopBtnProps {
  onClick?: () => void;
}

const TopBtn = ({ onClick }: TopBtnProps) => {
  return (
    <button className={styles.topBtn} onClick={onClick} aria-label="맨 위로">
      <IcChevronUp width={24} height={24} />
    </button>
  );
};

export default TopBtn;
