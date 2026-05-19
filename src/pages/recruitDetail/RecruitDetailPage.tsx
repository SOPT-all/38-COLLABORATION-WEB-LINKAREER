import { useRef, useState } from 'react';

import imgDetail1 from '@assets/images/detail_thumbnail_img1.webp';
import imgDetail2 from '@assets/images/detail_thumbnail_img2.webp';
import imgDetail3 from '@assets/images/detail_thumbnail_img3.webp';
import detailImg4 from '@assets/images/detail_thumbnail_img4.webp';
import TabBar from '@components/tabBar/TabBar';
import { layout } from '@pages/recruitDetail/constants/layout';
import { useTabScrollSync } from '@pages/recruitDetail/hooks/useTabScrollSync';

import {
  usePassCoverLettersQuery,
  usePassReviewsQuery,
} from './apis/recruitDetailApi';
import { useGetRecruitDetailQuery } from './apis/useRecruitDetailQuery';
import AiRecommendSection from './components/aiRecommendSection/AiRecommendSection';
import ChatBanner from './components/chatBanner/ChatBanner';
import DetailImageSection from './components/detailImageSection/DetailImageSection';
import ImageCarousel from './components/imageCarousel/ImageCarousel';
import RecruitDetailContent from './components/recruitDetailContent/RecruitDetailContent';
import RecruitDetailInfoSection from './components/recruitDetailInfoSection/RecruitDetailInfoSection';
import ReviewSection from './components/reviewSection/ReviewSection';
import StatsCarousel from './components/statsCarousel/StatsCarousel';
import TopBtn from './components/topBtn/TopBtn';
import { MOCK_AI_RECOMMEND } from './mocks/mockAiRecommend';

import * as styles from './RecruitDetailPage.css';

const RECRUIT_DETAIL_TABS = [
  { label: '상세 내용', value: 'detail' },
  { label: '합격 자료', value: 'pass-data' },
];

const RecruitDetailPage = () => {
  const {
    data: recruitDetail,
    isPending: isRecruitDetailPending,
    isError: isRecruitDetailError,
  } = useGetRecruitDetailQuery();
  const {
    data: passCoverLetters = [],
    isPending: isPassCoverLettersPending,
    isError: isPassCoverLettersError,
  } = usePassCoverLettersQuery();

  const {
    data: passReviews = [],
    isPending: isPassReviewsPending,
    isError: isPassReviewsError,
  } = usePassReviewsQuery();

  const [selectedTab, setSelectedTab] = useState('detail');
  const pageTopRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const passDataRef = useRef<HTMLDivElement>(null);

  useTabScrollSync({
    passDataRef,
    onTabChange: setSelectedTab,
    offset: layout.headerHeight + layout.tabBarHeight,
  });

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    if (value === 'detail')
      detailRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (value === 'pass-data')
      passDataRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const isPending =
    isRecruitDetailPending || isPassCoverLettersPending || isPassReviewsPending;

  const isError =
    isRecruitDetailError || isPassCoverLettersError || isPassReviewsError;

  if (isPending) return <div>로딩중...</div>;
  if (isError || !recruitDetail) return <div>에러가 발생했습니다.</div>;

  const {
    company,
    title,
    jobCategory,
    location,
    companyType,
    deadlineLabel,
    recruitmentDeadlineType,
    employmentType,
    recruitmentPeriod,
    responsibilities,
    qualifications,
    preferences,
  } = recruitDetail;

  const passCoverLetterItems = passCoverLetters.map((item) => ({
    id: item.id ?? 0,
    title: item.companyName ?? '',
    body: item.content ?? '',
    tags: [],
  }));

  const passReviewItems = passReviews.map((item) => ({
    id: item.id ?? 0,
    title: item.title ?? '',
    body: item.content ?? '',
    tags: item.createdAt ? [item.createdAt.slice(0, 10)] : [],
  }));

  return (
    <>
      <div ref={pageTopRef} className={styles.sectionAnchor} />
      <ImageCarousel
        images={[
          { id: 1, url: imgDetail1, alt: '대표 이미지 1' },
          { id: 2, url: imgDetail2, alt: '대표 이미지 2' },
          { id: 3, url: imgDetail3, alt: '대표 이미지 3' },
        ]}
      />
      <RecruitDetailInfoSection
        companyName={company ?? ''}
        title={title ?? ''}
        jobCategory={jobCategory ?? ''}
        location={location ?? ''}
        companyType={companyType ?? ''}
        deadline={deadlineLabel ?? ''}
        daysLeft={recruitmentDeadlineType === 'UNTIL_FILLED' ? null : 0}
        employmentType={employmentType ?? ''}
      />
      <ChatBanner />

      <div className={styles.stickyTabBar}>
        <TabBar
          tabList={RECRUIT_DETAIL_TABS}
          selectedValue={selectedTab}
          onChange={handleTabChange}
          ariaLabel="채용 상세 탭"
        />
      </div>

      {/* 상세 내용 섹션 */}
      <div ref={detailRef} className={styles.sectionAnchor}>
        <RecruitDetailContent
          recruitmentPeriod={recruitmentPeriod ?? ''}
          responsibilities={[...(responsibilities ?? [])]}
          qualifications={[...(qualifications ?? [])]}
          preferences={[...(preferences ?? [])]}
        />
        <DetailImageSection imageUrl={detailImg4} />
        <StatsCarousel />
      </div>

      {/* 합격 자료 섹션 */}
      <div
        ref={passDataRef}
        className={`${styles.passDataWrapper} ${styles.sectionAnchor}`}
      >
        <ReviewSection
          sectionTitle="합격 자소서"
          items={passCoverLetterItems}
        />
        <ReviewSection sectionTitle="합격 후기" items={passReviewItems} />
        <AiRecommendSection items={MOCK_AI_RECOMMEND} />
      </div>

      {/* 플로팅 버튼 */}
      <div className={styles.topBtnWrapper}>
        <TopBtn
          onClick={() =>
            pageTopRef.current?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </div>
    </>
  );
};

export default RecruitDetailPage;
