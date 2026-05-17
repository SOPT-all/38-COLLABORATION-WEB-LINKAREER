import * as styles from './RecruitDetailContent.css';

interface RecruitDetailContentProps {
  recruitmentPeriod: string;
  responsibilities: string[];
  qualifications: string[];
  preferences: string[];
}

const RecruitDetailContent = ({
  recruitmentPeriod,
  responsibilities,
  qualifications,
  preferences,
}: RecruitDetailContentProps) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.mainTitle}>상세내용</h2>
      <div className={styles.container}>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>모집기간</h3>
          <p className={styles.periodText}>{recruitmentPeriod}</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>담당업무</h3>
          <ul className={styles.list}>
            {responsibilities.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>자격요건</h3>
          <ul className={styles.list}>
            {qualifications.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>우대 사항</h3>
          <ul className={styles.list}>
            {preferences.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RecruitDetailContent;
