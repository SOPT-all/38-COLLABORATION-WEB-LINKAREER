import Tag from '@components/tag/Tag';
import type { CenterAd } from '@pages/mento/types/ad';

import * as styles from './MentoCenterBanner.css';

interface MentoCenterBannerProps {
  ad: CenterAd;
}

const MentoCenterBanner = ({ ad }: MentoCenterBannerProps) => {
  return (
    <aside className={styles.container} aria-label="광고">
      <div className={styles.adLeftContent}>
        <strong className={styles.adTitle}>{ad.title}</strong>
        <p className={styles.adDetail}>{ad.detail}</p>
        <div className={styles.tagRow}>
          <Tag size="small" text="AD" color="gray" />
          <span className={styles.adSource}>{ad.source}</span>
        </div>
      </div>
      <img src={ad.imageUrl} alt="광고 이미지" className={styles.adImg} />
    </aside>
  );
};

export default MentoCenterBanner;
