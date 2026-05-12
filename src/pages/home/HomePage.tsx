import {
  HOME_TABLIST,
  MENTO_CARTEGORY_TABLIST,
  MENTO_MAIN_TABLIST,
  RECRUIT_DETAIL_TABLIST,
} from '@constants/tabList';

import TabBar from '@components/tabBar/TabBar';

const HomePage = () => {
  return (
    <>
      <h1>홈페이지</h1>
      <TabBar tabList={HOME_TABLIST} ariaLabel="홈 탭" />
      <TabBar
        tabList={RECRUIT_DETAIL_TABLIST}
        defaultValue="detail"
        ariaLabel="홈 탭"
      />
      <TabBar tabList={MENTO_MAIN_TABLIST} ariaLabel="홈 탭" />
      <TabBar tabList={MENTO_CARTEGORY_TABLIST} ariaLabel="홈 탭" />
    </>
  );
};
export default HomePage;
