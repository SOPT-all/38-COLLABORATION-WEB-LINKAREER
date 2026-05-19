import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';

import IcBookmarkFilled from '@assets/svg/IcBookmarkFilled';
import IcBookmarkGray400 from '@assets/svg/IcBookmarkGray400';
import BottomActionBar from '@components/bottomActionBar/BottomActionBar';
import Footer from '@components/footer/Footer';
import RecruitDetailHeader from '@pages/recruitDetail/components/recruitDetailHeader/RecruitDetailHeader';

import * as styles from './RecruitDetailLayout.css';

const RecruitDetailLayout = () => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => setIsBookmarked((prev) => !prev);

  const bookmarkIcon = isBookmarked ? (
    <IcBookmarkFilled width={20} height={20} />
  ) : (
    <IcBookmarkGray400 width={20} height={20} />
  );

  return (
    <>
      <RecruitDetailHeader
        onBack={() => void navigate(-1)}
        onShare={() => {}}
      />
      <div className={styles.contentWrapper}>
        <Outlet />
        <Footer />
      </div>
      <div className={styles.bottomBarWrapper}>
        <BottomActionBar
          icon={bookmarkIcon}
          iconAriaLabel={isBookmarked ? '북마크 해제' : '북마크 저장'}
          label="홈페이지 지원"
          onIconClick={handleBookmark}
          onLabelClick={() => {}}
        />
      </div>
    </>
  );
};

export default RecruitDetailLayout;
