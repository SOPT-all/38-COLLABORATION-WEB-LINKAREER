import { useLocation, useNavigate } from 'react-router';

import SvgIcHome from '@assets/svg/IcHome';
import SvgIcHomeFilled from '@assets/svg/IcHomeFilled';
import SvgIcCommunity from '@assets/svg/IcCommunity';
import SvgIcCommunityFilled from '@assets/svg/IcCommunityFilled';
import SvgIcCalendar2 from '@assets/svg/IcCalendar2';
import SvgIcCalendar2Filled from '@assets/svg/IcCalendar2Filled';
import SvgIcMy from '@assets/svg/IcMy';
import SvgIcMyFilled from '@assets/svg/IcMyFilled';

import * as styles from './BottomNavigationBar.css';

const NAV_ITEMS = [
  {
    key: 'home',
    label: '홈',
    path: '/',
    icon: SvgIcHome,
    activeIcon: SvgIcHomeFilled,
  },
  {
    key: 'community',
    label: '커뮤니티',
    path: '/mento',
    icon: SvgIcCommunity,
    activeIcon: SvgIcCommunityFilled,
  },
  {
    key: 'calendar',
    label: '공고달력',
    icon: SvgIcCalendar2,
    activeIcon: SvgIcCalendar2Filled,
  },
  {
    key: 'myPage',
    label: '마이페이지',
    icon: SvgIcMy,
    activeIcon: SvgIcMyFilled,
  },
] as const;

const BottomNavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className={styles.mainContainer}>
      {NAV_ITEMS.map((item) => {
        const isActive = 'path' in item && item.path === location.pathname;
        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <button
            key={item.key}
            type="button"
            className={styles.navItem({ active: isActive })}
            onClick={() => {
              if ('path' in item) {
                navigate(item.path);
              }
            }}
          >
            <Icon width="2.4rem" height="2.4rem" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigationBar;
