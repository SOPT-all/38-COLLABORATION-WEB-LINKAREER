import {
  STATS_AGE_DATA,
  STATS_AGE_DATA_MAX,
} from '@pages/recruitDetail/constants/statsData';
import DetailAge from '@shared/assets/svg/DetailAge';

import StatsCardBase from './StatsCardBase';

import * as styles from './StatsCard.css';

const StatsAgeCard = () => {
  return (
    <StatsCardBase icon={<DetailAge width={24} height={24} />} title="연령">
      <div className={styles.chartArea}>
        <ul className={styles.barList}>
          {STATS_AGE_DATA.map((item) => {
            const isActive = item.percent === STATS_AGE_DATA_MAX;
            return (
              <li key={item.label} className={styles.barItem}>
                <span
                  className={
                    isActive ? styles.activePercent : styles.inactivePercent
                  }
                >
                  {item.percent > 0 ? `${item.percent}%` : ''}
                </span>
                <div className={styles.barTrack}>
                  <div
                    className={
                      isActive ? styles.barFill : styles.barFillInactive
                    }
                    style={{ height: `${item.percent}%` }}
                  />
                </div>
                <span className={styles.ageLabel}>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </StatsCardBase>
  );
};

export default StatsAgeCard;
