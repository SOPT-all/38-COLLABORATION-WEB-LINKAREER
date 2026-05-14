import IcAi from '@assets/svg/IcAi';

import * as styles from './SearchBar.css';

const SearchBar = () => {
  return (
    <section className={styles.container}>
      <div className={styles.frame}>
        <input
          className={styles.searchField}
          type="text"
          placeholder="입학부터 커리어까지, 링커리어"
        />
        <div className={styles.verticalDivider} aria-hidden="true" />
        <button className={styles.aiSearchButton} type="button">
          <IcAi className={styles.aiIcon} />
          <span className={styles.aiText}>AI 검색</span>
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
