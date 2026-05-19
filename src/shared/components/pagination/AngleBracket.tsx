import IcChevronLeftGray200 from '@shared/assets/svg/IcChevronLeftGray200';
import IcChevronLeftGray700 from '@shared/assets/svg/IcChevronLeftGray700';
import IcChevronRightGray200 from '@shared/assets/svg/IcChevronRightGray200';
import IcChevronRightGray700 from '@shared/assets/svg/IcChevronRightGray700';

import * as styles from './Pagination.css';

interface AngleBracketProps {
  direction: 'left' | 'right';
  disabled?: boolean;
  onClick?: () => void;
}

const AngleBracket = ({
  direction,
  disabled = false,
  onClick,
}: AngleBracketProps) => {
  const Icon =
    direction === 'left'
      ? disabled
        ? IcChevronLeftGray200
        : IcChevronLeftGray700
      : disabled
        ? IcChevronRightGray200
        : IcChevronRightGray700;

  return (
    <button
      onClick={() => !disabled && onClick?.()}
      aria-label={direction === 'left' ? '이전 페이지' : '다음 페이지'}
      aria-disabled={disabled}
      className={styles.paginationButtonBase}
    >
      <Icon width={24} height={24} aria-hidden="true" />
    </button>
  );
};

export default AngleBracket;
