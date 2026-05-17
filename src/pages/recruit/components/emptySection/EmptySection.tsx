import SvgDetailNopost from '@assets/svg/DetailNopost';

import * as styles from './EmptySection.css';

const EmptySection = () => {
  return (
    <section className={styles.container}>
      <SvgDetailNopost width={'8rem'} height={'8rem'} />
      <p className={styles.text}>검색결과가 없습니다</p>
    </section>
  );
};

export default EmptySection;
