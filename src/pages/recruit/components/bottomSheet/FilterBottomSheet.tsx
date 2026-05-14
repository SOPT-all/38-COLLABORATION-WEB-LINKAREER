import { useEffect, useState } from 'react';
import clsx from 'clsx';

import SvgIcRefresh from '@assets/svg/IcRefresh';
import SvgIcXGray900 from '@assets/svg/IcXGray900';
import BottomActionBar from '@components/bottomActionBar/BottomActionBar';
import { CONTENT_RESULT } from '@pages/recruit/constants/resultNumber';
import type { filterValues } from '@pages/recruit/types/filter';

import FilterSelector from './FilterSelector';

import * as styles from './FilterBottomSheet.css';

interface FilterBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterBottomSheet = ({ isOpen, onClose }: FilterBottomSheetProps) => {
  const [selectedFilters, setSelectedFilters] = useState<filterValues>({
    jobCategories: [],
    companyTypes: [],
    employmentTypes: [],
    regions: [],
  });

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // 결과 개수
  const getResultCount = (selectedFilters: filterValues) => {
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

    return 120316;
  };

  const resultCount = getResultCount(selectedFilters);

  // 새로고침 버튼
  const handleRefresh = () => {
    setSelectedFilters({
      jobCategories: [],
      companyTypes: [],
      employmentTypes: [],
      regions: [],
    });
  };

  const handleSubmit = () => {
    handleClose();
  };

  return (
    <>
      <div
        className={clsx(styles.backdrop, isOpen && styles.backdropVisible)}
      />

      <div
        className={clsx(styles.container, isOpen && styles.containerOpen)}
        onPointerDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClose();
        }}
      >
        <header className={styles.headerContainer}>
          <h2 className={styles.title}>검색 필터</h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={handleClose}
          >
            <SvgIcXGray900 width={'2.4rem'} height={'2.4rem'} />
          </button>
        </header>

        <FilterSelector
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

        <BottomActionBar
          icon={<SvgIcRefresh width={'2rem'} height={'2rem'} />}
          iconAriaLabel="새로고침 버튼"
          label={`${resultCount.toLocaleString()}개 공고보기`}
          onIconClick={handleRefresh}
          onLabelClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default FilterBottomSheet;
