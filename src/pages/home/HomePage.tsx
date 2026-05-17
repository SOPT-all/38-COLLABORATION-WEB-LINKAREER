import { HOME_TABLIST } from '@constants/tabList';
import { useNavigate } from 'react-router';

import SearchBar from '@components/searchBar/SearchBar';
import TabBar from '@components/tabBar/TabBar';

import HomeFeaturedCarousel from './components/homeFeaturedCarousel/HomeFeaturedCarousel';
import { HOME_FEATURED_CAROUSEL_ITEMS } from './mocks/homeFeaturedCarousel';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SearchBar />
      <TabBar
        tabList={HOME_TABLIST}
        ariaLabel="홈 탭"
        selectedValue=""
        onChange={(value) => {
          void navigate(`/${value}`);
        }}
      />
      <HomeFeaturedCarousel items={HOME_FEATURED_CAROUSEL_ITEMS} />
    </>
  );
};
export default HomePage;
