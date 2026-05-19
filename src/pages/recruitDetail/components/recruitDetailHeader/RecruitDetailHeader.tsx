import IcIcChevronLeftWhite from '@assets/svg/IcChevronLeftWhite';
import IcShare from '@assets/svg/IcShare';

import * as styles from './RecruitDetailHeader.css';

interface RecruitDetailHeaderProps {
  onBack?: () => void;
  onShare?: () => void;
}

const RecruitDetailHeader = ({ onBack, onShare }: RecruitDetailHeaderProps) => {
  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.iconButton}
        onClick={onBack}
        aria-label="뒤로가기"
      >
        <IcIcChevronLeftWhite width={24} height={24} />
      </button>
      <button
        type="button"
        className={styles.iconButton}
        onClick={onShare}
        aria-label="공유"
      >
        <IcShare width={24} height={24} />
      </button>
    </header>
  );
};

export default RecruitDetailHeader;
