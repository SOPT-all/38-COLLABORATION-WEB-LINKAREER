import * as styles from './Indicator.css';

interface IndicatorProps {
  totalCount: number;
  currentIndex: number;
}

export default function Indicator({
  totalCount,
  currentIndex,
}: IndicatorProps) {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: totalCount }, (_, i) => (
        <div
          key={i}
          className={styles.dotRecipe({ active: i === currentIndex })}
        />
      ))}
    </div>
  );
}
