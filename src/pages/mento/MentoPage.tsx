import { useState } from 'react';
import { MENTO_CATEGORY_TABLIST, MENTO_MAIN_TABLIST } from '@constants/tabList';

import imgMentoTopBanner from '@assets/images/img_mento4.webp';
import Pagination from '@components/pagination/Pagination';
import TabBar from '@components/tabBar/TabBar';

import { useGetPostQuery } from './apis/useMentoPostQuery';
import MentoTopBanner from './components/mentoBanner/mentoTopBanner/MentoTopBanner';
import MentoCardList from './components/mentoCardList/MentoCardList';
import MentoPostList from './components/mentoPostList/MentoPostList';
import MentoSearchBar from './components/mentoSearchBar/MentoSearchBar';
import MentoTabBar from './components/mentoTabBar/MentoTabBar';
import WriteButton from './components/writeButton/WriteButton';
import { CARD_DATA } from './mocks/cardData';

import * as styles from './MentoPage.css';

const MentoPage = () => {
  const [selectedMainTab, setSelectedMainTab] = useState<string>(
    MENTO_MAIN_TABLIST[0].value,
  );
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>(
    MENTO_CATEGORY_TABLIST[0].value,
  );
  const [currentPage, setCurrentPage] = useState(1);

  const { data: postList = [], isPending, isError } = useGetPostQuery();

  return (
    <div className={styles.pageContainer}>
      <TabBar
        tabList={MENTO_MAIN_TABLIST}
        ariaLabel="멘토페이지 메인 탭바"
        selectedValue={selectedMainTab}
        onChange={setSelectedMainTab}
      />
      <div className={styles.stickyContent}>
        <TabBar
          tabList={MENTO_CATEGORY_TABLIST}
          ariaLabel="멘토페이지 카테고리 탭바"
          selectedValue={selectedCategoryTab}
          onChange={setSelectedCategoryTab}
        />
      </div>
      <MentoTopBanner imgSrc={imgMentoTopBanner} />
      <MentoSearchBar />
      <section className={styles.mentoSection}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.highlight}>맞춤 멘토</span>에게 질문해보세요
        </h2>
        <MentoCardList cardList={CARD_DATA} />
      </section>
      <section className={styles.postSection}>
        <MentoTabBar />
        <MentoPostList
          postList={postList}
          isPending={isPending}
          isError={isError}
        />
      </section>
      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={setCurrentPage}
        />
      </div>
      <WriteButton />
    </div>
  );
};

export default MentoPage;
