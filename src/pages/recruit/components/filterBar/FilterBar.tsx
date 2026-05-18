import SvgIcFilter from '@assets/svg/IcFilter';
import Chip from '@components/chip/Chip';
import { FILTER_TABS } from '@pages/recruit/constants/filterOptions';
import type { FilterValues } from '@pages/recruit/types/filter';

import * as styles from './FilterBar.css';

interface FilterBarProps {
  appliedFilters: FilterValues;
  onOpenSheet: () => void;
}

const FilterBar = ({ appliedFilters, onOpenSheet }: FilterBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.icContainer}>
        <button
          type="button"
          aria-label="바텀시트 열기 버튼"
          className={styles.icCircle}
          onClick={onOpenSheet}
        >
          <SvgIcFilter width={'2rem'} height={'2rem'} />
        </button>
      </div>

      <div className={styles.filterContainer}>
        {FILTER_TABS.map((tab) => {
          const chipLabel =
            appliedFilters[tab.key].length > 0
              ? appliedFilters[tab.key][0]
              : tab.label;

          const isSelected = appliedFilters[tab.key].length > 0;

          return (
            <Chip
              key={tab.key}
              variant={isSelected ? 'outlineFilled' : 'default'}
              rightIcon
            >
              {chipLabel}
            </Chip>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
