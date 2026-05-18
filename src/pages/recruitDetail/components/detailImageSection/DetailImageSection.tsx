import { useState } from 'react';

import Button from '@components/button/Button';

import * as styles from './DetailImageSection.css';

interface DetailImageSectionProps {
  imageUrl: string;
}

const DetailImageSection = ({ imageUrl }: DetailImageSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={styles.container}>
      <h3 className={styles.sectionTitle}>상세요강</h3>
      <div className={styles.imageWrapper}>
        <div className={!isExpanded ? styles.imageCollapsed : undefined}>
          <img src={imageUrl} alt="상세요강" className={styles.image} />
        </div>
        {!isExpanded && (
          <Button color="ghost" size="lg" onClick={() => setIsExpanded(true)}>
            상세 정보 더 보기
          </Button>
        )}
      </div>
    </section>
  );
};

export default DetailImageSection;
