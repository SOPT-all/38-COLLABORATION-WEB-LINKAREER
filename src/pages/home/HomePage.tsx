import { HOME_TABLIST } from '@constants/tabList';
import { useNavigate } from 'react-router';

import SearchBar from '@components/searchBar/SearchBar';
import TabBar from '@components/tabBar/TabBar';

import HomeActivitySection from './components/homeActivitySection/HomeActivitySection';
import HomeBanner from './components/homeBanner/HomeBanner';
import HomeChatSection from './components/homeChatSection/HomeChatSection';
import HomeCuratedSection from './components/homeCuratedSection/HomeCuratedSection';
import HomeFeaturedCarousel from './components/homeFeaturedCarousel/HomeFeaturedCarousel';
import HomeJobSection from './components/HomeJobSection/HomeJobSection';
import HomeNewNoticeSection from './components/homeNewNoticeSection/HomeNewNoticeSection';
import { HOME_TOP_BANNER } from './mocks/homeBanner';
import { HOME_BOTTOM_BANNER } from './mocks/homeBanner';
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
      <div className={styles.sectionContainer}>
        <HomeFeaturedCarousel items={HOME_FEATURED_CAROUSEL_ITEMS} />
        <HomeNewNoticeSection />
        <HomeCuratedSection />
        <HomeBanner {...HOME_TOP_BANNER} />
        <HomeActivitySection />
        <HomeJobSection />
        <HomeChatSection />
        <HomeBanner {...HOME_BOTTOM_BANNER} />
      </div>
    </main>
  );
};
export default HomePage;
