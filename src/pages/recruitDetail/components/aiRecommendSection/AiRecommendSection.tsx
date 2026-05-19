import RecruitCard from '@components/card/recruitCard/RecruitCard';

import * as styles from './AiRecommendSection.css';

interface AiRecommendItem {
  id: number;
  title: string;
  company: string;
  employmentType: string;
  location: string;
  imageUrl: string;
  deadlineLabel: string;
}

interface AiRecommendSectionProps {
  items: AiRecommendItem[];
}

const AiRecommendSection = ({ items }: AiRecommendSectionProps) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>AI 추천 공고</h2>
      {items.map((item) => (
        <RecruitCard
          key={item.id}
          id={item.id}
          title={item.title}
          company={item.company}
          employmentType={item.employmentType}
          location={item.location}
          imageUrl={item.imageUrl}
          deadlineLabel={item.deadlineLabel}
        />
      ))}
    </section>
  );
};

export default AiRecommendSection;
