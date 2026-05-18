import { useRef, useState } from 'react';

import detailImg1 from '@assets/images/detail_thumbnail_img1.webp';
import detailImg2 from '@assets/images/detail_thumbnail_img2.webp';
import detailImg3 from '@assets/images/detail_thumbnail_img3.webp';
import detailImg4 from '@assets/images/detail_thumbnail_img4.webp';
import TabBar from '@components/tabBar/TabBar';

import AiRecommendSection from './components/aiRecommendSection/AiRecommendSection';
import ChatBanner from './components/chatBanner/ChatBanner';
import DetailImageSection from './components/detailImageSection/DetailImageSection';
import ImageCarousel from './components/imageCarousel/ImageCarousel';
import RecruitDetailContent from './components/recruitDetailContent/RecruitDetailContent';
import RecruitDetailInfoSection from './components/recruitDetailInfoSection/RecruitDetailInfoSection';
import ReviewSection from './components/reviewSection/ReviewSection';
import TopBtn from './components/topBtn/TopBtn';
import { MOCK_AI_RECOMMEND } from './mockAiRecommend';
import { MOCK_PASS_COVER_LETTER } from './mockPassCoverLetter';
import { MOCK_RECRUIT_DETAIL } from './mockRecruitDetail';

import * as styles from './RecruitDetailPage.css';

const RECRUIT_DETAIL_TABS = [
  { label: '상세 내용', value: 'detail' },
  { label: '합격 자료', value: 'pass-data' },
];

const RecruitDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState('detail');
  const pageTopRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const passDataRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    if (value === 'detail') {
      detailRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (value === 'pass-data') {
      passDataRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
  } = MOCK_RECRUIT_DETAIL;

  return (
    <>
      <div ref={pageTopRef} />
      <ImageCarousel
        images={[
          { id: 1, url: detailImg1, alt: '대표 이미지 1' },
          { id: 2, url: detailImg2, alt: '대표 이미지 2' },
          { id: 3, url: detailImg3, alt: '대표 이미지 3' },
        ]}
      />
      <RecruitDetailInfoSection
        companyName={company}
        title={title}
        jobCategory={jobCategory}
        location={location}
        companyType={companyType}
        deadline={deadlineLabel}
        daysLeft={recruitmentDeadlineType === 'UNTIL_FILLED' ? null : 0}
        employmentType={employmentType}
      />
      <ChatBanner />

      <TabBar
        tabList={RECRUIT_DETAIL_TABS}
        selectedValue={selectedTab}
        onChange={handleTabChange}
        ariaLabel="채용 상세 탭"
      />

      <div ref={detailRef}>
        <RecruitDetailContent
          recruitmentPeriod={recruitmentPeriod}
          responsibilities={[...responsibilities]}
          qualifications={[...qualifications]}
          preferences={[...preferences]}
        />
        <DetailImageSection imageUrl={detailImg4} />
        {/* TODO: 스크랩 유저 통계 머지시 반영 예정 */}
      </div>

      <div ref={passDataRef} className={styles.passDataWrapper}>
        <ReviewSection
          sectionTitle="합격 자소서"
          items={MOCK_PASS_COVER_LETTER}
        />
        <ReviewSection
          sectionTitle="합격 후기"
          items={MOCK_PASS_COVER_LETTER}
        />
        <AiRecommendSection items={MOCK_AI_RECOMMEND} />
      </div>

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
