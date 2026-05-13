import AngleBracket from './AngleBracket';
import PageNumber from './PageNumber';

import * as styles from './Pagenation.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
}

function getPageRange(current: number, total: number, maxVisible: number) {
  if (total <= maxVisible) return { start: 1, end: total };

  const blockIndex = Math.ceil(current / maxVisible) - 1;
  const start = blockIndex * maxVisible + 1;
  const end = Math.min(start + maxVisible - 1, total);

  return { start, end };
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 5,
}: PaginationProps) => {
  if (totalPages <= 0) return null;

  const { start, end } = getPageRange(currentPage, totalPages, maxVisible);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <nav aria-label="페이지 네비게이션" className={styles.pagenationWrapper}>
      <AngleBracket
        direction="left"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />

      {pages.map((page) => (
        <PageNumber
          key={page}
          page={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        />
      ))}

      <AngleBracket
        direction="right"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </nav>
  );
};

export default Pagination;
