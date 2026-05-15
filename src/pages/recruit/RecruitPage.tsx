import { useState } from 'react';
import { HOME_TABLIST } from '@constants/tabList';

import SearchBar from '@components/searchBar/SearchBar';
import TabBar from '@components/tabBar/TabBar';

import FilterBottomSheet from './components/bottomSheet/FilterBottomSheet';
import FilterBar from './components/filterBar/FilterBar';
import ListControlBar from './components/listControlBar/listControlBar';
import { FILTER_OPTIONS } from './constants/filterOptions';
import type { FilterValues } from './types/filter';
import { getResultCount } from './utils/resultNumber';

const RecruitPage = () => {
  const [selectedTab, setSelectedTab] = useState('recruit');
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const [appliedFilters, setAppliedFilters] = useState<FilterValues>({
    jobCategories: [FILTER_OPTIONS.jobCategories[0]],
    companyTypes: [],
    employmentTypes: [],
    regions: [],
  });

  const resultCount = getResultCount(appliedFilters);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const handleApplyFilters = () => {
    setIsSheetOpen(false);
  };

  const handleOpenSheet = () => {
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
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
      <FilterBar
        appliedFilters={appliedFilters}
        onOpenSheet={handleOpenSheet}
      />

      <ListControlBar resultCount={resultCount} />

      <FilterBottomSheet
        isOpen={isSheetOpen}
        resultCount={resultCount}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
        onClose={handleCloseSheet}
        onApply={handleApplyFilters}
      />
    </>
  );
};

export default RecruitPage;
