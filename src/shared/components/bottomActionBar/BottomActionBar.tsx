import type { ReactNode } from 'react';

import Button from '@shared/components/button/Button';

import * as styles from './BottomActionBar.css';

interface BottomActionBarProps {
  icon: ReactNode;
  iconAriaLabel: string;
  label: ReactNode;
  onIconClick?: () => void;
  onLabelClick?: () => void;
}

const BottomActionBar = ({
  icon,
  iconAriaLabel,
  label,
  onIconClick,
  onLabelClick,
}: BottomActionBarProps) => {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.iconButton}
        onClick={onIconClick}
        aria-label={iconAriaLabel}
      >
        {icon}
      </button>
      <div className={styles.buttonContainer}>
        <Button color="filled" size="lg" onClick={onLabelClick}>
          {label}
        </Button>
      </div>
    </div>
  );
};

export default BottomActionBar;
