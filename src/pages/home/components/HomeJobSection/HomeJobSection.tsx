import { useState } from 'react';
import { useNavigate } from 'react-router';

import HomeJobCard from '@pages/home/components/homeJobCard/HomeJobCard';
import HomeSectionHeader from '@pages/home/components/homeSectionHeader/HomeSectionHeader';
import { HOME_JOB_CARDS } from '@pages/home/mocks/homeJob';
import type { HomeJobCardData } from '@pages/home/types/homeJobCard';

import * as styles from './HomeJobSection.css';

const HomeJobSection = () => {
  const navigate = useNavigate();
  const [jobCards, setJobCards] = useState<HomeJobCardData[]>(HOME_JOB_CARDS);

  const handleBookmarkClick = (selectedJobId: number) => {
    setJobCards((prevJobCards) =>
      prevJobCards.map((job) => {
        if (job.id !== selectedJobId) {
          return job;
        }

        return {
          ...job,
          isBookmarked: !job.isBookmarked,
          bookmarkCount: job.isBookmarked
            ? job.bookmarkCount - 1
            : job.bookmarkCount + 1,
        };
      }),
    );
  };

  return (
    <section className={styles.mainContainer}>
      <HomeSectionHeader title="지금 지원 가능한 신입/인턴" to="/recruit" />

      <div className={styles.jobList}>
        {jobCards.map((job) => (
          <HomeJobCard
            key={job.id}
            {...job}
            onCardClick={() => {
              void navigate('/recruit/detail');
            }}
            onBookmarkClick={() => {
              handleBookmarkClick(job.id);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeJobSection;
