import { useRef, useState } from 'react';

import Chip from '@components/chip/Chip';
import HomeNewNoticeCard from '@pages/home/components/homeNewNoticeCard/HomeNewNoticeCard';
import {
  HOME_NEW_NOTICE_CATEGORIES,
  type HomeNewNoticeCategory,
} from '@pages/home/constants/homeNewNotice';
import { HOME_NEW_NOTICE_ITEMS } from '@pages/home/mocks/homeNewNotice';

import * as styles from './HomeNewNoticeSection.css';

const HomeNewNoticeSection = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<HomeNewNoticeCategory>(HOME_NEW_NOTICE_CATEGORIES[0]);

  const filteredItems = HOME_NEW_NOTICE_ITEMS.filter(
    (item) => item.category === selectedCategory,
  );

  const handleChipClick = (category: HomeNewNoticeCategory) => {
    if (selectedCategory === category) return;

    setSelectedCategory(category);
    cardContainerRef.current?.scrollTo({ left: 0 });
  };

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          김솝트님을 위한 <span className={styles.titleBlue}>새로운 공고</span>
        </h2>
        <p className={styles.updateTitle}>1시간 전 업데이트</p>
      </div>
      <div className={styles.chipContainer}>
        {HOME_NEW_NOTICE_CATEGORIES.map((category) => (
          <Chip
            key={category}
            variant={selectedCategory === category ? 'filled' : 'outline'}
            onClick={() => handleChipClick(category)}
          >
            {category}
          </Chip>
        ))}
      </div>
      <div className={styles.cardContainer} ref={cardContainerRef}>
        {filteredItems.map((item) => (
          <div className={styles.cardItem} key={item.id}>
            <HomeNewNoticeCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeNewNoticeSection;
