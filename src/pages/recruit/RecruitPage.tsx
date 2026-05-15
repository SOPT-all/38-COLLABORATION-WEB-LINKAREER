import { useState } from 'react';
import { HOME_TABLIST } from '@constants/tabList';

import RecruitCard from '@components/card/recruitCard/RecruitCard';
import SearchBar from '@components/searchBar/SearchBar';
import TabBar from '@components/tabBar/TabBar';

import FilterBottomSheet from './components/bottomSheet/FilterBottomSheet';
import FilterBar from './components/filterBar/FilterBar';
import ListControlBar from './components/listControlBar/listControlBar';
import { FILTER_OPTIONS } from './constants/filterOptions';
import { mockData } from './mocks/mockData';
import type { FilterValues } from './types/filter';
import { getResultCount } from './utils/resultNumber';

import * as styles from './RecruitPage.css';

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

      {/* 채용공고 리스트 */}
      <section className={styles.listContainer}>
        <RecruitCard
          id={1}
          title={mockData.title}
          company={mockData.company}
          imageUrl={mockData.imageUrl}
          employmentType={mockData.employmentType}
          location={mockData.location}
          deadlineLabel={mockData.deadlineLabel}
        />
      </section>

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
