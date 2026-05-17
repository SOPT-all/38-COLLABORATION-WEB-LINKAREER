import * as styles from './MentoSearchBar.css';

const MentoSearchBar = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.inputField}
        placeholder="삼성, 마케팅, 홍익대학교..."
      />
      <button type="button" className={styles.button}>
        검색
      </button>
    </div>
  );
};

export default MentoSearchBar;
