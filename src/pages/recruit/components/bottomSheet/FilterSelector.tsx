import { useEffect, useRef, useState } from 'react';

import SvgIcCheckBlue500 from '@assets/svg/IcCheckBlue500';
import Tag from '@components/tag/Tag';
import {
  ENABLED_JOB_CATEGORIES,
  FILTER_OPTIONS,
  FILTER_TABS,
  type FilterTab,
} from '@pages/recruit/constants/filterOptions';
import type { FilterValues } from '@pages/recruit/types/filter';

import * as styles from './FilterSelector.css';

interface FilterSelectorProps {
  isOpen: boolean;
  selectedFilters: FilterValues;
  setSelectedFilters: React.Dispatch<React.SetStateAction<FilterValues>>;
}

const FilterSelector = ({
  isOpen,
  selectedFilters,
  setSelectedFilters,
}: FilterSelectorProps) => {
  const [activeTab, setActiveTab] = useState<FilterTab>('jobCategories');
  const currentOptions = FILTER_OPTIONS[activeTab];
  const jobTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      jobTabRef.current?.focus();
    }
  }, [isOpen]);

  // 탭에 해당하는 값 꺼내기
  const selectedOptions = selectedFilters[activeTab] as string[];
  const isSelected = (option: string) => {
    return selectedOptions.includes(option);
  };

  // 옵션 클릭
  const handleOptionClick = (option: string) => {
    setSelectedFilters((prev) => {
      const current = prev[activeTab] as string[];
      const alreadySelected = current.includes(option);

      return {
        ...prev,
        [activeTab]: alreadySelected
          ? current.filter((item) => item !== option) // 이미 선택된 옵션 제거
          : [...current, option],
      };
    });
  };

  // 선택된 옵션 개수를 카테고리 영역에 표시
  const getSelectedCount = (tab: FilterTab) => {
    return selectedFilters[tab].length;
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        {/* 필터 카테고리 */}
        <div className={styles.tabContainer}>
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            const count = getSelectedCount(tab.key);

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={styles.tab({ isSelected: isActive })}
                ref={tab.key === 'jobCategories' ? jobTabRef : null}
              >
                <span>{tab.label}</span>
                {count > 0 && (
                  <span className={styles.count['ellipse']}>{count}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* 필터 옵션 */}
        <div className={styles.optionContainer}>
          {currentOptions.map((option) => {
            const selected = isSelected(option);
            const isDisabled =
              activeTab === 'jobCategories' &&
              !ENABLED_JOB_CATEGORIES.includes(option);

            return (
              <button
                key={option}
                type="button"
                className={styles.option({ isSelected: selected })}
                onClick={() => handleOptionClick(option)}
                disabled={isDisabled}
              >
                {selected && (
                  <SvgIcCheckBlue500 width={'1.6rem'} height={'1.6rem'} />
                )}
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* 선택한 직무 카드 */}
      {activeTab === 'jobCategories' && selectedOptions.length > 0 && (
        <div className={styles.selectedContainer}>
          <span className={styles.text}>
            선택한 직무
            <span className={styles.count['bold']}>
              {selectedOptions.length}
            </span>
          </span>
          <div className={styles.tagList}>
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                text={`직무 > ${option}`}
                color="blue"
                size="withIcon"
                onRemove={() => handleOptionClick(option)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSelector;
