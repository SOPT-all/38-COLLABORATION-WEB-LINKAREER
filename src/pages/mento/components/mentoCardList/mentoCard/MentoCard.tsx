import SvgIcCerti from '@assets/svg/IcCerti';
import SvgIcChevronRightGray600 from '@assets/svg/IcChevronRightGray600';
import Tag from '@components/tag/Tag';
import type { Card } from '@pages/mento/types/card';

import * as styles from './MentoCard.css';

interface MentoCardProps {
  card: Card;
}

const MentoCard = ({ card }: MentoCardProps) => {
  return (
    <article className={styles.container({ isFixed: card.isFixed })}>
      <header className={styles.cardHeader}>
        <div className={styles.headerTop}>
          <div className={styles.mentoNamePart}>
            <strong className={styles.mentoName}>{card.name}</strong>
            <SvgIcCerti width="2.4rem" height="2.4rem" />
          </div>
          <SvgIcChevronRightGray600 width="2.4rem" height="2.4rem" />
        </div>
        <p className={styles.filterRow}>
          <span>{card.company}</span>
          <span className={styles.divider} aria-hidden="true" />
          <span>{card.job}</span>
        </p>
      </header>
      <div className={styles.cardInfo}>
        <h3 className={styles.title}>{card.title}</h3>
        <div className={styles.infoBox}>
          <p className={styles.infoRow}>
            <span>채택률 {card.acceptanceRate}%</span>
            <span className={styles.circleDivider} aria-hidden="true" />
            <span>답변 수 {card.answerCount.toLocaleString()}</span>
          </p>
          <ul className={styles.infoRow}>
            {card.tag.map((tag) => (
              <li key={tag}>
                <Tag text={tag} size="small" color="gray" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default MentoCard;
