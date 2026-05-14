import * as styles from './Indicator.css';

interface IndicatorProps {
  totalCount: number;
  currentIndex: number;
}

const Indicator = ({ totalCount, currentIndex }: IndicatorProps) => {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: totalCount }, (_, index) => (
        <div
          key={index}
          className={styles.dotRecipe({ active: index === currentIndex })}
        />
      ))}
    </div>
  );
};

export default Indicator;
