import { useState } from 'react';
import { HOME_TABLIST } from '@constants/tabList';

import SearchBar from '@components/searchBar/SearchBar';
import TabBar from '@components/tabBar/TabBar';

const RecruitPage = () => {
  const [selectedTab, setSelectedTab] = useState('recruit');

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const tabListWithoutDot = HOME_TABLIST.map((tab) => ({
    ...tab,
    hasDot: false,
  }));

  return (
    <>
      <SearchBar />
      <TabBar
        tabList={tabListWithoutDot}
        selectedValue={selectedTab}
        onChange={handleTabChange}
        ariaLabel="신입/인턴탭"
      />
    </>
  );
};

export default RecruitPage;
