import { useRef, useState } from 'react';

import detailImg1 from '@assets/images/detail_thumbnail_img1.webp';
import detailImg2 from '@assets/images/detail_thumbnail_img2.webp';
import detailImg3 from '@assets/images/detail_thumbnail_img3.webp';
import TabBar from '@components/tabBar/TabBar';

import ChatBanner from './components/chatBanner/ChatBanner';
import ImageCarousel from './components/imageCarousel/ImageCarousel';
import RecruitDetailContent from './components/recruitDetailContent/RecruitDetailContent';
import RecruitDetailInfoSection from './components/recruitDetailInfoSection/RecruitDetailInfoSection';
import { MOCK_RECRUIT_DETAIL } from './mockRecruitDetail';

const RECRUIT_DETAIL_TABS = [
  { label: '상세 내용', value: 'detail' },
  { label: '합격 자료', value: 'pass-data' },
];

const RecruitDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState('detail');
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
      </div>

      <div ref={passDataRef}>{/* TODO: 합격 자료 컴포넌트 */}</div>
    </>
  );
};

export default RecruitDetailPage;
