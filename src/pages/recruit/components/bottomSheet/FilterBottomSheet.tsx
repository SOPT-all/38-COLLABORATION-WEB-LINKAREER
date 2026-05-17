import clsx from 'clsx';

import SvgIcRefresh from '@assets/svg/IcRefresh';
import SvgIcXGray900 from '@assets/svg/IcXGray900';
import BottomActionBar from '@components/bottomActionBar/BottomActionBar';
import type { FilterValues } from '@pages/recruit/types/filter';

import FilterSelector from './FilterSelector';

import * as styles from './FilterBottomSheet.css';

interface FilterBottomSheetProps {
  isOpen: boolean;
  resultCount?: string | number;
  selectedFilters: FilterValues;
  setSelectedFilters: React.Dispatch<React.SetStateAction<FilterValues>>;
  onClose: () => void;
  onApply: () => void;
}

const FilterBottomSheet = ({
  isOpen,
  resultCount,
  selectedFilters,
  setSelectedFilters,
  onClose,
  onApply,
}: FilterBottomSheetProps) => {
  // 새로고침 버튼
  const handleRefreshClick = () => {
    setSelectedFilters({
      jobCategories: [],
      companyTypes: [],
      employmentTypes: [],
      regions: [],
    });
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
          onLabelClick={onApply}
        />
      </div>
    </>
  );
};

export default FilterBottomSheet;
