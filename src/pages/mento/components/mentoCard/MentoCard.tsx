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
            <strong className={styles.mentoName}>링커멘토</strong>
            <SvgIcCerti width="2.4rem" height="2.4rem" />
          </div>
          <SvgIcChevronRightGray600 width="2.4rem" height="2.4rem" />
        </div>
        <p className={styles.filterRow}>
          <span>신세계</span>
          <span className={styles.divider} aria-hidden="true" />
          <span>프론트엔드 개발자</span>
        </p>
      </header>
      <div className={styles.cardInfo}>
        <h3 className={styles.title}>
          "비전공자에서 대기업 프론트가 되기까지"
        </h3>
        <div className={styles.infoBox}>
          <p className={styles.infoRow}>
            <span>채택률 90%</span>
            <span className={styles.circleDivider} aria-hidden="true" />
            <span>답변 수 1,678</span>
          </p>
          <ul className={styles.infoRow}>
            <li>
              <Tag text="#대기업" size="small" color="gray" />
            </li>
            <li>
              <Tag text="#비전공자" size="small" color="gray" />
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default MentoCard;
