import * as React from 'react';

import SvgIcChevronDownGray700 from '@assets/svg/IcChevronDownGray700';

import * as styles from './Chip.css';

export type ChipVariant = 'default' | 'filled' | 'outline' | 'outlineFilled';

export interface ChipProps extends Omit<
  React.ComponentProps<'button'>,
  'children' | 'width'
> {
  children: React.ReactNode;
  variant?: ChipVariant;
  rightIcon?: boolean;
}

const ActionButton = ({
  children,
  variant = 'default',
  rightIcon = false,
  type = 'button',

  ...props
}: ChipProps) => {
  return (
    <button type={type} className={styles.chip({ variant })} {...props}>
      <span className={styles.text}>{children}</span>
      {rightIcon && <SvgIcChevronDownGray700 width="1.8rem" height="1.8rem" />}
    </button>
  );
};

export default ActionButton;
