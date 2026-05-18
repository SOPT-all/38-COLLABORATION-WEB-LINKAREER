import type { ReactNode } from 'react';

import * as styles from './StatsCard.css';

interface StatsCardBaseProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const StatsCardBase = ({ icon, title, children }: StatsCardBaseProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {icon}
        <h3 className={styles.title}>{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default StatsCardBase;
