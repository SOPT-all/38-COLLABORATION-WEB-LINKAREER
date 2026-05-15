import SvgIcFilter from '@assets/svg/IcFilter';

import * as styles from './FilterBar.css';

const FilterBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icContainer}>
        <div className={styles.icCircle}>
          <SvgIcFilter width={'2rem'} height={'2rem'} />
        </div>
      </div>
      <div className={styles.filterContainer}>필터 자리</div>
    </div>
  );
};

export default FilterBar;
