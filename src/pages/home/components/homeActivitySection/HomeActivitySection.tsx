import { HOME_ACTIVITY_CARDS } from '@pages/home/mocks/homeActivitySection';

import HomeActivityCard from '../homeActivityCard/HomeActivityCard';
import HomeSectionHeader from '../homeSectionHeader/HomeSectionHeader';

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
