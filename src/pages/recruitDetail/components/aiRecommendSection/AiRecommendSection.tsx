import RecruitCard from '@components/card/recruitCard/RecruitCard';
import type { RecruitListItem } from '@shared/types/recruitCard';

import * as styles from './AiRecommendSection.css';

interface AiRecommendSectionProps {
  items: RecruitListItem[];
}

const AiRecommendSection = ({ items }: AiRecommendSectionProps) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>AI 추천 공고</h2>
      {items.map((item) => (
        <RecruitCard key={item.id} recruitCardItem={item} />
      ))}
    </section>
  );
};

export default AiRecommendSection;
