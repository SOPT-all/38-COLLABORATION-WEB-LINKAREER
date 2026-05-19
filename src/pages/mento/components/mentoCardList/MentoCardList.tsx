import type { Card } from '@pages/mento/types/card';

import MentoCard from './mentoCard/MentoCard';

import * as styles from './MentoCardList.css';

interface MentoCardListProps {
  cardList: Card[];
}

const MentoCardList = ({ cardList }: MentoCardListProps) => {
  return (
    <div className={styles.container}>
      {cardList.map((card) => (
        <MentoCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default MentoCardList;
