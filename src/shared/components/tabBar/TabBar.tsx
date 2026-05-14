import Tab from './tab/Tab';

import * as styles from './TabBar.css';

export interface TabItem {
  label: string;
  value: string;
  disabled?: boolean;
  hasDot?: boolean;
}

interface TabBarProps {
  tabList: TabItem[];
  selectedValue: string;
  onChange: (value: string) => void;
  ariaLabel: string;
}

const TabBar = ({
  tabList,
  selectedValue,
  onChange,
  ariaLabel,
}: TabBarProps) => {
  return (
    <div className={styles.tabBar} role="tablist" aria-label={ariaLabel}>
      {tabList.map((tab) => (
        <Tab
          key={tab.value}
          value={tab.value}
          label={tab.label}
          disabled={tab.disabled}
          hasDot={tab.hasDot}
          selected={selectedValue === tab.value}
          onClick={() => onChange(tab.value)}
        />
      ))}
    </div>
  );
};

export default TabBar;
