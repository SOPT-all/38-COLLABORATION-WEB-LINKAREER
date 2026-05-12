import IcChevronUp from '@shared/assets/svg/IcChevronUp';

import * as styles from './BtnTop.css';

export default function BtnTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={styles.btnTop}
      onClick={handleClick}
      aria-label="맨 위로"
    >
      <IcChevronUp width={24} height={24} />
    </button>
  );
}
