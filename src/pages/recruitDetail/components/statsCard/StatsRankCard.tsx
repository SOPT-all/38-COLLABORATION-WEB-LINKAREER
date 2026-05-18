import DetailJob from '@shared/assets/svg/DetailJob';
import DetailMajor from '@shared/assets/svg/DetailMajor';
import DetailUniversity from '@shared/assets/svg/DetailUniversity';

import StatsCardBase from './StatsCardBase';

import * as styles from './StatsCard.css';

interface RankItem {
  rank: number;
  label: string;
  percent: number;
}

type StatsRankCardType = 'school' | 'major' | 'job';

const CARD_CONFIG: Record<
  StatsRankCardType,
  { title: string; icon: React.ReactNode }
> = {
  school: {
    title: '학교',
    icon: <DetailUniversity width={24} height={24} />,
  },
  major: { title: '전공', icon: <DetailMajor width={24} height={24} /> },
  job: { title: '관심직무', icon: <DetailJob width={24} height={24} /> },
};

interface StatsRankCardProps {
  type: StatsRankCardType;
  items: readonly RankItem[];
}

const StatsRankCard = ({ type, items }: StatsRankCardProps) => {
  const { title, icon } = CARD_CONFIG[type];

  return (
    <StatsCardBase icon={icon} title={title}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.rank} className={styles.item}>
            <div className={styles.leftContent}>
              <span className={styles.rank}>{item.rank}</span>
              <span className={styles.label}>{item.label}</span>
            </div>
            <span className={styles.percent}>{item.percent}%</span>
          </li>
        ))}
      </ul>
    </StatsCardBase>
  );
};

export default StatsRankCard;
