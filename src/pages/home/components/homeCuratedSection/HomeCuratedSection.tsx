import HomeCuratedCard from '@pages/home/components/homeCuratedCard/HomeCuratedCard';
import { HOME_CURATED_ITEMS } from '@pages/home/mocks/homeCurated';

import * as styles from './HomeCuratedSection.css';

const HomeCuratedSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <span className={styles.titleBlue}>첫 인턴</span>, 여기서 시작해볼까?
        </h2>
        <p className={styles.subTitle}>마케팅 직무를 위한 공고만 모아봤어요</p>
      </div>
      <div className={styles.cardContainer}>
        {HOME_CURATED_ITEMS.map((item) => (
          <div className={styles.cardItem} key={item.id}>
            <HomeCuratedCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCuratedSection;
