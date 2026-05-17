import Tag from '@components/tag/Tag';

import * as styles from './RecruitDetailInfoSection.css';

interface RecruitDetailInfoSectionProps {
  companyName: string;
  title: string;
  jobCategory: string;
  location: string;
  companyType: string;
  deadline: string;
  daysLeft: number | null;
  employmentType: string;
}

const getDeadlineTag = (daysLeft: number | null) => {
  if (daysLeft === null) return null;
  if (daysLeft === 0) return <Tag size="small" color="red" text="D-Day" />;
  if (daysLeft <= 3)
    return <Tag size="small" color="red" text={`D-${daysLeft}`} />;
  return <Tag size="small" color="gray" text={`D-${daysLeft}`} />;
};

const RecruitDetailInfoSection = ({
  companyName,
  title,
  jobCategory,
  location,
  companyType,
  deadline,
  daysLeft,
  employmentType,
}: RecruitDetailInfoSectionProps) => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.container}>
        <p className={styles.companyName}>{companyName}</p>
        <h1 className={styles.title}>{title}</h1>
      </div>

      <div className={styles.conditionTable}>
        <div className={styles.tagRow}>
          <Tag size="small" color="gray" text={jobCategory} />
          <Tag size="small" color="gray" text={location} />
        </div>
        <div className={styles.conditionRow}>
          <span className={styles.conditionLabel}>기업형태</span>
          <span className={styles.conditionValue}>{companyType}</span>
        </div>
        <div className={styles.conditionRow}>
          <span className={styles.conditionLabel}>마감일</span>
          <div className={styles.conditionValue}>
            <span>{deadline}</span>
            {getDeadlineTag(daysLeft)}
          </div>
        </div>
        <div className={styles.conditionRow}>
          <span className={styles.conditionLabel}>채용형태</span>
          <span className={styles.conditionValue}>{employmentType}</span>
        </div>
      </div>
    </div>
  );
};

export default RecruitDetailInfoSection;
