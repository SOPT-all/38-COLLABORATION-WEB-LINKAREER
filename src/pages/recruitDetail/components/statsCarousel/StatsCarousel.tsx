import Indicator from '@pages/recruitDetail/components/indicator/Indicator';
import StatsAgeCard from '@pages/recruitDetail/components/statsCard/StatsAgeCard';
import StatsRankCard from '@pages/recruitDetail/components/statsCard/StatsRankCard';
import {
  STATS_JOB_DATA,
  STATS_MAJOR_DATA,
  STATS_SCHOOL_DATA,
} from '@pages/recruitDetail/constants/statsData';
import useCarouselDrag from '@pages/recruitDetail/hooks/useCarouselDrag';
import IcChevronRightGray600 from '@shared/assets/svg/IcChevronRightGray600';

import * as styles from './StatsCarousel.css';

const TOTAL_CARDS = 4;

const StatsCarousel = () => {
  const { currentIndex, trackRef, dragHandlers } = useCarouselDrag(
    TOTAL_CARDS,
    {
      isLoop: true,
    },
  );

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>스크랩 유저 통계</h2>
        <button type="button" className={styles.moreButton}>
          전체보기
          <IcChevronRightGray600 width={16} height={16} />
        </button>
      </div>

      <div className={styles.viewport} {...dragHandlers}>
        <div ref={trackRef} className={styles.track}>
          <StatsRankCard type="school" items={STATS_SCHOOL_DATA} />
          <StatsRankCard type="major" items={STATS_MAJOR_DATA} />
          <StatsAgeCard />
          <StatsRankCard type="job" items={STATS_JOB_DATA} />
        </div>
      </div>

      <div className={styles.indicatorWrapper}>
        <Indicator totalCount={TOTAL_CARDS} currentIndex={currentIndex} />
      </div>
    </section>
  );
};

export default StatsCarousel;
