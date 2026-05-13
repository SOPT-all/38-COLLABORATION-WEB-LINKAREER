import type { ReactNode } from 'react';

import Button from '@shared/components/button/Button';

import * as styles from './BottomActionBar.css';

interface BottomActionBarProps {
  icon: ReactNode;
  label: ReactNode;
  onIconClick?: () => void;
  onLabelClick?: () => void;
}

const BottomActionBar = ({
  icon,
  label,
  onIconClick,
  onLabelClick,
}: BottomActionBarProps) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.iconButton} onClick={onIconClick}>
        {icon}
      </button>
      <Button color="filled" size="lg" onClick={onLabelClick}>
        {label}
      </Button>
    </div>
  );
};

export default BottomActionBar;
