import SvgIcCerti from '@assets/svg/IcCerti';
import SvgIcChevronRightGray600 from '@assets/svg/IcChevronRightGray600';
import Tag from '@components/tag/Tag';

import * as styles from './MentoCard.css';

interface MentoCardProps {
  isFixed?: boolean;
}

const MentoCard = ({ isFixed = false }: MentoCardProps) => {
  return (
    <article className={styles.container({ isFixed })}>
      <header className={styles.cardHeader}>
        <div className={styles.headerTop}>
          <div className={styles.mentoNamePart}>
            <div className={styles.mentoName}>링커멘토</div>
            <SvgIcCerti width="2.4rem" height="2.4rem" />
          </div>
          <SvgIcChevronRightGray600 width="2.4rem" height="2.4rem" />
        </div>
        <div className={styles.filterRow}>
          <span>모든 기업</span>
          <span className={styles.divider} aria-hidden="true" />
          <span>모든 직무</span>
        </div>
      </header>
      <div className={styles.cardInfo}>
        <h3 className={styles.title}>
          "비전공자에서 대기업 프론트가 되기까지"
        </h3>
        <div className={styles.infoBox}>
          <div className={styles.infoRow}>
            <span>채택률 90%</span>
            <span className={styles.circleDivider} aria-hidden="true" />
            <span>채택률 90%</span>
          </div>
          <div className={styles.infoRow}>
            <Tag text="#대기업" size="small" color="gray" />
            <Tag text="#비전공자" size="small" color="gray" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default MentoCard;
