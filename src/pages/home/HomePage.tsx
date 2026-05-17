import { HOME_TABLIST } from '@constants/tabList';
import { useNavigate } from 'react-router';

import SearchBar from '@components/searchBar/SearchBar';
import TabBar from '@components/tabBar/TabBar';

import HomeFeaturedCarousel from './components/homeFeaturedCarousel/HomeFeaturedCarousel';
import HomeNewNoticeSection from './components/homeNewNoticeSection/HomeNewNoticeSection';
import { HOME_FEATURED_CAROUSEL_ITEMS } from './mocks/homeFeaturedCarousel';

import * as styles from './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <SearchBar />
      <TabBar
        tabList={HOME_TABLIST}
        ariaLabel="홈 탭"
        selectedValue=""
        onChange={(value) => {
          void navigate(`/${value}`);
        }}
      />
      <div className={styles.carouselContainer}>
        <HomeFeaturedCarousel items={HOME_FEATURED_CAROUSEL_ITEMS} />
      </div>
      <HomeNewNoticeSection />
    </main>
  );
};
export default HomePage;
