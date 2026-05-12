import { useState } from 'react';

import Tab from './tab/Tab';

import * as styles from './TabBar.css';

export interface TabItem {
  label: string;
  value: string;
  hasDot?: boolean;
}

interface TabBarProps {
  tabList: TabItem[];
  ariaLabel: string;
}

const TabBar = ({ tabList, ariaLabel }: TabBarProps) => {
  const [selectedTab, setSelectedTab] = useState(tabList[0].value);

  return (
    <div className={styles.tabBar} role="tablist" aria-label={ariaLabel}>
      {tabList.map((tab) => (
        <Tab
          key={tab.value}
          value={tab.value}
          label={tab.label}
          hasDot={tab.hasDot}
          selected={selectedTab === tab.value}
          onClick={() => setSelectedTab(tab.value)}
        />
      ))}
    </div>
  );
};

export default TabBar;
