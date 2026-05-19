import HomeActivityCard from '@pages/home/components/homeActivityCard/HomeActivityCard';
import HomeSectionHeader from '@pages/home/components/homeSectionHeader/HomeSectionHeader';
import { HOME_ACTIVITY_CARDS } from '@pages/home/mocks/homeActivity';

import * as styles from './HomeActivitySection.css';

const HomeActivitySection = () => {
  return (
    <section className={styles.mainContainer}>
      <HomeSectionHeader title="지금 인기 있는 대외활동" to="/recruit" />

      <div className={styles.activityList}>
        {HOME_ACTIVITY_CARDS.map((activity) => (
          <HomeActivityCard key={activity.id} {...activity} />
        ))}
      </div>
    </section>
  );
};

export default HomeActivitySection;
