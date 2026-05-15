import { useState } from 'react';

import Checkbox from '@pages/recruit/components/checkbox/Checkbox';
import Dropdown from '@pages/recruit/components/dropdown/Dropdown';
import { DROPDOWN_OPTIONS } from '@pages/recruit/constants/dropdown';

import * as styles from './listControlBar.css';

interface ListControlBarProps {
  resultCount?: number;
}

const ListControlBar = ({ resultCount }: ListControlBarProps) => {
  const [checked, setChecked] = useState(false);
  const [selectedSort, setSelectedSort] = useState(DROPDOWN_OPTIONS[0].value);

  const handleSortChange = (newValue: string) => {
    setSelectedSort(newValue);
  };

  return (
    <div className={styles.container}>
      <div>
        <span className={styles.count['default']}>
          <strong className={styles.count['strong']}>{resultCount ?? 0}</strong>
          건
        </span>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.checkboxContainer}>
          <Checkbox
            checked={checked}
            onChange={(checked) => {
              setChecked(checked);
            }}
          />
          <span className={styles.checkboxLabel}>간편지원</span>
        </div>
        <div className={styles.divider} /> {/* divider */}
        <Dropdown
          options={DROPDOWN_OPTIONS}
          value={selectedSort}
          onChange={handleSortChange}
        />
      </div>
    </div>
  );
};

export default ListControlBar;
