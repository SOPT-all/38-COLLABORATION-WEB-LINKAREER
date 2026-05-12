import type { TabItem } from '@components/tabBar/TabBar';

import * as styles from './Tab.css';

interface TabProps extends TabItem {
  selected?: boolean;
  onClick: () => void;
}

const Tab = ({
  label,
  value,
  disabled = false,
  selected = false,
  hasDot = false,
  onClick,
}: TabProps) => {
  return (
    <button
      type="button"
      role="tab"
      id={`tab-${value}`}
      aria-selected={selected}
      aria-controls={`panel-${value}`}
      className={styles.tab({ selected })}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={`${styles.textWrapper} ${hasDot ? styles.textWrapperWithDot : ''}`}
      >
        {label}
      </span>
    </button>
  );
};

export default Tab;
