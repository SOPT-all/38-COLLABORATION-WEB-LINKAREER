import { useState } from 'react';
import { HOME_TABLIST } from '@constants/tabList';

import RecruitCard from '@components/card/recruitCard/RecruitCard';
import Pagination from '@components/pagenation/Pagenation';
import SearchBar from '@components/searchBar/SearchBar';
import TabBar from '@components/tabBar/TabBar';

import { useGetRecruitQuery } from './apis/useRecruitFilterQuery';
import FilterBottomSheet from './components/bottomSheet/FilterBottomSheet';
import EmptySection from './components/emptySection/EmptySection';
import FilterBar from './components/filterBar/FilterBar';
import ListControlBar from './components/listControlBar/ListControlBar';
import {
  BUSINESS_JOB,
  FILTER_OPTIONS,
  SALES_JOB,
} from './constants/filterOptions';
import type { FilterValues } from './types/filter';
import { getResultCount } from './utils/resultNumber';

import * as styles from './RecruitPage.css';

const RecruitPage = () => {
  const [selectedTab, setSelectedTab] = useState('recruit');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [appliedFilters, setAppliedFilters] = useState<FilterValues>({
    jobCategories: [FILTER_OPTIONS.jobCategories[0]],
    companyTypes: [],
    employmentTypes: [],
    regions: [],
  });
  const [draftFilters, setDraftFilters] =
    useState<FilterValues>(appliedFilters);

  const selectedJob = appliedFilters.jobCategories[0];
  const totalPages =
    selectedJob === SALES_JOB || selectedJob === BUSINESS_JOB ? 1 : 25;

  const {
    data: recruitList = [],
    isLoading,
    isError,
  } = useGetRecruitQuery(appliedFilters);

  const resultCount = getResultCount(appliedFilters);
  const draftResultCount = getResultCount(draftFilters);
  const isListEmpty = !isLoading && recruitList.length === 0;

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const handleApplyFilters = () => {
    setAppliedFilters(draftFilters);
    setCurrentPage(1);
    setIsSheetOpen(false);
  };

  const handleOpenSheet = () => {
    setDraftFilters(appliedFilters);
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  const tabListWithoutDot = HOME_TABLIST.map((tab) => ({
    ...tab,
    hasDot: false,
  }));

  if (isLoading) return <div className={styles.loading}>로딩중...</div>;
  if (isError)
    return <div className={styles.loading}>에러가 발생했습니다.</div>;

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
      {isListEmpty ? (
        <EmptySection />
      ) : (
        <section className={styles.listContainer}>
          {recruitList.map((recruit) => (
            <RecruitCard key={recruit.id} {...recruit} />
          ))}
        </section>
      )}

      {!isListEmpty && (
        <section className={styles.pagenationContainer}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>
      )}

      <FilterBottomSheet
        isOpen={isSheetOpen}
        resultCount={draftResultCount}
        selectedFilters={draftFilters}
        setSelectedFilters={setDraftFilters}
        onClose={handleCloseSheet}
        onApply={handleApplyFilters}
      />
    </>
  );
};

export default RecruitPage;
