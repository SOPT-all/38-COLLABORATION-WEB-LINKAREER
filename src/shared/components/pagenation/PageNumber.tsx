import * as styles from './Pagenation.css';

interface PageNumberProps {
  page: number;
  active?: boolean;
  onClick?: () => void;
}

const PageNumber = ({ page, active = false, onClick }: PageNumberProps) => {
  return (
    <button
      onClick={() => !active && onClick?.()}
      aria-label={`${page}페이지`}
      aria-current={active ? 'page' : undefined}
      className={styles.pageNumberRecipe({ active })}
    >
      {page}
    </button>
  );
};

export default PageNumber;
