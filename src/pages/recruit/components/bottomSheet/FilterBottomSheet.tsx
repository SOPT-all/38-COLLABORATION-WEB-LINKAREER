import { useState } from 'react';
import clsx from 'clsx';

import SvgIcRefresh from '@assets/svg/IcRefresh';
import SvgIcXGray900 from '@assets/svg/IcXGray900';
import BottomActionBar from '@components/bottomActionBar/BottomActionBar';
import { CONTENT_RESULT } from '@pages/recruit/constants/resultNumber';
import type { FilterValues } from '@pages/recruit/types/filter';

import FilterSelector from './FilterSelector';

import * as styles from './FilterBottomSheet.css';

interface FilterBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterBottomSheet = ({ isOpen, onClose }: FilterBottomSheetProps) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterValues>({
    jobCategories: [],
    companyTypes: [],
    employmentTypes: [],
    regions: [],
  });

  // 결과 개수
  const getResultCount = (selectedFilters: FilterValues) => {
    const { jobCategories } = selectedFilters;

    if (jobCategories.length === 0) return CONTENT_RESULT.default;
    if (jobCategories.length === 1 && jobCategories.includes('영업/고객상담'))
      return CONTENT_RESULT.sales;
    if (jobCategories.length === 1 && jobCategories.includes('경영/사무'))
      return CONTENT_RESULT.business;
    if (
      jobCategories.length === 2 &&
      jobCategories.includes('경영/사무') &&
      jobCategories.includes('영업/고객상담')
    )
      return CONTENT_RESULT.salesAndBusiness;

    return CONTENT_RESULT.default;
  };

  const resultCount = getResultCount(selectedFilters);

  // 새로고침 버튼
  const handleRefreshClick = () => {
    setSelectedFilters({
      jobCategories: [],
      companyTypes: [],
      employmentTypes: [],
      regions: [],
    });
  };

  const handleApplyClick = () => {
    onClose();
  };

  return (
    <>
      <div
        className={clsx(styles.backdrop, isOpen && styles.backdropVisible)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="filter-sheet-title"
        className={clsx(styles.container, isOpen && styles.containerOpen)}
      >
        <header className={styles.headerContainer}>
          <h2 id="filter-sheet-title" className={styles.title}>
            검색 필터
          </h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="검색 필터 닫기"
          >
            <SvgIcXGray900 width={'2.4rem'} height={'2.4rem'} />
          </button>
        </header>

        <FilterSelector
          isOpen={isOpen}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

        <BottomActionBar
          icon={<SvgIcRefresh width={'2rem'} height={'2rem'} />}
          iconAriaLabel="새로고침 버튼"
          label={`${resultCount}개 공고보기`}
          onIconClick={handleRefreshClick}
          onLabelClick={handleApplyClick}
        />
      </div>
    </>
  );
};

export default FilterBottomSheet;
