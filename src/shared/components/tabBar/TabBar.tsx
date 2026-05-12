import { useState } from 'react';

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
  defaultValue?: string;
  ariaLabel: string;
}

const TabBar = ({ tabList, defaultValue, ariaLabel }: TabBarProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue ?? '');

  return (
    <div className={styles.tabBar} role="tablist" aria-label={ariaLabel}>
      {tabList.map((tab) => (
        <Tab
          key={tab.value}
          value={tab.value}
          label={tab.label}
          disabled={tab.disabled}
          hasDot={tab.hasDot}
          selected={selectedTab === tab.value}
          onClick={() => setSelectedTab(tab.value)}
        />
      ))}
    </div>
  );
};

export default TabBar;
